const fs = require('fs')
const webp=require('webp-converter');
webp.grant_permission();

fs.readdir('./input', function(err, files){
    if(err) throw err
    files.forEach(e => {
        let name = e.split('.')[0]
        const result = webp.cwebp('./input/'+e, './output/'+name+".webp","-q 80");
        result.then((response) => {
            console.log(response);
        });
    });
})