import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

    numberToActive = 0;
    numberToInactive = 0;


    countNumberToActive() {
        this.numberToActive = this.numberToActive + 1;
        console.log('Actions to active users: ' + this.numberToActive);
    }

    countNumberToInactive() {
        this.numberToInactive = this.numberToInactive + 1;
        console.log('Actions to inactive users: ' + this.numberToInactive);

    }

}