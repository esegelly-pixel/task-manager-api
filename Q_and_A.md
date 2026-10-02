# Likely Q&A

### 1. What is CRUD?
CRUD stands for Create, Read, Update and Delete—the four basic operations used to manage data.

### 2. Why did you use Express.js?
Express.js makes it simple to create HTTP routes, middleware and REST APIs on top of Node.js.

### 3. Why is there no database?
The assignment explicitly requires the API to be implemented without a database, so we used an in-memory array.

### 4. What happens when the server restarts?
Newly created or modified tasks are lost because the data exists only in memory.

### 5. What status codes do you use?
201 for successful creation, 200 for successful reads/updates/deletes, 400 for invalid input, and 404 when a route or task does not exist.

### 6. How do you test the API?
We use Postman and the supplied collection to test every CRUD endpoint and an error case.

### 7. How is the task ID generated?
For this small in-memory project, the next ID is generated from the last task's ID plus one.

### 8. How would you improve the project?
We could add a database, authentication, pagination, search/filtering, automated tests and a frontend.

### 9. What is middleware?
Middleware is a function that runs during the request-response cycle. We use `express.json()` to parse JSON request bodies.

### 10. What happens if a task ID does not exist?
The API returns HTTP 404 with a JSON message saying the task was not found.
