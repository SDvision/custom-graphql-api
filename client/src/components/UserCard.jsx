import React from "react";
import styled from 'styled-components';

const StyledText = styled.div`
    font-size: 20px;
    margin: 10px;
`

const StyledUserCard = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    background-color: #A58CB3;
    margin: 10px;
    padding: 30px;
    border-radius: 15px;
    flex-basis: 20%;
    height: 200px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px #000;
`;

export function UserCard(user) {
    console.log("###",user)
    return (
        <StyledUserCard>
            <StyledText>ID : {user.id}</StyledText>
            <StyledText>Name : {user.name}</StyledText>
            <StyledText>User Name : {user.username}</StyledText>
            <StyledText>Age : {user.age}</StyledText>
        </StyledUserCard>
    );
}