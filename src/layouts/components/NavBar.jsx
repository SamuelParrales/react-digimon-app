
import { NavLink, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLoadingDigimons } from "../../store/digimon/thunks";
import { useRef } from "react";



export const NavBar = () => {

  const query = (new URLSearchParams(location.search)).get('q') || ''; //get query

  // Hookss
  const { searchText, onInputChange } = useForm({  //init
    searchText: query,
  })
  const refLinkContainer = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Functions
  const onSearchSubmit = (e) => {
    e.preventDefault();
 
    navigate(`/digimons?q=${searchText}`);
    dispatch(startLoadingDigimons({ query: searchText }));
  }
  const onNavBarToggler = (e) => {
    e.preventDefault();
    const linkContainer = refLinkContainer.current;
    linkContainer.classList.toggle('active');

  }
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <button
        className="navbar__toggler"
        onClick={onNavBarToggler}
      ><i className="fa-solid fa-bars"></i></button>
      <ul
        className="navbar__link-container "
        ref={refLinkContainer}
      >
        <NavLink className='navbar__link' to='/' >Home</NavLink>
        <NavLink className='navbar__link' to='/digimons' >Digimons</NavLink>
      </ul>
      <form
        className="navbar__form"
        onSubmit={onSearchSubmit}
      >
        <button className="navbar__btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          name="searchText"
          value={searchText}
          className="navbar__input-search"
          type="search"
          placeholder="Search Digimon"
          onChange={onInputChange}
        />
      </form>

    </nav>
  )
}
