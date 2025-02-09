import Image from 'next/image'; // For optimized image rendering in Next.js
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Welcome to VenueEase</h1>
                <p>Your perfect event venue is just a click away.</p>
                <Link href="/search" className="cta-btn">Find Venues</Link>
            </div>
            <div className="hero-image">
                {/* You can use a local image or an external URL */}
                <Image src="/images/hero-image.jpg" alt="Venue Ease" width={1200} height={500} />
            </div>
        </section>
    );
};

export default HeroSection;
