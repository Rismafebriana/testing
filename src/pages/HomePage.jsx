import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

function HomePage() {
  return (
    <>
        <Card bg="light" key="light"
          style={{ width: '18rem', margin: '10rem' }}
          className="mb-2"
        >
          <Card.Header>Testing</Card.Header>
          <Card.Body>
            <Card.Title>why do we need test ?</Card.Title>
            <Card.Text>
              To guarentee our code quality. And to show the people that we
              also care about it and wish to give something that already proven,
              at least by ourself.
            </Card.Text>
            <Link to="/posts" >
              <Button variant="primary" id="button">Post List</Button>
            </Link>
          </Card.Body>
        </Card>
    </>
  );
}

export default HomePage;