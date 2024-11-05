DROP TABLE IF EXISTS monster_table;

CREATE TABLE monster_table
(
    id          BIGINT NOT NULL,
    name        VARCHAR(255),
    is_favorite BOOLEAN,
    CONSTRAINT pk_monster_table PRIMARY KEY (id)
);