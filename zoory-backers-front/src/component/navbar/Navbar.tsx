import logo from "../../../public/logo.png";

import { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import Model from "../model/Model.tsx";
import { AuthContext } from "../../contexts/AuthProvider.tsx";
import Profile from "../profile/Profile.tsx";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart.tsx";
import useAuth from "../../hooks/useAuth.tsx";

const Navbar = () => {
  //start handle scroll
  const [isSticky, setSticky] = useState(false);

  const { user } = useAuth();
  console.log(user);

  {
    /*start useCartHooks */
  }
  const [cart, refetch] = useCart();
  // console.log(cart);
  {
    /*end useCartHooks */
  }

  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //end handle scroll

  const navItems = (
    <>
      <li>
        <a className="text-[#FF9800]" href="/">
          Home
        </a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Buns</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tacking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <header className="container fixed top-0 left-0 right-0 mx-auto transition-all duration-300 ease-in-out max-w-screen-2xl">
      <div
        className={`navbar x1:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={logo} className="w-auto h-[100px]" />
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/*start search btn*/}
          <button className="hidden btn btn-ghost btn-circle lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/*end search btn*/}
          {/*start btn cart*/}

          <Link to="cart-page">
            <div
              tabIndex={0}
              role="button"
              className="items-center justify-center hidden mr-3 btn btn-ghost btn-circle lg:flex "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length || 0}
                </span>
              </div>
            </div>
          </Link>
          {/*end btn cart*/}
          {/*login btn start*/}
          {user ? (
            <Profile user={user} />
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="flex items-center gap-2 px-5 mr-32 rounded-full btn bg-[#FF9800] text-slate-100"
            >
              <FaUser className="bg-[#FF9800]" />
              Login
            </button>
          )}

          <Model />
          {/*login btn end*/}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
