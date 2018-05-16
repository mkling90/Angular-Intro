import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';  // for 2 way binding ngFor
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'; // register router service

import { ProductModule } from './products/product.module';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { StarComponent } from './shared/star.component';
// import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
// import { ProductGuard } from './products/product.guard';


@NgModule({
  declarations: [
    AppComponent,
    // below get removed after making a product module
    /*ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,*/
    WelcomeComponent
  ], // component, directive, and pipes must belong to only one module
  // 3rd party and angular modules go in imports
  imports: [
    BrowserModule, // BrowserModule always in AppModule, not feature modules
    // FormsModule,
    HttpClientModule,
    // configure routes
    RouterModule.forRoot([
      // Begin with url path (specific -> general in order), then component that matches
      // { path: 'products', component: ProductListComponent },
      // configure route with parameters /:id/:user, etc...
      /* { path: 'products/:id',
        canActivate: [ProductGuard],
        component: ProductDetailComponent }, */
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wildcard route as catchall, can be a notfound page
    ]),
    // feature modules here
    ProductModule
  ],
  // providers: [ProductGuard],
  bootstrap: [AppComponent] // only used in AppModule, not other modules. Loaded on launch
})
export class AppModule { }
