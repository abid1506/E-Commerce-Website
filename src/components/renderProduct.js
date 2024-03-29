import React from 'react';
import { RiStarSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const RenderProducts = ({ noResults, searchResults, applyFiltersAndSort, products, displayedProducts }) => {
  const productsToRender = noResults
    ? []
    : searchResults.length > 0
    ? applyFiltersAndSort(searchResults)
    : applyFiltersAndSort(products);

  return (
    <div className="row">
      {productsToRender.slice(0, displayedProducts).map((item) => (
        <section className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 product-section mb-3" key={item.id} >

          <div className="product_list product-cart mt-3">
            
          <Link
                to={`/shop/${item.id}/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
            <div className="imgholder text-center">
              <img
                className="img-fluid"
                src={item.images[0]}
                alt={item.title}
              />
            </div>
            </Link>
            <span>{item.category}</span>

            <div className="title mt-2">
              {' '}
              <Link
                to={`/shop/${item.id}/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {item.title}
              </Link>{' '}
            </div>

            <div className="stars">
              {item.rating}
              <RiStarSLine />
            </div>

            <h4 className="price">${item.price}</h4>
          </div>

        </section>
      ))}
    </div>
  );
};

export default RenderProducts;
