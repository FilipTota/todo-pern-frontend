import React from "react";

interface ButtonProps {
  text: string;
  background?: string;
  padding?: string;
  margin?: string;
  imageSrc?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  imageSrc,
  background,
  padding,
  margin,
}) => {
  return (
    <>
      <button
        style={{
          background: background,
          padding: padding,
          margin: margin,
        }}
        className="py-2 px-12 bg-[rgb(0,_177,_75)] rounded-lg text-white cursor-pointer ml-4"
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
