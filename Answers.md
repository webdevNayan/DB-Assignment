Question 1: Explain the relationship between the "Product" and "Product_Category" entities from the above diagram?

Answer: In the schema provided:

        The "Product" entity has a field named category_id, which is a reference to the "Product_Category" entity.

        This indicates that each product belongs to a specific product category.

        It's a one-to-many relationship, meaning a product category can have multiple products associated with it, but each product belongs to only one category.

        This relationship is established using a foreign key (category_id) in the "Product" table that references the primary key of the "Product_Category" table.


Question 2: How could you ensure that each product in the "Product" table has a valid category assigned to it?

Answer: To ensure that each product in the "Product" table has a valid category assigned to it, you can implement    
        referential integrity constraints using foreign key relationships. In particular:

        Define a foreign key constraint on the category_id column in the "Product" table, which references the primary key (id) column in the "Product_Category" table.

        Ensure that every category_id value in the "Product" table corresponds to an existing id value in the "Product_Category" table.

        Use database features or application logic to enforce this constraint, such as using foreign key constraints in relational databases or validation checks in your application code.

        This ensures that each product is associated with a valid category and prevents orphaned records or inconsistent data in the database.