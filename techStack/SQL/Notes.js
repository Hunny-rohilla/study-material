//? reference: 
//? https://www.interviewbit.com/sql-interview-questions/
//? https://www.postgresqltutorial.com/
//? https://www.interviewbit.com/blog/postgresql-commands/
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

//! 23. What are Entities and Relationships?
// *Entity: 
// An entity can be a real-world object, either tangible or intangible, that can be easily identifiable. For example, in a college database, students, professors, workers, departments, and projects can be referred to as entities. Each entity has some associated properties that provide it an identity.
// *Relationships: 
// Relations or links between entities that have something to do with each other. For example - The employee's table in a company's database can be associated with the salary table in the same database.

//! 24. List the different types of relationships in SQL.
// *One-to-One 
// This can be defined as the relationship between two tables where each record in one table is associated with the maximum of one record in the other table.
// *One-to-Many & Many-to-One 
// This is the most commonly used relationship where a record in a table is associated with multiple records in the other table.
// *Many-to-Many 
// This is used in cases when multiple instances on both sides are needed for defining a relationship.
// *Self-Referencing Relationships 
// This is used when a table needs to define a relationship with itself.

//! 25. What is an Alias in SQL?
// An alias in SQL is a temporary name given to a table or column in a query. It helps simplify queries and can be used for security by hiding actual field names. Table aliases are also known as correlation names. It's recommended to use the AS keyword for clarity, although it's not always required.
// -- Using AS keyword for table alias
`SELECT t1.column1 AS alias_name
FROM table1 AS t1;`
// -- Without AS keyword (less common)
`SELECT t1.column1 alias_name
FROM table1 t1;`

//! 26. What is a View?
// A view in SQL is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

//! 27. What is Normalization?
// Normalization is about structuring data in a database to make it efficient and organized. It involves creating tables, linking them together, and setting rules for these connections. This helps to avoid inconsistencies and unnecessary repetition of data, making the database more flexible and easier to manage.

//! 28. What is Denormalization?
// Denormalization is the inverse process of normalization, where the normalized schema is converted into a schema that has redundant information. The performance is improved by using redundancy and keeping the redundant data consistent. The reason for performing denormalization is the overheads produced in the query processor by an over-normalized structure.

//! 29. What are the various forms of Normalization?
// Normal Forms are used to eliminate or reduce redundancy in database tables. The different forms are as follows:
// *First Normal Form:
// A relation is in first normal form if every attribute in that relation is a single-valued attribute. If a relation contains a composite or multi-valued attribute, it violates the first normal form. Let's consider the following students table. Each student in the table, has a name, his/her address, and the books they issued from the public library.
// *Second Normal Form:
// A relation is in second normal form if it satisfies the conditions for the first normal form and does not contain any partial dependency. A relation in 2NF has no partial dependency, i.e., it has no non-prime attribute that depends on any proper subset of any candidate key of the table. Often, specifying a single column Primary Key is the solution to the problem.
// *Third Normal Form
// A relation is said to be in the third normal form, if it satisfies the conditions for the second normal form and there is no transitive dependency between the non-prime attributes, i.e., all non-prime attributes are determined only by the candidate keys of the relation and not by any other non-prime attribute.
// *Boyce-Codd Normal Form
// A relation is in Boyce-Codd Normal Form if satisfies the conditions for third normal form and for every functional dependency, Left-Hand-Side is super key. In other words, a relation in BCNF has non-trivial functional dependencies in form X –> Y, such that X is always a super key. For example - In the above example, Student_ID serves as the sole unique identifier for the Students Table and Salutation_ID for the Salutations Table, thus these tables exist in BCNF. The same cannot be said for the Books Table and there can be several books with common Book Names and the same Student_ID

//! 30. What are the TRUNCATE, DELETE and DROP statements?
// DELETE statement is used to delete rows from a table.
`DELETE FROM Candidates
WHERE CandidateId > 1000;`
// TRUNCATE command is used to delete all the rows from the table and free the space containing the table.
`TRUNCATE TABLE Candidates;`
// DROP command is used to remove an object from the database. If you drop a table, all the rows in the table are deleted and the table structure is removed from the database.
`DROP TABLE Candidates;`

