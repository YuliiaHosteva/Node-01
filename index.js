import Express from "express"

const app = Express();
app.listen(3000, () => {
    console.log("Server started");
})
app.get("/first", (req, res) => {
res.send("Response")
})