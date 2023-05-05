import { Product } from './06-function-destructuring';
import {taxCalculation} from './06-function-destructuring'
//import { TacCalculationOptios} from './06-function-destructuring'

const shoppingCard: Product [] = [
    {
        description: 'Nokia',
        price: 10
    },
    {
        description: 'iPad,',
        price:150
    }
];

// tax = 0.15

const [total, tax] = taxCalculation({
   product: shoppingCard,
   tax: 0.15
});

console.log('Total= ', total)
console.log('Tax= ',tax)


