import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem'
import css from './Friends.module.css';

export default function FriendsList({friends}) {
    return (
        <ul className={css.friendList}> 
        {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
        ))}
    </ul>
  );
};

FriendsList.propTyps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    })
  ).isRequired,
};