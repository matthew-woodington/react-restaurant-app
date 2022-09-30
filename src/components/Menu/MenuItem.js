import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MenuItem({ item, ...props }) {
  return (
    <li>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          ${item.price}{" "}
          <Button variant="secondary" type="button" onClick={() => props.updateOrder(item.id)}>
            Add to Order
          </Button>
        </Card.Footer>
      </Card>
    </li>
  );
}

export default MenuItem;
