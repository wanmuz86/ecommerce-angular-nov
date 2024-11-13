import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductHttpService } from '../../services/product-http.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(
    //private productService:ProductService, 
    private productHttpService:ProductHttpService,
    private router:Router
    
    ){}
  product : Product = {
    id:0,
    name:'',
    price:0
  }

  async addProduct(){
   // this.productService.addProduct(this.product.name , this.product.price);
   try {
    const result = await lastValueFrom(this.productHttpService.addProduct(this.product.name, this.product.price))
    console.log(result)
    this.router.navigate(['/']);
   }
   catch (e){
    console.log(e)

   }
  
   
  }
}
