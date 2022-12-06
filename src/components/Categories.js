import React from 'react';
import { PropTypes } from 'prop-types';

const Categories = React.memo(function Categories({
  items,
  activeCategory,
  onClickCategory,
}) {
  // const [activeItem, setActiveItem] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          All
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`${item}_${index}`}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number(), null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};

export default Categories;
