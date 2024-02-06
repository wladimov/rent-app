import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={`
            flex justify-between fixed w-full px-8
            [&>ul]:flex [&>ul]:gap-4
        `}>
            <ul>
                <li> <NavLink to='/'>Rent</NavLink></li>
                <li> <NavLink to='/login'>Log in</NavLink></li>
            </ul>
            <ul>
                <li> <NavLink to='/'>Rent</NavLink></li>
                <li> <NavLink to='/login'>Log in</NavLink></li>
            </ul>
        </nav>
    ) 
}

export default Navbar