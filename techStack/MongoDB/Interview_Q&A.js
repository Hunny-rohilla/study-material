//! red
//@ yellow
//# orange
//$ purple
//- white
//= light green
//* green
//? blue
//// gray
//% pink

//$ reference: https://www.interviewbit.com/mongodb-interview-questions/

//================================================================================================

//# Introduction to MongoDB
// When dealing with data, there are two types of data as we know – (i) structured data and (ii) unstructured data. Structured data is usually stored in a tabular form whereas unstructured data is not. To manage huge sets of unstructured data like log or IoT data, a NoSQL database is used.

//# What is MongoDB ?
//- MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas.
//- It provides easy scalability and is a cross-platform, document-oriented database.
//- MongoDB works on the concept of Collection and Document.
//- It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.

// =================================================================================================
//# MongoDB Basic Interview Questions
// =================================================================================================

//! 1. What are some of the advantages of MongoDB?
//- MongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database
//- MongoDB support primary and secondary index on any fields
//- MongoDB basically uses JavaScript objects in place of procedures
//- MongoDB uses a dynamic database schema
//- MongoDB is very easy to scale up or down
//- MongoDB has inbuilt support for data partitioning (Sharding).

//! 2. What is a Document in MongoDB?
// A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:
```{"greeting" : "Hello world!"}```// Complex documents will contain multiple key/value pairs:
```{"greeting" : "Hello world!", "views" : 3}```//! 3. What is a Collection in MongoDB?
// - A collection in MongoDB is like a table in a relational database.
// - Collections group related documents together.
// - Documents in a collection can have different structures, known as dynamic schemas.
```
{"greeting" : "Hello world!", "views": 3}
{"sign_off": "Good bye"}
```

//! 4. What are Databases in MongoDB?
// MongoDB organizes collections into databases. Each MongoDB instance can host multiple databases, and each database can contain multiple collections. Some reserved database names in MongoDB are "admin," "local," and "config.

//! 5. What is the Mongo Shell?
// Section: MongoDB Shell (mongo)
// It is a JavaScript shell that allows interaction with a MongoDB instance from the command line. With that one can perform administrative functions, inspecting an instance, or exploring MongoDB.
// To start the shell, run the mongo executable:
```
$ mongod
$ mongo
MongoDB shell version: 4.2.0
connecting to: test
``````javascript
> x = 100;
200
> x / 5;
20
```

//! 6. How does Scale-Out occur in MongoDB?
// The document-oriented data model of MongoDB helps in dividing data across many servers, making it easier to handle large amounts of information. MongoDB itself manages the task of balancing and distributing data across a group of servers, known as a cluster. This automatic redistribution of documents ensures that the workload is evenly spread across the cluster.
```
// MongoDB automatically distributes and balances data across a cluster
// Here's an example of how MongoDB handles data management within a cluster
```// MongoDB Components in a Sharded Cluster
// **mongos:**
// This component serves as a query router, acting as a bridge between client applications and the shared cluster. It helps direct queries to the appropriate shards within the cluster based on the data being accessed.
// **Config Servers:**
// These servers store crucial metadata and configuration settings for the cluster. MongoDB uses config servers to manage distributed locks, ensuring that operations across the cluster are synchronized and consistent. Each sharded cluster requires its own set of config servers to function correctly.
```
// Mongos handles queries and routes them to the right shards in the cluster
// Config servers store essential metadata and settings for cluster management
// Here's an example of how these components work together in MongoDB
```;

//! 7. What are some features of MongoDB?
// **Indexing:**
// MongoDB supports various types of indexing like generic secondary indexes, unique indexes, compound indexes, geospatial indexes, and full-text indexes.
// **Aggregation:**
// MongoDB offers an aggregation framework that allows data processing using pipelines, enabling complex data manipulations and computations.
// **Special Collection and Index Types:**
// It supports time-to-live (TTL) collections, which automatically remove documents after a specified time, useful for data that needs to expire.
// **File Storage:**
// MongoDB provides a protocol for storing large files and their metadata, making it convenient for handling file storage within the database.
// **Sharding:**
// MongoDB supports sharding, a technique for distributing data across multiple machines, which helps in scaling and managing large datasets effectively.

//! 8. How to add data in MongoDB?
db.books.insertOne({ title: "Start With Why" });
db.books.insertMany([
  { title: "Start With Why" },
  { title: "The Lean Startup" },
  { title: "Atomic Habits" },
]);

