import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-emerald-600 text-stone-200 fixed top-0 left-0 flex justify-center items-center">
      <div className="flex gap-40">
        <Link to="/" className="text-3xl font-bold">
          Home
        </Link>
        <Link to="/about-us?id=21325435435" className="text-3xl font-bold">
          About Us
        </Link>
      </div>
    </nav>
  );
}
