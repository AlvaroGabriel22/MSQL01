class HomeController {
    static index (req,res) {
            res.json({
                nome: "alvaro",
                sobrenome:"Gabriel"
            })
    }
}

module.exports = HomeController;