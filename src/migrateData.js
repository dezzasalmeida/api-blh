const fs = require('fs');
const path = require('path');
const BLH = require('./models/blh');
const sequelize = require('./config/database');

const migrateData = async () => {
  await sequelize.sync({ force: true }); // Sincroniza o banco de dados (force: true recria as tabelas)

  const dataPath = path.join(__dirname, '../data/blhData.json');
  const rawData = fs.readFileSync(dataPath);
  const blhData = JSON.parse(rawData);

  for (const blh of blhData) {
    await BLH.create(blh);
  }

  console.log('Migração de dados concluída.');
};

migrateData().then(() => {
  sequelize.close();
});
