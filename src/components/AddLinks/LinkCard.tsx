import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

const platforms = [
  {
    id: 1,
    platform_name: "GitHub",
    icon: (
      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    id: 2,
    platform_name: "Twitter",
    icon: (
      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    id: 3,
    platform_name: "LinkedIn",
    icon: (
      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 4,
    platform_name: "Facebook",
    icon: (
      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const LinkCard = ({ linkdata, index }) => {
  const { editLink, removeLink } = useContext(UserContext);
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    linkdata.platform_name || ""
  );
  const [link, setLink] = useState(linkdata.link || "");
  const [isLinkValid, setIsLinkValid] = useState(linkdata.isValid || true);
  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(e.target.value);
    setLink("");
    setIsLinkValid(true);
  };

  const validateLink = (inputLink: string) => {
    let isValid = true;
    switch (selectedPlatform) {
      case "GitHub":
        isValid = /^https:\/\/github\.com\/[\w-]+\/?$/.test(inputLink);
        break;
      case "Twitter":
        isValid = /^https:\/\/twitter\.com\/[\w-]+\/?$/.test(inputLink);
        break;
      case "LinkedIn":
        isValid = /^https:\/\/www\.linkedin\.com\/in\/[\w-]+\/?$/.test(
          inputLink
        );
        break;
      case "Facebook":
        isValid = /^https:\/\/www\.facebook\.com\/[\w.]+\/?$/.test(inputLink);
        break;
      default:
        isValid = true;
    }
    setIsLinkValid(isValid);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLink = e.target.value;
    setLink(inputLink);
    validateLink(inputLink);
  };

  const getSelectedPlatformIcon = () => {
    const platform = platforms.find(
      (p) => p.platform_name === selectedPlatform
    );
    return platform ? platform.icon : null;
  };

  useEffect(() => {
    if (isLinkValid && selectedPlatform && link) {
      const newLinkData = {
        platform_name: selectedPlatform,
        link: link,
        isValid: true,
      };

      editLink(linkdata.id, newLinkData);
    } else {
      const newLinkData = {
        platform_name: selectedPlatform,
        link: link,
        isValid: false,
      };
      editLink(linkdata.id, newLinkData);
    }
  }, [isLinkValid, selectedPlatform, link]);

  const handleRemove = () => {
    removeLink(linkdata.id);
  };
  return (
    <div className="w-full bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-600 font-semibold mb-2">
          Link #{index + 1}
        </p>
        <p
          className="text-sm text-gray-600 mb-4 cursor-pointer"
          onClick={handleRemove}
        >
          Remove
        </p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="platform"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Platform
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {getSelectedPlatformIcon() || (
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 9.172a4 4 0 115.656 5.656L10 14l-.828.828a4 4 0 11-5.656-5.656L4.344 8l.828-.828z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <select
            id="platform"
            name="platform"
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
          >
            <option value="">Select a platform</option>
            {platforms.map((platform) => (
              <option key={platform.id} value={platform.platform_name}>
                {platform.platform_name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Link
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="link"
            name="link"
            value={link}
            placeholder="Enter your link here"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleLinkChange}
            disabled={!selectedPlatform}
          />
        </div>
        {!isLinkValid && (
          <p className="mt-1 text-sm text-red-500">
            Please enter a valid link for the selected platform.
          </p>
        )}
      </div>
    </div>
  );
};

export default LinkCard;
