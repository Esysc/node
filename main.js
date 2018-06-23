var fs = require('fs');
function getFiles(dir, fileList) {
    fileList = fileList || [];

    var files = fs.readdirSync(dir);
    for (var i in files) {
        if (!files.hasOwnProperty(i))
            continue;
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, fileList);
        } else {
            fileList.push(name);
        }
    }
    return fileList;
}
function readFiles(files, number, content) {
    content = content || {};
    for (var i in files) {
        content[files[i]] = fs.readFileSync(files[i], 'utf8');
    }
    return content
}

var files = getFiles('.')
var content = readFiles(files, 38)
console.log(content)