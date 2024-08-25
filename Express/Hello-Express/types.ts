export interface Person {
    name: string;
    age: number;
    profilePic: string;
}

export interface PokemonSprites {
    front_shiny: string;
    back_shiny: string; 
}

export interface Pokemon {
    name: string;
    id: number;
    weight: number;
    sprites: PokemonSprites;
  }
  