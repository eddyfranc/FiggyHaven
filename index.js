document.addEventListener('DOMContentLoaded', () => {
  // Get the login state from local storage
  let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Select all "Add to cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  // Add event listener to each "Add to cart" button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Check if user is logged in
      if (!isLoggedIn) {
        alert('Please log in to add items to your cart.');
        return;
      }

      // Get product details from data attributes
      const productName = button.getAttribute('data-name');
      const productPrice = parseFloat(button.getAttribute('data-price'));

      // Get the current cart from local storage, or initialize an empty array if none exists
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the new item to the cart
      cart.push({ name: productName, price: productPrice });

      // Save the updated cart back to local storage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Show confirmation alert
      alert(`${productName} has been added to your cart!`);
    });
  });
});