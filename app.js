function loadComponent(url, placeholderId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch((err) => console.error(`შეცდომა ${url} ჩატვირთვისას:`, err));
}

// ჩავტვირთოთ ორივე კომპონენტი
loadComponent("header.html", "header-placeholder");
loadComponent("sidebar.html", "sidebar-placeholder");
