import React from "react";

export const Logout = () => {
    localStorage.removeItem("token");

    return (
        <form onSubmit={Logout}>
            <button>Log Out</button>
        </form>
    );
};