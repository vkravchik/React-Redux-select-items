import React from "react";
import UserProfile from "../containers/user-profile";
import UserList from "../containers/user-list";

const Car = () => {
    return (
        <div>
            <UserList/>
            <br/>
            <UserProfile/>
        </div>
    )
};

export default Car;
