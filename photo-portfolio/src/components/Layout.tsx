import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                {/* Navbar component can be included here */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Footer content can be added here */}
            </footer>
        </div>
    );
};

export default Layout;