import styles from './FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
