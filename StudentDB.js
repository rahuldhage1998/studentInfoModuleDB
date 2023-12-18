var fs = require('fs');
var flag = 0;
var filename = 'inputFolder/input.json';

function init(dbjson = '') {
    if (fs.existsSync(dbjson)) {
        // console.log("file exists");
        flag = 1;
    } else {
        try {
            fs.closeSync(fs.openSync(dbjson, 'w'));
            //console.log('File is created.');
            flag = 1;
        } catch (error) {
            console.log(error);
        }
    }
    return flag;
}


async function create(studentobj) {
    let flag2 = 0;
    let hold = await init(filename);
    if (hold == 1) {
        var myData = (fs.readFileSync(filename));
        if (myData.length == 0) {
            flag2 = 1
        }
        if (flag == 1) {
            var data = [];
        }
        if (flag2 == 0) {
            var data = JSON.parse(myData);
        }
        let index = data.findLastIndex(function (x) {
            return x;
        });

        var obj = {
            id: index < 0 ? 1 : data[index].id + 1,
            name: studentobj.name,
            age: studentobj.age,
            gender: studentobj.gender
        };
        data.push(obj);
        fs.writeFile(filename, JSON.stringify(data), function (err) {
            if (err) throw err;
        });
        return obj.id;
    } else {
        console.log("file doesnt exists");
    }
}


async function read() {
    let hold = await init(filename);
    if (hold == 1) {
        try {
            var myData = (fs.readFileSync(filename));
            var data = JSON.parse(myData);
            return data;
        } catch (err) {
            return 0
        };
    }
}



async function update(studentobj) {

    let hold = await init(filename);
    if (hold == 1) {
        var myData = (fs.readFileSync(filename));
        var data = JSON.parse(myData);

        let index = data.findIndex(function (x) {
            return x.id == studentobj.id;
        });
        if (index != -1) {
            data[index].name = studentobj.name
            data[index].age = studentobj.age;
            data[index].gender = studentobj.gender;
            fs.writeFile(filename, JSON.stringify(data), function (err) {
                if (err) throw err;
                // console.log('updated');
            });
        }
    }
}

async function deletez(id) {

    let hold = await init(filename);

    if (hold == 1) {
        var myData = (fs.readFileSync(filename));
        var data = JSON.parse(myData);
        let index = data.findIndex(function (x) {
            return x.id == id
        });
        if (index != -1) {
            data.splice(index, 1);
            fs.writeFile(filename, JSON.stringify(data), function (err) {
                if (err) throw err;
                // console.log('deleted');
            });
        }
    }
}



exports.read = read;
exports.create = create;
exports.update = update;
exports.init = init;
exports.deletez = deletez;