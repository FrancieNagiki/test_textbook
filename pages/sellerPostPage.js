import useSWR from "swr";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { fetch } from "../utils/fetch";
import Layout from "../components/Layout";
import { requiredAuth } from "../utils/ssr";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
/*function RandomDog() {
  const { data } = useSWR("/api/data", fetch, {
    // By default, useSWR will call the endpoint we specified (in this case, /api/dog) every time we click away from
    // the page. This can be really useful if we want to make sure the web app is always showing the latest data,
    // but in this case, we don't need that behavior. See what happens if you set these options to true or remove them!
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (!data) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <p>We need book data here!</p>
    </div>
  );
}
*/
export const getServerSideProps = requiredAuth;

function DogPage(props) {
  const user = props.user;

  return (
    <Layout user={user}>
      <p>We need book data here </p>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="First Name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="Name" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="Last Name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Name" placeholder="Last Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="ISBN ">
            <Form.Label>ISBN:</Form.Label>
            <Form.Control placeholder="ISBN" />
          </Form.Group>

          <Form.Group as={Col} controlId="Selling Price">
            <Form.Label>Selling Price$ </Form.Label>
            <Form.Control placeholder="$" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Class code">
            <Form.Label>Class Code</Form.Label>
            <Form.Control type="Name" placeholder="Professor Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="Profssor Name">
            <Form.Label>Professor Name</Form.Label>
            <Form.Control type="Name" placeholder="Professor Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="Year you took this class">
            <Form.Label>Year you took this class</Form.Label>
            <Form.Control type="Year" placeholder="Year you took this class" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Phone Number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="Area you live">
            <Form.Label>Area you live</Form.Label>
            <Form.Control as="select" value="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button variant="secondary">Delete</Button>{" "}
    </Layout>
  );
}

export default DogPage;
