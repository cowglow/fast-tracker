CREATE TABLE `fast_log`(
    `user_id` CHAR(36) NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `start` TIMESTAMP NOT NULL,
    `end` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
);
ALTER TABLE
    `fast_log` ADD PRIMARY KEY `fast_log_user_id_primary`(`user_id`);
CREATE TABLE `water_log`(
    `user_id` CHAR(36) NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `amount` INT NOT NULL
);
ALTER TABLE
    `water_log` ADD PRIMARY KEY `water_log_user_id_primary`(`user_id`);
CREATE TABLE `weight_log`(
    `user_id` CHAR(36) NOT NULL,
    `weight` INT NOT NULL,
    `create_at` TIMESTAMP NOT NULL
);
ALTER TABLE
    `weight_log` ADD PRIMARY KEY `weight_log_user_id_primary`(`user_id`);
CREATE TABLE `user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` INT NOT NULL,
    `email` INT NOT NULL
);
ALTER TABLE
    `user` ADD PRIMARY KEY `user_id_primary`(`id`);
CREATE TABLE `authentication`(
    `user_id` CHAR(36) NOT NULL,
    `username` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `salt` TEXT NOT NULL
);
ALTER TABLE
    `authentication` ADD UNIQUE `authentication_user_id_unique`(`user_id`);
ALTER TABLE
    `authentication` ADD CONSTRAINT `authentication_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);