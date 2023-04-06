const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }

  return PostCategory;
};

module.exports = PostCategorySchema;