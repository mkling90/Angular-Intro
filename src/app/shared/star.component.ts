import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // Property to get data from parent component, @Input decorator works with any property type using property binding
    @Input() rating: number;
    // rating: 4;
    starWidth: number;
    // pass data to parent - property type must be an event.  the generic is the type of the event payload
    @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();
    // onchanges only watches for changes to input properties
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    // maps to (click)="onClick()" in the html
    onClick(): void {
        // we use the event property and call it's emit method to notify container.
        // whatever is passed in the emit parameters is the payload.
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
