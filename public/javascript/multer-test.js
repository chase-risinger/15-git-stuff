
async function newFormHandler(event) {
    event.preventDefault();


    const photo = document.querySelector('input[name="photo"]').value;
    console.log(photo)


    const response = await fetch(`/api/listings/multer-test`, {
        method: 'POST',
        body: photo,
        file: 'photo-88',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log("great job");
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.multer-test-form').addEventListener('submit', newFormHandler);