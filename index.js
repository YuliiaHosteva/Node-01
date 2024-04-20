import Express from "express"
import taskRouter from "./routers/tasksRouter.js";

const app = Express();
app.listen(3000, () => {
    console.log("Server started");
})

app.use((error, req, res, next)=>{
    console.log(error.message);
    res.status(error.status || 500).send(error.message)
})

app.use("/tasks", taskRouter)