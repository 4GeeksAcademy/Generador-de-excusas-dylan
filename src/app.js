import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let nouns = ["Mi loro ", "El repositorio ", "La election ", "El alcalde "];
  let actions = ["dejo de repositear ", "le dio un patatus ", "se cayo por el balcon ", "se fue a otra dimension "];
  let circumstances = ["y me quede loco ", "y aparecio Paul Pogba ", "y se apago la luz ", "y me quede sin sandwich "];
  let when = ["cuando tenia que entregarle el proyecto a mi jefe.", "cuando el viernes pasado se me fue la hoya.", "cuando volvi del gimnasio.", "cuando mi hermana me dejo de hablar."];

let parte1= Math. floor (Math. random() * nouns.length);
let parte2= Math. floor (Math. random() * actions.length);
let parte3= Math. floor (Math. random() * circumstances.length);
let parte4= Math. floor (Math. random() * when.length);

document.querySelector("#excusas").innerHTML = nouns[parte1] + actions[parte2] + circumstances[parte3] + when[parte4]
}

