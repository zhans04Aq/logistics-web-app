-- Создание таблицы "Customers"
CREATE TABLE t_customers (
    id SERIAL NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_address VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    login VARCHAR(48) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

-- Создание таблицы "Products"
CREATE TABLE t_products (
    id SERIAL NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    product_price NUMERIC(10, 2) NOT NULL,
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
    PRIMARY KEY (id)
);

-- Создание таблицы "Routes"
CREATE TABLE t_routes (
    id SERIAL NOT NULL ,
    route_name VARCHAR(100) NOT NULL,
    route_description TEXT NOT NULL,
    start_location VARCHAR(100) NOT NULL,
    end_location VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
-- Создание таблицы "Orders"
CREATE TABLE t_orders (
    id SERIAL NOT NULL,
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    employee_id INTEGER NOT NULL,
    warehouse_id INTEGER NOT NULL,
    route_id INTEGER NOT NULL,
    order_date DATE NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES Customers (id),
    FOREIGN KEY (product_id) REFERENCES Products (id),
    FOREIGN KEY (warehouse_id) REFERENCES Warehouses (id),
    FOREIGN KEY (route_id) REFERENCES Routes (id)
);