import { Component } from '@angular/core';

@Component({
    selector: 'app-products', // pick a directive to be used in app component
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle = 'Product Listing';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter: string;
    products: any[] =  [
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
    // method for property binding
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
