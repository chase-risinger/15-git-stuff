async function newSearchHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="search-box"]').value;

    const response = await fetch(`/api/listings/title/${title}`, {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log(response)
        document.location.replace(`/title/${title}`);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.search-listing-form').addEventListener('submit', newSearchHandler);