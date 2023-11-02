import Card from '../../UI/Card/Card';
import { FRIEND_LIST as friends } from '../../../data';
import { MdDoDisturbOn } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';

const FriendList = () => {
  return friends.map((friend) => (
    <Card isUser={true} key={friend.id}>
      <div className="relative">
        <img
          className="rounded-3xl mr-5"
          src={friend.img}
          alt="user profile picture"
        />
        {<UserStatus status={friend.status} />}
      </div>
      <div className="w-full font-normal select-none">{friend.user_name}</div>
    </Card>
  ));
};

export const UserStatus = ({ status }) => {
  if (status === 'online') {
    return (
      <span className="absolute bg-green-600 w-[14px] h-[14px] bottom-0 right-1 rounded-3xl border-[3px] border-gray-800"></span>
    );
  } else if (status === 'dontdisturb') {
    return (
      <MdDoDisturbOn
        className="absolute text-red-600 bottom-0 right-1 bg-gray-900 rounded-3xl border-2 border-gray-900"
        size="15"
      />
    );
  } else if (status === 'away') {
    return (
      <BsFillMoonFill
        className="absolute text-yellow-600 bottom-0 right-1 bg-gray-900 rounded-3xl border-2 border-gray-900"
        size="15"
      />
    );
  } else if (status === 'offline') {
    return (
      <span className="absolute bg-gray-500 w-[14px] h-[14px] bottom-0 right-1 rounded-3xl border-[3px] border-gray-800"></span>
    );
  }
  return;
};

export default FriendList;
