Rules for Consuming API
1) They decide endpoints/paths
2) They decide HOW data sent - JSON or XML
3) They decide how MUCH data is sent - everything or one thing
4) They decide what that data looks like
   Rules for building API
1) We decide endpoints/paths
2) We decide HOW data sent - JSON or XML
3) We decide how MUCH data is sent - everything or one thing
4) We decide what that data looks like


RESTRICTIONS
Routes must be
/api/todos
/api/todos/<unique identifier>

DATA
{
    id: Number,
    note: String,
    is_completed: Boolean
}

Must be CRUD Functional (create, read, update, delete)

Read:
1) Route - /api/todos GET method
1.5) Get data from DB
2) JSON
3) Everything
4) Array of objects

Create:
1) Route - /api/todos POST method
1.5) Get data from client
1.75) Database sends something back
2) JSON -> client
3) Send back what was put into the database (could be correct, could be incorrect)
4) One object - DATA (id, description, is_complete), receipt from database

When we send data from client to server, we generally send as POST request
Sent through the "body"

Delete:
1) Route - /api/items/<unique>, DELETE method
2) JSON
3) Send back one thing - what was deleted
4) One object

Update:
1) Route - /api/items/<unique>. PUT method
2) JSON
3) Send back one thing - updated is_complete
4) send back an object or just the is_complete[]

