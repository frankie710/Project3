module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: DataTypes.STRING,
    });
    // User.associate = function(models){
    //     User.hasMany(models.Todo, {
    //         onDelete: "cascade"
    //     });
    // };
    User.associate = function(models){
        User.hasMany(models.Budget, {
            onDelete: "cascade"
        });
    };

    return User
}