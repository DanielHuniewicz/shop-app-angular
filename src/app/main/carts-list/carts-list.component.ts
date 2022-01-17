import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { User } from '../../interfaces/user.model';
import { Cart } from '../../interfaces/cart.model';
import { Product } from '../../interfaces/product.model';


@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.scss']
})
export class CartsListComponent implements OnInit {

  carts: Cart[];
  users: User[];
  products: Product[];
  results: Cart[];
  
  loadedCharacter: {};
  isLoading = true;

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {

    let cartsResponse = this.httpClient.get<any>('http://fakestoreapi.com/carts');
    let usersResponse = this.httpClient.get<any>('https://fakestoreapi.com/users');
    let productsResponse = this.httpClient.get<any>('https://fakestoreapi.com/products');
   
    forkJoin([cartsResponse, usersResponse, productsResponse]).subscribe(response => {

      this.carts = response[0];
      this.users = response[1];
      this.products = response[2];

      let mergedSubjects = this.carts.map(subject => {
        let otherSubject = this.users.find(element => element.id === subject.userId)
        return { ...subject, ...otherSubject}
      })
      
      mergedSubjects.map(anotherSubject => {
        anotherSubject.products.map(productSubject => {
          let anotherSubject = this.products.find(element => element.id == productSubject.productId)
          productSubject['title'] = anotherSubject?.title;
        })
      })

      this.results = mergedSubjects;
      this.isLoading = false;    
    });
  }
}
