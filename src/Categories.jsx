/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Categories = ({ categories, filterCategories }) => {
  return (
    <div className='btn-container'>
      {categories.map((categorie) => (
        <button
          key={categorie}
          onClick={() => filterCategories(categorie)}
          className='filter-btn btn'
        >
          {categorie}
        </button>
      ))}
    </div>
  );
};
export default Categories;
