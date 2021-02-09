/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    uId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'u_id'
    },
    uFirstName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'u_first_name'
    },
    uLastName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'u_last_name'
    },
    uEmail: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'u_email'
    },
    uPassword: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'u_password'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    del: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: 'N',
      field: 'del'
    }
  }, {
    tableName: 'users',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updateAt: false
  });
};
