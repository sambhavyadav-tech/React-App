import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Tender App</h1>
        {/* Navigation links for user/admin based on context */}
      </header>
      <main>{children}</main>
      <footer>Tender App &copy; 2024</footer>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          /* Add other layout styles */
        }

        header,
        main,
        footer {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
