import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import {base_url} from "../services/apiService";

const Product = ({ product, update }) => {
  const deleteProduct = (id) => {
    axios.delete(`${base_url}/${id}`).then(
      (response) => {
        update(id);
      },
      (error) => {}
    );
  };

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Card" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>{product.price}</ListGroupItem>
        <ListGroupItem>{product.category}</ListGroupItem>
        <ListGroupItem>{product.rating}</ListGroupItem>
      </ListGroup>
      <CardBody>
        <Button
          color="danger"
          onClick={() => {
            deleteProduct(product.id);
          }}
        >
          Delete
        </Button>
        <Button color="warning">Update</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
