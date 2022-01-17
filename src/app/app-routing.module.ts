import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartsListComponent } from './main/carts-list/carts-list.component';
import { ProductComponent } from './main/product/product.component';
import { ProductsListComponent } from './main/products-list/products-list.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', loadChildren:()=>import('./main/main.module').then(a=>a.MainModule),
   canActivate:[AuthGuard],
   component: ProductsListComponent
  },
  {path:'product/:id', canActivate:[AuthGuard], component:ProductComponent},
  {path:'carts', canActivate:[AuthGuard], component:CartsListComponent},
  {path:'**', canActivate:[AuthGuard], component: ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
