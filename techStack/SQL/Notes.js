//? reference: 
//? https://www.interviewbit.com/sql-interview-questions/
//? https://www.postgresqltutorial.com/
//? https://www.youtube.com/watch?v=85pG_pDkITY

//================================================================
//## SQL Interview Questions
//================================================================

//! 1. What is Database?
// A database is an organized collection of data, stored and retrieved digitally from a remote or local computer system. Databases can be vast and complex, and such databases are developed using fixed design and modeling approaches.

//! 2. What is DBMS?
// DBMS stands for Database Management System. DBMS is a system software responsible for the creation, retrieval, updation, and management of the database. It ensures that our data is consistent, organized, and is easily accessible by serving as an interface between the database and its end-users or application software.

//! 3. What is RDBMS? How is it different from DBMS?
// RDBMS stands for Relational Database Management System. The key difference here, compared to DBMS, is that RDBMS stores data in the form of a collection of tables, and relations can be defined between the common fields of these tables. Most modern database management systems like MySQL, Microsoft SQL Server, Oracle, IBM DB2, and Amazon Redshift are based on RDBMS.

//! 4. What is SQL?
// SQL stands for Structured Query Language. It's the standard language used for managing relational database systems. It's great for handling structured data that includes entities (like variables) and the relationships between them in the data.

//! 5. What is the difference between SQL and MySQL?
// ### SQL:
// SQL is a standard language used for working with structured databases. It allows you to retrieve and manipulate data in a database.
// ### MySQL:
// MySQL is a specific type of database management system (DBMS) that falls under the category of relational database management systems. It is used to manage SQL databases, similar to other DBMS like SQL Server, Oracle, or IBM DB2.

//! 6. What are Tables and Fields?
// A table is an organized collection of data stored in the form of rows and columns. Columns can be categorized as vertical and rows as horizontal. The columns in a table are called fields while the rows can be referred to as records.

//! 7. What are Constraints in SQL?
// ### Constraints in SQL Tables
// Constraints are rules that control the data in a table. They can be applied when creating the table or later using the ALTER TABLE command. Here are the main types of constraints:
// **NOT NULL**: 
// This prevents a column from having NULL values.
```
CREATE TABLE example (
    id INT NOT NULL,
    name VARCHAR(50)
);
```
// **CHECK**: 
// Ensures that values in a field meet a specified condition.
```
CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price DECIMAL(10,2) CHECK (price > 0)
);
```
// **DEFAULT**: 
// Automatically assigns a default value if none is provided.
```
CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    role VARCHAR(50) DEFAULT 'Employee'
);
```
// **UNIQUE**: 
// Ensures that each value in a column is unique.
```
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```
// **INDEX**: 
// Speeds up data retrieval by indexing a field.
```
CREATE INDEX idx_name ON products (name);
```
// **PRIMARY KEY**: 
// Uniquely identifies each record in a table.
```
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE
);
```
// **FOREIGN KEY**: 
// Maintains referential integrity with records in another table.
```
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

//! 8. What is a Primary Key?
// The PRIMARY KEY constraint uniquely identifies each row in a table. It must contain UNIQUE values and has an implicit NOT NULL constraint.
// A table in SQL is strictly restricted to have one and only one primary key, which is comprised of single or multiple fields (columns).
```
CREATE TABLE Students (   /* Create table with a single field as primary key */
   ID INT NOT NULL
   Name VARCHAR(255)
   PRIMARY KEY (ID)
);

CREATE TABLE Students (   /* Create table with multiple fields as primary key */
   ID INT NOT NULL
   LastName VARCHAR(255)
   FirstName VARCHAR(255) NOT NULL,
   CONSTRAINT PK_Student
   PRIMARY KEY (ID, FirstName)
);
```

//! 9. What is a UNIQUE constraint?
// A UNIQUE constraint ensures that all values in a column are different. This provides uniqueness for the column(s) and helps identify each row uniquely. Unlike primary key, there can be multiple unique constraints defined per table. The code syntax for UNIQUE is quite similar to that of PRIMARY KEY and can be used interchangeably.
```
CREATE TABLE Students (   /* Create table with a single field as unique */
   ID INT NOT NULL UNIQUE
   Name VARCHAR(255)
);

CREATE TABLE Students (   /* Create table with multiple fields as unique */
   ID INT NOT NULL
   LastName VARCHAR(255)
   FirstName VARCHAR(255) NOT NULL
   CONSTRAINT PK_Student
   UNIQUE (ID, FirstName)
);

