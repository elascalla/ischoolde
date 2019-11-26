import Sequelize from 'sequelize';
import { format, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';
import Panel from '../models/Panel';
import User from '../models/User';
import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

class PanelController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    const panels = await Panel.findAll({
      where: { state: user.state },
      order: ['installation_date'],
      attributes: [
        'id',
        'installation_date',
        'system_size',
        'zip_code',
        'state',
        'cost',
        'formatted_installation',
      ],
    });

    return res.json(panels);
  }

  async sumTotal(req, res) {
    const { state } = await User.findByPk(req.userId);

    const panelsSum = await Panel.sum('system_size', { where: { state } }).then(
      sum => {
        return sum;
      }
    );

    return res.json(panelsSum);
  }

  async maxCost(req, res) {
    const { state } = await User.findByPk(req.userId);

    const maxCost = await Panel.max('cost', {
      where: { state },
    });

    const { zip_code } = await Panel.findOne({
      where: { state, cost: maxCost },
      attributes: ['zip_code'],
    });

    return res.json({
      maxCost,
      zip_code,
    });
  }

  async largerMonths(req, res) {
    const { state } = await User.findByPk(req.userId);
    const startDate = parseISO(
      format(
        new Date(format(Date.now(), 'yyyy'), 1 - 1, 1),
        'yyyy-MM-dd 00:00:00 +00',
        { locale: en }
      )
    );

    const finalDate = parseISO(
      format(
        new Date(format(Date.now(), 'yyyy'), 12 - 1, 31),
        'yyyy-MM-dd 00:00:00 +00',
        { locale: en }
      )
    );

    const Op = Sequelize.Op;

    const panels = await Panel.findAll({
      where: {
        state,
        installation_date: {
          [Op.between]: [startDate, finalDate],
        },
      },
      order: [['system_size', 'DESC']],
      attributes: [
        'installation_date',
        'system_size',
        'month_full',
        'month_installation',
      ],
      limit: 3,
    });

    return res.json(panels);
  }

  async graphic(req, res) {
    return sequelize
      .query("SELECT CAST(SUM(system_size) AS NUMERIC(18,2)) as kw , EXTRACT(YEAR FROM installation_date) as date FROM panels  GROUP BY EXTRACT(YEAR FROM installation_date) ORDER BY EXTRACT(YEAR FROM installation_date) ASC;", { type: Sequelize.QueryTypes.SELECT })
      .then(resultado => res.json(resultado));
  }
}

export default new PanelController();
