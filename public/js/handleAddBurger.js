const burgerText = document.getElementById('addBurgerText');
const burgerForm = document.getElementById('addBurgerForm');

burgerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(burgerText.value);
  try {
    await fetch('/burgers/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        burger_name: burgerText.value,
      }),
    });
  } catch (err) {
    console.log(err);
  }
});
