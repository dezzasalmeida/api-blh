const { Op } = require('sequelize');
const BLH = require('../models/blh');

const regionMapping = {
  "AC": "Norte",
  "AL": "Nordeste",
  "AP": "Norte",
  "AM": "Norte",
  "BA": "Nordeste",
  "CE": "Nordeste",
  "DF": "Centro-Oeste",
  "ES": "Sudeste",
  "GO": "Centro-Oeste",
  "MA": "Nordeste",
  "MT": "Centro-Oeste",
  "MS": "Centro-Oeste",
  "MG": "Sudeste",
  "PA": "Norte",
  "PB": "Nordeste",
  "PR": "Sul",
  "PE": "Nordeste",
  "PI": "Nordeste",
  "RJ": "Sudeste",
  "RN": "Nordeste",
  "RS": "Sul",
  "RO": "Norte",
  "RR": "Norte",
  "SC": "Sul",
  "SP": "Sudeste",
  "SE": "Nordeste",
  "TO": "Norte"
};

class BLHRepository {
  async getAll(offset = 0, limit = 9) {
    return await BLH.findAll({ offset, limit });
  }

  async findByRegion(region, offset = 0, limit = 9) {
    const statesInRegion = Object.keys(regionMapping).filter(
      state => regionMapping[state].toLowerCase() === region.toLowerCase()
    );

    return await BLH.findAll({
      where: { state: { [Op.in]: statesInRegion } },
      offset,
      limit
    });
  }

  async findByType(type, offset = 0, limit = 9) {
    return await BLH.findAll({
      where: { type: { [Op.iLike]: `%${type}%` } },
      offset,
      limit
    });
  }

  async findByCity(city, offset = 0, limit = 9) {
    return await BLH.findAll({
      where: { city: { [Op.iLike]: `%${city}%` } },
      offset,
      limit
    });
  }
}

module.exports = new BLHRepository();
