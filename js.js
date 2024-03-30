document.querySelector('.smooth-scroll').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.getElementById('radis').scrollIntoView({ // Fait défiler jusqu'à l'élément cible
        behavior: 'smooth'
    });
    setTimeout(function() { // Ajoute la classe active après le défilement
        document.getElementById('radis').classList.add('active');
    }, 1000);
});