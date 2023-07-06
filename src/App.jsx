/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import Title from './Title';
import data from './data.js';

const categories = data.map((element) => element.category);
const categoriesUniques = new Set(['all', ...categories]);

const App = () => {
  const [items, setItems] = useState(data);
  const [categoriesResult, setCategory] = useState([...categoriesUniques]);

  const filterCategories = (cat) => {
    if (cat === 'all') {
      setItems(data);
    } else {
      setItems(data.filter((item) => item.category === cat));
    }
  };

  return (
    <>
      (
      <main>
        <section className='menu'>
          <Title title='Our menu' />
          <Categories
            filterCategories={filterCategories}
            categories={categoriesResult}
          />
          <Menu items={items} />
        </section>
      </main>
      );
    </>
  );
};

export default App;
