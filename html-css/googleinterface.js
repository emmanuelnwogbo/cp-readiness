let searchBar = document.querySelector("#search");
let searchButton = document.querySelector(".search-button");
searchButton.onclick = function showAlert(event) {
  event.preventDefault();
  if(searchBar.value) {
    return alert(searchBar.value);
  } 
  return alert('no search terms found');
}
