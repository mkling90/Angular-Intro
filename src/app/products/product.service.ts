// Service in angular is just a class that can provide shared data or logic across components
// (should be in a services folder?)
// service should be registered with Angular,
// which will then generate an instance that can be injected if defined as a dependency
// Also need to register a provider in component (injectable to component) or module (injectable everywhere)

import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable()
export class ProductService {
    // encapsulate data retrieval
    getProducts(): IProduct[] {
        return [
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
            },
            {
                'productId': 10,
                'productName': 'Video Game Controller',
                'productCode': 'GMG-0042',
                'releaseDate': 'October 15, 2015',
                'description': 'Standard two-button video game controller',
                'price': 35.95,
                'starRating': 2.6,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
            }
        ];
    }
}
