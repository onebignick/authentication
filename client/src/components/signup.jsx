import { useState } from "react";

export const Signup = () => {
    const [signupUsernameInput, setSignupUsernameInput] = useState('');
    const [signupPasswordInput1, setSignupPasswordInput1] = useState('');
    const [signupPasswordInput2, setSignupPasswordInput2] = useState('');

    const handleUsernameInput = (event) => {
        const signupUsernameInput = event.target.value;
        setSignupUsernameInput(signupUsernameInput);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="signup-main">
            <form className="signup-form" onSubmit={handleSubmit}>
                <input id="signup-username-input"
                    className="input"
                    name="signup-username-input"
                    placeholder="Enter Username"
                    value={signupUsernameInput}
                    onChange={handleUsernameInput}
                    autoComplete="off"
                    required
                />
                <input id="signup-password-input1"
                    className="input"
                    name="signup-password-input1"
                    placeholder="Enter Password"
                    value={signupPasswordInput1}
                />
            </form>
        </div>
    );
}