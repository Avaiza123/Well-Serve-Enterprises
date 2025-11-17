import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, ProductService } from "../api/productsService";
import "../styles/ProductDetail.css";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      ProductService.getProducts()
        .then((products) => {
          const foundProduct = products.find((p) => p.id === id);
          if (foundProduct) setProduct(foundProduct);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!product) return <h2 className="loading">Product not found</h2>;

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-img-box">
          <img src={product.imageUrl} alt={product.name} />
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <h2>Rs {product.price.toFixed(2)}</h2>
          <p className="detail-category">{product.category}</p>

          <p className="detail-description">{product.description}</p>

          <button className="detail-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