//! 9. How do you Update a Document?
// - MongoDB provides several methods for updating documents in a collection: `updateOne`, `updateMany`, and `replaceOne`.
// - `updateOne` and `updateMany` require a filter document as the first parameter and a modifier document as the second parameter, specifying the changes to apply.
// - `replaceOne` also needs a filter as the first parameter, but it replaces the matched document with the provided replacement document as the second parameter.
// Example of using replaceOne to replace a document
db.collection('yourCollectionName').replaceOne(
   { "_id" : ObjectId("4b2b9f67a1f631733d917a7a") }, // Filter
   { "name" : "alice", "friends" : 24, "enemies" : 2 } // Replacement document
);
// Update a single document matching the filter
db.collection("yourCollectionName").updateOne(
  { name: "alice" }, // Filter
  { $set: { friends: 30 } } // Modifier document to set "friends" field to 30
);

// Update multiple documents matching the filter
db.collection("yourCollectionName").updateMany(
  { name: "bob" }, // Filter
  { $inc: { friends: 1 } } // Modifier document to increment "friends" field by 1
);

//! 10. How do you Delete a Document?
// - `deleteOne`: Deletes a single document that matches the specified filter criteria.
db.books.deleteOne({"_id": 3})
// - `deleteMany`: Deletes multiple documents that match the specified filter criteria.
db.books.deleteMany({"author": "Jane Doe"})

//! 11. How to perform queries in MongoDB?
db.users.find({"age": 24})

//! 12. What are the data types in MongoDB?
// In MongoDB, documents store data similar to JavaScript objects. They use key/value pairs, and MongoDB supports various data types:
// 1. Null: Represents no value.
`{"x": null}`
// 2. Boolean: Represents true or false.
`{"x": true}`
// 3. Number: Represents numerical values.
`{"x": 4}`
// 4. String: Represents text data.
`{"x": "foobar"}`
// 5. Date: Represents date and time.
`{"x": new Date()}`
// 6. Regular Expression: Represents patterns in strings.
`{"x": /foobar/i}`
// 7. Array: Represents a list of values.
`{"x": ["a", "b", "c"]}`
// 8. Embedded Document: Represents nested objects.
`{"x": {"foo": "bar"}}`
// 9. Object ID: Represents a unique identifier.
`{"x": ObjectId()}`
// 10. Binary Data: Represents arbitrary bytes.
`{"x": <binary data>}`
// 11. Code: Represents JavaScript functions.
`{"x": function() { /* ... */ }}`

//! 13. When to use MongoDB?
// MongoDB is suitable for building internet and business applications that need to grow quickly and handle a lot of data. It's popular among developers because it supports fast development, can handle high levels of traffic, and scales well. MongoDB is good for storing, managing, and searching different types of data like text, geospatial, or time-series data.
// **Use Cases**: 
// MongoDB is recommended for applications that require rapid development and scalability, such as internet and business applications.
// **Scalability**:
// MongoDB can handle high levels of read and write traffic and can scale horizontally through Sharding, which distributes data across multiple machines for increased performance.
// **Data Size**: 
// MongoDB is suitable for storing massive amounts of data, making it a good choice for applications with large data repositories.
// **Adaptability**: 
// MongoDB allows for the evolution of deployment as business needs change, making it flexible for adapting to new requirements.
// **Data Types**: 
// MongoDB supports various types of data, including text, geospatial, and time-series data, making it versatile for managing different kinds of information.
//* Sample code to illustrate MongoDB usage
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database connected!");
  db.close();
});

// =================================================================================================
//# MongoDB Intermediate Interview Questions
// =================================================================================================

//!1. How is Querying done in MongoDB?
// The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire collection. Which documents get returned is determined by the first argument to find, which is a document specifying the query criteria.
// For example: If we have a string we want to match, such as a "username" key with the value "alice", we use that key/value pair instead:
db.users.find({"username" : "alice"})

//! 2. Explain the term “Indexing” in MongoDB.
// ### Indexes in MongoDB
// In MongoDB, indexes are used to efficiently handle queries. An index stores a small part of the data in a way that makes it easy to search through. It stores the values of specific fields in an ordered manner, similar to indexes in relational databases.
// ### How Indexes Work
// Indexes create an ordered list with references to the data, making queries much faster. To create an index, you can use the `createIndex` collection method.
// ### Example Usage
db.users.find({"username": "user101"}).explain("executionStats")
// Here, using the `explain("executionStats")` mode helps understand how the index is used to optimize query execution.

