import { Link } from "react-router-dom"

function Header(){
    return (
        <div>
            <header className="container-fluid">
                <div className="col-md-3">
                    <h1>Welcome</h1>
                </div>
                <div className="col-md-9">
                    <ul className="nav bg">
                    <li className="nav-item"><Link  className="nav-link , text-white" to="/" >  Home</Link> </li>
                    <li className="nav-item"><Link className="nav-link , text-white" to="/about">  About</Link> </li>
                    <li className="nav-item"><Link className="nav-link , text-white" to="/contact">  Contact</Link> </li>
                    <li className="nav-item"><Link className="nav-link , text-white" to="/services">  Services</Link> </li>
                    <li className="nav-item"><Link className="nav-link , text-white" to="/gallery">  Gallery</Link> </li>
                </ul>
                </div>
                
                <div className="clerfloat"></div>
            </header>
        </div>
    )
}
export default Header