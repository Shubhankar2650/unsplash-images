import { useGlobalContext } from "./context"
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    console.log(isDarkTheme);

    return (
        <div className="toggle-container">
            <button className="dark-toggle" onClick={() => toggleDarkTheme()}>
                {
                    isDarkTheme ? <FaMoon className="toggle-icon" /> : <FaSun className="toggle-icon" />
                }
            </button>
        </div>
    )
}
export default ThemeToggle