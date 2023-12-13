import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder? : string;
}

const InputField: React.FC<InputFieldProps> = ({ name, type, placeholder}) => {
  return (
    <div>
      <label>
        {""}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`px-4 border w-full sm:w-[423px] h-[75px] sm:h-[75px] rounded-xl text-2xl outline-none my-2 sm:my-4`}
        />
      </label>
    </div>
  );
};

export default InputField;
