import "bootstrap";
import "./style.css";

window.onload = function() {
  let nouns = ["Mi loro ", "El repositorio ", "La election ", "El alcalde "];
  let actions = ["dejo de repositear ", "le dio un patatus ", "se cayo por el balcon ", "se fue a otra dimension "];
  let circumstances = ["y me quede loco ", "y aparecio Paul Pogba ", "y se apago la luz ", "y me quede sin sandwich "];
  let when = ["cuando tenia que entregarle el proyecto a mi jefe.", "cuando el viernes pasado se me fue la hoya.", "cuando volvi del gimnasio.", "cuando mi hermana me dejo de hablar."];

let startOfSentence = Math.floor(Math.random() * nouns.length);
let middlePart1 = Math.floor(Math.random() * actions.length);
let middlePart2 = Math.floor(Math.random() * circumstances.length);
let endOfSentence = Math.floor(Math.random() * when.length);
// modfificado nombre de variables y espacios inecesarios

document.querySelector("#excusas").innerHTML = nouns[startOfSentence] + actions[middlePart1] + circumstances[middlePart2] + when[endOfSentence]
}

