import React, { useState, useEffect, useRef } from 'react';
import IconButton from '../IconButton';
import { DropDownProps } from '../../types';

function DropDown({ buttonIcon, buttonText = '', backgroundColor = 'white', children }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <IconButton handleClick={toggleDropdown}>
        {buttonIcon}
        {' '}
        {buttonText}
      </IconButton>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            width: 200,
            bottom: 50,
            backgroundColor,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default DropDown;
