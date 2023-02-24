//penggunaan model

const db = require("../models");
const Materi = db.materi;

//menambahkan data quiz

//create:untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Materi.create(req.body)
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
        const materis = await Materi.findAll()
        res.json({
            message: "success",
            data: materis
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
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
        materi.update(req.body,{
            where: {id}
        })
        res.json({
            message: "data berubah ,kaya power rangers",
            data: materi,
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
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })

        materi.destroy()

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
        const materi = await Materi.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `quizzes retrieved successfully with id=${id}.`,
            data: materi,
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
    const materis = await Materi.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
            message: `quizzes retrieved successfully with categoryId=${id}.`,
            data: materis,
    });
}

//menampilkan atau mengambil semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const materis = await Materi.findAll({
         where : {
            levelId: id
        }
    })
    res.json({
        message: `quizzes retrieved successfully with levelId=${id}.`,
        data: materis,
    });
}
