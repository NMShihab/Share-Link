import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ButtonWithBackground from "../components/ui/ButtonWithBackground";
import { NavLink } from "react-router-dom";
import ButtonWithoutBackground from "../components/ui/ButtonWithoutBackground";
import PlatformButton from "../components/ui/PlatformButton";
import SkeletonButton from "../components/ui/skeletonLoader/SkeletonButton";
import SkeletonCircle from "../components/ui/skeletonLoader/SkeletonCircle";
import Shimmer from "../components/ui/skeletonLoader/Shimmer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const PreviewPage = () => {
  const { user, setUser } = useContext(UserContext);

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

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(user.links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedUser = {
      ...user,
      links: items,
    };

    setUser((prevUser) => ({
      ...prevUser,
      links: items,
    }));
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 from-50% to-white to-50%">
      <div className="pt-4">
        <nav className="bg-white p-4 mx-4 flex justify-between items-center rounded">
          <NavLink to={"/create-link"}>
            <ButtonWithoutBackground>Back to Editor</ButtonWithoutBackground>
          </NavLink>

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
            <div className="flex justify-center items-center">
              <SkeletonCircle size={"h-24 w-24"} />
            </div>
          )}
          {user.first_name ? (
            <h2 className="text-2xl font-bold mb-2">
              {user.first_name} {user.last_name}
            </h2>
          ) : (
            <div className="flex justify-center items-center mt-4">
              <Shimmer height={"h-4"} width={"w-24"} />
            </div>
          )}

          {user.email ? (
            <p className="text-gray-600 mb-4">{user.email}</p>
          ) : (
            <div className="flex justify-center items-center mt-4 mb-2">
              <Shimmer height={"h-2"} width={"w-24"} />
            </div>
          )}

          {user.links.length > 0 ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="links">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-2"
                  >
                    {user.links.map((link, index) => (
                      <Draggable
                        key={link.id}
                        draggableId={link.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <PlatformButton
                              platformName={link.platform_name}
                              link={link.link}
                              key={link.id}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <div className="flex flex-col gap-4 justify-center items-center mt-4">
              <SkeletonButton width={"w-48"} height={"h-10"} />
              <SkeletonButton width={"w-48"} height={"h-10"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
