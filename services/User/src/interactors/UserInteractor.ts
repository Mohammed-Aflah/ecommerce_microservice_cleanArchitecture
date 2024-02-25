import { User } from "../entities/user.entities";
import { IUserInteractor } from "../intefaces/IUserInteractor";
import { IUserRepository } from "../intefaces/IUserRepository";
import jwt from "jsonwebtoken";
export class UsreInteractor implements IUserInteractor {
  private repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }
  async createUser(body: User): Promise<{ user: User; token: string }> {
    const data = await this.repository.createUser(body);
    const token = jwt.sign({ userId: data._id }, "secret", {
      expiresIn: "24h",
    });
    return { user: data, token };
  }
  async loginUser(body: any): Promise<{ user: User; token: string }> {
    const data = await this.repository.loginUser(body);
    const token = jwt.sign({ userId: data._id }, "secret", {
      expiresIn: "24h",
    });
    return { user: data, token };
  }
  async blockAndUnblock(id: string, status: boolean): Promise<User> {
    return await this.repository.blockAndUnblock(id, status);
  }
}
