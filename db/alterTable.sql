-- This is for dropping columns

ALTER TABLE nameList
DROP COLUMN name;

-- This is for modifying data types

ALTER TABLE nameList
MODIFY COLUMN name varchar;