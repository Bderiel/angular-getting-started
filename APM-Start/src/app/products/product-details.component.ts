import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product-list.component';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ProductService } from '../home/productService/Product.service';
@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  constructor(private route: ActivatedRoute,
    private location: Location, private productService: ProductService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(products=>{
      this.product = products.filter(el=>el.productId === id)[0];
    })
  }

  onBack() {
    this.location.back(); // or router.navigate to /products
  }

}
