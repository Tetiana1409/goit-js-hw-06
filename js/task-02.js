const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add('item');

  return ingredientsItemEl;
});

navEl.append(...elements);
