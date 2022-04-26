const express = require('express');
const app = express();
const config = require('./config');
const mysql = require('mysql');
const Task = require('./Models/Task');
const Goal = require('./Models/Goal');
const Note = require('./Models/Note');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//This is the connection to the MySQL Database
config.authenticate().then(function(){
    console.log('Database is Running and Connected...');
}).catch(function(err){
    console.log(err);
});
//Create a database connection
let connexion = mysql.createConnection({
    host: 'localhost', //location of our mysql database server
    user: 'bobby',
    password: 'password', //Same password as what we use on MySQL Workbench
    database: 'planner-app',
});
//Confirm our database connection
connexion.connect(function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log('Connected to database.');
    }
});
//Welcome to NovaLyphmMysqlServer, connected to port 3000
app.get('/', function(req, res){
    Task.findAll().then(function(result){
        res.status(404).send('Welcome to NovaLyphMysqlServer, connected to port 3000');
    }).catch(function(err){
        res.status(500).send(err);
    });
});


// GET : This get the list of all "tasks"
app.get('/tasks', function(req, res){
    Task.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});
// GET : This get the list of all "goals"
app.get('/goals', function(req, res){
    Goal.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});
// GET : This get the list of all "notes"
app.get('/notes', function(req, res){
    Note.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});


// POST : Add a new task
app.post('/tasks', function(req, res){
    Task.create(req.body).then(function(result){
        res.redirect('/tasks');
    }).catch(function(err){
        res.status(500).send(err);
    });
});
// POST : Add a new goal
app.post('/goals', function(req, res){
    Goal.create(req.body).then(function(result){
        res.redirect('/goals');
    }).catch(function(err){
        res.status(500).send(err);
    });
});
// POST : Add a new note
app.post('/notes', function(req, res){
    Note.create(req.body).then(function(result){
        res.redirect('/notes');
    }).catch(function(err){
        res.status(500).send(err);
    });
});

/////////////////////// PATCH : Update tasks /////////////////////
app.patch('/tasks/:task_id', function (req, res) {
    let task_id = req.params.task_id;

    //Find the task
    Task.findByPk(task_id).then(function (result) {
        //Check if task was found
        if (result) {
            console.log(result.name)
            console.log(result.task_id)
            if (result.status === "pending" || result.status === "started") {
                // result.status = req.body.status
                result.status = 'completed'
                console.log(result.status)
                // }else if(result.status ==="completed"){
                // result.status = "not done";
            }else {
                result.status = "started"
                console.log('not working')
            }
            //Save changes to DB
            console.log('saving to database...')
            result.save().then(function() {
                res.send(result)
                console.log('database saved');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Task record not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

/////////////////////// PATCH : Update goals /////////////////////
app.patch('/goals/:goal_id', function (req, res) {
    let goal_id = req.params.goal_id;

    //Find the goal
    Goal.findByPk(goal_id).then(function (result) {
        //Check if goal was found
        if (result) {
            console.log(result.name)
            console.log(result.goal_id)
            if (result.status === "pending" || result.status === "started") {
                // result.status = req.body.status
                result.status = 'completed'
                console.log(result.status)
                // }else if(result.status ==="completed"){
                // result.status = "not done";
            }else {
                result.status = "started"
                console.log('not working')
            }
            //Save changes to DB
            console.log('saving to database...')
            result.save().then(function() {
                res.send(result)
                console.log('database saved');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Goal record not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});


// DELETE : Delete a task
app.delete('/tasks/:task_id', function(req, res){
    let taskID = req.params.task_id;

    //Find the task by ID
    Task.findByPk(taskID).then(function(result){

        if(result){
            //Delete task from database
            result.destroy().then(function(){
                res.redirect('/tasks');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Task not found');
        }

    }).catch(function(err){
        res.status(500).send(err);
    });
});
// DELETE : Delete a goal
app.delete('/goals/:goal_id', function(req, res){
    let goalID = req.params.goal_id;

    //Find the goal by ID
    Goal.findByPk(goalID).then(function(result){

        if(result){
            //Delete goal from database
            result.destroy().then(function(){
                res.redirect('/goals');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Goal not found');
        }

    }).catch(function(err){
        res.status(500).send(err);
    });
});
// DELETE : Delete a note
app.delete('/notes/:note_id', function(req, res){
    let noteID = req.params.note_id;

    //Find the note by ID
    Note.findByPk(noteID).then(function(result){

        if(result){
            //Delete note from database
            result.destroy().then(function(){
                res.redirect('/notes');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Note not found');
        }

    }).catch(function(err){
        res.status(500).send(err);
    });
});

app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

/* // PATCH : Update priority level and progress level of a task
app.patch('/task/:task_id', function(req, res){
    let taskID = req.params.task_id;

    //Find the task 
    Task.findByPk(taskID).then(function(result){
        //Check if task was found
        if(result){
            //Update Task
            if (req.body.priority_level === undefined) {
                result.priority_level = result.priority_level
            } else {
                 result.priority_level = req.body.priority_level;
            }
            if (req.body.progress_level === undefined){
                 result.progress_level = result.progress_level
            } else {
              result.progress_level = req.body.progress_level;
            }
            //Save changes to DB
            result.save().then(function(){
                res.redirect('/task');
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Task not found');
        }
    }).catch(function(err){
        res.status(500).send(err);
    });
}); */


/*
// PATCH : Update notes
app.patch('/tabs/tab3/:id', function (req, res) {
    let id = req.params.id;

    //Find the task
    Task.findByPk(id).then(function (result) {
        //Check if task was found
        if (result) {
            console.log(result.name)
            console.log(result.id)
            if (result.status === "low" || result.status === "started") {
                // result.status = req.body.status
                result.status = 'completed'
                console.log(result.status)
                // }else if(result.status ==="completed"){
                // result.status = "not done";
            }else {
                result.status = "started"
                console.log('here at else')
            }
            //Save changes to DB
            console.log('weird1')
            result.save().then(function () {
                res.send(result)
                console.log('weird');
            }).catch(function (err) {
                res.status(500).send('err');
            });
        }
        else {
            res.status(404).send('Goals record not found');
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});
*/