
import React, { useState } from "react";
import styled from "styled-components";
import { UserList } from './UserList';
import { SearchForUser } from './SearchForUser';
import { HIDE_ALL_USERS_BUTTON, SHOW_ALL_USERS_BUTTON } from "./constants";

export const ToggleAllUserButton = styled.button`
    margin: 10px;
    padding: 10px;
    width: 300px;
    background-color: ${props => props.showAllUsersData ? '#FF5733' : '#24a0ed'};
    color: white;
    border: 0px;
    border-radius: 30px;
    font-size: 18px;
    :hover {
        background-color: ${props => props.showAllUsersData ? '#A30000' : '#145DA0'};
        transition: 0.4s;
        box-shadow: 0 4px 10px #000;
    }
`

export function UserListWrapper() {
    const [showAllUsersData, setShowAllUsersData] = useState(false);

    return (
        <div>
            <SearchForUser />
            <div>
                <ToggleAllUserButton
                    onClick={() => setShowAllUsersData(currentValue => !currentValue)}
                    showAllUsersData={showAllUsersData}
                >
                    {showAllUsersData ? HIDE_ALL_USERS_BUTTON : SHOW_ALL_USERS_BUTTON}
                </ToggleAllUserButton>
                { showAllUsersData ? <UserList /> : null }
            </div>
        </div>
    );
}
