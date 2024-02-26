import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutToFirebase } from "../firebase/actions/authActions";
import photo from "../assets/images/profile_photo.jpg";

const signOutLinks = [
  { text: "Sign In", to: "sign-in" },
  { text: "Sign Up", to: "sign-up" },
];

const Navbar = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  return (
    <nav className=" min-h-24 container mx-auto  flex justify-between items-center p-4">
      <div className="font-black text-2xl">
        <Link to="/">TODO</Link>
      </div>
      <div className="flex space-x-4 justify-center items-center">
        {!isLoading &&
          !user &&
          signOutLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className=" relative group text-slate-700 dark:text-slate-100 font-semibold hover:text-slate-500 transition"
            >
              {link.text}
              <div className="absolute h-0.5 w-0 bg-red-400 group-hover:w-full duration-500 ease-out"></div>
            </NavLink>
          ))}

        {user && (
          <>
            <NavLink
              to="todos"
              className=" relative group text-slate-700 dark:text-slate-100 font-semibold hover:text-slate-500 transition"
            >
              My Todos
              <div className="absolute h-0.5 w-0 bg-red-400 group-hover:w-full duration-500 ease-out"></div>
            </NavLink>
            <div className="p-2 group relative">
              <img
                src={user.photoURL || photo}
                className="h-8 w-8 rounded-full object-cover object-top"
              />
              <div className="hidden group-hover:flex absolute top-11 bg-slate-50 dark:bg-slate-700 right-0 -translat-x-1/2  flex-col drop-shadow-md divide-y dark:divide-slate-600">
                <Link
                  to="profile"
                  className="px-2 py-1 text-left text-nowrap hover:bg-sky-500 hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  to="reset-password"
                  className="px-2 py-1 text-left text-nowrap hover:bg-sky-500 hover:text-white"
                >
                  Change password
                </Link>
                <Link
                  onClick={() => {
                    logoutToFirebase();
                    console.log("object");
                  }}
                  className="px-2 text-red-600 py-1 text-left hover:bg-red-500 hover:text-white"
                >
                  Logout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