//! 31. What is the difference between DROP and TRUNCATE statements?
// If a table is dropped, all things associated with the tables are dropped as well. This includes - the relationships defined on the table with other tables, the integrity checks and constraints, access privileges and other grants that the table has. To create and use the table again in its original form, all these relations, checks, constraints, privileges and relationships need to be redefined. However, if a table is truncated, none of the above problems exist and the table retains its original structure

//! 32. What is the difference between DELETE and TRUNCATE statements?
// The TRUNCATE command is used to delete all the rows from the table and free the space containing the table.
// The DELETE command deletes only the rows from the table based on the condition given in the where clause or deletes all the rows from the table if no condition is specified. But it does not free the space containing the table.

//! 33. What are Aggregate and Scalar functions?
// **Aggregate Functions:**
// Aggregate functions in SQL perform operations on a group of values and return a single value. They are commonly used with the GROUP BY and HAVING clauses in SELECT statements. Examples of widely used SQL aggregate functions include COUNT, SUM, AVG, MIN, and MAX.
// -AVG() - Calculates the mean of a collection of values.
// -COUNT() - Counts the total number of records in a specific table or view.
// -MIN() - Calculates the minimum of a collection of values.
// -MAX() - Calculates the maximum of a collection of values.
// -SUM() - Calculates the sum of a collection of values.
// -FIRST() - Fetches the first element in a collection of values.
// -LAST() - Fetches the last element in a collection of values.
// Note: All aggregate functions described above ignore NULL values except for the COUNT function.
```
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
```
// **Scalar Functions:**
// Scalar functions, on the other hand, operate on a single input value and return a single output value. They can be used within SQL queries to manipulate data at the row level. Examples of scalar functions include CONCAT, UPPER, LOWER, and DATE functions.
// -LEN() - Calculates the total length of the given field (column).
// -UCASE() - Converts a collection of string values to uppercase characters.
// -LCASE() - Converts a collection of string values to lowercase characters.
// -MID() - Extracts substrings from a collection of string values in a table.
// -CONCAT() - Concatenates two or more strings.
// -RAND() - Generates a random collection of numbers of a given length.
// -ROUND() - Calculates the round-off integer value for a numeric field (or decimal point values).
// -NOW() - Returns the current date & time.
// -FORMAT() - Sets the format to display a collection of values

//! 34. What is User-defined function? What are its various types?
// The user-defined functions in SQL are like functions in any other programming language that accept parameters, perform complex calculations, and return a value. They are written to use the logic repetitively whenever required. There are two types of SQL user-defined functions:
// *Scalar Function: 
// As explained earlier, user-defined scalar functions return a single scalar value.
// *Table-Valued Functions: 
// User-defined table-valued functions return a table as output.
// - Inline: returns a table data type based on a single SELECT statement.
// - Multi-statement: returns a tabular result-set but, unlike inline, multiple SELECT statements can be used inside the function body.
`-- Scalar Function
CREATE FUNCTION dbo.CalculateTax(@Amount DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @Tax DECIMAL(10, 2);
    SET @Tax = @Amount * 0.1; -- Assuming 10% tax rate
    RETURN @Tax;
END;

-- Inline Table-Valued Function
CREATE FUNCTION dbo.GetProductsByCategory(@CategoryID INT)
RETURNS TABLE
AS
RETURN (
    SELECT ProductID, ProductName, UnitPrice
    FROM Products
    WHERE CategoryID = @CategoryID
);`
// In this example, CalculateTax is a scalar function that calculates tax based on the input amount, while GetProductsByCategory is an inline table-valued function that retrieves products based on a specified category ID.

//! 36. What are the differences between OLTP and OLAP?
// *OLTP (Online Transaction Processing):
// OLTP stands for Online Transaction Processing, is a class of software applications capable of supporting transaction-oriented programs. An important attribute of an OLTP system is its ability to maintain concurrency. OLTP systems often follow a decentralized architecture to avoid single points of failure. These systems are generally designed for a large audience of end-users who conduct short transactions. Queries involved in such databases are generally simple, need fast response times, and return relatively few records. A number of transactions per second acts as an effective measure for such systems.
// *OLAP (Online Analytical Processing):
// OLAP stands for Online Analytical Processing, a class of software programs that are characterized by the relatively low frequency of online transactions. Queries are often too complex and involve a bunch of aggregations. For OLAP systems, the effectiveness measure relies highly on response time. Such systems are widely used for data mining or maintaining aggregated, historical data, usually in multi-dimensional schemas.

