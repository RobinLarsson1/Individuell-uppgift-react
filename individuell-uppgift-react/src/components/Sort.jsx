import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import './styling/sort.css'
import { productState } from "../data/productsAtom";
import { useRecoilState } from 'recoil';

const Sort = () => {
	const [sortOrder, setSortOrder] = useState('asc')
	const [showOptions, setShowOptions] = useState(false)
	const [products, setProducts] = useRecoilState(productState);

	const toggleOptions = () => {
		setShowOptions(!showOptions)
	}

	const handleSort = (order) => {
		setSortOrder(order);
		let sortedProducts = [...products]; // Skapar en kopia av produkter för att inte ändra den ursprungliga listan

		switch (order) {
			case 'default':
				sortedProducts = [...products]
			case 'asc':
				sortedProducts.sort((a, b) => a.price - b.price);
				break;
			case 'desc':
				sortedProducts.sort((a, b) => b.price - a.price);
				break;
			case 'az':
				sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case 'za':
				sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
				break;
		}

		setProducts(sortedProducts);
	};

	return (
		<div className="sort-container">
			<button className='sort-button' onClick={toggleOptions}>Sort: {sortOrder === 'default'
				? 'Nyast'
				: sortOrder === 'asc'
					? 'Price Low to High'
					: sortOrder === 'desc'
						? 'Price High to Low'
						: sortOrder === 'az'
							? 'A to Ö'
							: sortOrder === 'za'
								? 'Ö to A'
								: 'Default Value'} {showOptions ? <RiArrowUpSLine className='sort-icon' /> : <RiArrowDownSLine className='sort-icon' />}
			</button>
			{showOptions && (
				<ul className='sort-options'>
					<li onClick={() => handleSort('asc')} className='sort-li'>Price Low to High</li>
					<li onClick={() => handleSort('desc')} className='sort-li'>Price High to Low</li>
					<li onClick={() => handleSort('az')} className='sort-li'>A - Ö</li>
					<li onClick={() => handleSort('za')} className='sort-li'>Ö - A</li>
					<li onClick={() => handleSort('default')} className='sort-li'>Nyast</li>
				</ul>
			)}
		</div>
	);
};

export default Sort;