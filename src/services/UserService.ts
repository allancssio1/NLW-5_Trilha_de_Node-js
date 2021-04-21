import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository)

    const userExtists = await usersRepository.findOne({email})

    if(userExtists) {
      return userExtists
    }

    const user = usersRepository.create({
      email
    })

    await usersRepository.save(user)

    return user
  }
}

export { UsersService }