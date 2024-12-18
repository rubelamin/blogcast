import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <h1 className="text-lg font-bold">
        <Link href={"/"}>BlogCast</Link>
      </h1>

      <nav className="flex space-x-6">
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
      </nav>

      <div className="flex space-x-4">
        <Socials />

        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
