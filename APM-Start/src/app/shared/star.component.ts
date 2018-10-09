import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    onClick(){
        this.notify.emit(`Clicked with rating ${this.rating}`);
    }
    ngOnChanges(){
        // only watches input props
        this.starWidth = this.rating * 75/5;
    }
}