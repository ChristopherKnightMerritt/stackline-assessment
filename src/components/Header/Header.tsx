import logoSVG from '../../stackline_logo.svg'
import './Header.css'
const Header = () => {

    return (
        <div className="header"><img className="header-logo" src={logoSVG} alt="stackline logo"></img></div>
    )
}

export default Header;