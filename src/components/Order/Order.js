import Accordion from "react-bootstrap/Accordion";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Order({ order }) {
  const orderList = order.map((orderItem) => (
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        {orderItem.name} 
        <Badge bg="secondary">
            ${orderItem.price}
        </Badge>
    </ListGroup.Item>
  ))
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
            Your Order 
            <Badge bg="danger">
                {order.length}
            </Badge>
        </Accordion.Header>
        <Accordion.Body>
        <ListGroup variant="flush">{orderList}</ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Order;
