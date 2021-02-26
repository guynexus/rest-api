
DROP FUNCTION IF EXISTS set_updatedAt();

CREATE FUNCTION set_updatedAt()
  RETURNS TRIGGER
  LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updatedAT := now();
  RETURN NEW;
END;
$$;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a table
DROP TABLE IF EXISTS "employees";

DROP TABLE IF EXISTS "customers";

CREATE TABLE "employees"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "profession" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "branch" VARCHAR(255) NOT NULL,
    "assigned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	"uuid" UUID NOT NULL DEFAULT uuid_generate_v4() 
);

CREATE TABLE "customers"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "profession" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "branch" VARCHAR(255) NOT NULL,
    "assigned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	"uuid" UUID NOT NULL DEFAULT uuid_generate_v4() 
);


-- Create data
INSERT INTO "employees" ("first_name", "last_name", "code", "profession", "color", "city", "branch", "assigned")
VALUES('Kyle', 'Lowry', 'F100', 'Drywall Installer', 'orange', 'Brampton', 'Abacus', true),
  ('DeMar', 'DeRozen', 'F101', 'Drywall Installer', 'yellow', 'Brampton', 'Pilsworth', false),
  ('Fred', 'Van Vleet', 'F102', 'Drywall Installer', 'green', 'Bolton', 'Abacus', false),
  ('Jonas', 'Valanciunas', 'F103', 'Drywall Installer', '#333333', 'Bolton', 'Pilsworth', true),
  ('Chris', 'Bosch', 'F104', 'Drywall Installer', '#FF6600', 'Brampton', 'Abacus', true),
  ('Marcus', 'Camby', 'F105', 'Runner', 'red', 'Brampton', 'Pilsworth', false),
  ('Vince', 'Carter', 'F106', 'Runner', 'red', 'Toronto', 'Abacus', false);


INSERT INTO "customers" ("first_name", "last_name", "code", "profession", "color", "city", "branch", "assigned")
VALUES('Kyle', 'Lowry', 'F100', 'Drywall Installer', 'orange', 'Brampton', 'Abacus', true),
  ('DeMar', 'DeRozen', 'F101', 'Drywall Installer', 'yellow', 'Brampton', 'Pilsworth', false),
  ('Fred', 'Van Vleet', 'F102', 'Drywall Installer', 'green', 'Bolton', 'Abacus', false),
  ('Jonas', 'Valanciunas', 'F103', 'Drywall Installer', '#333333', 'Bolton', 'Pilsworth', true),
  ('Chris', 'Bosch', 'F104', 'Drywall Installer', '#FF6600', 'Brampton', 'Abacus', true),
  ('Marcus', 'Camby', 'F105', 'Runner', 'red', 'Brampton', 'Pilsworth', false),
  ('Vince', 'Carter', 'F106', 'Runner', 'red', 'Toronto', 'Abacus', false);


select * from employees;
