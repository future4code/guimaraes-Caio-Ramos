export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
export type UserLogin = {
  email: string;
  password: string;
};
export type CheckMail = {
  email: string;
};

export type UserInputDTO = {
  name: string;
  email: string;
  password: string;
};
export type LoginUserInputDTO = {
  email: string;
  password: string;
};
