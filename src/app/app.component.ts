// import = the 'using' statement in c#
import { Component } from '@angular/core';

// Component decorator
@Component({
  selector: 'app-root', // Directive name used in html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Component class
export class AppComponent {
  pageTitle = 'Exida Dashboard';
}
