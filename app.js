// DOM

const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran')

/* Ecoute d'un événement keydown sur le document, puis journalisation de la valeur de l'attribut
data-key de l'élément sur lequel on a cliqué. */
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calcules(valeur);
});

/* Écoute d'un événement de clic sur le document, puis journalisation de la valeur de l'attribut
data-key de l'élément sur lequel on a cliqué. */
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calcules(valeur)
});

const calcules = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul')
})