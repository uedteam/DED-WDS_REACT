import { useState } from 'react';
import { Button } from '../../element/button';
import { Input } from '../../element/input';
import SearchIcon from '@assets/search.svg?react';

interface SearchProps {
  onSearch: (query: string) => void;
  size?: 'small' | 'medium' | 'large';
  buttonLabel?: string;
  isDisabled?: boolean;
  className?: string;
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const { onSearch, buttonLabel = '搜尋', ...rest } = props;
  const [query, setQuery] = useState('');

  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  const handleButtonClick = () => {
    onSearch(query);
  };
  return (
    <div className="search">
      <Input
        onChange={handleInputChange}
        prefix={<SearchIcon></SearchIcon>}
        {...rest}
      />
      <Button variant="contained" onClick={handleButtonClick} {...rest}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Search;
