CREATE DATABASE tp_nodejs;
USE tp_nodejs;

SELECT * FROM folders as f  JOIN photos as p on p.folder_id = f.id;