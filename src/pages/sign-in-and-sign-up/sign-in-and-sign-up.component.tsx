import React from "react";

// components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
// styles
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage: React.FC = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
