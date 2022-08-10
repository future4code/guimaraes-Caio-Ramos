import { user } from "../../Types/user";
import { friendRelation } from "../../Types/friendRelation";
export interface UserRepository {
  createUser(user: user): Promise<void>;
  getAllUsers(): Promise<user[]>;
  addFriend(friend: friendRelation): Promise<void>;
 // undoFriendship(friends: string): Promise<void>;
}
