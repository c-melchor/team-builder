import React, { useState } from "react";

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

    props.addTeamMember({
      name: event.target.name.value,
      email: event.target.email.value,
      role: event.target.role.value
    });
    // setTeamMembers({
    //   name: "",
    //   email: "",
    //   role: ""
    // });
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="formInput">
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
            <option value="emotional support">Emotional Support</option>
            <option value="customer">Customer</option>
          </select>
        </label>
        <div className="submitButton">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
