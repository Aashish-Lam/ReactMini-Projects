import Button from "./Components/Button";
import { FormAddFriend } from "./Components/FormAddFriend";
import FriendsList from "./Components/FriendsList";
import FunctionSplitBill from "./Components/FunctionSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Biplav",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 100,
  },
  {
    id: 933372,
    name: "Sharad",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 100,
  },
  {
    id: 499476,
    name: "Prayash",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [friends, setFirends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setselectedFriend] = useState(null);
  function handleSplitBill(value) {
    console.log(value);
    setFirends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  function handleShowAddFriend() {
    let temp = !showAddFriend;
    setShowAddFriend(temp);
  }
  function handleAddFriend(friend) {
    setFirends((friends) => [...friends, friend]);
    showAddFriend(false);
  }
  function handleSelection(friend) {
    setselectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            showAddFriend={handleShowAddFriend}
            onAddFriend={handleAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? <>Close</> : <>Add Friend</>}
        </Button>
      </div>
      {selectedFriend && (
        <FunctionSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        ></FunctionSplitBill>
      )}
    </div>
  );
}
