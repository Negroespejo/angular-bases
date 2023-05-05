function addNumbers(a: number ,b: number){
    return a+b;        
};

//Funcion de flecha
const addNumbersArrow = (a: number, b: number):string =>  {
    return `${ a + b }`;
}

//esta funcion siempre pedira el priemr valor
function multiply (fisrtNumber: number, secondNumber?: number , base = 2){
    return fisrtNumber * base;
}

// const result: number = addNumbers(2,2);
// const result2: string = addNumbersArrow(6,4);
// const multiplyResult: number = multiply(7);
// console.log(
//     `result 1 = ${result}\n`, 
//     `result 2 = ${result2}\n`, 
//     `result 3 = ${multiplyResult}`
//     );

interface Character {
    name:String;
    hp: number;
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider = {
    name: '',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp}`)
    }

}

healCharacter( strider, 20);

strider.showHp();


export{};