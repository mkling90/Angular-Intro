// to generate -> ng g c products/product-detail --flat
import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute, Router } from '@angular/router'; // to get parameter passed in by routing
@Component({
  selector: 'app-product-detail', // do not need a selector if the view is displayed through routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;
  // Router service is to route with code, instead of html link (registered in RouterModule already)
  constructor(private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // read incoming parameter from route (would need to use observable instead if it can change after init)
    const id = +this._route.snapshot.paramMap.get('id'); // the + is js shortcut to convert param string into int
    // hard code temporarily
    this.pageTitle += `: ${id}`;
    this.product =     {
        'productId': id,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }
  // allow us to navigate back to list component
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
