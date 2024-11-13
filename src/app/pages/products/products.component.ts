import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute
    ) {}

  product : Product | undefined // product is either Product type or undefined (before product load)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.product = this.productService.getProductById(parseInt(id));
    }
  }

}
