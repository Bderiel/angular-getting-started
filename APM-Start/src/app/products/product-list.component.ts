import { Component, OnInit } from "@angular/core";
import { ProductService } from "../home/productService/Product.service";

export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    products: IProduct[] = [];
        _listFilter: string = '';
        get listFilter(): string {
            return this._listFilter;
        }
        set listFilter(value: string) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        }
        filteredProducts: IProduct[];
    constructor(private productService: ProductService) { // dependency injection
    }

    toggleImage() {
        this.showImage = !this.showImage;
    }

    
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(evt: string){
        console.log(evt);
    }

    ngOnInit() {
        // this.listFilter.
        this.productService.getProducts().subscribe(products=>{
            this.products = products;
            this.filteredProducts = this.products;
        });
    }
}