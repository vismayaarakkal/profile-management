import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
            navigate("/dashboard")
        }
    }, []);
    if (!authenticated) {
        return (
            <Navigate to="/" replace={true} />
        )
    } else {
        return (
            <div>
                <h2>Welcome to your Dashboard</h2>
            </div>
        );
    }
};

export default Dashboard;