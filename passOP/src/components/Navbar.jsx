import github from "../assets/icons/github.svg";
export default function Navbar() {
  return (
    <nav className="bg-[#a9cb77] flex justify-between h-14 px-5 items-center">
      <div className="logo font-bold">PassOP</div>
      <div className="h-12 w-12">
        <a href="https://github.com/nikhilg712" target="_blank"><img src={github} alt="github" className="h-12 w-12" /></a>
        
      </div>
    </nav>
  );
}
