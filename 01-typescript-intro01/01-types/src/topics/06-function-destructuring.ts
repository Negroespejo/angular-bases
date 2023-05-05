export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad air",
    price: 250.0
}

interface TacCalculationOptios { 
    tax: number;
    product: Product[];
}

export function taxCalculation( {product,tax}: TacCalculationOptios ): number[] {
    let total = 0;

    product.forEach( ({price}) => {
        total += price;
    });
    
    return [total, total * tax];
    
} 

const shoppingCard = [phone, tablet];
const tax = 0.15; // impuesto


const [total, totalTax]:number[] = taxCalculation({
    product: shoppingCard,
    tax: tax
})

console.log('Total', total)
console.log('Tax', totalTax)






