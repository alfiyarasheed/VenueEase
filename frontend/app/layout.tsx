// // /layout.tsx
// import Header from '../components/Header';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       {/* The Header will be shown on every page */}
//       <Header />

//       {/* Main content area */}
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Layout;

// layout.tsx
import React, { ReactNode } from 'react';  // Import ReactNode
import Header from './components/Header';

interface LayoutProps {
  children: ReactNode;  // Explicitly type the 'children' prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* The Header will be shown on every page */}
      <Header />

      {/* Main content area */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
