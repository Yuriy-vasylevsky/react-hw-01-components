// import friends from '../data/friends.json'
import PropTypes from 'prop-types';
import s from './FrendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={`${s.item} link`}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
