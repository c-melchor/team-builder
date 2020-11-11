import React from "react";

export default function Friend(props) {
  const { oldTeamMembers } = props;
  console.log("friend.js/10!!", oldTeamMembers);

  return (
    <div>
      {oldTeamMembers.map((item, idx) => {
        return (
          <div className="friend-container" key={idx}>
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Role: {item.role}</p>
          </div>
        );
      })}
    </div>
  );
}
