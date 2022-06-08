DROP TABLE IF EXISTS git; 
DROP TABLE IF EXISTS types;

CREATE TABLE IF NOT EXISTS public.TypeDetail
(
	id SERIAL NOT NULL UNIQUE, 
	name VARCHAR(30) NOT NULL
);
CREATE TABLE IF NOT EXISTS public.Git
(
    id SERIAL NOT NULL UNIQUE,
    command character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description text,
    categories text[],
    views integer DEFAULT 0,
	typeId integer NOT NULL REFERENCES TypeDetail(id)
);

INSERT INTO TypeDetail(typeName)
VALUES('git'), ('bash'), ('docker');

INSERT INTO Git(command, description, categories, views, typeId)
VALUES ('git init', 'initialize local git repo', '{''}' ,  0, 1 ), 
('git status', 'The current status of the git repo', '{"status"}', 0, 1 ), 
('git add', 'Add current changes into staging env', '{"create", "add", "insert"}',0, 1); 

ALTER TABLE IF EXISTS public.git
OWNER to root;

-- SELECT Git.command, Types.typeName
-- FROM Git
-- LEFT JOIN Types
-- ON Git.typeId = Types.id;