import Accordion from "react-bootstrap/Accordion";

function Order({ order }) {
  const orderList = order.map((orderItem) => (
    <li key={orderItem.id}>
        <p>{orderItem.name}</p>
    </li>
  ))
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Your Order <span>{order.length}</span></Accordion.Header>
        <Accordion.Body>
            <ul>{orderList}</ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Order;
