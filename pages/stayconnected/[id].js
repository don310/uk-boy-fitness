// pages/stayconnected/[id].js
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Playlist.module.css';

const playlistData = {
  yoga: [
    { title: 'Morning Yoga', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1', description: 'A relaxing morning yoga session.' },
    { title: 'Evening Yoga', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2', description: 'Wind down with some evening yoga.' },
  ],
  cardio: [
    { title: 'High-Intensity Cardio', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3', description: 'A high-energy cardio workout.' },
    { title: 'Low-Impact Cardio', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4', description: 'Gentle cardio for all levels.' },
  ],
  strength: [
    { title: 'Upper Body Strength', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5', description: 'Focus on building upper body strength.' },
    { title: 'Lower Body Strength', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6', description: 'Strength exercises for the lower body.' },
  ],
};

const Playlist = () => {
  const router = useRouter();
  const { id } = router.query;
  const videos = playlistData[id] || [];

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>{id.charAt(0).toUpperCase() + id.slice(1)} Playlist</h1>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoCard}>
            <h2>{video.title}</h2>
            <iframe width="560" height="315" src={video.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p>{video.description}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Playlist;
