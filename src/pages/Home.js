import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components/index';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['All', 'Meat', 'Vegeterian', 'Grill', 'Hot', 'Calcone']}
        />
        <SortPopup
          items={[
            { name: 'popular', type: 'popular' },
            { name: 'price', type: 'name' },
            { name: 'abc', type: 'abc' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
