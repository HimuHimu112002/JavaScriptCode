class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get carname() {
      return this.carname;
    }
    set carname(x) {
      this.carname = x;
    }
}

let hh = Car.carname = "Aktarujjaman";
console.log(hh)