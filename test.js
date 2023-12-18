const express = require('express');
const app = express();
const path = require('path');
const Student = require('./StudentDB');

let port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', async function (req, res) {
    let studentData = await Student.read();
    if (studentData == 0) {
        res.render('noRecord');
    } else {
        res.render('homepage', {
            studentData: studentData
        });
    }
});

app.get('/addStudent', async function (req, res) {
    res.render('addStudent');
})

app.post('/insertStudent', async function (req, res) {
    let studentData = req.body;
    let studentId = await Student.create(studentData);
    // console.log(studentId);
    res.redirect('/');
})

app.get('/editStudent/:id/:name/:gender/:age', async function (req, res) {
    let studentData = req.params;
    res.render('editStudent', {
        studentData: studentData
    });
})

app.post('/updateStudent', async function (req, res) {
    let studentData = req.body;
    await Student.update(studentData);
    res.redirect('/');
})

app.get('/deleteStudent/:id', async function (req, res) {
    let studentId = req.params.id;
    await Student.deletez(studentId);
    res.redirect('/');
})

app.listen(port, function () {
    console.log(`Server started at port ${port}`);
});