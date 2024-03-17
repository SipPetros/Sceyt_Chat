import React, { useState, useEffect, useRef } from 'react';
import IconButton from '../IconButton';
import { DropDownProps } from '../../../features/InputContainer/types';
import styles from './DropDown.module.scss';

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
    <div ref={dropdownRef} className={styles.DropDownCont}>
      <IconButton handleClick={toggleDropdown}>
        {buttonIcon}
        {buttonText}
      </IconButton>
      {isOpen && (
        <div
          style={{
            backgroundColor,
          }}
          className={styles.ChildrenCont}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default DropDown;
