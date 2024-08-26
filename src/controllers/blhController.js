const BLHService = require('../services/blhService');

class BLHController {
  async getAll(req, res, next) {
    try {
      const { page = 1, limit = 9 } = req.query;
      const blhs = await BLHService.getAllBLHs(parseInt(page), parseInt(limit));
      res.json(blhs);
    } catch (error) {
      next(error);
    }
  }

  async getByRegion(req, res, next) {
    try {
      const { region } = req.params;
      const { page = 1, limit = 9 } = req.query;
      const blhs = await BLHService.getBLHsByRegion(region, page, limit);
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
      const { page = 1, limit = 9 } = req.query;
      const blhs = await BLHService.getBLHsByType(type, page, limit);
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
      const { page = 1, limit = 9 } = req.query;
      const blhs = await BLHService.getBLHsByCity(city, page, limit);
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