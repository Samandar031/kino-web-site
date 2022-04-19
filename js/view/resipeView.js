class view {
  movie = document.querySelector(".about_cards");
  input = document.querySelector("input");
  btn = document.querySelector(".input");
  #data;

  rendir(data) {
    this.#data = data;
    this.#clearHtml();
    this.arr(this.#data);
  }

  arr(ar) {
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

      this.movie.insertAdjacentHTML("afterbegin", html);
    });
  }

  getInputValue() {
    let valueOne = this.input.value;
    return valueOne;
  }

  addHandleFunc(mamur) {
    this.btn.addEventListener("click", function (e) {
      mamur();
    });
  }
  #clearHtml() {
    this.movie.innerHTML = "";
  }
}

export default new view();
