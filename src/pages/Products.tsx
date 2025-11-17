import React, { useEffect, useState } from "react";
import { Product, ProductService } from "../api/productsService";
import ProductCard from "./ProductCard";
import "../styles/Product.css";
import { FaFilter } from "react-icons/fa";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [tempSelectedCategories, setTempSelectedCategories] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    ProductService.getProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filter products based on search and selected categories
  const applyFilters = () => {
    let filtered = products;

    if (tempSelectedCategories.length > 0) {
      filtered = filtered.filter((p) => tempSelectedCategories.includes(p.category));
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSelectedCategories(tempSelectedCategories);
    setFilteredProducts(filtered);
    setShowFilter(false);
  };

  const handleCheckboxChange = (category: string) => {
    setTempSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <div className="products-container" style={{ background: "none" }}>
      <h1 className="products-title">Our Products</h1>

      {/* Search & Filter */}
      <div className="products-controls enhanced">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search products"
        />

        <div className="filter-wrapper">
          <button
            className="filter-btn"
            onClick={() => setShowFilter((prev) => !prev)}
            aria-label="Filter products"
          >
            <FaFilter />
          </button>

          {showFilter && (
            <div className="filter-dropdown">
              {categories.map((cat) => (
                <label key={cat} className="filter-option">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={tempSelectedCategories.includes(cat)}
                    onChange={() => handleCheckboxChange(cat)}
                  />
                  <span className="filter-label">{cat}</span>
                </label>
              ))}

              <button className="apply-btn" onClick={applyFilters}>
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="no-results">No products found.</div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
