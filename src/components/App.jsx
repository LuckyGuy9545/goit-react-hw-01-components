import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from './Profile/user.json';
import statisticData from './Statistics/data.json';
import friendsData from './FriendList/friends.json';
import transactionData from './TransactionHistory/transactions.json';

export const App = () => {
  // console.log('this', friendsData);
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </>
  );
};
