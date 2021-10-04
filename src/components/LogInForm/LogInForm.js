import React from 'react';
import "./LogInForm.css"

const LogInForm = () => {
    return (
        <div>
            <form action="">
                <div className="container">

                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <br />
                    <br />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>

                    <button type="submit">Login</button>

                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div class="container forget-password-container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form >
        </div >
    );
};

export default LogInForm;