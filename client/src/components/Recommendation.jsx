import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Recommendation;
