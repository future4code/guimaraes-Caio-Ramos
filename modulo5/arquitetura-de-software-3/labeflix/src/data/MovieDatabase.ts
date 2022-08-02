import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../Classes/Movie";

export class MovieDatabase extends BaseDatabase {
  private TABLE_NAME = "LABEFLIX_MOVIE";

  public create = async ({
    id,
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: any): Promise<void> => {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      })
      .into(this.TABLE_NAME);
  };

  public getAll = async (): Promise<Movie[]> => {
    try {
      const movies: Movie[] = [];
      const result = await MovieDatabase.connection()
        .select("*")
        .from(this.TABLE_NAME);

      for (let movie of result) {
        movies.push(movie);
      }
      return movies;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
