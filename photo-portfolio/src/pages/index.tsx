import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
    return (
        <Layout>
            <h1>Welcome to My Photo Portfolio</h1>
            <Gallery />
        </Layout>
    );
};

export default Home;