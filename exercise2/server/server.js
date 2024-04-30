import fs from "node:fs";
import http, {createServer} from "node:http";
import path from "path";

console.log(path.join(process.cwd(), "public/home.html"))
console.log(fs.existsSync(path.join(process.cwd())))
console.log(path.join(process.cwd(), "../public/home.html"))


const PORT = process.env.PORT || "3000";
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";


createServer((req, res)=>{
    if(req.method === "GET" && req.url === "/home"){
        try {
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.readFile(path.join(process.cwd(), "public","PAGES/home.html"), "utf8", (err, data)=>{
                if(err){
                    res.write("404 Page not found!")
                    res.end()
                }
                else{
                    res.end(data)
                }
            })
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
    if(req.method === "GET" && req.url === "/joinus"){
        try {
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.readFile(path.join(process.cwd(), "public","PAGES/joinus.html"), "utf8", (err, data)=>{
                if(err){
                    res.write("404 Page not found!")
                    res.end()
                }
                else{
                    res.end(data)
                }
            })
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
    if(req.method === "GET" && req.url === "/contact"){
        try {
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.readFile(path.join(process.cwd(), "public","PAGES/contact.html"), "utf8", (err, data)=>{
                if(err){
                    res.write("404 Page not found!")
                    res.end()
                }
                else{
                    res.end(data)
                }
            })
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
    if(req.method === "GET" && req.url === "/price"){
        try {
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.readFile(path.join(process.cwd(), "public","PAGES/price.html"), "utf8", (err, data)=>{
                if(err){
                    res.write("404 Page not found!")
                    res.end()
                }
                else{
                    res.end(data)
                }
            })
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
    if(req.method === "GET" && req.url === "/login"){
        try {
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.readFile(path.join(process.cwd(), "public","PAGES/login.html"), "utf8", (err, data)=>{
                if(err){
                    res.write("404 Page not found!")
                    res.end()
                }
                else{
                    res.end(data)
                }
            })
        } catch (error) {
            console.log(error)
            res.write("404 Page not found")
            res.end()
        }
    }
}).listen(PORT, (err)=>{
    if(err){
        console.log("wrong")
    }
    else{
        console.log("Server is listening")
    }
})