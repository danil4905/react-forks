import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Search from '../Search/Search';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const Results = (props) => {
  const { error404, isInputValid, loading } = props;

  const messageOn404 = (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
      <p style={{ marginBottom: '.5rem' }}>Ничего не удалось найти.</p>
      <p>
        Возможно такого пользователя(репозитория) не существует или допущена
        ошибка при вводе имени пользователя(репозитория).
      </p>
    </div>);

  const messageInputNotValid = <p>Невалидный ввод</p>;

  let result;

  if (error404 && isInputValid) {
    result = < Aux >
      <Search />
      {messageOn404}
      <Pagination />
    </Aux >;
  }
  if (!error404 && isInputValid) {
    result = <Aux>
      <Search />
      <Table />
      <Pagination />
    </Aux>;
  }
  if (!isInputValid) {
    result = <Aux>
      <Search />
      {messageInputNotValid}
      <Pagination />
    </Aux>
  }
  if (loading) { result = <Loader />; }

  return (
      result
  );
};

const mapStateToProps = state => ({
  error404: state.remoteIterations.error404,
  isInputValid: state.main.isInputValid,
  loading: state.main.loading,
});

export default connect(mapStateToProps)(Results);
