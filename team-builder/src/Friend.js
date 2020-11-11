//to be able to update data needs to be on state sonewhere
//then determine where to put it on state
//tm in app comp
//submit form to add data to team members array
import React from "react";

export default function Friend(props) {
  // const array = props.oldTeamMembers;
  console.log(props);
  // console.log(props);

  // if (!array && !array.length) {
  //   return <p>...loading</p>;
  // }
  return (
    <div>
      {/* {array.map((item, idx) => {
        return (
          <div className="friend-container" key={idx}>
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Role: {item.role}</p>
          </div>
        );
      })} */}
    </div>
  );
}
