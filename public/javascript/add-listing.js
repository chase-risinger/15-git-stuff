async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="listing-title"]').value;
    const listing_description = document.querySelector('textarea[name="listing-description"]').value;
    const price = document.querySelector('input[name="listing-title"]')

    const response = await fetch(`/api/listings`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            listing_description,
            price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-listing-form').addEventListener('submit', newFormHandler);