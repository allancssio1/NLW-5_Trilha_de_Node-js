import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/Users"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }
  
  async create(email: string) {
    const userExtists = await this.usersRepository.findOne({
      email
    })

    if(userExtists) {
      return userExtists
    }

    const user = this.usersRepository.create({
      email
    })

    await this.usersRepository.save(user)

    return user
  }
  
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
  
    return user;
  }

  async findByUser(user_id: string) {
    const user = await this.usersRepository.findOne({ id: user_id });
  
    return user;
  }
}

export { UsersService }