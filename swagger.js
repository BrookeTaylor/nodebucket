/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/29/2023
 *  Description: swagger ui
 */


/**
 * @openapi
 * tags:
 *   name: Employees
 */

/**
 * @openapi
 * /api/employees/{empId}:
 *   get:
 *     tags:
 *       - Employees
 *     summary: Get an employee by ID
 *     description: API for returning a single employee object from MongoDB
 *     parameters:
 *       - name: empId
 *         in: path
 *         required: true
 *         description: Employee ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Server Error (database not connected)
 */









/**
 *
 * findAllTasks
 * @openapi
 * /api/employees/{empId}/tasks:
 *   get:
 *     tags:
 *       - Employees
 *     summary: Retrieves tasks by empId.
 *     description: API for retrieving tasks.
 *     parameters:
 *       - name: empId
 *         in: path
 *         required: true
 *         description: Search for tasks by empId.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Array of person documents.
 *       '400':
 *         description: Bad Request.
 *       '404':
 *         description: Not Found.
 *       '500':
 *         description: Internal Server Error.
 *       '501':
 *         description: MongoDB Exception
 *
 */






/**
 * @openapi
 * /api/employees/{empId}/tasks:
 *   post:
 *     tags:
 *       - Employees
 *     summary: Create a new task for empId
 *     description: API for creating a task for empId
 *     parameters:
 *       - name: empId
 *         in: path
 *         required: true
 *         description: Employee ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: object
 *                 properties:
 *                   text:
 *                     type: string
 *                   category:
 *                     type: object
 *                     properties:
 *                       categoryName:
 *                         type: string
 *                         enum: [testing, meetings, projects, default]
 *                         description: Categories
 *                       backgroundColor:
 *                         type: string
 *                         enum: [gold, silver, blue, white]
 *                         description: Category Background
 *             required:
 *               - task
 *     responses:
 *       '200':
 *         description: Task created successfully
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */














/**
 * @openapi
 * /api/employees/{empId}/tasks:
 *   put:
 *     tags:
 *       - Employees
 *     summary: Update tasks for an employee
 *     description: API for updating tasks for a specific employee
 *     parameters:
 *       - name: empId
 *         in: path
 *         required: true
 *         description: Employee ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               todo:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     text:
 *                       type: string
 *                     category:
 *                       type: string
 *               done:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     text:
 *                       type: string
 *                     category:
 *                       type: string
 *     responses:
 *       '204':
 *         description: Updated Task
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */






/**
 * @openapi
 * /api/employees/{empId}/tasks/{taskId}:
 *   delete:
 *     tags:
 *       - Employees
 *     summary: Delete a task for an employee
 *     description: API for deleting a task for a specific employee
 *     parameters:
 *       - name: empId
 *         in: path
 *         required: true
 *         description: Employee ID
 *         schema:
 *           type: integer
 *       - name: taskId
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Deleted Task
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */
