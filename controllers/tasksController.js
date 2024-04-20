import fs from "fs/promises"
import path from "path";
import { controllerDecorator } from "../helpers/controllerDecorator.js";
import { HttpError } from "../helpers/HttpError.js";

const tasksPath = path.resolve("db", "tasks.json")



export  const getTasks = controllerDecorator(async (req, res, next) => {
  
           const tasks = JSON.parse(await fs.readFile(tasksPath, {encoding: "utf-8"})) 
       if(!tasks.length ) {
        throw HttpError(404, "Not found")
       }
       
        res.send(tasks)
        });

export  const createTask  = (req, res) => {
    res.send("create tasks")
};

