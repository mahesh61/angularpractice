import { Observer } from "rxjs";

export class CustomObserver implements Observer<Number> {
    next(value: Number) {
        console.log("from custom observer" + value)
    }
    error(err: any) {
        console.log(err);
    }
    complete() {
        console.log("complete custom observer...")
    }

}