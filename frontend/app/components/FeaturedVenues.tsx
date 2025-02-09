import Link from 'next/link';

const FeaturedVenues = () => {
    // Static data for featured venues (replace with dynamic data as needed)
    const venues = [
        { id: 1, name: "The Grand Hall", description: "A spacious venue for large events", image: "/images/venue1.jpg" },
        { id: 2, name: "Lakeside Retreat", description: "A beautiful lakeside venue perfect for weddings", image: "/images/venue2.jpg" },
        { id: 3, name: "Urban Conference Center", description: "Modern and professional space for conferences", image: "/images/venue3.jpg" }
    ];

    return (
        <section className="featured-venues">
            <h2 className="section-title">Featured Venues</h2>
            <div className="venue-cards">
                {venues.map((venue) => (
                    <div key={venue.id} className="venue-card">
                        <img src={venue.image} alt={venue.name} className="venue-image" />
                        <div className="venue-details">
                            <h3>{venue.name}</h3>
                            <p>{venue.description}</p>
                            <Link href={`/venues/${venue.id}`} className="view-more-btn">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedVenues;
