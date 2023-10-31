import Card from '../../UI/Card/Card';
import { FRIEND_LIST as friends } from '../../../data';
import { MdDoNotDisturbOn } from 'react-icons/md';

const FriendList = () => {
  Math.random();
  const state = (
    <span className="absolute bg-green-600 w-[14px] h-[14px] bottom-0 right-0 rounded-3xl border-[3px] border-gray-800"></span>
  );

  return friends.map((friend) => (
    <Card isUser={true} key={friend.id}>
      <div className="relative">
        <img
          className="rounded-3xl mr-5"
          src={friend.img}
          alt="user profile picture"
        />
        {state}
      </div>
      <div className="w-full font-normal select-none">{friend.user_name}</div>
    </Card>
  ));
};

export default FriendList;
