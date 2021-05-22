module.exports = (sequelize, DataTypes) => {
  const ShippingAddress = sequelize.define(
    "shippingAddress",
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

  ShippingAddress.associate = (models) => {
    ShippingAddress.belongsTo(models.customers, {
      foreignKey: {
        allowNull: false
      },
      constraints: false
    });
  };


  return ShippingAddress;
};