//! 37. What is Collation? What are the different types of Collation Sensitivity?
// Collation refers to a set of rules that determine how data is sorted and compared. Rules defining the correct character sequence are used to sort the character data. It incorporates options for specifying case sensitivity, accent marks, kana character types, and character width. Below are the different types of collation sensitivity:
// - Case sensitivity: A and a are treated differently.
// - Accent sensitivity: a and á are treated differently.
// - Kana sensitivity: Japanese kana characters Hiragana and Katakana are treated differently.
// - Width sensitivity: Same character represented in single-byte (half-width) and double-byte (full-width) are treated differently.

//! 40. How to create empty tables with the same structure as another table?
// Creating empty tables with the same structure can be done smartly by fetching the records of one table into a new table using the INTO operator while fixing a WHERE clause to be false for all records. Hence, SQL prepares the new table with a duplicate structure to accept the fetched records but since no records get fetched due to the WHERE clause in action, nothing is inserted into the new table.
`SELECT * INTO Students_copy
FROM Students WHERE 1 = 2;`

//! 41. What is Pattern Matching in SQL?
// SQL pattern matching provides for pattern search in data if you have no clue as to what that word should be. This kind of SQL query uses wildcards to match a string pattern, rather than writing the exact word. The LIKE operator is used in conjunction with SQL Wildcards to fetch the required information.
// *Using the % wildcard to perform a simple search
// The % wildcard matches zero or more characters of any type and can be used to define wildcards both before and after the pattern. Search a student in your database with first name beginning with the letter K:
`SELECT *
FROM students
WHERE first_name LIKE 'K%'`
// *Omitting the patterns using the NOT keyword
// Use the NOT keyword to select records that don't match the pattern. This query returns all students whose first name does not begin with K.
`SELECT *
FROM students
WHERE first_name NOT LIKE 'K%'`
// *Matching a pattern anywhere using the % wildcard twice
// Search for a student in the database where he/she has a K in his/her first name.
`SELECT *
FROM students
WHERE first_name LIKE '%Q%'`
// *Using the _ wildcard to match pattern at a specific position
// The _ wildcard matches exactly one character of any type. It can be used in conjunction with % wildcard. This query fetches all students with letter K at the third position in their first name.
`SELECT *
FROM students
WHERE first_name LIKE '__K%'`
// *Matching patterns for a specific length
// The _ wildcard plays an important role as a limitation when it matches exactly one character. It limits the length and position of the matched results. For example - 
`SELECT *   /* Matches first names with three or more letters */
FROM students
WHERE first_name LIKE '___%'

SELECT *   /* Matches first names with exactly four characters */
FROM students
WHERE first_name LIKE '____'`

//================================================================
//## PostgreSQL Interview Questions
//================================================================

//! 1. What is PostgreSQL?
// PostgreSQL was first called Postgres and was developed by a team led by Computer Science Professor Michael Stonebraker in 1986. It was developed to help developers build enterprise-level applications by upholding data integrity by making systems fault-tolerant. PostgreSQL is therefore an enterprise-level, flexible, robust, open-source, and object-relational DBMS that supports flexible workloads along with handling concurrent users. It has been consistently supported by the global developer community. Due to its fault-tolerant nature, PostgreSQL has gained widespread popularity among developers
//? https://www.interviewbit.com/blog/postgresql-commands/

