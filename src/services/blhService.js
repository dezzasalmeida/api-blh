const BLHRepository = require('../repositories/blhRepository');

class BLHService {
  async getAllBLHs(page = 1, limit = 9) {
    try {
      const offset = (page - 1) * limit;
      return await BLHRepository.getAll(offset, limit);
    } catch (error) {
      throw new Error('Erro ao buscar todos os BLHs');
    }
  }

  async getBLHsByRegion(region, page = 1, limit = 9) {
    try {
      const offset = (page - 1) * limit;
      return await BLHRepository.findByRegion(region, offset, limit);
    } catch (error) {
      throw new Error('Erro ao buscar BLHs por região');
    }
  }

  async getBLHsByType(type, page = 1, limit = 9) {
    try {
      const offset = (page - 1) * limit;
      return await BLHRepository.findByType(type, offset, limit);
    } catch (error) {
      throw new Error('Erro ao buscar BLHs por tipo');
    }
  }

  async getBLHsByCity(city, page = 1, limit = 9) {
    try {
      const offset = (page - 1) * limit;
      return await BLHRepository.findByCity(city, offset, limit);
    } catch (error) {
      throw new Error('Erro ao buscar BLHs por cidade');
    }
  }
}

module.exports = new BLHService();
