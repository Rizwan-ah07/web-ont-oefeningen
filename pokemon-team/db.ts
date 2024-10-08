import { Collection, MongoClient, ObjectId } from "mongodb";

export interface TeamPokemon {
    _id?: ObjectId;
    pokemon: string;
}

const uri = 'mongodb+srv://s151398:wachtwoord@web-ont-oefeningen.fv5lt.mongodb.net/';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        let team: string[] = [];
let running = true;

for (let i = 0; i < pokemon.length; i++) {
    console.log(`${i}. ${pokemon[i]}`);
}

do {
    let input: string = readline.question('Welke pokemon wil je in je team? [0-20]: ');

    if (input.toUpperCase() === 'STOP') {
        running = false;
    } else {
        let index: number = parseInt(input);
        if (index < 0 || index >= pokemon.length) {
            console.log('Deze pokemon ken ik niet');
        } else if (team.includes(pokemon[index])) {
            console.log('Deze pokemon zit al in je team');
        } else {
            team.push(pokemon[index]);
        }
    }

} while (running);

console.log('Jouw team van pokemon is: ');
for (let i = 0; i < team.length; i++) {
    console.log(`${i + 1}. ${team[i]}`);
}

export {}

 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main()