import Profile from './Profile/Profile';
import user from '../data/user.json';
import Stats from './Stats/Stats';
import data from '../data/data.json';
import FriendsList from './FriendsList/FriendsList';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'GrayText',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
