/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 09/03/2023
 *  Description: mongo connection
 */

`use strict`

const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb+srv://nodebucket_user:s3cret@bellevueuniversity.kqpr8ra.mongodb.net/nodebucket?retryWrites=true&w=majority'

const mongo = async(operations, next) => {
  try {

    console.log('Connecting to MongoDB Atlas...')

    // Connect to MongoDB cluster
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    // select the database
    const db = client.db('nodebucket')
    console.log("Connected to MongoDB Atlas", db)

    // Execute the operations
    await operations(db)
    console.log('Operation was successful')

    // Close the connection
    client.close()
    console.log('Closing connection to MongoDB Atlas...')

  } catch (err) {

    const error = new Error('Error connecting to db', err)
    error.status = 500
    console.log('Error connecting to db', err)

    // ErrBack
    next(error)

  }
}

module.exports = { mongo }