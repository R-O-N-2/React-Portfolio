import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="nav-links">
           
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT ME</Link>
            <Link to="/Projects">PROJECTS</Link>
            <Link to="https://docs.google.com/document/d/1pZ93GhmAp5H9ehlmNsn64XOboGeOIDlFU-bLJrsaU6M/edit?usp=sharing" target="_blank">RESUMÉ</Link>
            <Link to="/Contact">CONTACT ME</Link>

        </div>
    )
}