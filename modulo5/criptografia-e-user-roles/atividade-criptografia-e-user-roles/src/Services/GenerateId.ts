import { v4 as generateId } from "uuid";

export class IdGenerator {
  generateId = () => {
    return generateId();
  };
}
