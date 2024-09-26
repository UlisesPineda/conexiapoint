import PropTypes from 'prop-types';
import { Navbar, Footer } from '.';

export const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        { children }
        <Footer />
    </>
  );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};
