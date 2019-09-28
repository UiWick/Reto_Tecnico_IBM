use IBMSUM;

create table SUMA
(
sumando01 int,
sumando02 int,
resultado int
);

DROP PROCEDURE IF EXISTS sp_Sum;
DELIMITER //
CREATE PROCEDURE sp_Sum(
IN v1 int,
IN v2 int
)
BEGIN
INSERT into SUMA (sumando01,sumando02,resultado) values (v1,v2,(v1+v2));
END //
DELIMITER ;  