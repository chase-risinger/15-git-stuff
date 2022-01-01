async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="listing-title"]').value;
    const description = document.querySelector('textarea[name="listing-description"]').value;
    const price = document.querySelector('input[name="listing-price"]').value;
    const user_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/listings`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            price,
            user_id,

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