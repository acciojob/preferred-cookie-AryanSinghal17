const save = document.getElementById("Save");
const colour = document.getElementById("fontcolor");
const size = document.getElementById("fontsize");

save.addEventListener("click", (e) => {
  e.preventDefault();

  document.cookie = `fontsize=${size.value}`;
  document.cookie = `fontcolor=${colour.value}`;

  document.documentElement.style.setProperty(
    "--fontsize",
    `${size.value}px`
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    colour.value
  );
});