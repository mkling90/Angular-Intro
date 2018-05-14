// Service in angular is just a class that can provide shared data or logic across components
// (should be in a services folder?)
// service should be registered with Angular,
// which will then generate an instance that can be injected if defined as a dependency
// Also need to register a provider in component (injectable to component) or module (injectable everywhere)


import { Injectable } from '@angular/core';
import { IProduct } from './products';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; // for http service encapsulation (add HttpClientModule to AppModule)
import { Observable } from 'rxjs';
// import {do} from 'rxjs/operators';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    // encapsulate data retrieval
    // Observables help manage asynchronous data coming from http requests, treat events as collection
    // An array whose items arrive asynchronously over time -> use RxJS (Reactive Extension)
    // private _productUrl = 'www.thisService.com/api/products'; -> when you have a valid url
    private _productUrl = './api/products/products.json';  // for test purposes
    constructor (private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        // Http calls return Observable arrays, need to subsribe to it
        return this._http.get<IProduct[]>(this._productUrl) // set the generic parameter <> to cast return type
             .do(data => console.log('All: ' + JSON.stringify(data)))
             .catch(this.handleError); // exception handling
    }

    // Exception handling
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

    /*  --> Old hard coded method
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
            }
        ];
    }
    */
}
