import ButtonWithoutBackground from "../components/ui/ButtonWithoutBackground";
import Profile from "../components/icons/Profile";
import LinkIcon from "../components/icons/LinkIcon";
import ButtonWithIcon from "../components/ui/ButtonWithIcon";
import Left from "../components/Left";
import Heading from "../components/Heading";
import LinkCard from "../components/AddLinks/LinkCard";
import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

const Layout = () => {
  const { user, addLink } = useContext(UserContext);
  // Load links initially from context

  const handleAddNewLink = () => {
    const basicLink = {
      platform_name: "",
      link: "",
      isValid: false,
    };
    addLink(basicLink); // Add a new empty card
  };
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
                <ButtonWithIcon>
                  <LinkIcon />
                  Links
                </ButtonWithIcon>
                <ButtonWithIcon>
                  <Profile />
                  Profile Details
                </ButtonWithIcon>
              </div>

              {/* Right side - Button */}
              <div>
                <ButtonWithoutBackground>Preview</ButtonWithoutBackground>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex flex-row gap-2 mx-4 my-4 round">
          <div className="w-1/2 bg-white">
            <Left />
          </div>

          <div className="w-1/2 bg-white">
            <div className="mx-4 my-4 overflow-auto">
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
              <div className=" flex flex-col gap-4">
                {user?.links?.length > 0 &&
                  user.links.map((card, index) => (
                    <LinkCard key={index} linkdata={card} />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content remains the same */}
      </div>
    </div>
  );
};

export default Layout;
