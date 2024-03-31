import { BrightnessLow } from 'react-bootstrap-icons';
import './navbar.css'

function Navbar() {
  return (
        <header className='app_header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <h2 className="header__h2">Where in the world!</h2>
                    </div>

                    <div className="header__right">
                        <button className="change__theme">
                        <BrightnessLow />
                        <span>Light Mode</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
  );
}

export default Navbar;