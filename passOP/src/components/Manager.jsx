import { useState, useEffect } from "react";
import eye from "../assets/icons/eye.png";
import Passwords from "./passwords";
import { v4 as uuidv4 } from "uuid";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Manager() {
  const [eyemask, setEyeMask] = useState("src/assets/icons/eye.png");
  const [type, setType] = useState("password");
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  const getPasswords = async () => {
    const req = await fetch("http://localhost:3000/");
    let passwords = await req.json();

    setpasswordArray(passwords);
    console.log(passwords)
  };

  useEffect(() => {
    getPasswords()
  }, []);

  function clickEye() {
    if (eyemask === "src/assets/icons/eye.png") {
      setEyeMask("src/assets/icons/eyemask.png");
      setType("text");
    } else {
      setEyeMask("src/assets/icons/eye.png");
      setType("password");
    }
  }

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      toast("Password Saved Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      setForm({ site: "", username: "", password: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mt-10 mx-auto max-w-2xl">
        <h1 className="text-white text-center text-3xl">
          <span style={{ color: "#FF0000" }}>{"<"}</span>
          <span style={{ color: "#FF0000" }}>/</span>
          <span style={{ color: "#FFFFFF" }}>{"Pass"}</span>
          <span style={{ color: "#FF0000" }}>{"OP"}</span>
          <span style={{ color: "#FF0000" }}>{">"}</span>
        </h1>
        <p className="text-slate-200 text-center text-lg">
          Your own password manager.
        </p>
        <div className="text-white flex flex-col gap-5 p-5">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="px-2 h-9 text-black rounded-3xl border-2 border-orange-200"
            type="text"
            name="site"
            id=""
          />
          <div className="flex gap-52">
            <input
              onChange={handleChange}
              value={form.username}
              placeholder="Enter Username"
              className="px-2 h-9 w-80  text-black rounded-3xl border-2  border-orange-200"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                onChange={handleChange}
                value={form.password}
                placeholder="Enter Password"
                className="px-2 h-9 w-52 text-black rounded-3xl border-2  border-orange-200"
                type={type}
                name="password"
                id=""
              />
              <span className="absolute right-0 mt-2 mr-2 cursor-pointer h-5 w-5 text-black">
                <img src={eyemask} onClick={clickEye} />
              </span>
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center items-center">
          <button
            onClick={savePassword}
            className="rounded-full h-10 w-48 flex gap-1 justify-center items-center bg-[#1A5D30]"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#ffffff"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <Passwords
          setForm={setForm}
          form={form}
          setpasswordArray={setpasswordArray}
          passwordArray={passwordArray}
        />
      </div>
    </>
  );
}
