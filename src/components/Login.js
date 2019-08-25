import React from 'react';
import {Button, TextField} from "@material-ui/core";


class Login extends React.Component {


    render() {
        return (
            <div style={{ textAlign: 'center' , marginTop: '20%', }}>
                <div style={{ width: '400px', textAlign: 'left',  marginLeft: 'auto', marginRight: 'auto'}}>
                    <div>
                        <label>Username:</label>
                    </div>
                    <div>
                        <TextField Field placeholder="Your username goes here"/>
                    </div>
                    <div>
                        Password:
                    </div>
                    <div>
                        <TextField placeholder="Your password goes here" />
                    </div>
                    <div>
                        <Button color="primary" variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login ;