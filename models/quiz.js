module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        quiz: {
            type: Sequelize.STRING,
        },
        a: {
            type: Sequelize.STRING,
        },
        b: {
            type: Sequelize.STRING,
        },
        c: {
            type: Sequelize.STRING,
        },
        d: {
            type: Sequelize.STRING,
        },
        key: {
            type: Sequelize.STRING,
        },
        categoryId: {
            type: Sequelize.INTEGER,
        },
        levelId: {
            type: Sequelize.INTEGER,
        },
    });
    return Quiz;
}