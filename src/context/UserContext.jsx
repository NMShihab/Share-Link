import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const defaultUser = {
  first_name: "",
  last_name: "",
  email: "",
  image: null,
  links: [],
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  console.log({ user });

  // Load from localStorage on mount
  useEffect(() => {
    console.log("Called");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parseUser = JSON.parse(storedUser);

        const linksData = [...parseUser.links];
        const newUser = {
          first_name: parseUser.first_name,
          last_name: parseUser.last_name,
          email: parseUser.email,
          image: parseUser.image,
          links: linksData,
        };

        setUser(newUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  // Save to localStorage when user updates
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  const SaveTolocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const addLink = (linkData) => {
    setUser((prevUser) => ({
      ...prevUser,
      links: [...prevUser.links, { ...linkData, id: Date.now() }],
    }));
  };

  const editLink = (id, updatedLinkData) => {
    setUser((prevUser) => ({
      ...prevUser,
      links: prevUser.links.map((link) =>
        link.id === id ? { ...link, ...updatedLinkData } : link
      ),
    }));
  };

  const removeLink = (id) => {
    setUser((prevUser) => ({
      ...prevUser,
      links: prevUser.links.filter((link) => link.id !== id),
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        addLink,
        editLink,
        removeLink,
        SaveTolocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
