module.exports = (sequelize, DataTypes) => {
    const OrderItems = sequelize.define(
        "orderItems",
        {
            color: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            underscored: true,
            freezeTableName: true
        }
    );

    OrderItems.associate = (models) => {
        OrderItems.belongsTo(models.orders, {
            foreignKey: {
                allowNull: false
            },
            constraints: false
        });
        OrderItems.belongsTo(models.products);
    };

    return OrderItems;
};