module.exports = (sequelize, DataTypes) => {
  const PaymentCards = sequelize.define(
    "paymentCards",
    {
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );

  PaymentCards.associate = (models) => {
    PaymentCards.belongsTo(models.customers, {
      foreignKey: {
        allowNull: false
      },
      constraints: false
    });
  };


  return PaymentCards;
};