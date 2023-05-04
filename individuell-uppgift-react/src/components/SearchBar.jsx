import React, { useState } from 'react'
import { searchState } from "../data/productsAtom";
import { useRecoilState } from 'recoil';

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useRecoilState(searchState);

	const handleChange = (event) => {
		setSearchTerm(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		onSearch(searchTerm)
	}

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit(e);
		}
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<input className="search-input-desktop"
				type="text"
				placeholder="Sök produkt..."
				value={searchTerm}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</form>
	)
}

export default SearchBar