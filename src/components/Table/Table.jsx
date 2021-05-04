import React from 'react';
import { connect } from 'react-redux';

import classes from './Table.module.css';

const Table = ({ array, targetRepoName }) => {
  let data = array;

  if (Array.isArray(data)) {
    data = data.map((forker) => {
      let owner;
      let url;
      const repoName = forker.full_name ? forker.full_name : 'не удалось получить корректные данные';
      const stars = forker.stargazers_count !== undefined ? forker.stargazers_count : 'не удалось получить корректные данные';
      let key;

      if (forker.owner) {
        owner = forker.owner.login;
        // если вдруг forker.owner.login == undefined, то сгенерировать рандомный key
        key = forker.owner.login ? forker.owner.login : Math.random() + Math.random();
      } else {
        owner = 'не удалось получить корректные данные';
        key = Math.random() + Math.random();
      }

      if (forker.html_url) {
        url = forker.html_url;
      } else {
        url = '#';
      }

      return (
        <tr key={key}>
          <td>{repoName}</td>
          <td>{owner}</td>
          <td>{stars}</td>
          <td><a href={url}>{url}</a></td>
        </tr>
      );
    });
  } else {
    data = null;
  }
  console.log(targetRepoName)
  console.log(data)

  return (
    <table className={classes.Table}>
      <caption className={classes.caption}>{`Forks репозитория ${targetRepoName}`}</caption>
      <thead className={classes.thead}>
        <tr>
          <th>Название репозитария</th>
          <th>Владелец</th>
          <th>Кол-во звезд</th>
          <th>Ссылка на репозитарий форка</th>
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {data}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  array: state.table.array,
  targetRepoName: state.main.targetRepoName,
});

export default connect(mapStateToProps)(Table);
