import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateSuccess } from "../redux/userSlice";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const Label = styled.label`
  font-size: 14px;
`;
const UpdateProfileUser = ({ setOpenProfile }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(undefined);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const proxy = "http://localhost:8080/api";
  console.log(avatar);

  const onImageChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (avatar) {
      const formData = new FormData();
      const fileName = Date.now() + avatar.name;
      formData.append("name", fileName);
      formData.append("file", avatar);
      const data = await axios.post(proxy + `/upload`, formData);
      dispatch(updateSuccess(data));
    }
    try {
      const res = await axios.put(proxy + `/users/${currentUser._id}`, {
        name,
        email,
      });
      dispatch(updateSuccess(res.data));
    } catch (err) {
      console.log(err);
    }
    setOpenProfile(false);
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpenProfile(false)}>X</Close>
        <Title>Update Profile User</Title>
        <Label>Update Avatar:</Label>
        <Input type='file' name='img' onChange={onImageChange} />
        <Label>Update Name:</Label>
        <Input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Update Email:</Label>
        <Input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleUpdateProfile}>Update</Button>
      </Wrapper>
    </Container>
  );
};
export default UpdateProfileUser;
