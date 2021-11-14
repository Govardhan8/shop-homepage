import MenuIcon from '@mui/icons-material/Menu'
import './navbar.css'
import { useState } from 'react'
import { Dropdown } from './Dropdown'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<>
			<nav className='navbar'>
				<header>Let's Shop</header>
				<div className='menuList'>
					<Dropdown />
				</div>
				<button
					className='menuIcon'
					onClick={() => {
						setShowMenu(!showMenu)
						console.log(showMenu)
					}}
				>
					<MenuIcon sx={{ color: 'slategray', fontSize: 40 }} />
				</button>
			</nav>
			{showMenu && <Dropdown />}
		</>
	)
}

export default Navbar
