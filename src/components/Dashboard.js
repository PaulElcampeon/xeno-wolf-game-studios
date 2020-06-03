import React from 'react';
import auth from './auth';

const Dashboard = (props) => {

    return(
        <div>
            <h1>This is the Dashboard</h1>
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/");
                })
            }}>

            </button>
        </div>
    )
}

export default Dashboard;