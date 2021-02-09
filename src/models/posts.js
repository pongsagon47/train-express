/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    pId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'p_id'
    },
    pTitle: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'p_title'
    },
    pContent: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'p_content'
    },
    uId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'u_id'
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
    tableName: 'posts',
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updateAt: false
  });
};
