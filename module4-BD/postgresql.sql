/* 

$>> docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres:13.0 
$>> docker exec -it -u postgres some-postgres psql

load file in docker
>> docker cp ./postgresql.sql some-postgres:/docker-entrypoint-initdb.d/postgresql.sql   
>> docker exec -u postgres some-postgres psql postgres postgres -f docker-entrypoint-initdb.d/postgresql.sql

command	description
\c	connect
\l	list databases
\d	list visible tables
\d <table_name>	list table details
\i FILE	execute commands from file
\q	quit
\x	toggle expanded display

exercices postgresqltutorial: docker cp /Users/ravn/Documents/dvdrental.tar some-postgres:/dvdrental.tar

*/

/*CREATING A TABLE*/
CREATE TABLE person (
  id int,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  gender VARCHAR(7),
  date_of_birth DATE
);

/*DROPPING A TABLE8*/
DROP TABLE person;

CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  gender VARCHAR(7) NOT NULL,
  date_of_birth DATE NOT NULL,
  email VARCHAR(150)
);

/*INSERT STATEMENT*/
INSERT INTO person (
  first_name,
  last_name,
  gender,
  date_of_birth
)
VALUES (
  'Patricia', 'rodriguez', 'FEMALE', DATE '1988-01-09'
);


INSERT INTO person (
  first_name,
  last_name,
  gender,
  date_of_birth,
  email
)
VALUES (
  'Patrick', 'Rodriguez', 'MALE', DATE '1990-01-10', 'patrick@ravn.co'
);


/*Consults */


/*ORDER BY single column*/

SELECT * FROM person ORDER BY id DESC;


/*ORDER BY multiple columns*/

SELECT * FROM person ORDER BY first_name, email DESC;


/*DISTINCT CLAUSE*/

SELECT DISTINCT date_of_birth FROM person ORDER BY date_of_birth;



/*WHERE CLAUSE 
Filter data based on conditions*/

SELECT * FROM person WHERE gender = 'Male';


/* AND KEYWORD */
SELECT * FROM person WHERE gender='MALE' AND email = 'patricia@ravn.co';


/* OR KEYWORD */
SELECT * FROM person WHERE first_name = 'Patrick' OR first_name = 'Rodriguez';


/*postgresqltutorial*/

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
	customer_id serial PRIMARY KEY,
	name VARCHAR UNIQUE,
	email VARCHAR NOT NULL,
	active bool NOT NULL DEFAULT TRUE
);

INSERT INTO 
    customers (name, email)
VALUES 
    ('IBM', 'contact@ibm.com'),
    ('Microsoft', 'contact@microsoft.com'),
    ('RAVN', 'contact@ravn.co');



select '************************ INSERT CONFLICT ----- name exists in the  customers table, just ignore it ';
INSERT INTO customers (NAME, email)
VALUES('Microsoft','patrick@microsoft.com') 
ON CONFLICT ON CONSTRAINT customers_name_key 
DO NOTHING;

SELECT * FROM  customers;


select '************************ INSERT CONFLICT ----- name exists in the  customers table, update it ';
INSERT INTO customers (name, email)
VALUES('Microsoft','patrick@microsoft.com') 
ON CONFLICT (name) 
DO 
   UPDATE SET email = EXCLUDED.email || ';' || customers.email
RETURNING name;

SELECT * FROM  customers;




select '************************ TABLE TEMPS ************************ ';
CREATE TEMP TABLE customers(
    customer_id INT
);

SELECT * FROM  customers;

/******* 
JSON TABLES 
********/
select '************************ TABLE TEMPS ************************ ' as chapter;
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);
INSERT INTO orders (info)
VALUES('{ "customer": "Lily Bush", "items": {"product": "Diaper","qty": 24}}'),
      ('{ "customer": "Josh William", "items": {"product": "Toy Car","qty": 1}}'),
      ('{ "customer": "Mary Clark", "items": {"product": "Toy Train","qty": 2}}');

select * from orders;

/************
 FORENKEY AND TABLES 
 *************/

