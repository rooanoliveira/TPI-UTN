const cardContainer = document.getElementById("card-container");

fetch("https://randomuser.me/api/?results=6&inc=name,location,picture")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(user => {
      const name = `${user.name.first} ${user.name.last}`;
    //   const city = user.location.city;
      const state = user.location.state;
      const country = user.location.country;
      const picture = user.picture.large;

      const card = document.createElement("div");
      card.classList.add("card", "col-10", "col-md-5", "col-xl-3", "m-2", "d-flex", "flex-column", "justify-content-center", "align-items-center", "p-2");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("card-img-top", "d-flex", "justify-content-center");

      const img = document.createElement("img");
      img.classList.add("profile__img");
      img.src = picture;

      const body = document.createElement("div");
      body.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = name;

      const subtitle = document.createElement("p");
      subtitle.classList.add("card-text", "profession");
      subtitle.textContent = "Profesor";

      const location = document.createElement("p");
      location.classList.add("card-text", "location");
      location.textContent = `${state} - ${country}`;

      const links = document.createElement("div");
      links.classList.add("card-body", "d-flex");

      const facebook = document.createElement("div");
      facebook.classList.add("card-link");
      facebook.innerHTML = '<a href="#facebook" class="social__link"><i class="fab fa-facebook-f fa-2x"></i></a>';

      const instagram = document.createElement("div");
      instagram.classList.add("card-link");
      instagram.innerHTML = '<a href="#instagram" class="social__link"><i class="fab fa-instagram fa-2x"></i></a>';

      const linkedin = document.createElement("div");
      linkedin.classList.add("card-link");
      linkedin.innerHTML = '<a href="#linkedin" class="social__link"><i class="fab fa-linkedin-in fa-2x"></i></a>';

      imgContainer.appendChild(img);
      body.appendChild(title);
      body.appendChild(subtitle);
      body.appendChild(location);
      links.appendChild(facebook);
      links.appendChild(instagram);
      links.appendChild(linkedin);
      card.appendChild(imgContainer);
      card.appendChild(body);
      card.appendChild(links);

      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.log(error));