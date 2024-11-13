import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
// Import
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products:Product[] = []
// Inject
  constructor(private productService:ProductService){}


  ngOnInit(): void {
    // When the page is loaded , I will retrieve the product from the service
    // To use the service, I will inject it here
    this.products = this.productService.getAllProducts();

  }

}
