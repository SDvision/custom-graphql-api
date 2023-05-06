import React, { useState } from "react";
import styled from "styled-components";
import { useLazyQuery, gql } from "@apollo/client";
import { UserCard } from "./UserCard";

const StyledSearchUser = styled.div`
    margin: 10px;
    padding: 5px;
`;

const StyledInputBar = styled.input`
    margin: 10px;
    padding: 10px;
    border-radius: 25px;
    boder: 0px;
    width: 500px;
    font-size: 16px;
    
`;

const StyledSearchButton = styled.button`
    margin: 10px;
    padding: 10px;
    width: 100px;
    background-color: #24a0ed;
    color: white;
    border: 0px;
    border-radius: 30px;
    font-size: 18px;
    :hover {
        background-color: #145DA0;
        transition: 0.4s;
        box-shadow: 0 4px 10px #000;
    }
`;

const FETCH_USER_DATA = gql`
    query getUser($userId: ID!) {
        user(id: $userId) {
            id
            name
            username
            age
        }
    }
`;

function fetchUserFromServer (fetchUser, data, loading, error, userSearchTerm) {
    
    
    
}

export function SearchForUser () {
    const [userSearchTerm, setUserSearchTerm] = useState(null);
    const [fetchUser, {data, error, loading}] = useLazyQuery(FETCH_USER_DATA)

    return (
        <StyledSearchUser>
            <StyledInputBar
                type="text"
                placeholder="Please enter ID..."
                onChange={(event) => setUserSearchTerm(event.target.value)} />
            <StyledSearchButton onClick={() => fetchUser({
                variables: {
                    userId: userSearchTerm
                }
            })}> Search </StyledSearchButton>
            {loading && <div>loading ...</div>}
            {   
                error 
                && <div>Error occured while fetching student, please see console for more info ...</div>
                && console.log("Fetching error : ", {error})}
            {
                data
                && data.user?.map(user => <UserCard {...user} />)
            }
        </StyledSearchUser>        
    );
}
