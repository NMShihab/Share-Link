import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import ButtonWithoutBackground from "../components/ui/ButtonWithoutBackground";
import LinkCard from "../components/AddLinks/LinkCard";
import ButtonWithBackground from "../components/ui/ButtonWithBackground";
import UserContext from "../context/UserContext";

const AddLinkPage = () => {
  const { user, addLink, SaveTolocalStorage } = useContext(UserContext);

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
    <div className="mx-6 my-6 overflow-auto">
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
    </div>
  );
};

export default AddLinkPage;
