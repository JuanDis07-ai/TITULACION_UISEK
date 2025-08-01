import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  leftImage = null,
  rightImage = null,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e?.target?.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'w-full font-geist text-sm font-medium leading-[19px] text-global-1 bg-global-3 border border-[#e4e4e7] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';
  
  const disabledClasses = disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : '';
  
  const inputClasses = `${baseClasses} ${disabledClasses} ${className}`?.trim();

  return (
    <div className="relative w-full">
      {leftImage && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src={leftImage?.src} 
            alt="Left icon" 
            className={`w-[${leftImage?.width}px] h-[${leftImage?.height}px]`}
          />
        </div>
      )}
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${inputClasses} ${leftImage ? 'pl-[36px]' : 'pl-3'} ${rightImage ? 'pr-10' : 'pr-3'} py-[6px]`}
        {...props}
      />
      {rightImage && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <img 
            src={rightImage?.src} 
            alt="Right icon" 
            className={`w-[${rightImage?.width}px] h-[${rightImage?.height}px]`}
          />
        </div>
      )}
    </div>
  );
};

EditText.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  type: PropTypes?.string,
  disabled: PropTypes?.bool,
  leftImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number,
  }),
  rightImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number,
    height: PropTypes?.number,
  }),
  className: PropTypes?.string,
};

export default EditText;