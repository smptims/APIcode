CREATE TABLE `smptims`.`customer_sales_smry` (
  `css_seq_no` INT(20) NOT NULL AUTO_INCREMENT,
  `customer_no` INT(200) NOT NULL,
  `sales_dt` TIMESTAMP(6) NOT NULL,
  `invoice_no` VARCHAR(100) NOT NULL,
  `invoice_dt` TIMESTAMP(6) NOT NULL,
  `invoice_amt` INT(100) NOT NULL,
  `no_of_devices_sold` INT(100) NOT NULL,
  `amt_paid_f` CHAR(1) NOT NULL,
  `purchase_order_copy` BLOB NULL,
  `status` VARCHAR(10) NOT NULL,
  `rec_create_dt` TIMESTAMP(6) NOT NULL,
  `rec_create_user` VARCHAR(45) NOT NULL,
  `rec_updt_dt` TIMESTAMP(6) NULL,
  `rec_updt_user` VARCHAR(45) NULL,
  PRIMARY KEY (`css_seq_no`));

CREATE TABLE `smptims`.`product_cust_sale_dtls` (
  `pcsd_seq_no` INT(20) NOT NULL,
  `customer_no` INT(50) NULL,
  `prod_code` VARCHAR(45) NULL,
  `device_no` VARCHAR(45) NULL,
  `manuf_dt` TIMESTAMP(6) NULL,
  `sales_dt` TIMESTAMP(6) NULL,
  `warranty_period` INT(10) NULL,
  `service_required` CHAR(1) NULL,
  `warranty_dt` TIMESTAMP(6) NULL,
  `next_service_dt` TIMESTAMP(6) NULL,
  `status` VARCHAR(10) NULL,
  `rec_create_dt` TIMESTAMP(6) NULL,
  `rec_create_user` VARCHAR(45) NULL,
  `rec_updt_dt` TIMESTAMP(6) NULL,
  `rec_updt_user` VARCHAR(45) NULL,
  PRIMARY KEY (`pcsd_seq_no`));

ALTER TABLE `smptims`.`product_cust_sale_dtls` 
CHANGE COLUMN `customer_no` `customer_no` INT(50) NOT NULL ,
CHANGE COLUMN `prod_code` `prod_code` VARCHAR(45) NOT NULL ,
CHANGE COLUMN `device_no` `device_no` VARCHAR(45) NOT NULL ,
CHANGE COLUMN `manuf_dt` `manuf_dt` TIMESTAMP(6) NOT NULL ,
CHANGE COLUMN `sales_dt` `sales_dt` TIMESTAMP(6) NOT NULL ,
CHANGE COLUMN `warranty_period` `warranty_period` INT(10) NOT NULL ,
CHANGE COLUMN `service_required` `service_required` CHAR(1) NOT NULL ,
CHANGE COLUMN `warranty_dt` `warranty_dt` TIMESTAMP(6) NOT NULL ,
CHANGE COLUMN `next_service_dt` `next_service_dt` TIMESTAMP(6) NOT NULL ,
CHANGE COLUMN `status` `status` VARCHAR(10) NOT NULL ,
CHANGE COLUMN `rec_create_dt` `rec_create_dt` TIMESTAMP(6) NOT NULL ,
CHANGE COLUMN `rec_create_user` `rec_create_user` VARCHAR(45) NOT NULL ;

CREATE TABLE `smptims`.`device_installed_daily_rpt` (
  `didr_seq_no` INT NOT NULL AUTO_INCREMENT,
  `customer_no` INT(50) NOT NULL,
  `Customer_name` VARCHAR(45) NOT NULL,
  `device_no` VARCHAR(45) NOT NULL,
  `vehicle_regd_no` VARCHAR(45) NOT NULL,
  `device_install_dt` TIMESTAMP(6) NOT NULL,
  `warranty_dt` `warranty_dt` TIMESTAMP(6) NOT NULL ,
  `device_installed_srvc_username` VARCHAR(45) NOT NULL,
  `device_installed_daily_rptcol` VARCHAR(45) NOT NULL,
  `installed_location` VARCHAR(45) NOT NULL,
  `status` VARCHAR(10) NOT NULL,
  `rec_create_dt` TIMESTAMP(6) NOT NULL,
  `rec_create_user` VARCHAR(45) NOT NULL,
  `rec_updt_dt` TIMESTAMP(6) NULL,
  `rec_updt_user` VARCHAR(45) NULL,
  PRIMARY KEY (`didr_seq_no`));

CREATE TABLE `smptims`.`device_installed_hist_rpt` (
  `dihr_seq_no` INT NOT NULL AUTO_INCREMENT,
  `didr_seq_no` INT NOT NULL ,
  `customer_no` INT(50) NOT NULL,
  `Customer_name` VARCHAR(45) NOT NULL,
  `device_no` VARCHAR(45) NOT NULL,
  `vehicle_regd_no` VARCHAR(45) NOT NULL,
  `device_install_dt` TIMESTAMP(6) NOT NULL,
  `device_installed_srvc_username` VARCHAR(45) NOT NULL,
  `device_installed_daily_rptcol` VARCHAR(45) NOT NULL,
  `installed_location` VARCHAR(45) NOT NULL,
  `status` VARCHAR(10) NOT NULL,
  `rec_create_dt` TIMESTAMP(6) NOT NULL,
  `rec_create_user` VARCHAR(45) NOT NULL,
  `rec_updt_dt` TIMESTAMP(6) NULL,
  `rec_updt_user` VARCHAR(45) NULL,
  PRIMARY KEY (`dihr_seq_no`));
  
  CREATE TABLE `smptims`.`app_users_login` (
  `aul_seq_no` INT NOT NULL AUTO_INCREMENT,
  `username`     VARCHAR(45) NOT NULL,
  `user_type`   CHAR(1) NOT NULL,
  `email`		VARCHAR(100) NOT NULL,
  `login_time`	 TIMESTAMP(6) NOT NULL,
  `logout_time`	 TIMESTAMP(6) NOT NULL,
  `status` VARCHAR(10) NOT NULL,
  `rec_create_dt` TIMESTAMP(6) NOT NULL,
  `rec_create_user` VARCHAR(45) NOT NULL,
  `rec_updt_dt` TIMESTAMP(6) NULL,
  `rec_updt_user` VARCHAR(45) NULL,
  PRIMARY KEY (`aul_seq_no`));