module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        title: {
            type: Sequelize.STRING,
        },
        body: {
            type: Sequelize.STRING,
        },
        categoryId: {
            type: Sequelize.STRING,
        },
        levelId: {
            type: Sequelize.INTEGER,
        },

    });
    return Materi;
}