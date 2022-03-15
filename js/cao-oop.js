//1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

// function Car(brand, model, engine) {
//   (this.brand = brand),
//     (this.model = model),
//     (this.engline = engine),
//     (this.turnOn = function () {
//       alert("VroomVroom");
//     });
// }
// const masina = new Car("BMW", "X6", "gas");
// console.log(masina.turnOn());

//2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, basePrice) {
  (this.brand = brand),
    (this.model = model),
    (this.engline = engine),
    (this.basePrice = basePrice),
    (this.getPrice = function () {
      let extra = 0;
      if (this.engline === "electric") {
        extra = 10000;
      } else if (this.engline === "diesel") {
        extra = 5000;
      }
      return this.basePrice + extra;
    });
}
const masina = new Car("BMW", "X6", "petrol", 4000);
console.log(masina.getPrice());

// function Car(brand, model, engine, basePrice) {
//   (this.brand = brand),
//     (this.model = model),
//     (this.engline = engine),
//     (this.basePrice = basePrice),
//     (this.getPrice = function () {
//       if (this.engline === "electric") alert("+10,000");
//       else if (this.engline === "diesel") alert("+5,000");
//       else alert(basePrice);
//     });
// }
// const masina = new Car("BMW", "X6", "electric", "4,000");
// console.log(masina.getPrice());
