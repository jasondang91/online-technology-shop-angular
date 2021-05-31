import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    // URL
    path: '',
    component: HomeComponent
  },
  {
    // URL
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    // URL
    path: 'product',
    component: ProductComponent
  },
  {
    // URL
    path: 'post',
    component: PostComponent
  },
  {
    // URL
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
