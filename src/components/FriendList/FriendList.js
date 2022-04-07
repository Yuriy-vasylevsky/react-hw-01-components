import FriendListItem from '../FrendListItem/FrendListItem';
import s from './FriendList.module.css';

export default function Profile({ friends }) {
  return (
    <ul className={`${s.friend} list`}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
