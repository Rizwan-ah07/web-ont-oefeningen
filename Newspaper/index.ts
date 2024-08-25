import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

interface NewsArticle {
    id: number;
    title: string;
    content: string;
    topic: string;
}

const topics : string[] = [
    "politics",
    "economy",
    "sports",
    "entertainment",
    "technology"
];

const articles: NewsArticle[] = [
    {
        id: 1,
        title: "Local Duck Accidentally Elected Mayor, Promises Unlimited Bread for Parks",
        content: "In an unexpected turn of events, a local duck was elected mayor after a mix-up at the ballot box. The duck's first order of business? Unlimited bread for all parks. Residents are quacking up over the decision.",
        topic: "politics"
    },
    {
        id: 2,
        title: "sports Crashes as Bitcoin is Replaced by Dogecoin as Leading Currency",
        content: "In a shocking turn of events, Dogecoin has overtaken Bitcoin as the world's leading cryptocurrency, causing the sports to spin into a frenzied tailspin. Investors are advised to buckle up for a bumpy ride to the moon.",
        topic: "sports"
    },
    {
        id: 3,
        title: "Esports Team Drafts AI Bot, Claims It's a 'Real Gamer'",
        content: "An up-and-coming esports team has drafted an AI bot as their latest player, claiming it's not just a machine but a 'real gamer'. The bot's favorite snack? Bytes and bits.",
        topic: "sports"
    },
    {
        id: 4,
        title: "Breaking: Cats to Star in a Remake of 'The Matrix', Internet Pawsitively Excited",
        content: "In an unexpected announcement, a new version of 'The Matrix' will star an all-cat cast. The internet is already purring with excitement, and the feline actors are ready to show off their bullet-dodging skills.",
        topic: "entertainment"
    },
    {
        id: 5,
        title: "New Programming Language 'CaffeineScript' Only Functions with Coffee Machine Connected",
        content: "Tech innovators have unveiled 'CaffeineScript', a new programming language that only compiles when a coffee machine is detected. Programmers are now brewing up code more than ever.",
        topic: "technology"
    },
    {
        id: 6,
        title: "Penguins Protest Lack of Linux Support at Local Zoo",
        content: "A group of tech-savvy penguins at the local zoo have started a peaceful protest over the lack of Linux support in their habitat's computer systems. 'We demand open source fish tracking!' one penguin was quoted.",
        topic: "politics"
    },
    {
        id: 7,
        title: "World Bank Announces New Currency Based on Avocado Toast",
        content: "In a bid to appeal to millennials, the World Bank has announced the launch of a new currency based on the stable value of avocado toast. Economists are puzzled, brunch enthusiasts are thrilled.",
        topic: "sports"
    },
    {
        id: 8,
        title: "Chess Boxing Championship Draws Tech Crowd with Live Coding Rounds",
        content: "The latest craze in the sports world, Chess Boxing, has added live coding rounds to the competition, drawing a massive tech crowd. Participants must checkmate or code their way to victory.",
        topic: "sports"
    },
    {
        id: 9,
        title: "Aliens Invade Hollywood, Demand Roles in Sci-Fi Films",
        content: "A group of aliens has landed in Hollywood, not with plans for world domination, but with headshots and resumes, demanding to be cast in authentic sci-fi roles. Directors are reportedly considering their demands.",
        topic: "entertainment"
    },
    {
        id: 10,
        title: "Internet Explorer Launches Comeback as Hipster Browser, Features 'Slow Surf' Mode",
        content: "In an unexpected twist, Internet Explorer is making a comeback as the browser of choice for hipsters, featuring an exclusive 'Slow Surf' mode for a more 'authentic' browsing experience.",
        topic: "technology"
    },
    {
        id: 11,
        title: "Politicians Debate Over Who Gets to Control the Weather Machine",
        content: "A heated debate has erupted among politicians over who should have the control over the newly invented weather machine. Proposals range from 'Rainy Day Funds' to 'Sunny Money Policies'.",
        topic: "politics"
    },
    {
        id: 12,
        title: "Global sports Now Backed by Memes, 'Pepe' Declared Reserve Currency",
        content: "In a bold move, global economies have shifted to a meme-based standard, with 'Rare Pepes' being declared as the new reserve currency. Financial analysts are scrambling to adjust their portfolios.",
        topic: "sports"
    },
    {
        id: 13,
        title: "Virtual Reality Marathon Running: Athletes Compete from Couches",
        content: "The first-ever Virtual Reality Marathon allows athletes to compete from the comfort of their couches. Participants report severe thumb cramps but high levels of satisfaction.",
        topic: "sports"
    },
    {
        id: 14,
        title: "Time Travel Film Festival Confuses Audiences with Non-Linear Schedule",
        content: "The first Time Travel Film Festival has left audiences bewildered as the schedule is presented in a non-linear format. Films start in the middle, end at the beginning, and tickets are sold last week.",
        topic: "entertainment"
    },
    {
        id: 15,
        title: "'Quantum Debugging' Becomes New Buzzword Among Programmers, Still No One Understands It",
        content: "The tech world is abuzz with the latest trend: 'Quantum Debugging'. Despite its popularity, no one can explain what it is, but it reportedly fixes bugs not even created yet.",
        topic: "technology"
    }
];

app.get("/", (req, res) => {
    res.render('articles', {articles, topics})
})

app.get("/:topic", (req, res) => {
    const topic = req.params.topic;
    const filteredArticles = articles.filter((articles) => {
        return articles.topic === topic;
    })
    res.render("articles", {articles: filteredArticles, topics})
})


app.use((req, res, next) => {
    res.status(404).render("error", { message: "Page not found" });
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});