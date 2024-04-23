import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <div className="n1">
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="text">
        <Container>
          <Row>
            <Col>
              <h1>Material Kit 2 React</h1>
              <h3>
                Free & Open Source Web UI Kit built over ReactJS & MUI. Join
                over 1.6 million developers around the world.
              </h3>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container-fluid">
        <div>
          <img className="hbg" src="images/hbg.jpg" alt="" />
        </div>
      </div>

      <div className="d2">
        <Container>
          <Row>
            <Col>
              <div className="d21">
                <h1 className="t1">70+</h1>
                <h3>Coded elements</h3>
                <p>
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </p>
              </div>
            </Col>
            <Col>
              <div className="d21">
                <h1 className="t1">15+</h1>
                <h3>Design Blocks</h3>
                <p>
                  Mix the sections, change the colors and unleash your
                  creativity
                </p>
              </div>
            </Col>
            <Col>
              <div className="d21">
                <h1 className="t1">4</h1>
                <h3>Pages</h3>
                <p>
                  Save 3-4 weeks of work when you use our pre-made pages for
                  your website
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="card bg-light" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <img src="images/i1.PNG" alt="" />
              <h3>Full Documentation</h3>
              <p>
                Built by developers for developers. Check the foundation and you
                will find everything inside our documentation.
              </p>
            </Col>
            <Col>
              <img src="images/i2.PNG" alt="" />
              <h3>MUI Ready</h3>
              <p>
                Built by developers for developers. Check the foundation and you
                will find everything inside our documentation.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <img src="images/i3.PNG" alt="" />
              <h3>Full Documentation</h3>
              <p>
                Built by developers for developers. Check the foundation and you
                will find everything inside our documentation.
              </p>
            </Col>
            <Col>
              <img src="images/i4.PNG" alt="" />
              <h3>Full Documentation</h3>
              <p>
                Built by developers for developers. Check the foundation and you
                will find everything inside our documentation.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="IC">
          <h2>Infinite combinations</h2>
          <h1>Huge collection of sections</h1>
          <p>
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </p>
        </div>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h1>Design Blocks</h1>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h1>Navigation</h1>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h1>Input Areas</h1>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h1>Attention Catchers</h1>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1>Elements</h1>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
          </Row>
        </Container>

        <div className="IC">
          <h2>BOOST CREATIVITY</h2>
          <h1>With our coded pages</h1>
          <p>
            The easiest way to get started is to use one of our pre-built
            example pages.
          </p>
        </div>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <h1>
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </h1>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <div className="MuiBox-root css-cmupyc">
                <img
                  className="MuiBox-root css-h8f6pa"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                  alt="Page Headers"
                />
              </div>
              <p>Page headers</p>
            </Col>
            <Col>
              <p>
                These is just a small selection of the multiple possibitilies
                you have. Focus on the business, not on the design.
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <div className="dg4">
          <div className="MuiContainer-root MuiContainer-maxWidthLg css-1uc9k28">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-undefined MuiGrid-grid-xs-12 MuiGrid-grid-lg-6 css-zic9gs">
              <h4 className="MuiTypography-root MuiTypography-h4 css-1n9rs3c">
                Built by developers
              </h4>
              <h1 className="MuiTypography-root MuiTypography-h1 css-rdtpdd">
                Complex Documentation
              </h1>
              <p className="MuiTypography-root MuiTypography-body1 css-1d54r03">
                From colors, cards, typography to complex elements, you will
                find the full documentation. <br /> Play with the utility
                classes and you will create unlimited combinations for our
                components.
              </p>
              <a
                className="MuiTypography-root MuiTypography-body2 css-16z2w18"
                href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
                target="_blank"
                rel="noreferrer"
              >
                Read docs{" "}
                <span
                  className="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-kyh2wa"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card bg-light" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card bg-light" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <div className="IC">
          <h2>Trusted by over</h2>
          <h1>1,679,477+ web developers</h1>
          <p>
            Many Fortune 500 companies, startups, universities and governmental
            institutions love Creative Tim's products.
          </p>
        </div>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <div className="card bg-light" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card bg-light" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <img src="images/apple.PNG" alt="" />
            </Col>

            <Col>
              <img src="images/fb.PNG" alt="" />
            </Col>
            <Col>
              <img src="images/nasa.PNG" alt="" />
            </Col>
            <Col>
              <img src="images/vi.PNG" alt="" />
            </Col>
            <Col>
              <img src="images/do.PNG" alt="" />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <div className="MuiBox-root css-1r2tepl">
          <img
            className="MuiBox-root css-178ncif"
            src="images/hbg.jpg"
            alt="pattern-lines"
          />
          <div className="MuiContainer-root MuiContainer-maxWidthLg css-s995sb">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-undefined MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-v0vfoo">
              <h3 className="MuiTypography-root MuiTypography-h3 css-hgbapb">
                Do you love this awesome
              </h3>
              <h3 className="MuiTypography-root MuiTypography-h3 css-1qlfg28">
                UI Kit for ReactJS &amp; MUI?
              </h3>
              <p className="MuiTypography-root MuiTypography-body2 css-3rwhps">
                Cause if you do, it can be yours for FREE. Hit the button below
                to navigate to Creative Tim where you can find the Design System
                in HTML. Start a new project or give an old Bootstrap project a
                new look!
              </p>
              <a
                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root css-hkcyid"
                tabIndex={0}
                href="https://www.creative-tim.com/product/material-kit-react"
              >
                Download Now
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h1>Thank you for your support</h1>
              <p>We deliver the best web products</p>
            </Col>

            <Col>
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-5 css-xl4z8p">
                <a
                  className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-36z9b9"
                  tabIndex={0}
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                >
                  <i className="fab fa-twitter" aria-hidden="true" />
                  &nbsp;Tweet
                  <span className="MuiTouchRipple-root css-w0pj6f" />
                </a>
                <a
                  className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-i67u29"
                  tabIndex={0}
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                >
                  <i className="fab fa-facebook" aria-hidden="true" />
                  &nbsp;Share
                  <span className="MuiTouchRipple-root css-w0pj6f" />
                </a>
                <a
                  className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1yoxszh"
                  tabIndex={0}
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                >
                  <i className="fab fa-pinterest" aria-hidden="true" />
                  &nbsp;Pin it
                  <span className="MuiTouchRipple-root css-w0pj6f" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
