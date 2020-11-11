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
  // console.log(oldTeamMembers); //this is an array of 4 objects from above
  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  function addTeamMember(addedTeamMember) {
    console.log(addedTeamMember, "app.js/22");
    console.log(oldTeamMembers.push(addedTeamMember), "OLD TEAM MEM");
    console.log(oldTeamMembers, "just OLD TEAM MEMEBERSSSSS");
    const members = oldTeamMembers.push(addedTeamMember);
    setOldTeamMembers(members);
    // setNewTeamMember({ ...newTeamMember, [addedTeamMember]: teamMemberValue });
  }

  // const submitForm = () => {
  //   const otherTeamMember = {
  //     name: newTeamMember.name.trim(),
  //     email: newTeamMember.email.trim(),
  //     role: newTeamMember.role
  //   };
  // };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Friend oldTeamMembers={oldTeamMembers} />

      <FriendForm addTeamMember={addTeamMember} teamMembers={teamMembers} />
    </div>
  );
}

export default App;
