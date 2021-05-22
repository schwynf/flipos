module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "orders",
    {
      orderStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"pending"
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );

  Orders.associate = (models) => {
    Orders.belongsTo(models.customers, {
      foreignKey: {
        allowNull: false
      },
      constraints: false
    });
    Orders.hasMany(models.orderItems, {
        onDelete: "cascade"
      });
  };

  return Orders;
};