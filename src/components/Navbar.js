import { NavLink } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi'
import ThemeMode from './ThemeMode'

function Navbar() {
    const links = [
        { label: 'Home', path: '/' },
        // { label: "Blog", path: "/blog" },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ]
    const renderedNavbarLinks = links.map((link) => {
        return (
            <NavLink
                className="btn btn-ghost text-xl"
                to={link.path}
                key={link.label}
            >
                {link.label}
            </NavLink>
        )
    })

    const renderedDropdownMenuLinks = links.map((link) => {
        return (
            <li key={link.label}>
                <NavLink to={link.path}>{link.label}</NavLink>
            </li>
        )
    })

    return (
        <nav className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost text-xl lg:hidden"
                    >
                        <HiMenuAlt1 className="h-5 w-5" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral bg-opacity-80 rounded-box w-52"
                    >
                        {renderedDropdownMenuLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                {renderedNavbarLinks}
            </div>
            <div className="navbar-end">
                <ThemeMode className="btn btn-ghost" />
            </div>
        </nav>
    )
}

export default Navbar