ALTER TABLE Students   /* Set a column as unique */
ADD UNIQUE (ID);
ALTER TABLE Students   /* Set multiple columns as unique */
ADD CONSTRAINT PK_Student   /* Naming a unique constraint */
UNIQUE (ID, FirstName);
```

//! 10. What is a Foreign Key?
// In a database, a foreign key is a field or group of fields in a table that points to the primary key in another table. This connection is important for maintaining data consistency and integrity between related tables.
// #### How It Works:
// - Child Table: This is the table with the foreign key. It holds references to records in the parent table.
// - Parent Table: Also known as the referenced table, it contains the primary key that the foreign key points to.
// #### Purpose:
// - Referential Integrity: By using foreign key constraints, the database ensures that relationships between data in different tables remain valid. This prevents orphaned records and maintains data accuracy.
// #### Example Code:
```
CREATE TABLE parent_table (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE child_table (
    id INT PRIMARY KEY,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES parent_table(id)
);
```

//! 11. What is a Join? List its different types.
// The SQL Join clause is a way to merge data from multiple tables in a SQL database using a common column. It helps create a combined result set that includes data from all the specified tables based on their relationships.
```sql
SELECT * 
FROM table1
JOIN table2
ON table1.common_column = table2.common_column;
```
// *There are four different types of JOINs in SQL:
// *(INNER) JOIN: 
// Retrieves records that have matching values in both tables involved in the join. This is the widely used join for queries.
`SELECT *
FROM Table_A
JOIN Table_B;
SELECT *
FROM Table_A
INNER JOIN Table_B;`
//* LEFT (OUTER) JOIN: 
// Retrieves all the records/rows from the left and the matched records/rows from the right table.
`SELECT *
FROM Table_A A
LEFT JOIN Table_B B
ON A.col = B.col;`
// *RIGHT (OUTER) JOIN: 
// Retrieves all the records/rows from the right and the matched records/rows from the left table.
`SELECT *
FROM Table_A A
RIGHT JOIN Table_B B
ON A.col = B.col;`
// *FULL (OUTER) JOIN: 
// Retrieves all the records where there is a match in either the left or right table.
`SELECT *
FROM Table_A A
FULL JOIN Table_B B
ON A.col = B.col;`

//! 12. What is a Self-Join?
// A self JOIN is when a table is joined to itself using INNER JOIN or LEFT JOIN and a table alias is used to differentiate between the two instances of the table in the query.
// **Explanation:**
// A self JOIN is like looking at a table as if it were two separate tables, even though it's the same table. This can be useful when you want to compare data within the same table, such as finding related records. For example, in SQL, you might have a table called "employees" where each row represents an employee, and you want to find pairs of employees who have the same manager. You can achieve this with a self JOIN by comparing the "manager_id" column in the table with itself, using a table alias to differentiate between the original table and the joined table.
`SELECT e1.EmployeeName, e2.ManagerName
FROM Employees e1
INNER JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;`

//! 13. What is a Cross-Join?
// Cross join is a type of join in databases where all possible combinations of rows from two tables are created, resulting in a cartesian product of the tables. This means that the resulting table will have a number of rows equal to the product of the number of rows in the two original tables. 
// If a WHERE clause is added to a cross join, it behaves similar to an INNER JOIN, filtering the results based on the specified conditions.
```
SELECT * 
FROM table1
CROSS JOIN table2;

SELECT stu.name, sub.subject 
FROM students AS stu
CROSS JOIN subjects AS sub;
```

//! 14. What is an Index? Explain its different types.
// A database index is a data structure that provides a quick lookup of data in a column or columns of a table. It enhances the speed of operations accessing data from a database table at the cost of additional writes and memory to maintain the index data structure.
// **Advantages:**
// - Speeds up data retrieval operations.
// - Facilitates faster search and sorting of data.
// - Improves overall database performance.

// **Disadvantages:**
// - Increases the time and resources needed to update or add new data (additional writes).
// - Consumes extra memory to store the index data structure.
```
CREATE INDEX index_name
ON table_name (column_name);
```
// *There are different types of indexes that can be created for different purposes:
// *Unique and Non-Unique Index:
// Unique indexes are indexes that help maintain data integrity by ensuring that no two rows of data in a table have identical key values. Once a unique index has been defined for a table, uniqueness is enforced whenever keys are added or changed within the index.
`CREATE UNIQUE INDEX myIndex
ON students (enroll_no);`
// Non-unique indexes, on the other hand, are not used to enforce constraints on the tables with which they are associated. Instead, non-unique indexes are used solely to improve query performance by maintaining a sorted order of data values that are used frequently.
// *Clustered and Non-Clustered Index:
// Clustered indexes are indexes whose order of the rows in the database corresponds to the order of the rows in the index. This is why only one clustered index can exist in a given table, whereas, multiple non-clustered indexes can exist in the table.
// The only difference between clustered and non-clustered indexes is that the database manager attempts to keep the data in the database in the same order as the corresponding keys appear in the clustered index.
// Clustering indexes can improve the performance of most query operations because they provide a linear-access path to data stored in the database.
//-------------------
// **Primary Index:** 
// Unique, based on the primary key. Quick for finding specific rows.
// **Secondary Index:** 
// Created on non-primary key columns, speeding up searches on these columns.
// **Composite Index:** 
// Combines multiple columns into one index, useful for queries involving those columns together.
// **Clustered Index:** 
// Sorts and stores data rows in the table based on the index key, useful for range queries.
// **Non-Clustered Index:** 
// Creates a separate structure for the index, enhancing search speed but taking more space.
```
-- Creating a table with a primary key
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

-- Adding a secondary index on email column
CREATE INDEX idx_email ON users(email);

-- Adding a composite index on multiple columns
CREATE INDEX idx_name_email ON users(name, email);
```

//! 16. What is Data Integrity?
// Data Integrity is the assurance of accuracy and consistency of data over its entire life-cycle and is a critical aspect of the design, implementation, and usage of any system which stores, processes, or retrieves data. It also defines integrity constraints to enforce business rules on the data when it is entered into an application or a database.

//! 17. What is a Query?
// A query is a request for data or information from a database table or combination of tables. A database query can be either a select query or an action query.
`SELECT fname, lname    /* select query */
FROM myDb.students
WHERE student_id = 1;
UPDATE myDB.students    /* action query */
SET fname = 'Captain', lname = 'America'
WHERE student_id = 1;`

//! 18. What is a Subquery? What are its types?
// A subquery is a query within another query, also known as a nested query or inner query. It is used to restrict or enhance the data to be queried by the main query, thus restricting or enhancing the output of the main query respectively. For example, here we fetch the contact information for students who have enrolled for the maths subject:
`
SELECT name, email, mob, address
FROM myDb.contacts
WHERE roll_no IN (
 SELECT roll_no
 FROM myDb.students
 WHERE subject = 'Maths');`
// *There are two types of subquery - Correlated and Non-Correlated.
// A correlated subquery cannot be considered as an independent query, but it can refer to the column in a table listed in the FROM of the main query.
// A non-correlated subquery can be considered as an independent query and the output of the subquery is substituted in the main query.

//! 19. What is the SELECT statement?
// SELECT operator in SQL is used to select data from a database. The data returned is stored in a result table, called the result-set.
`SELECT * FROM myDB.students`

//! 20. What are some common clauses used with SELECT query in SQL?
// WHERE clause in SQL is used to filter records that are necessary, based on specific conditions.
// ORDER BY clause in SQL is used to sort the records based on some field(s) in ascending (ASC) or descending order (DESC).
`SELECT *
FROM myDB.students
WHERE graduation_year = 2019
ORDER BY studentID DESC;`
// GROUP BY clause in SQL is used to group records with identical data and can be used in conjunction with some aggregation functions to produce summarized results from the database.
// HAVING clause in SQL is used to filter records in combination with the GROUP BY clause. It is different from WHERE, since the WHERE clause cannot filter aggregated records.
`SELECT COUNT(studentId), country
FROM myDB.students
WHERE country != "INDIA"
GROUP BY country
HAVING COUNT(studentID) > 5;`

//! 21. What are UNION, MINUS and INTERSECT commands?
// The UNION operator combines and returns the result-set retrieved by two or more SELECT statements.
// The MINUS operator in SQL is used to remove duplicates from the result-set obtained by the second SELECT query from the result-set obtained by the first SELECT query and then return the filtered results from the first.
// The INTERSECT clause in SQL combines the result-set fetched by the two SELECT statements where records from one match the other and then returns this intersection of result-sets.

// Certain conditions need to be met before executing either of the above statements in SQL -
// - Each SELECT statement within the clause must have the same number of columns
// - The columns must also have similar data types
// - The columns in each SELECT statement should necessarily have the same order
`SELECT name FROM Students   /* Fetch the union of queries */
UNION
SELECT name FROM Contacts;`
`SELECT name FROM Students   /* Fetch the union of queries with duplicates*/
UNION ALL
SELECT name FROM Contacts;`
`SELECT name FROM Students   /* Fetch names from students */
MINUS     /* that aren't present in contacts */
SELECT name FROM Contacts;`
`SELECT name FROM Students   /* Fetch names from students */
INTERSECT    /* that are present in cont acts as well */
SELECT name FROM Contacts;`

//! 22. What is Cursor?
// A **database cursor** helps you move through records in a database. It's like a pointer to one row in a bunch of rows, allowing you to navigate and do things like get, add, or remove records. Cursors are handy for managing data after you've found what you're looking for.

