import Card from "react-bootstrap/Card";

function MenuItem({ item }) {
  return (
    <li>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>${item.price}</Card.Footer>
      </Card>
    </li>
  );
}

export default MenuItem;
