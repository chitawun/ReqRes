'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = () => {
    if (selectedUser) {
      router.push(`/users/${selectedUser}`);
    } else {
      alert('Please select a user to edit');
    }
  };

  const handleDelete = async () => {
    if (selectedUser) {
      try {
        const response = await fetch(`https://reqres.in/api/users/${selectedUser}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setUsers(users.filter(user => user.id !== selectedUser));
          setSelectedUser(null);
        } else {
          alert('Delete failed');
        }
      } catch (error) {
        console.error('Delete error:', error);
      }
    } else {
      alert('Please select a user to delete');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Users List</h1>
        <div className="space-x-2">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Edit Selected
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div 
            key={user.id} 
            className={`border p-4 rounded shadow cursor-pointer ${selectedUser === user.id ? 'bg-blue-100' : ''}`}
            onClick={() => setSelectedUser(user.id)}
          >
            <img src={user.avatar} alt={user.first_name} className="w-20 h-20 rounded-full mx-auto mb-2" />
            <h2 className="text-xl font-semibold">{`${user.first_name} ${user.last_name}`}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}