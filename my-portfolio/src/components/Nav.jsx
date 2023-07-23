import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="nav-links">
           
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT ME</Link>
            <Link to="/Projects">PROJECTS</Link>
            <Link to="https://drive.google.com/file/d/1jPhyX_ATJ-0bPWRawRKtTHZMO_WJ00Un/view?usp=sharing" target="_blank">RESUMÉ</Link>
            <Link to="/Contact">CONTACT ME</Link>

        </div>
    )
}