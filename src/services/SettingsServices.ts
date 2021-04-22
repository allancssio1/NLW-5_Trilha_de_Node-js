import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Settings"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
  chat: boolean
  username: string
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({chat, username} : ISettingsCreate) {
    //SELECT * FROM settings WHERE username = "username" LIMIT 1;
    const userAlreadyExits = await this.settingsRepository.findOne({username})

    if(userAlreadyExits) {
      throw new Error("User already exists")
    }

    const settings =  this.settingsRepository.create({
      chat, username
    })

    await this.settingsRepository.save(settings)

    return settings
  }
}

export {SettingsService}