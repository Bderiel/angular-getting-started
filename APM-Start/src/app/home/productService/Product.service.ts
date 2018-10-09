import { Injectable } from "@angular/core";
import { IProduct } from "src/app/products/product-list.component";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root', //avalible anywhere
})
export class ProductService {
    productUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {

    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe(catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured ${err.error.message}`;
        }else{

        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}