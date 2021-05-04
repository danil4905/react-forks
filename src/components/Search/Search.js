import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/actions';

import classes from './Search.module.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isValid: false,
      isTouched: false,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {
      onSubmit,
      inputValid,
      notValidInput,
      loadStart,
      history,
    } = this.props;
    const { isValid, value } = this.state;

    let path = "";

    if (isValid) {
      loadStart();
      history.push("/results"); // переместиться на страницу /results
      inputValid(); // меняем редаксовский state
      path = `repos/${value}/forks`;
      onSubmit(path, this.getTargetRepoName(value));
    } else {
      // не валидный ввод
      notValidInput(); // меняем редаксовский state
      history.push("/results");
    }
  };

  handleChange = (event) => {
    const valid = this.checkValidity(event.target.value);
    this.setState({
      value: event.target.value,
      isTouched: true,
      isValid: valid,
    });
  };

  checkValidity = (str) => {
    const regexp = /^\/|\/.*\/| |[а-яА-ЯёЁ]|[:;?@&=+$,]|\/$/gi;
    /* Регулярка для проверки:
        недопустимых символов ";" | "/" | "?" | ":" | "@" | "&" | "=" | "+" | "$" | ","
        слеш в начале или конце строки
        больше одного слеша в строке,
        пробел,
        кириллица */

    const check = str.match(regexp);

    // проверка на наличие слеша (если слеша нет, значит ввели только имя пользователя)
    const oneslash = str.match(/\//g);

    return !check && !!oneslash; // если ввод валидный, то вернёт true
  };

  getTargetRepoName = (value) =>
    // получает строку вида 'qwer/tyui' возвращает строку вида 'tyui';
    value.substr(value.indexOf("/") + 1);

  render() {
    const { value, isValid, isTouched } = this.state;
    const inputclassesClasses = [classes.input];

    if (isTouched && !isValid) {
      inputclassesClasses.push(classes.input__warn);
    }

    return (
      <form className={classes.search} onSubmit={this.submitHandler}>
        <label className={classes.label} htmlFor="searchRequest">
          <input
            id="searchRequest"
            type="text"
            className={inputclassesClasses.join(" ")}
            value={value}
            placeholder="Введите имя репозитория вида owner/repositoryName"
            onChange={this.handleChange}
          />
          <span className={classes.label__hint}>
            Введите имя репозитория вида owner/repositoryName
          </span>
        </label>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onSubmit: (path, targetRepoName) => dispatch(actions.submitInput(path, targetRepoName)),
  inputValid: () => dispatch(actions.validInput()),
  notValidInput: () => dispatch(actions.notValidInput()),
  loadStart: () => dispatch(actions.loadStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(Search));
