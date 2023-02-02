import PropTypes from 'prop-types';
import css from './Friends.module.css';


export default function FriendsListItem({friend: {avatar, name, isOnline}})  {
    return (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
    );
};


FriendsListItem.propTyps = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};