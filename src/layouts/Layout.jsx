
import PropTypes from 'prop-types';
import { NavBar } from './components';
import { Loader } from '../components/Loader';
import { useSelector } from 'react-redux';

export const Layout = ({ children }) => {
  const {show} = useSelector(state=>state.loader);

  return (
    <>
    {show && <Loader /> }

      <NavBar />
      {children}
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.any.isRequired,
}