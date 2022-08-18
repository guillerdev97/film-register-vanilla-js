"use strict"

const form = document.getElementById("filmForm");
const input = document.getElementById("filmName");
const filmContent = document.getElementById("filmContent");
const deleteAll = document.getElementById("reset");

let db = JSON.parse(localStorage.getItem("films"));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(db) {
        let films = db;
        const index = films.length;
        const film = {
            id: index,
            name: input.value
        }
        films.push(film);
        localStorage.setItem("films", JSON.stringify(films));
        renderFilms(film.name);
        db = JSON.parse(localStorage.getItem("films"));
    }

    if(db === null) {
        let films = [];
        const film = {
            id: 0,
            name: input.value
        }
        films.push(film);
        localStorage.setItem("films", JSON.stringify(films));
        renderFilms(film.name);
        db = JSON.parse(localStorage.getItem("films"));
    }
    
    input.value = "";
})

function renderFilms(filmName) {
    const filmElement = document.createElement("li");
    filmElement.classList.add("filmElement");
    filmElement.innerText = filmName;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    
    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerText = "Edit";

    filmElement.appendChild(editButton);
    filmElement.appendChild(deleteButton);
    filmContent.appendChild(filmElement);
}