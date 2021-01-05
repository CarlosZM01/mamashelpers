CREATE DATABASE db_cursos;

USE db_cursos;

CREATE TABLE cursos(
    id_curso INT(11) NOT NULL IDENTITY(1,1) PRIMARY KEY,
    img_curso VARCHAR(200),
    nom_curso VARCHAR(255),
    cat_curso VARCHAR(180),
    esp_curso VARCHAR(180),
    cant_curso INT(20),
    dur_curso VARCHAR(180),
    des_curso VARCHAR(255),
    videos VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

EXEC cursos;