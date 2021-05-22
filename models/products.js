module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "products",
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

    Products.associate = (models) => {
        Products.hasOne(models.orderItems);
    };

    return Products;
};