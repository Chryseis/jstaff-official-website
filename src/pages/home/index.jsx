import './index.less';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Product from './components/Product.jsx';
import Feature from './components/Feature.jsx';
import Materials from './components/Materials.jsx';
import Footer from './components/Footer.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Product />
            <Feature />
            <Materials />
            <Footer />
        </>
    );
};

export default Home;