//! What is the difference between PostgreSQL and MySQL?
// **Introduction:**
// PostgreSQL and MySQL are widely used open-source relational database management systems (RDBMS) for data storage and management.
// **Data Handling:**
// - PostgreSQL offers advanced features and supports complex queries and data types.
// - MySQL is known for its user-friendly interface, making it ideal for simpler applications and web development projects.
// **Performance:**
// - PostgreSQL performs well with complex queries and large datasets.
// - MySQL is faster for read-heavy operations but may struggle with complex queries and heavy writes.
// **Transactions and Concurrency:**
// - PostgreSQL excels in supporting transactions and concurrency control, ensuring strict data consistency.
// - MySQL also supports transactions but may need extra setup for high-concurrency scenarios.
// **Community and Ecosystem:**
// - PostgreSQL has a strong community and extensive ecosystem with many available extensions and tools.
// - MySQL, supported by Oracle Corporation, boasts a large user base and various plugins and integrations.
// **Use Cases:**
// - PostgreSQL is popular for data warehousing, GIS (geographic information system) applications, and scenarios requiring strong data integrity.
// - MySQL shines in web apps, content management systems (CMS), and situations prioritizing quick setup and ease of use.
// **Conclusion:**
// Both PostgreSQL and MySQL are robust database systems, each with distinct strengths and suitable use cases. The choice between them depends on factors like data complexity, performance needs, and ecosystem preferences.

//! 2. How do you define Indexes in PostgreSQL?
// Indexes in PostgreSQL are built-in functions that help queries search for data more efficiently in a database table. Imagine you have a table with thousands of records and you run a query that needs only a few records meeting a specific condition. Without an index, the database engine has to check each row individually to find matches, which can be very slow and inefficient, especially with large amounts of data.
// However, if you create an index on the column used in the search condition, PostgreSQL can quickly identify matching rows by navigating through a smaller subset of data. This process is called indexing and significantly speeds up search operations.

```
CREATE INDEX index_name ON table_name (column_name);

Select * from some_table where table_col=120
```
//! 3. How will you change the datatype of a column?
// This can be done by using the ALTER TABLE statement as shown below:
`Syntax:
ALTER TABLE tname
ALTER COLUMN col_name [SET DATA] TYPE new_data_type;`

//! 4. What is the command used for creating a database in PostgreSQL?
// The first step of using PostgreSQL is to create a database. This is done by using the createdb command as shown below: 
`createdb db_name`
// After running the above command, if the database creation was successful, then the below message is shown:
`CREATE DATABASE`

//! 5. How can we start, restart and stop the PostgreSQL server?
// To start the PostgreSQL server, we run:
`service postgresql start`
// Once the server is successfully started, we get the below message:
// Starting PostgreSQL: ok
// To restart the PostgreSQL server, we run:
`service postgresql restart`
// Once the server is successfully restarted, we get the message:
// Restarting PostgreSQL: server stopped ok
// To stop the server, we run the command:
`service postgresql stop`
// Once stopped successfully, we get the message:
// Stopping PostgreSQL: server stopped ok

//! 6. What are partitioned tables called in PostgreSQL?
// **What are Partitioned Tables?**
// Partitioned tables are used to divide large tables into smaller parts called partitions. This helps improve query performance with big database tables.
// **Creating Partitions:**
// -Define a partition key (usually a table column or expression).
// -Choose a partitioning method.

// #Types of Partitioning Methods:
// **Range Partitioning:** 
// Divides based on a range of values, often used for date fields (e.g., monthly, weekly, yearly data). Handles corner cases like values at range ends correctly.
// **List Partitioning:** 
// Divides based on a list of known values (e.g., sales data by regions like countries, cities, states).
// **Hash Partitioning:** 
// Uses a hash function on the partition key, suitable when no specific data division is needed (e.g., accessing data for a specific product).
// **Impact on Performance and Manageability:**
// The type of partition key and method used affect performance and manageability of the partitioned table.

//! 7. Define tokens in PostgreSQL?
// Tokens in PostgreSQL refer to various elements such as keywords, identifiers, literals, constants, quoted identifiers, and symbols that have specific meanings within the database. These tokens can be separated by spaces, newlines, or tabs, but it's not always necessary.
// If a token represents a keyword, it typically denotes a command or action with a specific purpose in PostgreSQL. Tokens are fundamental units that make up PostgreSQL code, serving as the building blocks for constructing database queries, commands, and scripts.
```sql
-- Example of PostgreSQL tokens in a SQL query
SELECT * FROM users WHERE age > 25;
```
// In this SQL query, "SELECT," "*", "FROM," "users," "WHERE," "age," ">", and "25" are all tokens representing different elements like keywords, identifiers, and literals.

