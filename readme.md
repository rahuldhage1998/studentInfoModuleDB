## Project Name - 
*student information*

---

### Project link -
https://github.com/rahuldhage1998/studentInfoModuleDB.git

### Install dependencies -
npm install

1. express js 
2. ejs 

### Usage
1. node test.js
2. Open your web browser and go to http://localhost:3000/ to access the homepage.

### test.js(routes) -
**1. Homepage**

URL: http://localhost:3000/
Displays a list of all students data.

**2. Add New Student**

URL: http://localhost:3000/addStudent
Displays a form to add a new student data.

**3. Edit Existing Student**

URL: http://localhost:3000/editStudent/:id/:name/:gender/:age
Allows editing an existing student data.

**4. Delete Student**

URL: http://localhost:3000/deleteStudent/:id
Deletes an existing student data.

### studentDB(functions)

**init(dbjson)**
Initialize the module with the path to the JSON file. If the file does not exist, it will be created.

**create(studentobj)**
Creates a new student record and returns the assigned ID.
```javascript
{
	"id":1,
	"name":"Rahul Dhage",
	"age":"26",
	"gender":"male"
}
```

**read( )**
Read and returns all students record from the JSON file.

**update(studentobj)**
Update a student record that already exists in JSON file.

**deletez(id)**
Delete a student record from JSON file based on the provided ID.

# EJS Files - 

**1. addStudent** -
We can add new student data through this page.

**2. editStudent** - 
We can update existing students data on this page.

**3. Homepage** -
Displays all existing students data.

**4. noRecord** -
If student record does not exists then this page will be displayed.

### input.json file -

This file contains students data.

#### Note -
We have imported studentDB Module in test.js file to access all the functions of studentDB.
