import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 border-2 border-[rgb(0,_177,_74)] rounded-lg focus:outline-none w-full"
      />
    </>
  );
};

export default Input;
