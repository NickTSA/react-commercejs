import React from "react";
import { Card, Button } from "react-bootstrap";
import { Bones } from "react-bones/lib";
import { handleAddToCart } from "../lib/commerce";

export default function ProductCard({ product }) {
  if (!product) {
    return (
      <div>
        <Bones width={280} height={400} />
        <div style={{ padding: 10 }} />
        <Bones width={280} height={20} borderRadius={10} />
        <div style={{ padding: 10 }} />
        <Bones width={280} height={20} borderRadius={10} />
        <div style={{ padding: 10 }} />
        <Bones width={280} height={20} borderRadius={10} />
        <div style={{ padding: 10 }} />
      </div>
    );
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.media.source} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description.replace(/(<([^>]+)>)/gi, "")}
        </Card.Text>
        <Card.Text>{product.price.formatted_with_symbol}</Card.Text>
        <Button href={product.checkout_url.checkout} variant="success">
          Buy Now
        </Button>
        <Button
          className="ml-2"
          onClick={() => handleAddToCart(product.id)}
          variant="primary"
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
