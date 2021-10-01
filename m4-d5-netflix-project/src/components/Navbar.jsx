import {Navbar, Dropdown, Container} from 'react-bootstrap'

const NavbarComponent = (props) => {
  return(
    <>
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-nav">
      <div className="container-fluid" style={{display:"flex"}}>
        <div className="d-inline-block px-2 py-2"  style={{display:"inline-block"}}>

        <Container>
         <Navbar.Brand href="#home">
           <img
             src="./"
             width="30"
             height="30"
             className="d-inline-block align-top"
           />
         </Navbar.Brand>
        </Container>


        </div>
        <div
          className="collapse navbar-collapse d-none d-lg-block big-left"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Series
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Films
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New &amp; Popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="search expandright"
              id="searchright"
              type="search"
              name="q"
              placeholder="Search"
            />
            <label className="button searchbutton px-3" htmlFor="searchright">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                fill="white"
                className="my-2 my-sm-0 mr-sm-2"
                aria-label="Search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </label>
          </form>
          <div className="btn-group">
            <p className="px-3 pt-3 d-inline-block text-white">KIDS</p>
 


            <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                className="rounded"
                width={35}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
               <Dropdown.Item href="#/action-1" active>Home</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Series</Dropdown.Item>
               <Dropdown.Item href="#/action-3">New Popular</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <ul className="navbar-nav d-lg-none d-block d-lg-none">
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Browse
            </a>


            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Home
              </a>
              <a className="dropdown-item" href="#">
                Series
              </a>
              <div className="dropdown-item">Films</div>
              <a className="dropdown-item" href="#">
                New &amp; Popular
              </a>
              <a className="dropdown-item" href="#">
                My List
              </a>
            </div>


          </li>
        </ul>
      </div>
    </Navbar>
  </>
  
  )
}

export default  NavbarComponent
