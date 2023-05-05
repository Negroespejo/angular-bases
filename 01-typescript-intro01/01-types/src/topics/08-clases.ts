



export class Person {
    // Propiedades
    // public name: string; 
    // public address: string;

    //metodo
    constructor(
        public name: string, 
        private address: string = 'No Address') {   
    }
}

// export class Hero extends Person {

//         constructor(
//             //propiedades del HERO
//             public alterEgo: string,
//             public age: number,
//             public realName: string
//         ){
//             super(
//                 //recibe los parametros de persona
//                 realName,
//                 'New York'
//             )
//         }
// }

export class Hero{

    //public person: Person

    constructor(
        //propiedades del HERO
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person:Person
    ){
       //this.person = new Person(realName);
    }
}

const tony = new Person ('Tonny Stak', 'New York')
const ironman = new Hero('Inorman', 45, 'Tonny', tony );

console.log(ironman)