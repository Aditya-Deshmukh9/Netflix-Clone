import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { API_ENDPOINT } from "../Utilts/constant.js";
import { setUser } from "../Redux/userSlice.js";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const res = await axios.post(`${API_ENDPOINT}/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res.data);
      if (res.data.success === true) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        // navigate("/home");
        setemail("");
        setpassword("");
      }
    } catch (error) {
      toast.error(res.data.message);
      console.log(error);
    }
  };

  return (
    <div className="absolute overflow-hidden h-full w-full ">
      <img
        className="min-h-full w-full bg-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="banner img"
      />
      <form
        onSubmit={handleSubmit}
        className="absolute h-3/4 w-2/6 px-14 py-20 bg-black/85 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col"
      >
        <h2 className="text-white font-semibold text-3xl">Sign in</h2>
        <div className="flex flex-col">
          <input
            className="px-4 py-3 mt-6 border border-gray-400 rounded-md text-white bg-black/10"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="px-4 py-3 mt-6 rounded-md border border-gray-400 text-white  bg-black/85 "
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <button className="px-4 py-3 rounded-md mt-4 text-white font-semibold bg-red-600">
            Sign in
          </button>
          <h2 className="text-gray-400 mt-3 font-semibold">
            {" "}
            New to Netflix?
            <Link to="/register" className="text-white pl-1">
              Sign up Now
            </Link>
          </h2>
          <div className="flex gap-2 mt-4">
            <input type="checkbox" className="h-5 w-5 text-black" />
            <h3 className="text-white">Remember me</h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
