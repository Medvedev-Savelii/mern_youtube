import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  const proxy = "http://localhost:8080/api";

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(proxy + `/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card type="sm" key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;
