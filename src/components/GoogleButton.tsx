import React from "react";

interface GoogleButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4 shadow-md hover:bg-gray-100 transition-colors max-w-xs cursor-pointer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        alt="Google logo"
        className=" h-5 mr-3"
      />
      <span className="text-gray-700 font-semibold">Sign in</span>
    </button>
  );
};

export default GoogleButton;
