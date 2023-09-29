import '../App.css';
import sun from "../img/sun.svg"
import moon from "../img/moon.svg"
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
type PropsType = {}

export const Header = ({ }: PropsType) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [menu, setMenu] = useState(false)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    useEffect(() => {
        if (menu) {
            document.body.classList.add("lock")
        } else {
            document.body.classList.remove("lock")
        }
    }, [menu])

    return (
        <header className='header bg-zinc-950 py-6'>
            <div className='container flex justify-between items-center'>
                <div className='logo mr-3 font-bold text-2xl text-slate-50'>MyPortfolio</div>
                <nav className={`nav ${menu ? "active" : ""} flex justify-between text-slate-50 dark:bg-zinc-900`}>
                    <NavLink onClick={() => setMenu(false)} to='home' className='nav-link dark:text-slate-50'>Home</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='projects' className='nav-link dark:text-slate-50'>Projects</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='contacts' className='nav-link dark:text-slate-50'>Contacts</NavLink>
                    <button onClick={changeMode} className={`dark-mode-btn ${darkMode ? "active" : ""}`}>
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>
                </nav>
                <div className={`burger-menu ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
        </header>
    );
}