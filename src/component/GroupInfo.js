/* eslint-disable camelcase */
import React, { Component } from 'react';

import getGroupData from './getData';

import GroupRepos from './GroupRepos';

class GroupInfo extends Component {
  state = {
    groupData: null,
  };

  componentDidMount() {
    const url = 'https://api.github.com/orgs/GSG-G8';
    getGroupData(url).then(data => this.setState({ groupData: data }));
  }

  render() {
    const { groupData } = this.state;
    if (!groupData) {
      return <h3>Loading ...</h3>;
    }
    const { avatar_url, description, repos_url } = groupData;
    return (
      <div>
        <div className="avatar">
          <img src={avatar_url} alt="Group Avatar" />
        </div>
        <h2>{description}</h2>
        <h2>{repos_url}</h2>
        <GroupRepos repoUrl={repos_url} />
      </div>
    );
  }
}

export default GroupInfo;
