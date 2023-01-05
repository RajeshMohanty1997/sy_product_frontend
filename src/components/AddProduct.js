import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
  Container,
} from "reactstrap";

import { base_url } from "../services/apiService";

const AddProduct = ({ setRefresh }) => {
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    ratingSelect: "",
    categorySelect: "",
    productText: "",
  });

  useEffect(() => {
    document.title = "Add Product";
  }, []);

  //Form handler function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(product);
    // postDatatoServer(product);
    // setRefresh(true);
  };

  //take input
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  //Creating function to post dataon server
  const postDatatoServer = (data) => {
    axios.post(base_url, data).then((response) => {
      console.log(response);
      console.log("Success");
    });
  };

  return (
    <Fragment>
      <h1 className="text-centre my-3">Fill Product Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup row>
          <Label for="productName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="productName"
              name="name"
              type="text"
              value={product.productName}
              onChange={(e) => {
                setProduct({ ...product, productName: e.target.value });
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="productPrice" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              id="productPrice"
              name="price"
              type="number"
              value={product.productPrice}
              onChange={(e) => {
                setProduct({ ...product, productPrice: e.target.value });
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="ratingSelect" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <select id="ratingSelect" name="rating">
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              onChange={handleInputChange}
            </select>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="categorySelect" sm={2}>
            Category
          </Label>
          <Col sm={10}>
            <select id="categorySelect" name="category">
              <option>Books</option>
              <option>Cloths</option>
              <option>Grocery</option>
              <option>Electronics</option>
              <option>Sports</option>
              onChange={handleInputChange}
            </select>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="productText" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              id="productText"
              name="description"
              type="textarea"
              value={product.productText}
              onChange={(e) => {
                setProduct({ ...product, productText: e.target.value });
              }}
            />
          </Col>
        </FormGroup>
        <Container className="text-center ">
          <Button type="submit" mr={2} color="success">
            Add Product
          </Button>
          <Button type="reset" color="warning">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddProduct;
