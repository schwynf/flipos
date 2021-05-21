const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "customers",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );

  Customers.generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };

  Customers.validPassword = (inputPwd, dbPwd) => {
    return bcrypt.compareSync(inputPwd, dbPwd);
  };

  Customers.associate = models => {
    Customers.hasMany(models.orders, {
      onDelete: "cascade"
    });
    Customers.hasMany(models.shippingAddress, {
      onDelete: "cascade"
    });
    Customers.hasMany(models.billingAddress, {
      onDelete: "cascade"
    });
    Customers.hasMany(models.paymentCards, {
      onDelete: "cascade"
    });
  };

  return Customers;
};