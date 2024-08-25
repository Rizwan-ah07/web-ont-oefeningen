import express, { Express } from "express";
import path from "path";
import { DadJoke } from "./interface";


const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3001);



async function fetchDadJoke(): Promise<DadJoke> {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
    });
    const joke = await response.json();
    return joke;
}

app.get("/", async (req, res) =>{
    const dadJoke = await fetchDadJoke();
    res.render("index", {
        joke: dadJoke.joke
    })
})

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});