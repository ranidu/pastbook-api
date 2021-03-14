module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {
      id: { 
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          unique: true, 
          allowNull: false,
          primaryKey: true 
      },
      images: { 
          type: Sequelize.JSON, 
      }
    },{
      underscored: true,  
      timestamps: true,
      paranoid: true
  });
  
    return Image;
  };
  