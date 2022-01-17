import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { CartsListComponent } from './carts-list/carts-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    CartsListComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    RouterModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ]
})
export class MainModule { }
