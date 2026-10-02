# GitHub Contribution Plan

The rubric requires meaningful contributions from all members. Do not create fake commits. Each person should work on a real project task.

Suggested allocation:
- Member 1: Project initialization, package.json and server setup
- Member 2: Welcome route and GET /tasks
- Member 3: GET /tasks/:id and 404 handling
- Member 4: POST /tasks
- Member 5: POST validation
- Member 6: PUT /tasks/:id
- Member 7: PUT validation
- Member 8: DELETE /tasks/:id
- Member 9: General error handling
- Member 10: Postman collection
- Member 11: README
- Member 12: Endpoint testing and bug fixes
- Member 13: Code review
- Member 14: Presentation content
- Member 15: Demo script
- Remaining members: additional testing, documentation improvements, review, presentation rehearsal and approved code improvements.

Recommended workflow:
```bash
git clone <repository-url>
git checkout -b feature/get-tasks
# make a meaningful change
git add .
git commit -m "Add GET tasks endpoint"
git push -u origin feature/get-tasks
```
Then open a pull request and have another member review it before merging.

Use descriptive commit messages such as:
- Add Express server setup
- Add GET all tasks endpoint
- Add task validation
- Implement task update endpoint
- Add DELETE task endpoint
- Add Postman collection
- Improve API documentation