//! 8. What is the importance of the TRUNCATE statement?
// TRUNCATE TABLE name_of_table statement removes the data efficiently and quickly from the table.
// The truncate statement can also be used to reset values of the identity columns along with data cleanup as shown below:
`TRUNCATE TABLE name_of_table 
RESTART IDENTITY;`
// We can also use the statement for removing data from multiple tables all at once by mentioning the table names separated by comma as shown below:
`TRUNCATE TABLE 
   table_1, 
   table_2,
   table_3;`

//! 9. What is the capacity of a table in PostgreSQL?
// The maximum size of PostgreSQL is 32TB.

//! 10. Define sequence.
// A sequence is a schema-bound, user-defined object which aids to generate a sequence of integers. This is most commonly used to generate values to identity columns in a table. We can create a sequence by using the CREATE SEQUENCE statement as shown below:
`CREATE SEQUENCE serial_num START 100;`
// To get the next number 101 from the sequence, we use the nextval() method as shown below:
`SELECT nextval('serial_num');`
// We can also use this sequence while inserting new records using the INSERT command:
`INSERT INTO ib_table_name VALUES (nextval('serial_num'), 'interviewbit');`

//! 11. What are string constants in PostgreSQL?
// They are character sequences bound within single quotes. These are using during data insertion or updation to characters in the database.
// There are special string constants that are quoted in dollars. Syntax: $tag$<string_constant>$tag$ The tag in the constant is optional and when we are not specifying the tag, the constant is called a double-dollar string literal.

//! 12. How can you get a list of all databases in PostgreSQL?
// This can be done by using the command \l -> backslash followed by the lower-case letter L.

//! 13. How can you delete a database in PostgreSQL?
// DROP DATABASE database_name;

//! 14. What are ACID properties? Is PostgreSQL compliant with ACID?
// ## ACID Properties in Databases:
// **Atomicity:** 
// Transactions are either fully completed or not at all, ensuring no partial updates occur.
// **Consistency:** 
// Database updates follow rules and constraints, maintaining data integrity.
// **Isolation:** 
// Transactions are isolated from each other to prevent interference, ensuring transaction integrity.
// **Durability:** 
// Committed transactions are permanently stored in the database, even in the event of system failures.
// **Example:** 
// PostgreSQL adheres to the ACID properties, providing reliability and data consistency in transactions.

//! 15. Can you explain the architecture of PostgreSQL?
// # Architecture of PostgreSQL: 
// PostgreSQL follows the client-server model, where the server side includes various components working together to manage data. The client application connects to this server to access and process data.
// # Server Side Components:
// The server side of PostgreSQL consists of:
// **Background Process Manager**
// Manages background processes for tasks like logging and maintenance.
// **Query Processor**
// Handles queries from clients and interacts with the database.
// **Utilities**
// Provides tools for database management tasks.
// **Shared Memory Space**
// Allows processes to share data efficiently.
// Together, these components create a PostgreSQL instance with access to the stored data.

// # Client Application:
// The client application, which can be a Graphical User Interface (GUI) or a web application, connects to the PostgreSQL instance on the server side. It sends requests for data processing and interacts with the services provided by the server.
// - Popular Client: pgAdmin

//! 16. What do you understand by multi-version concurrency control?
// MVCC or Multi-version concurrency control is used for avoiding unnecessary database locks when 2 or more requests tries to access or modify the data at the same time. This ensures that the time lag for a user to log in to the database is avoided. The transactions are recorded when anyone tries to access the content.

//! 17. What do you understand by command enable-debug?
// The command enable-debug is used for enabling the compilation of all libraries and applications. When this is enabled, the system processes get hindered and generally also increases the size of the binary file. Hence, it is not recommended to switch this on in the production environment. This is most commonly used by developers to debug the bugs in their scripts and help them spot the issues

//! 20. What is the main disadvantage of deleting data from an existing table using the DROP TABLE command?
// DROP TABLE command deletes complete data from the table along with removing the complete table structure too. In case our requirement entails just remove the data, then we would need to recreate the table to store data in it. In such cases, it is advised to use the TRUNCATE command.

