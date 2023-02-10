//penggunaan model quiz
const db = require ('../models');
const Quiz = db.quizzes;

//memproses jawaban dari suatu quiz

exports.submitOne = async (req, res, next) => {
    
    //data yang didapatkan dari inputan pengguna
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer
    };

    try{
        var quiz = await Quiz.findOne({
            where: {
                id: req.body.quizId
            }
        });

        if (req.body.answer == quiz.key) {
            res.status(200).json({
                "message": "benar"
            })
        } else {
            res.status(200).json({
                "message": 'tidak benar jawaban benar adalah ${quiz.key}'
            })
        }
    } catch (e) {
        res.status(500).json({message: e.message
        })
    }
};

exports.submitMany = async (req, res) => {
    //data yang didapatkan dari inputan oleh pengguna
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try {
        let benar = 0
        let totalSoal = jobsheet.quizId.length
        for (let i = 0; i < totalSoal; i++) {
            const quiz = await Quiz.findOne({
                limit:1,
                where: {
                    id: jobsheet.quizId[1]
                },
                order: [['id','DESC']],
            });
            if(quiz.ke == jobsheet.answer[i]){
                benar = benar + 1
            }
        }
    } catch (e) {
        res.status(500).json({message: e.message});
}
};