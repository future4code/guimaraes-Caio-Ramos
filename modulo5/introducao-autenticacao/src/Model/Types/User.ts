export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
};

export interface userInputDTO {
  name: string;
  nickname: string;
  email: string;
  password: string;
}
