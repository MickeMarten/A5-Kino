class PersonalPage {
  constructor() {}
  span() {
    return document.querySelector("#personalPageSpan");
  }

  changeSpan() {
    this.userName = sessionStorage.getItem("Username");
    this.span().innerText = `Välkommen ${this.userName}!`;
  }
}

const PersonalPage2 = new PersonalPage();
PersonalPage2.changeSpan();