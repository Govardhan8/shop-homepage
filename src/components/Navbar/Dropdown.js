import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from 'react'
import { Categories } from './Categories'

export const Dropdown = () => {
	const [shop, setShop] = useState(false)
	return (
		<div className='dropdown'>
			<p>Home</p>
			<p>About</p>
			<div
				className='shop'
				onClick={() => {
					setShop(!shop)
				}}
			>
				{' '}
				<p>
					Shop <ArrowDropDownIcon />
				</p>
				{shop && <Categories />}
			</div>

			<button>
				<ShoppingCartIcon fontSize='small' /> Cart <span>0</span>
			</button>
		</div>
	)
}
