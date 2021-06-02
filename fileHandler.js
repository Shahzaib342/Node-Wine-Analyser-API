module.exports = {
    readJsonFromFile: function (file) {
        const fs = require('fs')
        try {
            const data = fs.readFileSync(file, 'utf8')
            return JSON.parse(data);
        } catch (err) {
            console.error(err)
        }
    },
    writeFile(request) {
        const fs = require('fs')
        try {
            const data = fs.writeFileSync("files/"+request.fileName, JSON.stringify(request.object), { flag: 'a+' })
            return true;
        } catch (err) {
            console.error(err)
        }
    }
};