//! 3. What are Geospatial Indexes in MongoDB?
// MongoDB has two types of geospatial indexes: 2dsphere and 2d. 2dsphere indexes work with spherical geometries that model the surface of the earth based on the WGS84 datum. This datum model the surface of the earth as an oblate spheroid, meaning that there is some flattening at the poles. Distance calculations using 2sphere indexes, therefore, take the shape of the earth into account and provide a more accurate treatment of distance between, for example, two cities, than do 2d indexes. Use 2d indexes for points stored on a two-dimensional plane.
// 2dsphere allows you to specify geometries for points, lines, and polygons in the GeoJSON format. A point is given by a two-element array, representing [longitude, latitude]:
`{
   "name" : "New York City",
   "loc" : {
       "type" : "Point",
       "coordinates" : [50, 2]
   }
}`
// A line is given by an array of points:
`{
   "name" : "Hudson River",
   "loc" : {
       "type" : "LineString",
       "coordinates" : [[0,1], [0,2], [1,2]]
   }
}`

//!4. Explain the process of Sharding.
// Sharding is like splitting a big task into smaller tasks and distributing them among different workers. In MongoDB, sharding means splitting data across multiple machines called shards. This helps handle more data and load without needing bigger machines.
// Sharding, or partitioning, in MongoDB means dividing data across multiple machines. This is like having many workers share the workload instead of one person doing everything. MongoDB's sharding feature lets you create a cluster of several machines (shards) and distribute a collection's data across them. For example, if you have a large collection of data, MongoDB can split it among different shards so that each shard handles only a part of the data. This helps scale your application beyond the limits of a single server or replica set.
//## Example code for enabling sharding in MongoDB
`use admin`
db.runCommand({ enableSharding: "your_database_name" })
db.your_collection_name.ensureIndex({ sharding_key: "hashed" })
sh.shardCollection("your_database_name.your_collection_name", { sharding_key: 1 })
// In the code, `enableSharding` is used to enable sharding on a specific database, and `shardCollection` is used to specify which collection should be sharded based on a specified key (`sharding_key`).

//! 5. Explain the SET Modifier in MongoDB?
// When you want to add a new field to a document in a MongoDB collection, you can use the "$set" operator. This operator checks if the field already exists, and if not, it sets the value for that field. It's handy for updating schemas or adding custom keys to your documents.
// ### Example:
```
{
   "_id" : ObjectId("4b253b067525f35f94b60a31"),
   "name" : "alice",
   "age" : 23,
   "sex" : "female",
   "location" : "India"
}
```
db.users.updateOne(
   {"_id" : ObjectId("4b253b067525f35f94b60a31")},
   {"$set" : {"favorite book" : "Start with Why"}}
)
// This code updates the document with the specified ObjectId by adding the "favorite book" field if it doesn't already exist and sets its value to "Start with Why."

// =================================================================================================
//# MongoDB Advanced Interview Questions
// =================================================================================================

//! 1. What do you mean by Transactions?
// **Transactions in MongoDB**
// A transaction in MongoDB is a group of operations that are treated as a single unit. These operations can include reading or writing data in the database. Transactions are important because they ensure that multiple operations either all succeed or all fail together, maintaining consistency in the database.
// **MongoDB's Transaction APIs**
// **Core API**: 
// This API has syntax similar to what you might find in relational databases. For example, you can use commands like `start_transaction` and `commit_transaction` to begin and end a transaction.
// **Call-back API**: 
// This is the recommended way to use transactions in MongoDB. It simplifies the process by automatically handling common errors like "TransientTransactionError" and "UnknownTransactionCommitResult." You start a transaction, perform the required operations, and then either commit the transaction (if everything went well) or abort it (if there was an error).

// Here's a code snippet using the Call-back API:
const session = client.startSession();
session.startTransaction();
try {
  // Perform your operations here
  await collection1.insertOne({ name: "John Doe" }, { session });
  await collection2.updateOne({ _id: 123 }, { $set: { status: "completed" } }, { session });

  // If everything succeeds, commit the transaction
  await session.commitTransaction();
} catch (error) {
  // If there's an error, abort the transaction
  await session.abortTransaction();
  console.error("Transaction aborted:", error);
} finally {
  session.endSession();
}

// In this code, `session` represents the transaction session. You start the transaction with `session.startTransaction()`, perform your operations inside the try block, and commit or abort the transaction based on the result. The `endSession()` method closes the session once the transaction is complete.

//! 2. What are MongoDB Charts?
// MongoDB Charts is a tool that helps visualize data from a MongoDB database. It's integrated directly into MongoDB, making it easy to create visualizations without needing to write code in languages like Java or Python.

//! 3. What is the Aggregation Framework in MongoDB?
// The aggregation framework in MongoDB is a collection of tools used for analytics on documents stored in one or more collections. It operates through a pipeline concept, where data is processed through stages, each performing a specific operation on the input documents. The input and output of each stage are documents, creating a continuous stream of document processing.
// ### Explanation
// The aggregation framework in MongoDB is like a toolbox for doing complex data analysis. It works by taking data from your collections (which are like tables in a traditional database) and passing it through a series of steps, like an assembly line in a factory.

