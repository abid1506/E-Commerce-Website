// FilterComponent.js
import React from "react";

function FilterComponent({
  brands,
  categories,
  selectedBrands,
  selectedCategories,
  sortOptions,
  showBrandCheckboxes,
  showCategoryCheckboxes,
  searchQuery,
  setShowBrandCheckboxes,
  setShowCategoryCheckboxes,
  setSearchQuery,setSelectedBrands,setSelectedCategories,setSortOptions,
  products,setSearchResults,
}) {


  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) => {
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((selectedBrand) => selectedBrand !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter(
            (selectedCategory) => selectedCategory !== category
          )
        : [...prevCategories, category]
    );
  };

  const handleSortChange = (option) => {
    setSortOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filteredProducts = products.filter((product) => {
      const brandMatches = product.brand.toLowerCase().includes(query);
      const categoryMatches = product.category.toLowerCase().includes(query);
      const titleMatches = product.title.toLowerCase().includes(query);
      return brandMatches || categoryMatches || titleMatches;
    });

    setSearchResults(filteredProducts);
    setSelectedBrands([]);
    setSelectedCategories([]);
  };


  const renderBrandCheckboxes = () => {
    const brandsToRender = showBrandCheckboxes ? brands : brands.slice(0, 4);

    return (
      <div>
        <h6>Select Brands:</h6>
        {brandsToRender.map((brand, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`brandCheckbox${index}`}
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <label htmlFor={`brandCheckbox${index}`}>{brand}</label>
          </div>
        ))}
        {brands.length > 4 && (
          <div onClick={() => setShowBrandCheckboxes(!showBrandCheckboxes)}>
            {showBrandCheckboxes ? "Show Less -" : "Show More +"}
          </div>
        )}
      </div>
    );
  };

  const renderCategoryCheckboxes = () => {
    const categoriesToRender = showCategoryCheckboxes
      ? categories
      : categories.slice(0, 4);

    return (
      <div className="mt-3">
        <h6>Select Categories:</h6>
        {categoriesToRender.map((category, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`categoryCheckbox${index}`}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={`categoryCheckbox${index}`}>{category}</label>
          </div>
        ))}
        {categories.length > 4 && (
          <div onClick={() => setShowCategoryCheckboxes(!showCategoryCheckboxes)}>
            {showCategoryCheckboxes ? "Show Less -" : "Show More +"}
          </div>
        )}
      </div>
    );
  };

  const hidefilterBlock = () => {
    document.getElementById("filterDemo").style.display = "none";
  };

  return (
    <>


    <div id="filterDemo" className="col-lg-3 filterBlock">
      <div style={{ paddingBottom: "500px" }} className="sticky-top">
        <div>
          <div style={{ width: "70%", float: "left" }}>
            {renderBrandCheckboxes()}
            {renderCategoryCheckboxes()}

            <h6 className="mt-3">Sort By:</h6>

            <div>
              <input
                type="checkbox"
                id="priceCheckbox"
                checked={sortOptions.price}
                onChange={() => handleSortChange("price")}
              />
              <label htmlFor="priceCheckbox">Price</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="ratingCheckbox"
                checked={sortOptions.rating}
                onChange={() => handleSortChange("rating")}
              />
              <label htmlFor="ratingCheckbox">Rating</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="discountCheckbox"
                checked={sortOptions.discount}
                onChange={() => handleSortChange("discount")}
              />
              <label htmlFor="discountCheckbox">Discount Percentage</label>
            </div>

            <div>

              <input
                type="text"
                id="product"
                placeholder="Search for product or brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
              
            </div>
          </div>

          <div className="fillterMb">
            <button
              onClick={hidefilterBlock}
              className="btn btn-primary me-4"
            >
              DONE
            </button>
          </div>
          
        </div>
      </div>
    </div>


</>
    
  );
}

export default FilterComponent;
