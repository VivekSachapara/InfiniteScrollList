import "../../styles/style.css";
import { useNavigate } from 'react-router-dom';

/**
 * Header functional component to 
 * @returns HTML Element
 */
function Header () {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login")
    }
    return (
        <div className="logoutWrapper">
            <button className="logout" onClick={() => handleLogout()}>
                Logout
            </button>
        </div>
    )
}

export default Header;