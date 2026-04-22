CREATE TABLE Agentes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    npn VARCHAR(50)
);

CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    agente_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fec_nac DATE,
    numero VARCHAR(100)
    FOREIGN KEY (agente_id) REFERENCES Agentes(id)
)