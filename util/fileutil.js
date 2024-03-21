var fs =require('fs');
var dataContent;
module.exports = {
filedata : function(filenm){
    dataContent = fs.readFileSync(filenm);
    return dataContent.toString();
    }
}