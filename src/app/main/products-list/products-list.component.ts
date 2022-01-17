import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  list: Product[] = [];
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(){
    this.httpClient.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.list = response;
      }
    )
  }
}
