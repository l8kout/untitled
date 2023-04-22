import {FC} from "react";
import {ICar} from "../interfaces/car.interface";
interface IProps {
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;

    const greeting = () => {
        console.log('hello')
    }


    return (
        <div>
            <div>id {id}</div>
            <div>brand {brand}</div>
            <div>price {price}</div>
            <div>year {year}</div>
            <button onClick={()=> greeting()}>greeting</button>
            
        </div>
    );
};

export {Car};