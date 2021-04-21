import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
  chat: boolean
  username: string
}

class SettingsService {
  async create({chat, username} : ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    //SELECT * FROM settings WHERE username = "username" LIMIT 1;
    const userAlreadyExits = await settingsRepository.findOne({username})

    if(userAlreadyExits) {
      throw new Error("User already exists")
    }

    const settings =  settingsRepository.create({
      chat, username
    })

    await settingsRepository.save(settings)

    return settings
  }
}

export {SettingsService}