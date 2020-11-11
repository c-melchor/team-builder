import "./App.css";
import React, { useState } from "react";

import Friend from "./Friend";
import FriendForm from "./FriendForm";

function App() {
  const teamMembers = [
    { name: "Christina", email: "christina@email.com", role: "Employee" },
    { name: "Andrew", email: "andrew@email.com", role: "Customer" },
    { name: "Birdie", email: "bellyrubs@dog.com", role: "Emotional Support" },
    { name: "Plato", email: "donttouchme@cat.com", role: "Emotional Support" }
  ];
  const [oldTeamMembers, setOldTeamMembers] = useState(teamMembers);

  function addTeamMember(addedTeamMember) {
    setOldTeamMembers([...oldTeamMembers, addTeamMember]);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Friend oldTeamMembers={oldTeamMembers} />

      <FriendForm
        oldTeamMembers={oldTeamMembers}
        setOldTeamMembers={setOldTeamMembers}
      />
    </div>
  );
}

export default App;
