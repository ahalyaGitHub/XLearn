const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./src/images/xlearnLogo.png" alt="learn Logo" width="100" height="50" className="d-inline-block align-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item me-5">
                <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link fw-bold" href="#">Learn</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Nav;