async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="listing-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const description = document.querySelector('textarea[name="listing-description"]').value;
  console.log(description)
  const price = document.querySelector('input[name="listing-price"]').value.trim();
  const response = await fetch(`/api/listings/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
      price,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-listing-form').addEventListener('submit', editFormHandler);