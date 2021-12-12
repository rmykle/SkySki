import { useState } from 'react';
import Input from '../input';

interface SearchFormProps {
    // eslint-disable-next-line no-unused-vars
    readonly onSearch: (searchTerm: string) => void;
}

// eslint-disable-next-line no-unused-vars
const SearchForm = ({ onSearch }: SearchFormProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSearch(searchTerm);
            }}>
            <Input value={searchTerm} onChange={setSearchTerm} />
            <button type="submit">Søk</button>
        </form>
    );
};

export default SearchForm;
