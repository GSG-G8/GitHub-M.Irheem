import React, { Component } from 'react';

import getData from './getData';

class GroupInfo extends Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { repoUrl } = this.props;
    getData(repoUrl).then(data => this.setState({ repos: data }));
  }

  render() {
    const { repos } = this.state;
    if (!repos) {
      return <h3>Loading 123 </h3>;
    }

    return repos.map(repo => <h3>{repo.name}</h3>);
  }
}

export default GroupInfo;
