import React from "react";
import { Product, ProductService } from "../api/productsService";
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-img-box">
        <img src={product.imageUrl} alt={product.name} className="product-img" />
      </div>

      <h3 className="product-title">{product.name}</h3>

      <p className="product-price">Rs {product.price.toFixed(2)}</p>

      <button className="product-btn">View Details</button>
    </Link>
  );
};

export default ProductCard;
