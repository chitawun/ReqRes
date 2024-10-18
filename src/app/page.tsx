import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to ReqRes API Integration</h1>
      <div className="flex space-x-4">
        <Link href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </Link>
        <Link href="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
        <Link href="/users" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          View Users
        </Link>
      </div>
    </div>
  );
}