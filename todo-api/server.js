var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
/*var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Do to market',
    completed: false
}, {
    id: 3,
    description: 'Feed the cat',
    completed: true
}];*/
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

// GET /todos?completed=true
app.get('/todos', function (req, res) {
    var queryParams = req.query;
    var filteredTodos = todos;

    if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'true') {
        filteredTodos = _.where(filteredTodos, {completed: true});
    } else if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'false') {
        filteredTodos = _.where(filteredTodos, {completed: false});
    }

    res.json(filteredTodos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo = _.findWhere(todos, {id: todoId});
     // ||
     // v
     //same thing

    /*var matchedTodo;

    todos.forEach(function (todo) {
        if (todoId === todo.id) {
            matchedTodo = todo;
        }
    });*/

    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }

    //Iterate of todos array. Find the match.

    //res.status(404).send();

    //res.send('Asking for todo with id of ' + res.params.id)
});

// POST /todos/:id
app.post('/todos',  function (req, res) {
    //var body = req.body; // Use _.pick to only pick description and complete
    var body = _.pick(req.body, 'description', 'completed');

    //console.log('body completed: ' + !_.isBoolean(body.completed));
    //console.log('body description: ' + !_.isString(body.description));
    //console.log('body description trim: ' + body.description.trim().length);

    if (!_.isBoolean(body.completed) || !_.isString(body.description) || !body.description.trim().length === 0) {
        return res.status(404).send();
    }

    // set body.description to be trimmed value
    body.description = body.description.trim();

    // add id field
    body.id = todoNextId++;
    // push body into array

    //console.log('description: ' + body.description);
    todos.push(body);
    
    res.json(body);
});

// DELETE /todos/:id
app.delete('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo = _.findWhere(todos, {id: todoId});

    if (!matchedTodo) {
        res.status(404).json({"error": "no todo found with that id"});
    } else {
        todos = _.without(todos, matchedTodo);
        res.json(matchedTodo);
    }
});

// PUT  //todos/:id
app.put('/todos/:id', function (req, res) {
    // HERE 
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo = _.findWhere(todos, {id: todoId});
    var body = _.pick(req.body, 'description', 'completed');
    var validAttributes = {};

    if(!matchedTodo) {
        return res.status(404).send();
    }

    //body.hasOwnProperty('completed');
    if (body.hasOwnProperty('completed') && _.isBoolean(body.completed)) {
        validAttributes.completed = body.completed;
    } else if (body.hasOwnProperty('completed')) {
        // Bad
        return res.status(400).send();
    } /*else {
        // Never provided attribute, no problem here
    }*/

    if (body.hasOwnProperty('description') && _.isString(body.description) && body.description.trim().length > 0) {
        validAttributes.description = body.description;
    } else if (body.hasOwnProperty('description')) {
        return res.status(400).send();
    }

    _.extend(matchedTodo, validAttributes);
    res.json(matchedTodo);

});

app.listen(PORT, function () {
    console.log('Express listening on port: ' +  PORT + '!');
});