DROP TABLE IF EXISTS service_record;
DROP TABLE IF EXISTS car;
create table car (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	make VARCHAR(50),
	model VARCHAR(50),
	price NUMERIC (19, 2)
);
insert into car (id, make, model, price) values (1, 'SUBARU', 'WRX', '33672.61');
insert into car (id, make, model, price) values (2, 'Chrysler', 'LHS', '88520.39');
insert into car (id, make, model, price) values (3, 'Audi', 'TT', '98275.27');
insert into car (id, make, model, price) values (4, 'Ford', 'Tempo', '29224.56');


CREATE TABLE service_record (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    car_id BIGINT,
    service_type VARCHAR(50),
    service_date DATE,
    comments VARCHAR(200),

    CONSTRAINT car_id_fk FOREIGN KEY (car_id) REFERENCES car (id),

    CONSTRAINT service_type CHECK (
        service_type = 'SCHEDULED MAINTENANCE' OR 
        service_type = 'REPAIR' OR 
        service_type = 'OTHER'
    )
);

insert into service_record (car_id, service_type, service_date) values (1, 'SCHEDULED MAINTENANCE', '2019-01-05');
insert into service_record (car_id, service_type, service_date) values (1, 'SCHEDULED MAINTENANCE', '2019-06-05');
insert into service_record (car_id, service_type, service_date) values (2, 'REPAIR', '2019-01-15');

select '************************ SELECT INNER JOINS ************************';
SELECT * FROM car  INNER JOIN service_record ON car.id = service_record.car_id;


/******** 
OPERATOR ALL IN SUBQUERY --dvdrental
is new for my
*********/

-- SELECT
--     film_id,
--     title,
--     length
-- FROM
--     film
-- WHERE
--     length > ALL (
--             SELECT
--                 ROUND(AVG (length),2)
--             FROM
--                 film
--             GROUP BY
--                 rating
--     )
-- ORDER BY
--     length;

/********** 
CUBE
is new for my
***********/

DROP TABLE IF EXISTS sales;
CREATE TABLE sales (
    brand VARCHAR NOT NULL,
    segment VARCHAR NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (brand, segment)
);

INSERT INTO sales (brand, segment, quantity)
VALUES
    ('ABC', 'Premium', 100),
    ('ABC', 'Basic', 200),
    ('XYZ', 'Premium', 100),
    ('XYZ', 'Basic', 300);


select '************************ CUBE FULL COMBINATIONS ************************ ' as chapter;
SELECT 
    brand,
    segment,
    SUM (quantity)
FROM
    sales
GROUP BY
    ROLLUP (brand, segment)
ORDER BY
    brand,
    segment;


/**********
UUID values
is new for my
***********/


select '************************ UUID ************************ ' as chapter;

--CREATE EXTENSION "uuid-ossp";
 
SELECT uuid_generate_v1(), uuid_generate_v1mc(), uuid_generate_v4();

CREATE TABLE contacts (
    contact_id uuid DEFAULT uuid_generate_v4 (),
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    PRIMARY KEY (contact_id)
);

INSERT INTO contacts (
    first_name,
    last_name,
    email,
    phone
)
VALUES
    (
        'John',
        'Smith',
        'john.smith@example.com',
        '408-237-2345'
    ),
    (
        'Jane',
        'Smith',
        'jane.smith@example.com',
        '408-237-2344'
    ),
    (
        'Alex',
        'Smith',
        'alex.smith@example.com',
        '408-237-2343'
    );

SELECT * FROM contacts;


/******** 
Procedures
*********/


select '************************ PROCEDURES ************************ ' as chapter;
drop table if exists accounts;

create table accounts (
    id int generated by default as identity,
    name varchar(100) not null,
    balance dec(15,2) not null,
    primary key(id)
);

insert into accounts(name,balance)
values('Bob',10000);

insert into accounts(name,balance)
values('Alice',10000);

create or replace procedure updateBalance(
   sender int,
   receiver int, 
   amount dec
)
language plpgsql    
as $$
begin
    -- subtracting the amount from the sender's account 
    update accounts 
    set balance = balance - amount 
    where id = sender;

    -- adding the amount to the receiver's account
    update accounts 
    set balance = balance + amount 
    where id = receiver;

    commit;
end;$$

