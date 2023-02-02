import Profile from './Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import statistics from 'data/statistics.json';
import Friends from './Friends/FriendList';
import friends from 'data/friends.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
      />
      <Statistics
      stats={statistics}/>
      <Friends friends={friends} />
    </div>
  );
};
