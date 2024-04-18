import { useState, useEffect } from "react";
import eye from "../assets/icons/eye.png";
export default function Manager() {
  const [eyemask, setEyeMask] = useState("src/assets/icons/eye.png");
  const [type, setType] = useState("password");
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
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
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mt-10 mx-auto max-w-xl">
        <h1 className="text-white text-center text-3xl">PassOP</h1>
        <p className="text-slate-200 text-center text-lg">
          Your own password manager.
        </p>
        <div className="text-white flex flex-col gap-5 p-5">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="px-2 text-black rounded-3xl border-2 border-orange-200"
            type="text"
            name="site"
            id=""
          />
          <div className="flex gap-46">
            <input
              onChange={handleChange}
              value={form.username}
              placeholder="Enter Username"
              className="px-2 text-black rounded-3xl border-2  border-orange-200"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                onChange={handleChange}
                value={form.password}
                placeholder="Enter Password"
                className="px-2 text-black rounded-3xl border-2  border-orange-200"
                type={type}
                name="password"
                id=""
              />
              <span className="absolute right-0 mt-1 mr-2 cursor-pointer h-5 w-5 text-black">
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
        <div className="mt-8 passwords">
          <h2 className="text-2xl font-semibold text-red-200 text-center">Your Passwords</h2>
          <table className="mt-5 w-full  text-white table-auto">
            <thead className="bg-slate-600">
              <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center w-100">wwww.linkedin.com</td>
                <td className="text-center w-100">Malcolm Lockyer</td>
                <td className="text-center w-100">paass123</td>
              </tr>
              <tr>
                <td className="text-center w-60">Witchy Woman</td>
                <td className="text-center w-60">The Eagles</td>
                <td className="text-center w-60">1972</td>
              </tr>
              <tr>
                <td className="text-center w-60">Shining Star</td>
                <td className="text-center w-60">Earth, Wind, and Fire</td>
                <td className="text-center w-60">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
