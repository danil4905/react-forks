import React from 'react';

import classes from './Layout.module.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div className={classes.Layout}>
        <main className={classes.main}>
          {children}
        </main>
      </div>
    );
  }
}

export default Layout;
