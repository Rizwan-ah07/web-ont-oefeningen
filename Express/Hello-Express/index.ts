import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import {Person, Pokemon} from "./types";

dotenv.config();

const app : Express = express();  

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.get("/", (req, res) => {
    res.render("index", {
        title: "Hello World",
        message: "Hello World"
    })
});

const thisisme: Person = {
    name: "Rizwan Hussain",
    age: 21,
    profilePic: "assets/images/pfp.png"
}

app.get("/whoami", (req, res) =>{
    res.render("whoami", {
        thisisme: thisisme
    })
});

app.get("/whoamijson", (req, res) =>{
    res.type("application/json");
    res.json(thisisme);
});

app.get("/pokemonjson", async (req, res) =>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/dialga")
    const pokemon: Pokemon = await response.json();

    res.json({
        name: pokemon.name,
        id: pokemon.id,
        weight: pokemon.weight,
        front_shiny_default: pokemon.sprites.front_shiny,
        back_shiny_default: pokemon.sprites.back_shiny
    })
})

app.get("/pokemon", async(req, res) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/dialga")
    const pokemon: Pokemon = await response.json();
    
    res.render("pokemon",{
        pokemon:{
            name: pokemon.name,
            id: pokemon.id,
            weight: pokemon.weight,
            front_shiny: pokemon.sprites.front_shiny,
            back_shiny: pokemon.sprites.back_shiny
        }

    })
})

app.use((req, res, next) => {
    res.status(404).render("error", { message: "Page not found" });
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});