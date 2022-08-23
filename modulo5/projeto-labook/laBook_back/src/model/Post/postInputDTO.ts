import { POST_TYPES } from "../../Types/post";

export interface postInputDTO {
  photo: string;
  description: string;
  type: POST_TYPES;
  author_id: string;
}
