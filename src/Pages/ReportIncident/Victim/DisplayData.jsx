import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const DisplayData = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    // Fetch categories
    const categoriesRef = ref(getDatabase(), 'victim/maincategory/');
    onValue(categoriesRef, (snapshot) => {
      const categoriesData = snapshot.val();
      if (categoriesData) {
        const categoriesArray = Object.values(categoriesData);
        setCategories(categoriesArray);
      }
    });

    // Fetch subcategories
    const subcategoriesRef = ref(getDatabase(), 'victim/subcategory/');
    onValue(subcategoriesRef, (snapshot) => {
      const subcategoriesData = snapshot.val();
      if (subcategoriesData) {
        const subcategoriesArray = Object.values(subcategoriesData);
        setSubcategories(subcategoriesArray);
      }
    });
  }, []);

  return (
    <div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <h2>Subcategories:</h2>
      <ul>
        {subcategories.map((subcategory, index) => (
          <li key={index}>{subcategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
