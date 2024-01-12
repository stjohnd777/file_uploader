let express = require('express');
let router = express.Router();
let formidable = require('formidable');
let fs = require('fs');


let counter = 0;



router.post('/fileupload', (req, res, next) => {
    //let form = new formidable.IncomingForm();

    const form = formidable({ multiples: true, uploadDir:  global.uploadDir});

    form.parse(req, (err, fields, files) => {
        console.log('fields:', fields);
        console.log('files:', files);
        if (err) throw err;

        let old = files.filetoupload.filepath
        let name = global.uploadDir + files.filetoupload.originalFilename
        fs.rename( old, name, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });

});

router.get('/list', (req, res, next) => {

    fs.readdir(global.uploadDir,  (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
       let page = '<html><ul>'
        files.forEach(function (file) {

            page += `<li>
                        <a href=http://localhost:3000/uploads/${file}>${file}</a>
                        <div>
                            <img src=uploads/${file}   width="600" height="400">
                        </div>
                     </li>`
            console.log(file);
        });
        page += '</ul><html>'
        res.write(page)
        res.end();
    });sub

});

router.get("/delete/:filename", (req, res, next) => {
 
    let filename;
     fs.stat(filename,  (err, stats) =>{
       console.log(stats); //here we got all information of file in stats variable

       if (err) {
         return console.error(err);
       }

       fs.unlink(filename,  (err) => {
         if (err) return console.log(err);
           console.log("file deleted successfully");
        res.json({status: "not implemented"});
       });
     });

   
});




module.exports = router;
