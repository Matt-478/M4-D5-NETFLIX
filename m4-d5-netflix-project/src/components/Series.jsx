import {Row, Dropdown, Col, Container, DropdownButton} from 'react-bootstrap'

const SeriesArea = () => {
  return(
    <>
    <Container fluid >
    <Row className="row py-0 ml-3">
      <Col sm={6} className="col-6 px-1">

        <div className="d-flex align-center mt-5">
          <h1 className="d-inline-block px-0 mr-5 text-light">Series</h1>
          <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Genres"
          className="mt-2 d-inline"
          style={{ verticalAlign: 10}}
          >
            <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sci-fi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
          </DropdownButton>
        </div>
      </Col>
    </Row>
    </Container>
  </>  
  )
}

export default SeriesArea