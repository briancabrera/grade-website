import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ className = '', children, onValueChange, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <select
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5D4FB7] focus:border-[#5D4FB7] ${className}`}
      onChange={handleChange}
      {...props}
    >
      {children}
    </select>
  )
}

export const SelectContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <>{children}</>
}

export const SelectItem: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>> = ({ children, ...props }) => {
  return <option {...props}>{children}</option>
}

export const SelectTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({ children, placeholder, ...props }) => {
  return <span {...props}>{children || placeholder}</span>
}