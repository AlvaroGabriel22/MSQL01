const path = require('path');

class SobreController {
    static index (req, res) {
        res.sendFile(path.resolve('sobre.html'))
    }
}

module.exports = SobreController;