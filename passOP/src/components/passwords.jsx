import { useEffect } from "react"; // Import useEffect if not already imported
import copy from "../assets/icons/copy-icon.svg";
import edit from "../assets/icons/edit.png";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Passwords({ setForm, passwordArray, setpasswordArray, form }) {
  const deletePassword = (id) => {
    console.log("deleting password");
    const updatedPasswordArray = passwordArray.filter((item) => item.id !== id);
    setpasswordArray(updatedPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
  };
  const editPassword = (id) => {
    const selectedPassword = passwordArray.find((item) => item.id === id);
    if (selectedPassword) {
      setForm(selectedPassword);
      setpasswordArray(passwordArray.filter((item) => item.id !== id))
    }
  };

  const copyText = (text) => {
    toast("Copied to Clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
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
      {/* Same as */}
      <ToastContainer />
      {passwordArray.length === 0 ? (
        <div className="mt-7 text-xl font-semibold text-white text-center">
          No Passwords
        </div>
      ) : (
        <div className="mt-8 passwords">
          <h2 className="text-xl font-semibold text-red-200 text-center">
            Your Passwords
          </h2>
          <table className="mt-5 w-full  text-white table-auto rounded-md overflow-hidden">
            <thead className="bg-[#1A5D30]">
              <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((password, index) => (
                <tr className="bg-green-100 w-full text-black" key={index}>
                  <td className="text-center w-100">
                    <div className="flex justify-center gap-2 items-center">
                      {password.site}
                      <img
                        onClick={() => {
                          copyText(password.site);
                        }}
                        style={{
                          width: "15px",
                          height: "15px",
                          cursor: "pointer",
                        }}
                        src={copy}
                        alt="copy"
                      />
                    </div>
                  </td>
                  <td className="text-center w-100">
                    <div className="flex justify-center gap-2 items-center">
                      {password.username}
                      <img
                        onClick={() => {
                          copyText(password.username);
                        }}
                        style={{
                          width: "15px",
                          height: "15px",
                          cursor: "pointer",
                        }}
                        src={copy}
                        alt="copy"
                      />
                    </div>
                  </td>
                  <td className="text-center w-100">
                    <div className="flex justify-center gap-2 items-center">
                      <span>{password.password}</span>
                    </div>
                  </td>
                  <td className="text-center w-100">
                    <div className="flex justify-center gap-3 items-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        colors="primary:#1663c7"
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          deletePassword(password.id);
                        }}
                      ></lord-icon>
                      <img
                        onClick={() => {
                          editPassword(password.id);
                        }}
                        src={edit}
                        alt="edit"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
