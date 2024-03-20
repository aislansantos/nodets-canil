import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send("HOME NO CONTROLLER");
    // res.render("pages/page")
}

export const dogs = (req: Request, res: Response) => {
    res.send("DOGS NO CONTROLLER");
    // res.render("pages/page")
}

export const cats = (req: Request, res: Response) => {
    res.send("CATS NO CONTROLLER");
    // res.render("pages/page")
}

export const fishes = (req: Request, res: Response) => {
    res.send("FISHES NO CONTROLLER");
    // res.render("pages/page")
}