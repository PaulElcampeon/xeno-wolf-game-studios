import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from '../store/actions';

const Dashboard = (props) => {
    const storeExtractor = useSelector(store => store);
    const dispatch = useDispatch();

    const { loggedIn } = storeExtractor;

    return (
        <div>
            {!loggedIn && props.history.push("/")}
            <h1>This is the Dashboard</h1>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>
                    <button onClick={() => {
                        dispatch(logoutAction());
                    }}>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;