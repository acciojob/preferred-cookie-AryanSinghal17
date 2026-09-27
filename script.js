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

function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

window.addEventListener("load", () => {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      `${savedSize}px`
    );
    size.value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedColor
    );
    colour.value = savedColor;
  }
});