import { MovieDatabase } from "../data/MovieDatabase";
import { generateId } from '../services/generateId';
import { Movie } from '../Classes/Movie';
import { createMovieDTO } from '../model/createMovieDTO';
export class MovieBusiness {
  async create({
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: createMovieDTO): Promise<void> {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error(
        "Dados inválidos (title, description, duration_in_minutes, year_of_release)"
      );
    }

    const id = generateId();

    const movieDatabase = new MovieDatabase();
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release,
    });
  }
  getAll = async (): Promise<Movie[]> => {
    const movieDB = new MovieDatabase();
    return await movieDB.getAll();
  };
}
