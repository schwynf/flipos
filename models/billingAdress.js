module.exports = (sequelize, DataTypes) => {
  const BillingAddress = sequelize.define(
    "billingAddress",
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

  BillingAddress.associate = (models) => {
    BillingAddress.belongsTo(models.customers, {
      foreignKey: {
        allowNull: false
      },
      constraints: false
    });
  };


  return BillingAddress;
};