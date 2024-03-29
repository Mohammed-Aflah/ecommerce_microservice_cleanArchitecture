import { User } from "../../entities/User.entity";
import { IUserInteractor } from "../../interfaces/interactors_interfaces/IUserInteractor";
import { IUserRepository } from "../../interfaces/repo_interaces/IUserRepository";

export class UserInteractor implements IUserInteractor {
  private userRepository: IUserRepository;
  constructor(repo: IUserRepository) {
    this.userRepository = repo;
  }
  async getAllUsers(limit: number): Promise<User[]> {
    return await this.userRepository.getAllUsers(limit);
  }
  async getSpecificUser(id: string): Promise<User> {
    const user=await this.userRepository.getSpecificUser(id);
    return user
  }
  // async blockandUnblockUsers(id: string): Promise<User> {
  //   return await this.userRepository.blockAndUnblockUser(id);
  // }
  async blockUser(id: string): Promise<User> {
    return await this.userRepository.blockUser(id)
  }
  async unblockUser(id: string): Promise<User> {
    return await this.userRepository.blockUser(id)
  }
  async createUser(body: User): Promise<User> {
    return await this.userRepository.createUser(body);
  }
}
