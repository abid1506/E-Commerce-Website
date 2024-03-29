import React from 'react'

export default function SearchRes({ searchQuery, products, setSearchResults, setSelectedBrands, setSelectedCategories, setSearchQuery }) {

  

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

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for product or brand"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  )
}
