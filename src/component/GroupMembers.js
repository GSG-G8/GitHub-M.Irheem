// import React, { Component } from 'react';

// import getMembers from './getMembers';

// class GroupInfo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       mrmbersUrl: '',
//       members: [],
//     };
//   }

//   componentDidMount() {
//     const membersUrl =
//       'https://api.github.com/orgs/GSG-G8/members?access_token=3e7faa8a83c5b10ae41d60c8e7c499f3118ae699';
//     getMembers(membersUrl).then(data => this.setState({ members: data }));
//   }

//   render() {
//     const { members } = this.state;
//     if (!members) {
//       return <h3>Loading</h3>;
//     }
//     return members.map(
//       member => (
//         <ul className="meembers">
//           <li>
//             <h3>{member.login}</h3>
//             <img src={member.avatar_url} alt="User Avatar" />
//           </li>
//         </ul>
//       )

//       // <div>
//       //   <h2>{repo}</h2>
//       // </div>
//     );
//   }
// }

// export default GroupInfo;
