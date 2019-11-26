module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('panels', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_provider: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      installation_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      system_size: {
        type: Sequelize.FLOAT,
        allowNull: false,
        default: 0,
      },
      zip_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        default: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('panels');
  },
};
