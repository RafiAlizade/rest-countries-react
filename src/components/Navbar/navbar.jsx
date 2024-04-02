import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrightnessLow, Moon } from 'react-bootstrap-icons';
import './Navbar.css';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', darkMode);
    }, [darkMode]);

    const changeMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className='app_header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <Link to={'/'}><h1 className="header__h1">Where in the world!</h1></Link>
                    </div>
                    <div className="header__right">
                        <button className="header__right_change-mode" onClick={changeMode}>
                            {darkMode ? <Moon /> : <BrightnessLow />}
                            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;