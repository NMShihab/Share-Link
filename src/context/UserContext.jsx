import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const defaultUser = {
  phone: "",
  email: "",
  image: "",
  links: [],
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  // Load from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save to localStorage when user updates
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
    <UserContext.Provider value={{ user, addLink, editLink, removeLink }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
