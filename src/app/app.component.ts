// import = the 'using' statement in c#
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

// Component decorator
@Component({
  selector: 'app-root', // Directive name used in html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]  // register the service as a provider so the child components can inject it
})

// Component class
export class AppComponent {
  pageTitle = 'Exida Dashboard';
}
