import React from "react";

interface InputProps {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  onKeyDown,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className="p-3 border-2 border-[rgb(0,_177,_74)] rounded-lg focus:outline-none w-full"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default Input;
