"use strict";
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // .toggle('active') - method to add or remove the class
  search.classList.toggle("active");

  // input.focus(); - after expanding the search bar - immediatly places the focus there so user ca start typing
  input.focus();
});
