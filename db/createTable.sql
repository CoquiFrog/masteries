CREATE TABLE nameList (
    nameID SERIAL PRIMARY KEY NOT NULL,
    name varchar(40) NOT NULL,
    age varchar(40) NOT NULL);

    -- varchar is used to take in strings, and you can set in the limit of how many characters can be inputted
    -- integer is for numbers, I chose not to use a number, but a string, for uniformity of data
    -- text is used to take it a string, only there is no limit to how many characters can be inputted.
    -- other data types inclue decimal, boolean, smallint, real, numeric, and such.