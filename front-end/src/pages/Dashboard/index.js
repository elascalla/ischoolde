import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import {
  Container,
  Today,
  Content,
  Profile,
  ContentChart,
  ContentCard,
} from './styles';

import api from '../../services/api';

export default function Dashboard() {
  const [totalInstallation, setTotalInstallation] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [months, setMonths] = useState([]);
  const [zipCode, setZipCode] = useState(0);
  const [data, setData] = useState([]);

  const profile = useSelector(state => state.user.profile);
  const { state } = profile;

  useEffect(() => {
    async function loadTotalInstallation() {
      const response = await api.get(`panels/totalInstallation/${profile.id}`);

      setTotalInstallation(response.data);
    }

    async function loadMaxCost() {
      const response = await api.get(`panels/maxCost/${profile.id}`);

      setMaxCost(response.data.maxCost);
      setZipCode(response.data.zip_code);
    }

    async function loadLargerMonths() {
      const response = await api.get(`panels/largerMonths/${profile.id}`);

      setMonths(response.data);
    }

    async function getDataGraphic() {
      const response = await api.get(`panels/graphic/${profile.id}`);

      setData(response.data);
    }

    getDataGraphic();
    loadLargerMonths();
    loadMaxCost();
    loadTotalInstallation();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <nav>
            <Link to="/dashboard"> Dia</Link>
            <Link to="/dashboard"> Semana</Link>
            <Link to="/dashboard"> Mês</Link>
            <Link to="/dashboard"> Ano</Link>
          </nav>
          <aside>
            <Profile>
              <div>
                <Link to="/profile">
                  <img
                    src="https://api.adorable.io/avatars/55/abott@adorable.png"
                    alt=""
                  />
                </Link>
              </div>
            </Profile>
          </aside>
        </Content>
        <Today>
          {format(Date.now(), "'Dia ' dd' de 'MMMM',' yyyy", { locale: pt })}
        </Today>
        <ContentChart>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="kw"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ContentChart>
        <ContentCard>
          <div>
            <h1>Instalações feitas</h1>
            <strong>Total (kw/h)</strong>
            <CountUp
              start={0}
              duration={1.75}
              delay={0}
              end={totalInstallation.toFixed(0)}
            />
            <strong>Estado</strong>
            <span>{state}</span>
          </div>
          <div>
            <h1>Maior custo</h1>
            <strong>CEP</strong>
            <span>{zipCode}</span>
            <strong>Custo</strong>
            <CountUp
              start={0}
              duration={1.75}
              delay={0}
              end={maxCost.toFixed(2)}
            />
          </div>
          <div>
            <h1>Maiores dos últimos 3 meses</h1>
            {months.map(month => (
              <h4 key={month.system_size}>
                <strong key={month.system_size}>
                  {month.month_full} (kw/h)
                </strong>
                <br />
                <CountUp
                  start={0}
                  duration={1.75}
                  delay={0}
                  end={month.system_size}
                />
              </h4>
            ))}
            {/* <strong>
            {months[0].month_full ? months[0].month_full : 'Nenhum'} (kw/h)
          </strong>
          <CountUp
            start={0}
            duration={1.75}
            delay={0}
            end={months[0].system_size ? months[0].system_size : 0}
          />
          <strong>
            {months[1].month_full ? months[1].month_full : 'Nenhum'} (kw/h)
          </strong>
          <CountUp
            start={0}
            duration={1.75}
            delay={0}
            end={months[1].system_size ? months[1].system_size : 0}
          />
          <strong>
            {months[2].month_full ? months[2].month_full : 'Nenhum'} (kw/h)
          </strong>
          <CountUp
            start={0}
            duration={1.75}
            delay={0}
            end={months[2].system_size ? months[2].system_size : 0}
          /> */}
          </div>
        </ContentCard>
      </Container>
    </>
  );
}
