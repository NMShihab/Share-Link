import { useContext, useEffect, useState } from "react";
import Shimmer from "./ui/skeletonLoader/Shimmer";
import SkeletonButton from "./ui/skeletonLoader/SkeletonButton";
import SkeletonCircle from "./ui/skeletonLoader/SkeletonCircle";
import UserContext from "../context/UserContext";
import PlatformButton from "./ui/PlatformButton";

const Left = () => {
  const { user } = useContext(UserContext);
  const [resnderButtons, setRenderButtons] = useState([]);

  console.log(user);

  useEffect(() => {
    let renderButton = [];
    const validUrlCount = user.links.filter((link) => link.isValid).length;

    for (let i = 0; i < 3 - validUrlCount; i++) {
      renderButton.push(
        <SkeletonButton width={"w-48"} height={"h-10"} key={i} />
      );
    }
    setRenderButtons(renderButton);
  }, [user]);

  return (
    <div className="h-fit w-full flex justify-center items-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-64 min-h-[450px] bg-white rounded-3xl shadow-lg">
          {/* Top Notch */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-300 rounded-t-3xl flex justify-between px-4 items-center">
            <div className="h-1 w-10 bg-gray-500 rounded"></div>
            <div className="h-1 w-10 bg-gray-500 rounded"></div>
          </div>

          {/* Screen (You can place your loader here) */}
          <div className="flex items-center justify-center gap-3 flex-col min-h-[430px] top-8 mt-6 mb-6  left-0 right-0 bottom-0 bg-white rounded-3xl">
            {user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover"
              />
            ) : (
              <SkeletonCircle size={"h-24 w-24"} />
            )}

            {user.first_name ? (
              <h1 className="text-2xl font-bold">{user.first_name}</h1>
            ) : (
              <Shimmer height={"h-4"} width={"w-24"} />
            )}

            {user.email ? (
              <p className="text-gray-600">{user.email}</p>
            ) : (
              <Shimmer height={"h-2"} width={"w-24"} />
            )}

            {user.links.length > 0 &&
              user.links.map(
                (card) =>
                  card.isValid && (
                    <PlatformButton
                      platformName={card.platform_name}
                      link={card.link}
                      key={card.id}
                    />
                  )
              )}
            {resnderButtons}
          </div>

          {/* Bottom Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
