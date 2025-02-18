import React from "react";

interface ButtonProps {
  text: string;
  type?: "submit" | undefined;
  background?: string;
  padding?: string;
  margin?: string;
  width?: string;
  imageSrc?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  imageSrc,
  background,
  padding,
  margin,
  width,
  onClick,
}) => {
  return (
    <>
      <button
        style={{
          background: background,
          padding: padding,
          margin: margin,
          width: width,
        }}
        className="ml-0 sm:ml-4 py-2 px-12 bg-[rgb(0,_177,_75)] rounded-lg text-white cursor-pointer hover:opacity-85"
        onClick={onClick}
        type={type}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            className="w-4.5 h-4.5 object-contain text-white"
          />
        ) : (
          text
        )}
      </button>
    </>
  );
};

export default Button;
