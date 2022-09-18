const basePath = process.cwd();
const {buildSetup,startCreating,Canvas} = require(`${basePath}/services/nftService.js`);


const NftGen = (req,res) =>{

    if(req.fileValidationError){
        res.send(req.fileValidationError);
    }else{
        let width = parseInt(req.body.width);
        let height = parseInt(req.body.height);
        Canvas(width,height);
        let layersOrder = [];
        for(let i =0;i<req.layers.length;i++){
            layersOrder.push({name:req.layers[i]})
        };
        let layerConfigurations = [];
        let obj = {growEditionSizeTo:5};
        obj["layersOrder"] = layersOrder;
        layerConfigurations.push(obj);
        console.log(obj,"hgy");
        buildSetup(obj);
        startCreating(obj);
       
       res.send("done");
    }

}

module.exports = {NftGen}