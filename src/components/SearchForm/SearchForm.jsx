import { useState } from 'react';
import { SearchFormInput, SearchFormButtonLabel, SearchFormButton, SearchForm } from './SearchForm.styled';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {

    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.currentTarget.value.toLowerCase());
        };

    const handleSubmit = e => {
        e.preventDefault();

        if (value.trim() === '') {
           Notiflix.Notify.failure('No search word entered!');
            return;
        }
        onSubmit(value);
        setValue('');

        e.target.reset();
    };


    return (
        <SearchForm className="SearchForm" onSubmit={handleSubmit}>
            <SearchFormButton type="submit" className="SearchForm-button">
                {<SearchFormButtonLabel className="SearchForm-button-label">Search</SearchFormButtonLabel>}
            </SearchFormButton>
            <SearchFormInput
                name="searchValue"
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={onChange}
            />
        </SearchForm>
)};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
