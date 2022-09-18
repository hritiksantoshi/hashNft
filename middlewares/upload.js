const fs = require("fs");
const basePath = process.cwd();
const upload = require("../services/fileuploadService");
const layersDir = `${basePath}/layers`;


const Upload = (req, res, next) => {
    try {
        
        fs.readdirSync(layersDir).forEach((folder) => {
            fs.readdirSync(layersDir+'/'+folder).forEach((file) => {
                fs.unlinkSync(`${layersDir}/${folder}/${file}`);
            });
            fs.rmdirSync(`${layersDir}/${folder}`);
        });
        
        req.layers = [];
        
        upload.NFtimg.any()(req, res, next);
    }
    catch (err) {

    }
}

module.exports = {
    Upload
}