//! 21. How do you perform case-insensitive searches using regular expressions in PostgreSQL?
// To perform case insensitive matches using a regular expression, we can use POSIX (~*) expression from pattern matching operators. For example:
`'interviewbit' ~* '.*INTervIewBit.*'`

//! 22. How will you take backup of the database in PostgreSQL?
// We can achieve this by using the pg_dump tool for dumping all object contents in the database into a single file. The steps are as follows:
// - Step 1: Navigate to the bin folder of the PostgreSQL installation path.
`C:\>cd C:\Program Files\PostgreSQL\10.0\bin`
// - Step 2: Execute pg_dump program to take the dump of data to a .tar folder as shown below:
`pg_dump -U postgres -W -F t sample_data > C:\Users\admin\pgbackup\sample_data.tar`
// The database dump will be stored in the sample_data.tar file on the location specified.

//! 23. Does PostgreSQL support full text search?
// Full-Text Search is the method of searching single or collection of documents stored on a computer in a full-text based database. This is mostly supported in advanced database systems like SOLR or ElasticSearch. However, the feature is present but is pretty basic in PostgreSQL.

//! 24. What are parallel queries in PostgreSQL?
// Parallel Queries support is a feature provided in PostgreSQL for devising query plans capable of exploiting multiple CPU processors to execute the queries faster.

//! 25. Differentiate between commit and checkpoint.
// The commit action ensures that the data consistency of the transaction is maintained and it ends the current transaction in the section. Commit adds a new record in the log that describes the COMMIT to the memory. Whereas, a checkpoint is used for writing all changes that were committed to disk up to SCN which would be kept in datafile headers and control files.


// # Conclusion:
// SQL is a language for the database. It has a vast scope and robust capability of creating and manipulating a variety of database objects using commands like CREATE, ALTER, DROP, etc, and also in loading the database objects using commands like INSERT. It also provides options for Data Manipulation using commands like DELETE, TRUNCATE and also does effective retrieval of data using cursor commands like FETCH, SELECT, etc. There are many such commands which provide a large amount of control to the programmer to interact with the database in an efficient way without wasting many resources. The popularity of SQL has grown so much that almost every programmer relies on this to implement their application's storage functionalities thereby making it an exciting language to learn. Learning this provides the developer a benefit of understanding the data structures used for storing the organization's data and giving an additional level of control and in-depth understanding of the application.
// PostgreSQL being an open-source database system having extremely robust and sophisticated ACID, Indexing, and Transaction supports has found widespread popularity among the developer community. 

//================================================================
// ## Top PostgreSQL Commands You Must Know
//================================================================

//! 1. Connect to PostgreSQL Database
`psql -d database -U  user -W`
// If you want to connect to a database that is hosted on a different server, use the -h option:
`psql -h host -d database -U user -W`

//! 2. Change the database connection to a new one
`\c dbname username`
// postgres=# \c user_db
// You are now connected to database "user_db" as user "postgres".
// user_ab=#

//! 3. List available database
`\l`

//! 4. List available table
`\dt`

//! 5. Describe table
`\d table_name`

//! 6. List available schema
`\dn`

//! 7. List available function
`\df`

//! 8. List all views
`\dv`

//! 10. Execute the previous command
// To retrieve the current version of PostgreSQL server, you use the version() function as follows:
`SELECT version();`
// Output :
// postgres (PostgreSQL) 9.3.10
// If you wish to save time by not having to type the preceding command twice, you can use the \g command to do so:
`\g`
// The previous command, the SELECT statement, is repeated by psql.

//! 14. Turn on query execution time
`\timing`
// The \timing command is used to enable query execution time. This command helps you know the execution time of the query. For eg : 1.495ms for the below example.
`user_ab=# \timing
Timing is on.
user_ab=# select count(*) from film;
 count
-------
  1000
(1 row)

Time: 1.495 ms
user_ab=#`

//! 17. Quit psql
`\q`

//! Q.2: What are the Features of PostgreSQL?
// Ans: PostgreSQL is a powerful, open-source object-relational database system that has a solid reputation in stability, feature robustness, and performance.