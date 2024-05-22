import React from "react";
import Button from "./Button";

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          ></Friend>
        ))}
      </ul>
    </>
  );
};
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img
          src={friend.image}
          alt={friend.name}
        />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes You ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance == 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}

export default FriendsList;
