import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/51378744?s=460&u=b8baddbbc0337ed9fd0d226905de1ec004b5667e&v=4"
            alt="Iago Ronan"
          />
          <div>
            <strong>iagoronanvs/gostack-github-explorer</strong>
            <p>Help people interested in this repository.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/51378744?s=460&u=b8baddbbc0337ed9fd0d226905de1ec004b5667e&v=4"
            alt="Iago Ronan"
          />
          <div>
            <strong>iagoronanvs/gostack-github-explorer</strong>
            <p>Help people interested in this repository.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/51378744?s=460&u=b8baddbbc0337ed9fd0d226905de1ec004b5667e&v=4"
            alt="Iago Ronan"
          />
          <div>
            <strong>iagoronanvs/gostack-github-explorer</strong>
            <p>Help people interested in this repository.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
