import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { UserCard } from "./UserCard";

const StyledUserListContainer = styled.div`
    display: flex;
    flex-direction: horizontal;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
`

const FETCH_ALL_USERS = gql`
    query getAllUsers {
        users {
            id
            name
            username
            age
        }
    }
`;

export function UserList() {
    const {data, loading, error} = useQuery(FETCH_ALL_USERS);

    if (loading) {
        // replace this with some spinner
        return <div> Data is loading </div>
    }
    if (error) {
        console.log("Error while fetching Data : ", {error});
        return <div> There is some error while fetch data, please check console for more info</div>
    }
    return (
        <React.Fragment>
            <StyledUserListContainer>{
                data && data.users?.map((user) => {
                    // console.log(user);
                    return <UserCard {...user}/>
                })
            }
            </StyledUserListContainer>
        </React.Fragment>
    );
}
