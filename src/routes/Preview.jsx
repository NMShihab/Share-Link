import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ButtonWithBackground from "../components/ui/ButtonWithBackground";
import { NavLink } from "react-router-dom";
import ButtonWithoutBackground from "../components/ui/ButtonWithoutBackground";
import PlatformButton from "../components/ui/PlatformButton";
import SkeletonButton from "../components/ui/skeletonLoader/SkeletonButton";
import SkeletonCircle from "../components/ui/skeletonLoader/SkeletonCircle";
import Shimmer from "../components/ui/skeletonLoader/Shimmer";

const PreviewPage = () => {
  const { user } = useContext(UserContext);

  const handleShareLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 from-50% to-white to-50%">
      <div className="pt-4">
        <nav className="bg-white p-4 mx-4 flex justify-between items-center rounded">
          <NavLink to={"/create-link"}>
            <ButtonWithoutBackground>Back to Editor</ButtonWithoutBackground>
          </NavLink>
          {/* <button className="text-gray-700 font-semibold">
            Back to Editor
          </button> */}

          <ButtonWithBackground onClick={handleShareLink}>
            Share Link
          </ButtonWithBackground>
        </nav>
      </div>

      <div className="flex justify-center pt-20">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {user.image ? (
            <img
              src={user.image}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
          ) : (
            <SkeletonCircle size={"h-24 w-24"} />
          )}
          {user.first_name ? (
            <h2 className="text-2xl font-bold mb-2">
              {user.first_name} {user.last_name}
            </h2>
          ) : (
            <Shimmer height={"h-6"} width={"w-24"} />
          )}

          {user.email ? (
            <p className="text-gray-600 mb-4">{user.email}</p>
          ) : (
            <Shimmer height={"h-2"} width={"w-24"} />
          )}
          <div className="space-y-2">
            {user.links.length > 0 ? (
              user.links.map(
                (card) =>
                  card.isValid && (
                    <PlatformButton
                      platformName={card.platform_name}
                      link={card.link}
                      key={card.id}
                    />
                  )
              )
            ) : (
              <>
                <SkeletonButton width={"w-48"} height={"h-10"} />
                <SkeletonButton width={"w-48"} height={"h-10"} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
