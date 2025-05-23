import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsListService {
  carsLocal_ar: any[] = [];
  constructor() { }
  getCar(): any {
    if (localStorage["cars"]) {
      this.carsLocal_ar = JSON.parse(localStorage["cars"]);
    }

    return this.carsLocal_ar;
  }

  addCar(_car: any) {
    this.carsLocal_ar.push(_car);
    this.saveToLocal();
  }

  saveToLocal() {
    localStorage.setItem("cars", JSON.stringify(this.carsLocal_ar));
  }

}
