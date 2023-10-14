export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-emerald-600 text-stone-200 fixed top-0 left-0 flex justify-center items-center">
      <div className="flex gap-40">
        <p className="text-3xl font-bold">Home</p>
        <p className="text-3xl font-bold">About Us</p>
      </div>
    </nav>
  );
}
