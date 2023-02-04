import Profile from './Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import statistics from 'data/statistics.json';
import Friends from './Friends/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from './TransactionHistory/Transactions';
import transactions from 'data/transactions.json'


export const App = () => {
  return (
    <div
      style={{

        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
      />
      <Statistics title="Upload stats"
      stats={statistics}/>
      <Friends friends={friends} />
      <TransactionHistory transaction={transactions}/>
    </div>
  );
};
