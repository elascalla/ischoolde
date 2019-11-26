const data = require('../sqls/data.json');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('panels', [data], {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('panels', null, {});
  },
};
