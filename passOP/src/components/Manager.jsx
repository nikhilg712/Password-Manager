import { useState } from "react";
import eye from "../assets/icons/eye.png"
export default function Manager() {
  const [eyemask,setEyeMask] = useState("src/assets/icons/eye.png")
  function clickEye()
  {
    if(eyemask==="src/assets/icons/eye.png") 
    {
      setEyeMask("src/assets/icons/eyemask.png")
    }
    else{
      setEyeMask("src/assets/icons/eye.png")
    }

  }


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
            placeholder="Enter website URL"
            className="px-2 text-black rounded-3xl border-4 border-orange-200"
            type="text"
            name=""
            id=""
          />
          <div className="flex gap-46">
            <input
              placeholder="Enter Username"
              className="px-2 text-black rounded-3xl border-4  border-orange-200"
              type="text"
              name=""
              id=""
            />
            <div className="relative">
            <input
              placeholder="Enter Password"
              className="px-2 text-black rounded-3xl border-4  border-orange-200"
              type="text"
              name=""
              id=""
            />
            <span className="absolute right-0 mt-1.5 mr-2 cursor-pointer h-5 w-5 text-black"><img src={eyemask} onClick={clickEye} /></span>
            </div>
            
            
          
            
          </div>
        </div>
        <div className="text-white flex justify-center items-center">
          <button className="rounded-full h-10 w-48 flex gap-1 justify-center items-center bg-[#1A5D30]">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#ffffff"
            ></lord-icon>
            Add Password
            
          </button>
        </div>
      </div>
    </>
  );
}
