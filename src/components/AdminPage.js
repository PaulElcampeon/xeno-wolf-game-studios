import React, {Component} from 'react';
import auth from './auth.js'

class AdminPage extends Component {
    constructor(props) {
        super(props)
    }

    login() {
        auth.login(() => {
            //if successful then we need to persist the jwt in the redux store
            this.props.history.push("/admin/dashboard")
        })
    }

    render() {
        return (
            <div>
                <h1>Im the admin page</h1>
            </div>
        )
    }
}

export default AdminPage;