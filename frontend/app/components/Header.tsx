
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header>
//       <div className="logo">
//         <h1>VenueEase<h1>
//         </div>
//           <nav>
//             <Link href="/">Home</Link>
//             <Link href="/search">Search</Link>
//             <Link href="/bookings">Bookings</Link>
//             <Link href="/contact">Contact Us</Link>
//           </nav>
//         </header >
//         );
// };

//         export default Header; // Ensure default export

// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>VenueEase</h1>
//       </div>
//       <nav className="nav">
//         <Link href="/">Home</Link>
//         <Link href="/search">Search</Link>
//         <Link href="/bookings">Bookings</Link>
//         <Link href="/contact">Contact Us</Link>
//       </nav>
//     </header >
//   );
// };

// export default Header;

import Link from 'next/link';

const Header = () => {
  return (
    <header>
      {/* Navbar section */}
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/bookings">Bookings</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      {/* Centered logo */}
      <div className="logo">
        <h1>VenueEase</h1>
      </div>
    </header>
  );
};

export default Header;

