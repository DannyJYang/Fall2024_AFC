import { useState } from "react";

const Login = () => {
  //const [showPassword, setShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const handleSHowPassword = () => {
    setShowPassword(showPassword == "password" ? "text" : "password")
  }


  return (
    <form className="form">
      <input type="email" id="email" placeholder="Enter your email" />
      <input
        //type={showPassword ? "text" : "password"}
        type={showPassword}
        id="password"
        placeholder="Enter your password"
      />
      <input type="checkbox" name="checkbox" id="checkbox" onChange={handleSHowPassword}/>
      <button type="submit" >Submit</button>
    </form>
  );
};

export default Login;
