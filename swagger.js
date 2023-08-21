/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/20/2023
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
