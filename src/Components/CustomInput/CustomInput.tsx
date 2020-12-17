import React from "react";

type CustomInputProps = {
  type: string;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  onChange,
}: CustomInputProps) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onChange} />;
    </div>
  );
};

export default CustomInput;
