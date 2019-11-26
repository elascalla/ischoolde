import React from 'react';
import { Link } from 'react-router-dom';
import { MdDonutLarge } from 'react-icons/md';

// import logo from '../../assets/images/orbita_logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <MdDonutLarge size={30} />
            DASHBOARD
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <Link to="/dashboard">Meu consumo</Link>
              <Link to="/profile">Perfil</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
