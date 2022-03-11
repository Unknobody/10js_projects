const starsEl = document.querySelectorAll(".emoji-rating-container .stars-rating-container .fa-star");
const emojisEl = document.querySelectorAll(".emoji-rating-container .emojis-container .far");

const emojisColorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]



starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', () => {
        updateRating(index);
    });
});

function updateRating(index){

    // Ajout de la couleur sur les étoiles
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1) {
            starEl.classList.add('active');
        } else {
            starEl.classList.remove('active');
        }
    });

    // ajout de la couleur sur les emojis
    emojisEl.forEach(emojiEl => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = emojisColorsArray[index];
    });



    
    // enregistrement du vote
    emojisEl.forEach(emojiEl => {
        switch (index) {
            case 0:
                console.log('tu as voté 1/5');
                break;
            case 1:
                console.log('tu as voté 2/5');
                break;
            case 2:
                console.log('tu as voté 3/5');
                break;
            case 3:
                console.log('tu as voté 4/5');
                break;
                
            case 4:
                console.log('tu as voté 5/5');
                break;
            default:
                console.log('rien compris!');
                
        }
    })
}