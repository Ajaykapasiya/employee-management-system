import React, { useState } from "react";

const Login = ({handleLogin}) => {

 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email , password)
   // console.log("email is", email);
   // console.log("password is ", password);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="  border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full text-xl placeholder:text-grey-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full text-xl mt-5 placeholder:text-grey-400"
            type="p
      </div>
    </div>
  );
};

export default Login;
