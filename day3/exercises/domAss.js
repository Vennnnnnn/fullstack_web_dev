const btn = document.getElementById("clickMe");
btn.addEventListener("click", () => {
  let title = document.getElementById("title");
  title.textContent = "Ahhhhhhhhhhhhhh!";
  title.style.color = "purple";
  title.style.fontSize = "60px";
});

const para = document.getElementById("para");
para.onmouseover = function () {
  para.style.color = "pink";
};

//Hide the paragraph when clicked
para.onclick = function () {
  //para.style.display = "none";
  para.hidden = true;
  //para.style.opacity = 0;
};
