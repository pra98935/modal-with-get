import {Car} from './car';
import {Deserializable} from '../interface/deserializable';
export class User implements Deserializable {
    id: number;
    name: string;
    car: Car;

    getFullDetail() {
        return this.id + ' ' + this.name + ' ' + this.car[0].brand;
    }

    deserialize(input: any): this {
        Object.assign(this, input);
        this.car = input.car.map(carData => new Car().deserialize(carData));
        return this;
    }
}