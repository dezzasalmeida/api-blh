const BLHRepository = require('../repositories/blhRepository');

class BLHService {
  async getAllBLHs() {
    try {
      return await BLHRepository.getAll();
    } catch (error) {
      throw new Error('Erro ao buscar todos os BLHs');
    }
  }

  async getBLHsByRegion(region) {
    try {
      return await BLHRepository.findByRegion(region);
    } catch (error) {
      throw new Error('Erro ao buscar BLHs por região');
    }
  }

  async getBLHsByType(type) {
    try {
      return await BLHRepository.findByType(type);
    } catch (error) {
      throw new Error('Erro ao buscar BLHs por tipo');
    }
  }

  async getBLHsByCity(city) {
    try {
      return await BLHRepository.findByCity(city);
    } catch (error) {
      throw new Error('Erro ao buscar BLHs por cidade');
    }
  }
}

module.exports = new BLHService();
