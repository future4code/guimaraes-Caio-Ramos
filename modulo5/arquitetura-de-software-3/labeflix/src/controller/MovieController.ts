import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { InvalidDescription } from "../Error/InvalidDescription";
import { InvalidDIM } from "../Error/InvalidDIM";
import { InvalidTitle } from "../Error/InvalidTitle";
import { InvalidYoR } from "../Error/InvalidYoR";

export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release } =
        req.body;
      if (!title) {
        throw new InvalidTitle();
      }
      if (!description) {
        throw new InvalidDescription();
      }
      if (!duration_in_minutes) {
        throw new InvalidDIM();
      }
      if (!year_of_release) {
        throw new InvalidYoR();
      }
      const movieBusiness = new MovieBusiness();
      await movieBusiness.create({
        title,
        description,
        duration_in_minutes,
        year_of_release,
      });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const movies = await new MovieBusiness().getAll();

      res.status(200).send(movies);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
