-- Создание таблицы "Customers"
CREATE TABLE t_customers (
    id SERIAL NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

-- Создание таблицы "Products"
CREATE TABLE t_products (
    id SERIAL NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    expiration_date DATE NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (id)
);

-- Создание таблицы "Warehouses"
CREATE TABLE t_warehouses (
    id SERIAL NOT NULL,
    warehouse_name VARCHAR(100) NOT NULL,
    warehouse_address VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Создание таблицы "News"
CREATE TABLE t_news (
    id SERIAL NOT NULL,
    news_title VARCHAR(100) NOT NULL,
    news_content TEXT NOT NULL,
    news_date DATE NOT NULL,
    image_path VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

-- Создание таблицы "Orders"
CREATE TABLE t_orders (
    id SERIAL NOT NULL,
    customer_id INTEGER NOT NULL,
    product_id INTEGER,
    start_location VARCHAR(100),
    end_location VARCHAR(100) NOT NULL,
    order_date DATE NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES t_customers (id),
    FOREIGN KEY (product_id) REFERENCES t_products (id)
);
