Title: nodebucket  
Author: Professor Krasso  
Date: 08/27/2023  
Description: Task management app using the MEAN stack.  
  
https://github.com/buwebdev/web-450/tree/master  

---

# Nodebucket Sprint week #1

* Predefined employee Id's (1007, 1008, 1009, 1010, 1011, 1012)

* Business rules & ORD

![ORD](src/assets/nodebucketORD.png)

    {
      "employees": [
        {
          "empId": 1007,
          "firstName": "Ludwig van",
          "lastName": "Beethoven",
          "toDo": [
            {
              "title": "task 2",
              "description": "Filler task object"
            }
          ],
          "done": [
            {
              "title": "task 1",
              "description": "Filler task object"
            }
          ]
        }
      ]
    }

* Populate the employees collection. In Mongosh > 

      Please enter a MongoDB connection string: mongodb+srv://nodebucket_user:s3cret@bellevueuniversity.kqpr8ra.mongodb.net/nodebucket?retryWrites=true&w=majority

      db.employees.insertMany([ ... ])

