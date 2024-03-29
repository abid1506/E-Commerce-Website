import React, { useEffect, useState } from "react";
import SwiperSlider from "./components/SwiperSlider";
import { CiFilter } from "react-icons/ci";
import FilterComponent from "./components/FilterComponent";
import Hero from "./components/Hero";
import RenderProduct from "./components/renderProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    price: false,
    rating: false,
    discount: false,
  });
  const [showBrandCheckboxes, setShowBrandCheckboxes] = useState(false);
  const [showCategoryCheckboxes, setShowCategoryCheckboxes] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(8);
  

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        const uniqueBrands = [
          ...new Set(data.products.map((product) => product.brand)),
        ];
        const uniqueCategories = [
          ...new Set(data.products.map((product) => product.category)),
        ];

        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  const applyFiltersAndSort = (productsToSort) => {
    let filteredProducts = [...productsToSort];

    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    filteredProducts.sort((a, b) => {
      if (sortOptions.price) {
        return a.price - b.price;
      }
      if (sortOptions.rating) {
        return b.rating - a.rating;
      }
      if (sortOptions.discount) {
        return b.discountPercentage - a.discountPercentage;
      }
      return 0;
    });

    return filteredProducts;
  };

  const showMoreProducts = () => {
    setDisplayedProducts((prev) => prev + 8);
  };

  
  const showFilterBlock = () =>{
    document.getElementById("filterDemo").style.display = "block"
  }

  
  return (
    <>
      <Hero />
      <SwiperSlider />

      <div className="container">
        <div className="row">
          <FilterComponent
            brands={brands}
            categories={categories}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            sortOptions={sortOptions}
            showBrandCheckboxes={showBrandCheckboxes}
            showCategoryCheckboxes={showCategoryCheckboxes}
            searchQuery={searchQuery}
            setShowBrandCheckboxes={setShowBrandCheckboxes}
            setShowCategoryCheckboxes={setShowCategoryCheckboxes}
            setSearchQuery={setSearchQuery}
            setSelectedBrands={setSelectedBrands}
            setSelectedCategories={setSelectedCategories}
            setSortOptions={setSortOptions}
            products={products}
            setSearchResults={setSearchResults}
          
          />

          <div className="col-lg-9 ">
            <div className="row">
              <div className="fillterMb">
                <button
                  onClick={showFilterBlock}
                  className="btn btn-primary me-4"
                >
                  {" "}
                  <CiFilter /> Filter{" "}
                </button>
              </div>

              <RenderProduct
                products={products}
                searchResults={searchResults}
                displayedProducts={displayedProducts}
                applyFiltersAndSort={applyFiltersAndSort}
              />
            </div>
          </div>
        </div>

        {displayedProducts < products.length && (
          <div className="text-center">
            <button className="btn btn-secondary" onClick={showMoreProducts}>
              {" "}
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
