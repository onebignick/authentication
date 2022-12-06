import { useState } from 'react';

export const Login = () => {
    const [loginUsernameInput, setLoginUsernameInput] = useState('');
    const [loginPasswordInput, setLoginPasswordInput] = useState('');

    const handleLoginUsernameInput = (event) => {
        const loginUsernameInput = event.target.value;
        setLoginUsernameInput(loginUsernameInput);
    }

    const handleLoginPasswordInput = (event) => {
        const loginPasswordInput = event.target.value;
        setLoginPasswordInput(loginPasswordInput);
    }

    return(
        <div className="login-main">
            <div>
                <h1>Login page</h1>
            </div>
            <form className="login-form">
                <input id="login-username-input"
                    className="input"
                    name="login-username-input"
                    value={loginUsernameInput}
                    onChange={handleLoginUsernameInput}
                    autoComplete="off"
                    placeholder="Enter Username"
                    required
                /><br/>
                <input id="login-password-input"
                    className="input"
                    name="login-password-input"
                    value={loginPasswordInput}
                    onChange={handleLoginPasswordInput}
                    autoComplete="off"
                    placeholder="Enter Password"
                    required
                /><br/>
                <input type="submit" value="Login"/>
            </form>
            <div>
                Dont have an account? <a href="./signup">Signup</a> here!
            </div>
        </div>
    );
}