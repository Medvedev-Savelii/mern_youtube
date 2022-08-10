import React from "react";
import styled from "styled-components";
import userPhoto from "../img/avatar.jpg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={userPhoto} />
      <Details>
        <Name>
          SaveliyChannel <Date>1 day ago</Date>
        </Name>
        <Text>
          {
            "Riveria is tall with jade-colored hair tied in a tail that reaches to her waist, same color eyes, and Elf ears. She wears a green outfit with yellow borders, a white cloak over it, a black belt, a yellow sash, black leggings, and long brown boots. She is described to be exceptionally beautiful, stated to be more beautiful than a number of Goddesses."
          }
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
