import React from 'react';

import { Header } from './Header';

export class Root extends React.Component {
  render(){
    return(
      <div className="container">
          <div className="row">
              <div className="col-xs-10 col-xs-12">
                <Header />
              </div>
          </div>
          <div className="row">
              <div className="col-xs-10 col-xs-1">
                {this.props.children}
              </div>
          </div>
      </div>
    );
  }
}
