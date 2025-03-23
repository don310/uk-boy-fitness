// pages/stayconnected.js
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const playlists = [
  { id: 'yoga', title: 'Yoga Workout' },
  { id: 'cardio', title: 'Cardio Workout' },
  { id: 'strength', title: 'Strength Training' },
];

const StayConnected = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Stay Connected</h1>
        <p className="text-lg text-center text-gray-600 mt-4">Explore our workout playlists below:</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <Link key={playlist.id} href={`/stayconnected/${playlist.id}`} passHref>
              <a className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-gray-800">{playlist.title}</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StayConnected;
