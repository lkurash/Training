class Reviewer {
  constructor() {
    this.reviewList = [
      {
        from: 1, text: 1, score: 1
      }
    ];

    this.itemsElem = document.getElementById('answer');
    this.itemsDateElem = document.getElementById('date');

    this.showList();
  }

  static validate(formData) {
    let isValid = true;

    console.log(formData);

    if (!formData.text) {
      isValid = false;
    }

    if (!formData.from) {
      isValid = false;
    }

    if (!(formData.score >= 1 && formData.score <= 20)) {
      isValid = false;
    }

    return isValid;
  }

  addToList(item) {
    this.reviewList.push(item);
  }

  showList() {
    this.itemsElem.innerHTML = "";

    this.reviewList.forEach(({from, text, score}) => {
      let ul = document.createElement('ul');

      const textP = document.createElement('li');

      textP.textContent = `${"Name:"} ${from}`;

      const fromP = document.createElement('li');

      fromP.textContent = `${"Review:"} ${text}`;

      const reviewP = document.createElement('li');

      reviewP.textContent = `${"Score:"} ${score}`;

      this.itemsElem.append(ul);

      ul.append(textP);
      ul.append(fromP);
      ul.append(reviewP);

    });
  };

  sortAsc() {
    this.reviewList = this.reviewList.sort((a, b) => b.score - a.score);

    this.showList();
  };

  sortDesc() {
    this.reviewList = this.reviewList.sort((a, b) => a.score - b.score);

    this.showList();
  }

  calculateAndShowAverage() {
    let average = this.calculateAverage();

    this.displayAverage(average);
  }

  calculateAverage() {
    let scoreSum = 0;
    let reviewCount = 0;
    let average;

    this.reviewList.forEach(({score}) => {
      reviewCount++;
      scoreSum += +score;

      average = Math.round(scoreSum / reviewCount);
    });

    return average;
  };

  displayAverage(average) {
    this.itemsElem.innerHTML = "";
    const valueP = document.createElement('p');

    valueP.textContent = `${"Average:"}  ${average}`;
    this.itemsElem.append(valueP);
  }

  showDate() {
    const date = new Date().toLocaleDateString();

    this.itemsDateElem.innerHTML = "";

    const datetimeP = document.createElement('p');

    datetimeP.textContent = date;
    this.itemsDateElem.append(datetimeP);
  }

  showtime() {
    this.timeElem = document.getElementById('time');

    setInterval(() =>{
      this.timeElem.innerHTML = "";

      const date = new Date().toLocaleTimeString();

      this.timeElem.textContent = date;
    }, 1000);
  };
};

const reviewer = new Reviewer();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const formDataEntries = formData.entries();

  const data = Object.fromEntries(formDataEntries);

  const isValid = Reviewer.validate(data);

  if (isValid) {
    reviewer.addToList(data);
  } else {
    alert('Вы ввели неправильные данные');
  }

  reviewer.showList();
});

reviewer.showDate();
reviewer.showtime();
