const api = {
  key: "afaf9f8d48cff6cafd32e23220bcfdbf",
  baseurl: "https//api.openweathermap.org/data/2.5",
};

const searchbox = document.querySelector(".seach-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.KeyCode == 13) {
    getResults(serachbox.value);
  }
}
