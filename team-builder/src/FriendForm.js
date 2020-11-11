import React, { useState } from "react";
import styled from "styled-components";

const StyledFormDiv = styled.div`
  font-size: 1.2rem;
  margin: 3rem;
  color: red;
  display: flex;
  justify-content: space-between;
`;

export default function FriendForm(props) {
  const [teamMembers, setTeamMembers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onChange = event => {
    setTeamMembers({
      ...teamMembers,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!teamMembers.name && !teamMembers.email) {
      alert("Please provide your name and email! 🙂 ");
      return;
    }
    props.setOldTeamMembers([...props.oldTeamMembers, teamMembers]);

    setTeamMembers({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <StyledFormDiv>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={teamMembers.name}
            placeholder="type your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={teamMembers.email}
            onChange={onChange}
            placeholder="email"
          />
        </label>
        <label>
          Role:
          <select name="role" value={teamMembers.role} onChange={onChange}>
            <option value="">---</option>
            <option value="Employee">Employee</option>
            <option value="Emotional Support">Emotional Support</option>
            <option value="Customer">Customer</option>
          </select>
        </label>
        <div className="submitButton">
          <button>Submit</button>
        </div>
      </StyledFormDiv>
    </form>
  );
}
