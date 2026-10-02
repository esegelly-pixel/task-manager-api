# 3–5 Minute Live Demo Script

## 0:00–0:30 — Introduction
“Good day everyone. We are presenting our Task Manager API, built with Node.js and Express.js. The API allows users to create, read, update and delete tasks. Because the project requirement says no database, we store the tasks in an in-memory JavaScript array.”

## 0:30–1:00 — Project structure
“Each task has four fields: an ID, title, description and status. Status can be pending or completed. Our main routes are GET, POST, PUT and DELETE.”

## 1:00–2:45 — CRUD demonstration
1. GET `/tasks` — show all tasks.
2. POST `/tasks` — create a new task.
3. GET `/tasks/3` — retrieve the created task.
4. PUT `/tasks/3` — change its status to completed.
5. DELETE `/tasks/3` — delete the task.
6. GET `/tasks/999` — show 404 handling if time permits.

Say:
“This demonstrates the complete CRUD cycle: Create, Read, Update and Delete.”

## 2:45–3:30 — Validation
“We also validate required fields and only allow pending or completed as task status. Requests for missing tasks return a 404 response, while invalid input returns a 400 response.”

## 3:30–4:15 — Collaboration
“Our project was divided among members through GitHub branches, commits and pull requests. We also prepared a Postman collection for endpoint testing and a README explaining setup and usage.”

## 4:15–4:45 — Closing
“In conclusion, our Task Manager API provides a simple RESTful implementation of CRUD operations using Express.js, with validation and error handling, while following the no-database requirement. Thank you.”
