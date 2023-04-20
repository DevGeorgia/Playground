
CREATE DATABASE test DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE test;

-- Structure de la table `utilisateurs`
DROP TABLE IF EXISTS utilisateurs;
CREATE TABLE IF NOT EXISTS utilisateurs (
  id int(11) NOT NULL AUTO_INCREMENT,
  pseudo text NOT NULL,
  pass varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;
