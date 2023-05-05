//let skillsm: = ['Bash', 'Counter', 'Healing', true, 123];
const skills: string[] = ['Bash', 'Counter', 'Healing'];


interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string // con "?" definimos la propiedad como undefine
} // las interfaces nos ayudar a controlar de mejor fomra de la representacion de los datos



const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    //hometown: 'Rivendell'
}

strider.hometown = 'Rivendell';

console.table(strider);

export{};