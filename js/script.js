let movie = document.querySelector(".about_cards");

const renderHtml = async function (val) {
  const res = await fetch(
    `https://omdbapi.com/?s=${val}&page=1&apikey=fc1fef96`
  );
  const data = await res.json();
  console.log(data.Search);

  let obj = data.Search;
  console.log(obj[0].Title);

  arr(obj);
};

const arr = function (ar) {
  ar.map((val) => {
    let html = ` 
    <div class="about_card">
    <img src="${val.Poster}" alt="">
    <p class="about_card_title">${val.Title}</p>
    <p class="about_card_description">
    <span>118 min |</span>
    <span>ACTION</span>
    </p>
    </div> `;

    movie.insertAdjacentHTML("afterend", html);
  });
};

renderHtml("spider");
