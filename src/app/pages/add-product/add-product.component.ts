import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private productService:ProductService, private router:Router){}
  product : Product = {
    id:0,
    name:'',
    price:0
  }

  addProduct(){
    this.productService.addProduct(this.product.name , this.product.price);
    this.router.navigate(['/']);
  }
}
