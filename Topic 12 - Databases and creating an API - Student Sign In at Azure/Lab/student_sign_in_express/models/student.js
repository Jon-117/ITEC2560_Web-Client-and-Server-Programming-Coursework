// module.exports is a function or other piece of data that is given to programs that use this file

module.exports = ( sequelize, DataTypes ) => {
    //set up structure of the database
    let Student = sequelize.define('Student', {
        name:       { type: DataTypes.STRING,  allowNull: false },
        starID:     { type: DataTypes.STRING,  allowNull: false, unique: true },
        presence:   { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    })



    // force specifies whether to drop the table each time the app restarts.
    // true = yes, drop the table. Used when table schema changes
    // false = no, don't drop the table.


    Student.sync( { force: false } ).then (() => {
        console.log('Student Table synced. ')
    })


    return Student // returns the student model generated above.
}