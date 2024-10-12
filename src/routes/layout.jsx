import ButtonWithoutBackground from "../components/ui/ButtonWithoutBackground";
import Profile from "../components/icons/Profile";
import LinkIcon from "../components/icons/LinkIcon";
import ButtonWithIcon from "../components/ui/ButtonWithIcon";
import Left from "../components/Left";
import {
  Outlet,
  useNavigate,
  useParams,
  useLocation,
  NavLink,
} from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  console.log({ navigate });
  console.log({ params });
  console.log(location);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-2">
        <nav className="bg-white shadow-md mx-4 py-2 rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left side - Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Middle - 2 buttons */}
              <div className="hidden md:flex space-x-4">
                <NavLink to={`/create-link`}>
                  <ButtonWithIcon
                    isnavSelected={location.pathname === "/create-link"}
                  >
                    <LinkIcon />
                    Links
                  </ButtonWithIcon>
                </NavLink>
                <NavLink to={`/create-profile`}>
                  <ButtonWithIcon
                    isnavSelected={location.pathname === "/create-profile"}
                  >
                    <Profile />
                    Profile Details
                  </ButtonWithIcon>
                </NavLink>
              </div>

              {/* Right side - Button */}
              <NavLink to={`/preview`}>
                <ButtonWithoutBackground>Preview</ButtonWithoutBackground>
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="flex flex-row gap-2 mx-4 my-4 round">
          <div className="w-1/2 bg-white">
            <Left />
          </div>

          <div className="w-1/2 bg-white">
            <Outlet />

            {/* <div className="mx-4 my-4 overflow-auto">
              <Heading
                title="Customize Your Links"
                description="Add your favourite url And share your profile"
              />
              <ButtonWithoutBackground
                className={"w-full my-3"}
                onClick={handleAddNewLink}
              >
                + Add new link
              </ButtonWithoutBackground>
              <div className=" flex flex-col gap-4 h-[500px] overflow-auto mt-2 mb-2">
                {user?.links?.length > 0 &&
                  user.links.map((card, index) => (
                    <LinkCard key={index} linkdata={card} index={index} />
                  ))}
              </div>
              <div className="flex items-end justify-end">
                <ButtonWithBackground onClick={SaveTolocalStorage}>
                  Save
                </ButtonWithBackground>
              </div>
            </div> */}
          </div>
        </div>

        {/* Rest of the content remains the same */}
      </div>
    </div>
  );
};

export default Layout;
