import { useState } from 'react';
import { Button } from '../../element/button';
import { Input } from '../../element/input';
import { SearchIcon, CloseIcon } from '../../../assets';

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

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleCloseClick = () => {
    setQuery('');
  };

  return (
    <div className="search">
      <Input
        value={query}
        onChange={handleInputChange}
        prefix={<SearchIcon></SearchIcon>}
        suffix={
          query && (
            <Button variant="text" onClick={handleCloseClick}>
              <CloseIcon className="search-icon"></CloseIcon>
            </Button>
          )
        }
        {...rest}
      />
      <Button variant="contained" onClick={handleSearchClick} {...rest}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Search;
