import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import Comments from "../components/Comments";
import Card from "../components/Card";
import Berserk from "../img/Berserk.mp4";
import Recommendation from "../components/Recommendation";
import userPhoto from "../img/avatar.jpg";

////////////////////////////////////////////////////////////////////////

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={Berserk} controls />
        </VideoWrapper>
        <Title>{"Berserk: Ougon Jidai-hen I - Haou no Tamago"}</Title>
        <Details>
          <Info>36,500 views • 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              1485
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>

        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={userPhoto} />
            <ChannelDetail>
              <ChannelName>{"BerserkNameChanel"}</ChannelName>
              <ChannelCounter>{"4567"} subscribers</ChannelCounter>
              <Description>
                {
                  "Гатс, один из сильнейших мечников, не имеет определенного пути, вся его жизнь заключена в сражениях. После одного из них он встречает Гриффита, предводителя известных наемников Банды Ястреба, который моментально захотел мечника себе."
                }
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBED</Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={Berserk} />
      </Content>
      <Recommendation tags={Berserk} />
    </Container>
  );
};

export default Video;
