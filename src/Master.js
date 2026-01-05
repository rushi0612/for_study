import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";



function Master() {
    return(
        <div className="container-xxl bg-white p-0">
            
            <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style= {{width:30, height:30}}/>
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="./About" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="property-list.html" className="dropdown-item">Property List</Link>
                                <Link to="property-type.html" className="dropdown-item">Property Type</Link>
                                <Link to="property-agent.html" className="dropdown-item">Property Agent</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                <Link to="404.html" className="dropdown-item">404 Error</Link>
                            </div>
                        </div>
                        <Link to="./Contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</Link>
                </div>
            </nav>
        </div>
                <Outlet />

        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                            <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <Link className="btn btn-link text-white-50" to="">About Us</Link>
                        <Link className="btn btn-link text-white-50" to="">Contact Us</Link>
                        <Link className="btn btn-link text-white-50" to="">Our Services</Link>
                        <Link className="btn btn-link text-white-50" to="">Privacy Policy</Link>
                        <Link className="btn btn-link text-white-50" to="">Terms & Condition</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="#">Your Site Name</Link>, All Right Reserved. 
							
						 <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                            <br />
                            Distributed By <Link className="border-bottom" to="https://themewagon.com" target="_blank">ThemeWagon</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="">Home</Link>
                                <Link to="">Cookies</Link>
                                <Link to="">Help</Link>
                                <Link to="">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

       
    );
}
export default Master;