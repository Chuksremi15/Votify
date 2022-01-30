import React from "react";
import { AuthNav } from "../../components/Navbar/Navbar";
import { AuthFooter } from "../../components/Footer/index";
import { LoginForm } from "../../components/Forms/LoginForms";

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthNav />
      <div className="container mx-auto  max-w-screen-xl flex-grow">
        <div className="grid grid-cols-2 gap-x-24 lg:mt-32">
          <div>
            <img src="img/vote.svg"></img>
          </div>
          <LoginForm />
        </div>
      </div>

      <AuthFooter />
    </div>
  );
};

export default Login;
