import { useState } from 'react';

export default function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(0);
  const onSelestItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelestItem(index)}
                key={`${item}_${index}`}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
