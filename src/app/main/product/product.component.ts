import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  products: Product[] = [];
  filterProducts: Product[] = [];
  nextProduct: Product;
  previousProduct: Product;

  constructor(private route: ActivatedRoute, 
    private httpClient: HttpClient,
    private router : Router
  ) {}

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.getProduct(productIdFromRoute);
  }

  getProduct(id:number){
    this.httpClient.get<Product>('https://fakestoreapi.com/products/' + id).subscribe(
      response => {
        this.product = response;
      }
    )
  }

  getOtherProduct(direction:string){

    this.httpClient.get<Product[]>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.products = response;

        if(direction==='next'){

          this.filterProducts = this.products.filter(item => item.id > this.product['id']);
          this.nextProduct = this.filterProducts[0];
          
          if(this.nextProduct){
            this.product = this.nextProduct;
            this.router.navigate(['product/' + this.nextProduct['id']]);
          }

        } else if(direction==='previous'){

          this.filterProducts = this.products.filter(item => item.id < this.product['id']);
          this.previousProduct = this.filterProducts.slice(-1)[0];

          if(this.previousProduct){
            this.product = this.previousProduct;
            this.router.navigate(['product/' + this.previousProduct['id']]);
          }
        }
      }
    )
  }
}