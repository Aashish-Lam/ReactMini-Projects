import React, { useState } from "react";
import Button from "./Button";
const FunctionSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [Bill, setBill] = useState("");
  const [paidByUser, setpaidByUSer] = useState("");
  const paidbyFriend = Bill && paidByUser ? Bill - paidByUser : "";
  const [whoIsPaying, setwhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!paidByUser || !Bill) return;
    onSplitBill(whoIsPaying === "user" ? paidbyFriend : -paidByUser);
  }
  return (
    <form
      className="form-split-bill"
      onSubmit={handleSubmit}
    >
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <label>💸BillValue</label>
      <input
        type="text"
        value={Bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setpaidByUSer(
            Number(e.target.value) > Bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>{selectedFriend.name} Expense</label>
      <input
        type="text"
        value={paidbyFriend}
        disabled
      />
      <label>Who is paying the bill?</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setwhoIsPaying(e.target.value)}
      >
        <option value="user"> You</option>
        <option value="friend"> {selectedFriend.name} </option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FunctionSplitBill;
