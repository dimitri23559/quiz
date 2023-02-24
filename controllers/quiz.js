//penggunaan model

const db = require("../models");
const Quiz = db.quizzes;

//menambahkan data quiz

//create:untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "success",
            data: data
        })
//jika error        
    } catch (error){
        res.status(500).json({
            error: error.message,
            data: null
        });
    }
}


//menampilkan atau mengambil semua data quiz sesuai model dari database
exports.getAll = async(req,res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "success",
            data: quizzes
        });
        //jika error
    }catch (error){
        res.status(500).json({
            error: error.message,
            data: null
        });
    }
};

//mengubah data sesuai id yang dikirimkan
exports.update = async (req,res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "data berubah ,kaya power rangers",
            data: quiz,
        });
    } catch (error){
        res.status(500).json({
            error: error.message || "some error occurred while retrieving quiz",
            data: null
        });
    }
}

//menghapus data sesuai id yang dikirimkan
exports.delete = async (req,res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })

        quiz.destroy()

        res.json({
            message: "quiz deleted"
        });
    } catch (error){
        res.status(500).json({
            error: error.message || "some error occurred while retrieving quiz",
            data: null
        });
    }
}

//mengambil data sesuai id yang dikirimkan
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `quizzes retrieved successfully with id=${id}.`,
            data: quiz,
        });
    } 
    catch (error) {
        res.status(500).json({
            message: error.message || "some error occurred while retrieving quiz",
            data: null,
        });
    }
};

//menampilkan atau mengambil semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
            message: `quizzes retrieved successfully with categoryId=${id}.`,
            data: quizzes,
    });
}

//menampilkan atau mengambil semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
         where : {
            levelId: id
        }
    })
    res.json({
        message: `quizzes retrieved successfully with levelId=${id}.`,
        data: quizzes,
    });
}