// Here's how it works:
// **Input Documents**: 
// These are the documents you start with, which are stored in your MongoDB collections.
// **Aggregation Pipeline**:
// Think of this as a set of instructions that MongoDB follows to process your data. Each instruction is called a "stage."
// **Stages**: 
// Each stage in the pipeline performs a specific task on the input data. For example, one stage might filter out certain documents based on a condition, while another stage might group documents together based on a common attribute.
// **Processing**: 
// The input documents flow through the pipeline, and at each stage, they are transformed or filtered in some way.
// **Output**:
// The result of the aggregation pipeline is a stream of processed documents. These can be used for various analytics tasks like calculating averages, finding maximum values, or grouping data for reports.

//* Here's an example of what an aggregation pipeline might look like in MongoDB code:
db.sales.aggregate([
  { $match: { status: "completed" } }, // Stage 1: Filter documents with status "completed"
  { $group: { _id: "$product", totalSales: { $sum: "$quantity" } } }, // Stage 2: Group by product and calculate total sales
  { $sort: { totalSales: -1 } } // Stage 3: Sort by total sales in descending order
])
// In this example:
// - Stage 1 (`$match`) filters out documents where the status is not "completed."
// - Stage 2 (`$group`) groups the remaining documents by product and calculates the total quantity sold for each product.
// - Stage 3 (`$sort`) sorts the results by total sales, with the highest sales first.

//## To extract data from two collections in MongoDB using the aggregation framework, you can use the `$lookup` stage to perform a left outer join. Here's an example:
db.orders.aggregate([
  {
    $lookup: {
      from: "customers", // The name of the second collection
      localField: "customerId", // The field in the orders collection
      foreignField: "_id", // The field in the customers collection
      as: "customerInfo", // The name of the new field in the output
    },
  },
  {
    $unwind: "$customerInfo", // Unwind the array created by $lookup
  },
  {
    $project: {
      orderId: 1,
      productName: 1,
      customerName: "$customerInfo.name",
      email: "$customerInfo.email",
    },
  },
]);
// In this example:
// - We start with the `orders` collection.
// - The `$lookup` stage joins the `customers` collection based on the `customerId` field in `orders` and the `_id` field in `customers`. It creates a new field called `customerInfo` in the output documents.
// - The `$unwind` stage is used to deconstruct the `customerInfo` array created by `$lookup`, as it may contain multiple matches.
// - Finally, the `$project` stage is used to reshape the output, selecting specific fields from `orders` and `customers`.
// This aggregation pipeline combines data from both collections (`orders` and `customers`) into a single result set, allowing you to extract and analyze related information. Adjust the field names and conditions in the stages according to your actual data structure and requirements.

//! 4. Explain the concept of pipeline in the MongoDB aggregation framework.
// **Aggregation Pipeline Stage:** 
// Each stage in an aggregation pipeline is a unit for processing data. It operates by taking in input documents one by one, processing each document individually, and then generating an output stream of documents one by one.
db.collection.aggregate([
  { $match: { status: "A" } },  // Example pipeline stage: matching documents with status "A"
  { $group: { _id: "$type", total: { $sum: "$amount" } } }  // Another stage: grouping by type and summing amounts
]);
// In the code example above, the aggregation pipeline includes stages like `$match` and `$group` to filter and group documents based on specified criteria. Each stage processes documents sequentially, contributing to the overall data transformation process.

//! 5. What is a Replica Set in MongoDB?
// Replication is used to keep identical copies of your data on multiple servers. It's highly recommended for all production deployments to ensure your application keeps running and your data remains safe even if something happens to one or more servers.
// In MongoDB, replication is achieved through a replica set. A replica set consists of multiple servers, including one primary server that handles writes and several secondary servers that store copies of the primary's data. If the primary server fails, the secondary servers can elect a new primary from among themselves.


// =================================================================================================
//# Conclusion
// =================================================================================================
// MongoDB is a powerful, flexible, and scalable general-purpose database. It combines the ability to scale out with features such as secondary indexes, range queries, sorting, aggregations, and geospatial indexes.
// Thus, in conclusion, MongoDB is:
// -Supports Indexing
// -Designed to scale
// -Rich with Features
// -High Performance
// -Load Balancing
// -Supports sharding
// Although MongoDB is powerful, incorporating many features from relational systems, it is not intended to do everything that a relational database does. For some functionality, the database server offloads processing and logic to the client-side (handled either by the drivers or by a user’s application code). Its maintenance of this streamlined design is one of the reasons MongoDB can achieve such high performance.