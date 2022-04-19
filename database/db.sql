CREATE DATABASE tp_nodejs;
USE tp_nodejs;
CREATE TABLE folders (
    id INT UNSIGNED AUTO_INCREMENT,
    folder_name VARCHAR(80) NOT NULL,
    parent_id INT UNSIGNED,
    PRIMARY KEY (id),
    CONSTRAINT folders_to_parent
        FOREIGN KEY (parent_id)
        REFERENCES folders(id)
);

CREATE TABLE IF NOT EXISTS photos(
    id INT UNSIGNED AUTO_INCREMENT,
    photo_name VARCHAR(30) NOT NULL,
    folder_id int,
    photo_legend VARCHAR(128),
    PRIMARY KEY (id)
);

SELECT * FROM photos as p
JOIN folders as f on f.id = p.folder_id;