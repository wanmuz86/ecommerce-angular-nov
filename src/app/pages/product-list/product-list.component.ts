import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
// Import
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductHttpService } from '../../services/product-http.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products:any[] = []
// Inject
  constructor(
   // private productService:ProductService
   private productHttpService:ProductHttpService
    ){}


  ngOnInit(): void {

    // When the page is loaded , I will retrieve the product from the service
    // To use the service, I will inject it here

    //Without API
 //   this.products = this.productService.getAllProducts();


 /// API Call
 // When working with Asynchronous function, eg: API call, Ex working with file, ex local storage
 // We are working with Observable
 // Is a data type that has 3 output -> Successful, Failure, or Pending
 // One of tHe way to get data from observable is using async await
 
  this.loadProducts()
  
  }
  // Marked this function as async since I am calling the API from here (Working with Observable) 
  async loadProducts(){

    try {
// Wait for the asyncronouse process to finish
// After it finish, put the value inside this.products
    this.products = await lastValueFrom(this.productHttpService.getProducts());
    
  } catch(e){
    console.log(e)
  }

  }

}

