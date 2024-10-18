import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          ReqRes App
        </Link>
        <div className="space-x-4">
          <Link href="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
          <Link href="/users" className="text-white hover:text-gray-300">
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;