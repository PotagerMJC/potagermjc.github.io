document.querySelectorAll('.smooth-scroll').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        var targetId = this.getAttribute('href'); // Récupère l'ID de l'élément cible
        var targetElement = document.querySelector(targetId); // Sélectionne l'élément cible
        targetElement.scrollIntoView({ // Fait défiler jusqu'à l'élément cible
            behavior: 'smooth'
        });
        setTimeout(function() { // Ajoute la classe active après le défilement
            targetElement.classList.add('active');
        }, 1000);
    });
});