import { Component, OnInit } from '@angular/core';
import { IProduct } from './products'; // need to import to use

@Component({
    selector: 'app-products', // pick a directive to be used in app component
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'] // encapsulate unique style for component
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product Listing';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    _listFilter: string;
    // getter and setter
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    // seperate variable to hold filtered data so we don't lose original data
    filteredProducts: IProduct[];
    products: IProduct[] =  [
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {
            'productId': 5,
            'productName': 'Hammer',
            'productCode': 'TBX-0048',
            'releaseDate': 'May 21, 2016',
            'description': 'Curved claw steel hammer',
            'price': 8.9,
            'starRating': 4.8,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
        }
    ];
    constructor() {
        // initialize variables
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // method for property binding
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    // OnInit component initialization, retrieve data, etc..
    ngOnInit() {
    }

    // bind to the event notification
    onRatingClicked(message: string) {
        // alert(message);
        this.pageTitle = 'Product List: ' + message;
    }
}
