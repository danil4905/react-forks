import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Search from '../Search/Search';

import classes from './Home.module.css';

const Home = () => (
  <Aux>
    <div className={classes.Home}>
      <h2 className={classes.greeting__h2}>Тестовое задание React (Forks)</h2>
      <p>
        Данное приложение, в табличном виде отображает
        <em> forks </em>
        введенного в поисковую строку репозитория.
      </p>
      <p>
        Для ввода используется имя репозитория вида
        <em> owner/repositoryName</em>
        .
      </p>
    </div>
    <Search />
  </Aux>
);

export default Home;
