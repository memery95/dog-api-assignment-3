function getDogBreed (readBreed) {
    fetch(`https://dog.ceo/api/breed/${readBreed}/images/random`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 404) {
                alert('no breed with that name');
            } else {
                alert('something went wrong try again later.');
            }
        })
    .then(responseJson => displayImage(responseJson))
    .catch(error => console.log('error occured'));   
}

function displayImage (dogObject) {
    let breedSubmit = $('#input-breed').val();
    $('.results').html(
        `<p>Here's your ${breedSubmit}.</p>
        <img src="${dogObject.message}">`
    );
    $('.results').removeClass('hidden');
}

function watchForm () {
    $('form').submit(event => {
        event.preventDefault();
        let breedSum = $('#input-breed').val();
        getDogBreed(breedSum);
    });
}

$(function(){
    console.log('App loaded and awating submit!');
    watchForm();
})