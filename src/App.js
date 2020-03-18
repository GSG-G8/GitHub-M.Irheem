import React, { Component } from 'react';

import './App.css';
import GroupInfo from './component/GroupInfo';
// import GroupMembers from './component/GroupMembers';
import GroupRepos from './component/GroupRepos';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <section className="header">
          <GroupInfo />
        </section>
        <section className="content">
          {/* <section className="members">
            <GroupMembers />
          </section> */}
          <section className="repos">
            <GroupRepos />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
