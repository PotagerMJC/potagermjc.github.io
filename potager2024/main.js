// document.querySelectorAll('.smooth-scroll').forEach(function(anchor) {
//     anchor.addEventListener('click', function(event) {
//         event.preventDefault(); // Empêche le comportement par défaut du lien
//         var targetId = this.getAttribute('href'); // Récupère l'ID de l'élément cible
//         var targetElement = document.querySelector(targetId); // Sélectionne l'élément cible
//         targetElement.scrollIntoView({ // Fait défiler jusqu'à l'élément cible
//             behavior: 'smooth'
//         });
//         setTimeout(function() { // Ajoute la classe active après le défilement
//             targetElement.classList.add('active');
//         }, 1000);
//     });
// });

const deroule = document.querySelectorAll('.container');

deroule.forEach((item) => {
    item.addEventListener('click', derouler);
});

function derouler(event){
    event.preventDefault();
    const container = event.currentTarget;
    // Récupérer l'ID de la plante à partir de l'attribut href de l'ancre parente
    const planteId = container.closest('a').getAttribute('href');
    // Sélectionner l'élément .plante associé à partir de son ID
    const plante = document.querySelector(planteId);
    const isOpened = plante.style.display !== 'none';
    if (!isOpened){
        plante.style.display = 'block';
    } else {
        plante.style.display = 'none';
    }
}
