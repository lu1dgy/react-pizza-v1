import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components/index';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['All', 'Meat', 'Vegeterian', 'Grill', 'Hot', 'Calcone'];
const sortItems = [
  { name: 'popular', type: 'popular' },
  { name: 'price', type: 'name' },
  { name: 'abc', type: 'abc' },
];
function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = (index) => dispatch(setCategory(index));

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />

        <SortPopup items={sortItems} />
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
