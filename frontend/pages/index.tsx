// /pages/index.tsx
import Layout from '../app/layout';
import HeroSection from '../app/components/HeroSection';
import FeaturedVenues from '../app/components/FeaturedVenues';

const HomePage = () => {
  // Example featured venues (you can replace this with data fetched from your backend or API later)
  const venues = [
    { id: 1, name: 'Venue 1', image: '/images/venue1.jpg', location: 'Location 1', rating: '4.5' },
    { id: 2, name: 'Venue 2', image: '/images/venue2.jpg', location: 'Location 2', rating: '4.2' },
    // Add more venues as needed
  ];

  return (
    <Layout>
      {/* Home Page Specific Content */}
      <HeroSection />
      <FeaturedVenues />
    </Layout>
  );
};

export default HomePage;
