import React from "react";
import styled from "styled-components";

const LargeDiv = styled.div`
  width: ${pr => pr.theme.width.medium};
  display: ${pr => pr.theme.display.display};
  flex-direction: ${pr => pr.theme.display.flexDirection};
  margin: 1rem;
  justify-content: ${pr => pr.theme.display.justify};
`;

const StyledDiv = styled.div`
  font-size: 1.2rem;
  margin: 2rem;
  color: ${pr => pr.theme.secondaryColor};
  width: ${pr => pr.theme.large};
  border: ${pr => pr.theme.border};
`;

export default function Friend(props) {
  const { oldTeamMembers } = props;
  // console.log("friend.js/10!!", oldTeamMembers);

  return (
    <LargeDiv>
      {oldTeamMembers.map((item, idx) => {
        return (
          <StyledDiv key={idx}>
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Role: {item.role}</p>
          </StyledDiv>
        );
      })}
    </LargeDiv>
  );
}
