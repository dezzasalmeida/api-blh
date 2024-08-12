const BLHService = require('../services/blhService');

class BLHController {
  async getAll(req, res, next) {
    try {
      const blhs = await BLHService.getAllBLHs();
      res.json(blhs);
    } catch (error) {
      next(error);
    }
  }

  async getByRegion(req, res, next) {
    try {
      const { region } = req.params;
      const blhs = await BLHService.getBLHsByRegion(region);
      if (blhs.length === 0) {
        return res.status(404).json({ error: 'Nenhum BLH encontrado para essa região' });
      }
      res.json(blhs);
    } catch (error) {
      next(error);
    }
  }

  async getByType(req, res, next) {
    try {
      const { type } = req.params;
      const blhs = await BLHService.getBLHsByType(type);
      if (blhs.length === 0) {
        return res.status(404).json({ error: 'Nenhum BLH encontrado para esse tipo' });
      }
      res.json(blhs);
    } catch (error) {
      next(error);
    }
  }

  async getByCity(req, res, next) {
    try {
      const { city } = req.params;
      const blhs = await BLHService.getBLHsByCity(city);
      if (blhs.length === 0) {
        return res.status(404).json({ error: 'Nenhum BLH encontrado para essa cidade' });
      }
      res.json(blhs);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BLHController();
