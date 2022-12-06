import { useState } from "react";
import axios from 'axios';

export const Signup = () => {
    const [signupUsernameInput, setSignupUsernameInput] = useState('');
    const [signupPasswordInput1, setSignupPasswordInput1] = useState('');
    const [signupPasswordInput2, setSignupPasswordInput2] = useState('');
    const [error, setError] = useState('');

    const handleUsernameInput = (event) => {
        const signupUsernameInput = event.target.value;
        setSignupUsernameInput(signupUsernameInput);
    }

    const handlePasswordInput1 = (event) => {
        const signupPasswordInput1 = event.target.value;
        setSignupPasswordInput1(signupPasswordInput1);
    }

    const handlePasswordInput2 = (event) => {
        const signupPasswordInput2 = event.target.value;
        setSignupPasswordInput2(signupPasswordInput2);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var error = "";
        if (signupPasswordInput1 === signupPasswordInput2) {
            const newUser = {
                newUsername: signupUsernameInput.toLowerCase(),
                newPassword: signupPasswordInput1
            }

            axios
                .post('/createUser', newUser)
                .then(()=>console.log('User created'))
                .catch(err => {
                    if (err.response) {
                        console.log(err.response.data);
                        return response;
                    }});
        } else {
            setError('Passwords do not match');
        }
    }

    return(
        <div className="signup-main">
            <h1>Signup</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input id="signup-username-input"
                    className="input"
                    name="signup-username-input"
                    placeholder="Enter Username"
                    value={signupUsernameInput}
                    onChange={handleUsernameInput}
                    autoComplete="off"
                    required
                /><br/>
                <input id="signup-password-input1"
                    className="input"
                    name="signup-password-input1"
                    placeholder="Enter Password"
                    value={signupPasswordInput1}
                    onChange={handlePasswordInput1}
                    autoComplete="off"
                    required
                /><br/>
                <input id="signup-password-input2"
                    className="input"
                    name="signup-password-input2"
                    placeholder="Re-enter Password"
                    value={signupPasswordInput2}
                    onChange={handlePasswordInput2}
                    autoComplete="off"
                    required
                /><br/>
                <input type="submit" value="Signup"/>
            </form>
            <p>
                Already have an account? <a href="./login">Login</a> here!
            </p>
        </div>
    );
}