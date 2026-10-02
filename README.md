# Task Manager API

A simple Express.js REST API for managing tasks. This project implements CRUD operations without a database, as required by the BeTechified Backend Development project brief.

## Features
- Create tasks
- Read all tasks
- Read a single task
- Update tasks
- Delete tasks
- Input validation
- Consistent JSON responses
- 404 handling
- In-memory storage

## Task fields
- `id`: unique numeric identifier
- `title`: task title
- `description`: task description
- `status`: `pending` or `completed`

## Setup
```bash
npm install
npm start
```

The API runs at `http://localhost:3000`.

## Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | API welcome and endpoint list |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get one task |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Example POST body
```json
{
  "title": "Study Express.js",
  "description": "Complete the Express.js lesson",
  "status": "pending"
}
```

## Testing
Use the supplied Postman collection. Test the endpoints in this order:
1. GET all tasks
2. POST a new task
3. GET the new task
4. PUT/update the task
5. DELETE the task
6. Test a missing task to demonstrate 404 handling

## Important limitation
Because the assignment requires no database, tasks are stored in memory. Data created during a session is lost when the server restarts.

## Suggested GitHub collaboration
Each member should make a meaningful change on their own branch and open a pull request. Suggested work:
- Member A: initial Express setup and welcome route
- Member B: GET endpoints
- Member C: POST endpoint and validation
- Member D: PUT endpoint
- Member E: DELETE endpoint and error handling
- Member F: Postman collection and README
- Remaining members: endpoint testing, documentation, presentation, demo recording, code review and bug fixes

Replace these labels with the actual names of your group members.
