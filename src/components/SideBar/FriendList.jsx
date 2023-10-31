import Card from '../../UI/Card/Card';
import { FRIEND_LIST as friends } from '../../../data';

const FriendList = () => {
  return friends.map((friend) => (
    <Card isUser={true} key={friend.id}>
      <img
        className="rounded-3xl mr-5"
        src={friend.img}
        alt="user profile picture"
      />
      <div className="w-full font-normal select-none">{friend.user_name}</div>
    </Card>
  ));
};

export default FriendList;
