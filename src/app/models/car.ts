import {Deserializable} from '../interface/deserializable';
export class Car implements Deserializable {
    brand: string;
    year: number;

    getYear(){
        return this.brand+ ' ' +this.year;
    }

    deserialize(input: any): this {
        //alert('car');
        console.log(input);
        Object.assign(this, input);
        return this;
    }
}