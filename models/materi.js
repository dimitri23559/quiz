module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        tittle: {
            type: Sequelize.STRING,
        },
        body: {
            type: Sequelize.STRING,
        },body:
         {
            type: Sequelize.STRING,
        },
        catgoryid: {
            type: Sequelize.STRING,
        },
        levelId: {
            type: Sequelize.INTEGER,
        },

    });
    return Materi;
}