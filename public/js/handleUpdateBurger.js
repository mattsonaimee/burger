const updateButton = document.getElementById('updateBurgerButton');
const updateForm = document.getElementById('updateBurgerForm');

updateForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(updateButton.value);
  try {
    await fetch('/burgers/updateOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        burger_name: updateButton.value,
      }),
    });
  } catch (err) {
    console.log(err);
  }
});
