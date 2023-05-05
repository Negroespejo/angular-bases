function classDecorator(
    constructor: any
){
    return class extends constructor {
        mewProperty = 'New Prperty';
        hello = 'override';
    }
}

@classDecorator
export class superClass {

    public miPropiery: string = 'ABC123'

    //metodo
    print(){
        console.log('hola mundo')
    }
 
}


console.log(superClass)

const myClass = new superClass();
console.log(myClass)