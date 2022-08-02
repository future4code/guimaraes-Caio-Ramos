export class Movie {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private duration_in_minutes: number,
    private year_of_release: number
  ) {}

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDIM() {
    return this.duration_in_minutes;
  }

  getYoR() {
    return this.year_of_release;
  }

  setId(newId: string) {
    this.id = newId;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  setDescription(newDescription: string) {
    this.description = newDescription;
  }

  setDIM(newDIM: number) {
    this.duration_in_minutes = newDIM;
  }
  setYoR(newYoR: number) {
    this.year_of_release = newYoR;
  }
}
