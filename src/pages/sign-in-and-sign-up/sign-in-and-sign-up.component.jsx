import React from "react";
import SignIn from "../../components/sign-in/sign-in.components";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    SIGN IN
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUp;
