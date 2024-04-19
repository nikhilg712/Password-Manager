import { useEffect } from "react"; // Import useEffect if not already imported
import copy from "../assets/icons/copy-icon.svg";

export default function Passwords({ passwordArray }) {
  return (
    <>
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
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((password, index) => (
                <tr className="bg-green-100 w-full text-black" key={index}>
                  <td className="text-center w-100">
                    <div className="flex justify-center gap-2 items-center">
                      {password.site}
                      <img
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
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        colors="primary:#1663c7"
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                      ></lord-icon>
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
