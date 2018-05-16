// to create -> ng g m products/Product --flat -m app.module (use --flat because we already had the folder)
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
// import { StarComponent } from '../shared/star.component';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductGuard } from './product.guard';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    // CommonModule, -> remove after shared module
    // FormsModule,
    // Since this is a feature module, we use ForChild instead of ForRoot
    RouterModule.forChild([
      // Begin with url path (specific -> general in order), then component that matches
      { path: 'products', component: ProductListComponent },
      // configure route with parameters /:id/:user, etc...
      { path: 'products/:id',
        canActivate: [ProductGuard],
        component: ProductDetailComponent
      }]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
    // StarComponent -> remove after shared module
  ],
  providers: [
    ProductService,
    ProductGuard
  ]
})
export class ProductModule { }
