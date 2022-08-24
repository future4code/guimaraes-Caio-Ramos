import { v4 as generateId } from "uuid";

class IdGenerator {
  generateId = () => {
    return generateId();
  };
}
export default new IdGenerator();
