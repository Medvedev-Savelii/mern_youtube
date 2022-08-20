import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import {
  commentStart,
  commentSuccess,
  commentFailure,
} from "../redux/commentSlice";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const proxy = "http://localhost:8080/api";
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(proxy + `/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId, desc]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  const handleChange = (e) => {
    setDesc(e.target.value);
  };

  const handleCommetPost = async (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      dispatch(commentStart());
      try {
        const { data } = await axios.post(proxy + `/comments/`, {
          videoId,
          desc,
        });
        dispatch(commentSuccess(data));
        setDesc("");
      } catch (error) {
        dispatch(commentFailure());
      }
    }
  };

  return (
    <Container>
      <NewComment>
        <Avatar
          src={
            currentUser.img
              ? serverPublic + currentUser.img
              : serverPublic + "defaultProfile.png"
          }
        />
        <Input
          placeholder='Add a comment...'
          value={desc}
          onChange={handleChange}
          onKeyDown={handleCommetPost}
        />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
