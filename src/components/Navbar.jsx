/* eslint-disable jsx-a11y/anchor-is-valid */
import { GoogleAuth, jsonData, signOutMethod } from "../config/Auth/auth";
import { notify } from "../pages/Debug/Debug";
// import Swal from "sweetalert2";

function Navbar() {
  const handleSignIn = () => {
    return GoogleAuth();
  };

  const handleLogOut = () => {
    return signOutMethod();
  };

  return (
    <div className="navbar max-w-7xl  mx-auto">
      <div className="navbar-start min-h-16">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="/">Beranda </a>
            </li>
            <li tabIndex={0}>
              <a href="/destination">Destinasi</a>
            </li>
            <li onClick={notify}>
              <a>Tiket</a>
            </li>
            <li onClick={notify}>
              <a>VTour</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-semibold ">Dewi Vtour</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Beranda </a>
          </li>
          <li tabIndex={0}>
            <a href="/destination">Destinasi</a>
          </li>
          <li>
            <a href="/ticket">Tiket</a>
          </li>
          <li>
            <a href="/vtour">VTour</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {localStorage.getItem("loginInfo") === null ? (
          <a className="btn rounded-full px-8 px bg-blueButton border-none mx-2" href="/auth/signin">
            Masuk
          </a>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={jsonData.user.photoURL} alt={jsonData.user.displayName} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">Dashboard</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
