import fs from "node:fs/promises";
import http, {createServer} from "node:http";


const PORT = process.env.PORT || "3000";
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

createServer(async (req, res)=>{
    if(req.method === "GET" && req.url === "/home"){
        try {
            console.log(process.cwd())
            let data = fs.readFile("/home/mauu/Desktop/RESULTAT/UYVAZIFALAR/hometusk24/exercise2/public/PAGES/home.html", "utf-8")
            res.end(data)
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
}).listen(PORT, HOSTNAME)