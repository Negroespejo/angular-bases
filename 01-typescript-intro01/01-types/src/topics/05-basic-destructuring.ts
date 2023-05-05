interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheran',
        year: 2015   
    }
}


// la des estrucutacion, nos ayuda a acceder rampidamete a las cargateriticas del objeto
const { song: anoherSong, songDuration:duration, details} = audioPlayer
const {author} = details; // de estructuracion de details

/*
console.log('Song: ', anoherSong);
console.log('Duracion: ', duration)
console.log('Author: ', author)
*/




//Desestructuracion de arreglos

//const dbz: string[] = ['Goku', 'Vegeta', 'Trunks' ];

const [,, trunks = 'Not Foud']: string[]=['Goku', 'Vegeta' ];

console.log('Personaje 3', trunks);






export{}