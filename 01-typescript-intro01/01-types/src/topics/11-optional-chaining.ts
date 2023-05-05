export interface Passenger {
    name: string;
    children?: string[]; 
}

const passenger1: Passenger = {
    name: 'Claudio',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Javiera', 'Sofía'],
}

const printChildren = (passenger:Passenger) => {

    const howManyChildren = passenger.children?.length;

    console.log(passenger.name,howManyChildren)
}


printChildren( passenger2);