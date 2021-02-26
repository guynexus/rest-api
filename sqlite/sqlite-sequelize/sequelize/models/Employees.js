'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ Post }) {
    //   // define association here
    //   this.hasMany(Post, { foreignKey: 'userId', as: 'posts' })
    // }

    toJSON() {
      return { ...this.get()}//, id: undefined }
    }
  }
  
  Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: DataTypes.INTEGER,
      },

      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        }
      },
      branch: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        }
      },
      assigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        }
      },
      createdAt: {
        type: DataTypes.STRING,
        // allowNull: true,
        // autoIncrement: true,
        // defaultValue: DataTypes.DATE,
        // validate: {
        //   notNull: { msg: 'User must have a name' },
        //   notEmpty: { msg: 'Name must not be empty' },
        // }
      },
      updatedAt: {
        type: DataTypes.STRING,
        // allowNull: true,
        // autoIncrement: true,
        // defaultValue: DataTypes.DATE,
        // validate: {
        //   notNull: { msg: 'User must have a name' },
        //   notEmpty: { msg: 'Name must not be empty' },
        // }
      }
    },
    {
      // Sequelize,
      sequelize,
      tableName: 'employees',
      modelName: 'Employee',
      // createdAt: false,
      // updatedAt: false,
      // timestamps: false
    }
  )
  return Employee
}
