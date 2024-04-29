import fs from "node:fs/promises";
import http, {createServer} from "node:http";


const PORT = process.env.PORT || "3000";
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";


createServer(async (req, res)=>{
    if(req.method === "GET" && req.url === "/about"){
        try {
            let data = await fs.readFile("../public/about.html", "utf-8")
            res.end(data)
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
    else if(req.method === "GET" && req.url === "/home"){
        // console.log(process.cwd())
        // const filepath = path.join(process.cwd(), "./hometusk24/exercise1/project/public", "./home.html");
        try {
            let data = await fs.readFile("../public/home.html", "utf-8")
            res.end(data)
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
}).listen(PORT, HOSTNAME)