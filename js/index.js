/////////////////////// Script du TP1 /////////////////////

//// Empêcher le défilement de la page lorsque le menu est ouvert //////////

//  Récupération de la case à cocher et de la balise html
let leCheckBox = document.querySelector("#cc-menu");
let leHtml = document.querySelector("html");

// Déclaration du gestionnaire d'événement pour les clicks sur le body
leCheckBox.addEventListener("click", gererLeDefilement);

// Fonction qui change la propriété overflow selon l'état du checkbox
function gererLeDefilement() {
    // console.log(leCheckBox.checked);
    if (leCheckBox.checked) {
        // Si le menu mobile est affiché on arrête le défilement  
        leHtml.style.overflowY = "hidden";
    } else {
        // Sinon on le remet à la propriété de base
        leHtml.style.overflowY = "unset";
    }
}

/////////// Fermeture du menu lors d'un click ////////////

// Récupération des balises des "boutons"
let lesBoutons = document.querySelectorAll("nav > a");

// Boucle qui crée un gestionnaire d'événement pour chacun des boutons
for (const unBouton of lesBoutons) {
    unBouton.addEventListener("click", controlerBtnBurger);
}

function controlerBtnBurger() {
    // On calcule la largeur du ViewPort
    let largeurDuViewport = window.innerWidth;
    
    //Changer l'état de la case à cocher seulement si on est sur mobile
    if (largeurDuViewport < 768) {
        leCheckBox.click();
    }
}

///////// Apparition lors du défilement //////////////

// Gestionnaire d'événement "scroll"
window.addEventListener("scroll", Apparaitre);

// Fonction appelée dès que la page défile
function Apparaitre() {
    // Saisi des éléments qui doivent apparaître
    let lesElementCaches = document.querySelectorAll(".apparition");

    let hauteurDuViewport = window.innerHeight;
    
    for (let unElement of lesElementCaches) {
        // Obtenir l'information sur les dimensions de la "boîte" CSS correspondant à la section
        let infoBoite = unElement.getBoundingClientRect();
        // console.log(infoBoite);
        
        let positionDuBas = infoBoite.bottom;
        let positionDuHaut = infoBoite.y;

        // Si l'élément est entièrement dans le viewport, il est dévoilé
        if(positionDuBas < hauteurDuViewport) {
            unElement.style.opacity = 1;
        }
        // Sinon, on le cache
        else {
            unElement.style.opacity = 0;
        }
        // S'il dépasse par le haut, on le cache aussi
        if(positionDuHaut <= 50){
            unElement.style.opacity = 0;
    }
    }
}

///////// Changement de Classe des traits ////////////

// On calcule la largeur du ViewPort au lancement
let largeurDuViewport = window.innerWidth;
// Sélection des traits
let lesDivs = document.querySelectorAll('.trait');

// Appel de la fonction
if (largeurDuViewport >= 768) {
    remplacerClasseTablette();
}  //else if (largeurDuViewport > 992) {
//     remplacerClasseBureau();
// }

//Fonction qui met la classe des traits pour tablette
// Refresh pour que ça fonctionne!
function remplacerClasseTablette() {

    for (let uneDiv of lesDivs) {
        uneDiv.classList.remove('trait-mobile');
        uneDiv.classList.add('trait-tablette');
    }
}

//Fonction qui met la classe des traits pour bureau
// function remplacerClasseBureau() {
//     for (let uneDiv of lesDivs) {
//         uneDiv.classList.remove('trait-tablette');
//         uneDiv.classList.remove('trait-bureau');
//     }
// }