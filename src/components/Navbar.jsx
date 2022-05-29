import { useContext } from "react"
import { ThemeContext } from "../Context/Theme"
import "./Navbar.css"


export const Navbar=()=>{
    const{theme,changetheme}=useContext(ThemeContext)
    return (
        <div className={theme=="light"?" navcont lightcont":" navcont darkcont"}>
            <div>Themee page</div>
            <div className="list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="btn" >
                <button className={theme=="light"?" btn lightbtn":" btn darkbtn"} onClick={changetheme} >{theme=="light"?"Dark theme":"light theme"}</button>
            </div>
        </div>
    )
}