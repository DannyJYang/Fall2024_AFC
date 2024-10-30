CREATE TABLE monster
(
    id             BIGINT NOT NULL,
    name           VARCHAR(255),
    icon           VARCHAR(255),
    weakness_chart VARCHAR(255),
    CONSTRAINT pk_monster PRIMARY KEY (id)
);