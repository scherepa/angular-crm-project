
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { sortBy } from "lodash";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars_ar: any[] = [];
  constructor(private apiSer: ApiService) {

  }

  getCars() {
    return this.cars_ar;
  }

  doApiRequest() {
    let url = "https://myfakeapi.com/api/cars"
    this.apiSer.doApiGet(url).subscribe((data: any) => {

      this.cars_ar.splice(0, this.cars_ar.length);
      // data.cars -> from API
      this.cars_ar.push(...data.cars)
      // only 10 in list
      this.cars_ar.splice(10, this.cars_ar.length);
      console.log(this.cars_ar);
      this.sortCar("price");
    })
  }

  sortCar(_sortOf: any): void {
    //sorting into temp_ar
    let temp_ar = sortBy(this.cars_ar, _sortOf);
    // rewrite cars_ar
    this.cars_ar.splice(0, this.cars_ar.length, ...temp_ar);
    this.cars_ar.reverse();
  }



}
