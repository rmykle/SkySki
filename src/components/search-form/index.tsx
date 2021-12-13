/* eslint-disable no-unused-vars */

import { useState } from 'react';
import Button from '../button';
import Input from '../input';
import styles from './Searchform.module.scss';

interface SearchFormProps {
    readonly onSearch: (searchTerm: string) => void;
    readonly placeholder?: string;
    readonly queryValidator?: (term: string) => boolean;
}

const SearchForm = ({
    onSearch,
    placeholder,
    queryValidator = (term) => term.length > 0,
}: SearchFormProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const isValidQuery = queryValidator(searchTerm);

    const searchWrap = () => {
        if (isValidQuery) {
            onSearch(searchTerm);
        }
    };

    return (
        <form
            className={styles.searchForm}
            onSubmit={(e) => {
                e.preventDefault();
                searchWrap();
            }}>
            <Input value={searchTerm} onChange={setSearchTerm} placeholder={placeholder} />
            <Button disabled={!isValidQuery} type="submit">
                Søk
            </Button>
        </form>
    );
};

export default SearchForm;
