import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  // Import and Inject httpClient (for API Call)
  private productUrl = "https://fakestoreapi.com/products"

  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<any>{
    return this.httpClient.get(this.productUrl);
  }

  addProduct(name:string, price:number){
    const data = {"name":name, "price":price};
    return this.httpClient.post(this.productUrl,data);
  }
}
