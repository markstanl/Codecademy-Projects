let menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },
  get meal(){
    if(this._meal){
      return this._meal;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get price(){
    if (this._price){
      return this._price;
    }
  },
  get todaysSpecial(){
    if(this._price && this._meal){
      return `Today's Special is ${this._meal} for $${this._price}`
    }
  }
};

menu.meal = 'john';
menu.price = 18;
console.log(menu);

console.log(menu.todaysSpecial);
