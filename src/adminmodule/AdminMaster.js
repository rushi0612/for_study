import { Link, NavLink, Outlet } from "react-router-dom";
import "./assets/css/templatemo-plot-listing.css";


function AdminMaster() {
    return (
        <>
              

           <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <Link to="index.html" className="logo">
                    </Link>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="category.html">Category</Link></li>
                    <li><Link to="listing.html">Listing</Link></li>
                    <li><Link to="contact.html">Contact Us</Link></li> 
                    <li><div className="main-white-button"><Link to="#"><i className="fa fa-plus"></i> Add Your Listing</Link></div></li> 
                    </ul>        
                    <Link className='menu-trigger'>
                        <span>Menu</span>
                    </Link>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
                </div>

            </div>
            </div>
        </header>

        <div className="main-banner">
  </div>

<footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="about">
            <div className="logo">
              <img src="/assets/images/black-logo.png" alt="Plot Listing" />
            </div>
            <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="helpful-links">
            <h4>Helpful Links</h4>
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Listing</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Awards</a></li>
                  <li><a href="#">Useful Sites</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-us">
            <h4>Contact Us</h4>
            <p>27th Street of New Town, Digital Villa</p>
            <div className="row">
              <div className="col-lg-6">
                <a href="#">010-020-0340</a>
              </div>
              <div className="col-lg-6">
                <a href="#">090-080-0760</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="sub-footer">
            <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
            <br/>
			Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>


        </>
    );
}

export default AdminMaster;
