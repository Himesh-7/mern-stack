                      REST APIS
HTTP verbs = GET,POST,PUT,DELETE
CRUD operations:
1.READ
  GET /api.todos -- return all todos
  GET /api/todos/id -- return single todo with given id
2.CREATE
  POST /api/todos -- create a new todo (we need to pass data to create todo)
3.UPDATE
  PUT /api/todos/id -- update todo with given id (we need to pass data to update a todo)
4.DELETE
  DELETE /api/todos/id -- delete todo with given id