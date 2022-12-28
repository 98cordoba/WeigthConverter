/*Variables */
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");
/* KG */
let convertFomKg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
}
/* LIBRAS */
let convertFomLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
}
/* ONZAS */
let convertFomOz = () => {
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
}
/* Respuestas */
kgRef.addEventListener("input",convertFomKg);
lbRef.addEventListener("input",convertFomLb);
ozRef.addEventListener("input",convertFomOz);
window.addEventListener("load",convertFomKg);