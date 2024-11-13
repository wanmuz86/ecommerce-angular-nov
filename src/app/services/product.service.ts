import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  products : Product[] = [{
    id:1,
    name:"Webcam",
    price:100
  },
  {
    id:2,
    name:"Microphone",
    price:80
  },
  {
    id:3,
    name:"Speaker",
    price:150
  }
]

currentId = 4
// Create
 addProduct(name:string, price:number):void{
  this.products.push({id:this.currentId, name:name, price:price});
  this.currentId++;
}

// Read
getAllProducts(){
  return this.products;
}

getProductById(id:number){
  // This is like filter, but will only return 1 result
  return this.products.find((val)=> val.id === id);
}

// Update


// Delete



}
