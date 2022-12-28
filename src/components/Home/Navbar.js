/* eslint-disable jsx-a11y/anchor-is-valid */
import { GoogleAuth, jsonData, signOutMethod } from "../../config/Auth/auth";
import { notify } from "../../containers/Pages/Debug/Debug";
import Swal from "sweetalert2";
function Navbar() {
  const handleSignIn = () => {
    return GoogleAuth();
  };
  const handleLogOut = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-danger",
        cancelButton: "btn btn-success",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Anda ingin LogOut?",
        text: "Anda harus login lagi untuk menggunakan vtour anda!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, saya ingin logout!",
        cancelButtonText: "Tidak, batalkan!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          signOutMethod();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Dibatalkan", "Gagal Logout", "error");
        }
      });
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Beranda </a>
            </li>
            <li onClick={notify} tabIndex={0}>
              <a>Destinasi</a>
            </li>
            <li onClick={notify}>
              <a>Tiket</a>
            </li>
            <li onClick={notify}>
              <a>VTour</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-semibold ">
          Dewi Vtour
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Beranda </a>
          </li>
          <li onClick={notify} tabIndex={0}>
            <a>Destinasi</a>
          </li>
          <li onClick={notify}>
            <a>Tiket</a>
          </li>
          <li onClick={notify}>
            <a>VTour</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {localStorage.getItem("loginInfo") === null ? (
          <a
            className="btn rounded-full px-8 px bg-blueButton border-none mx-2"
            onClick={handleSignIn}
          >
            Masuk
          </a>
        ) : (
          <div
            className="p-4 bg-blueButton text-white font-semibold rounded-full cursor-pointer"
            onClick={handleLogOut}
          >
            {jsonData.user.displayName}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
