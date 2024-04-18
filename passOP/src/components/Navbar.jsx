export default function Navbar() {
  return (
    <nav className="bg-[#e98989] flex justify-between h-14 px-5 items-center">
      <div className="logo font-bold">PassOP</div>
      <ol>
        <li className="text-emerald-950 flex gap-4">
            <a href="" className="hover:font-bold">Home</a>
            <a href="" className="hover:font-bold">About</a>
            <a href="" className="hover:font-bold">Contact</a>
        </li>
      </ol>
    </nav>
  );
}
