'use client';
import React from 'react';
import IconButton from '../IconButton/IconButton';
import { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import styles from './SearchInput.module.css'

interface Props {
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch?: () => void;
}

const SearchInput = ({ onChange, placeholder, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onChange(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    } else {
      onChange(searchTerm);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        onKeyDown={handleKeyPress}
      />
      <IconButton
        icon={MagnifyingGlass}
        size={24}
        color="#85868B"
        variant="outlined"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
