package com.example.logistics.entity

import com.example.logistics.entity.Customer
import com.example.logistics.entity.Product
import com.example.logistics.entity.Route
import com.example.logistics.entity.Warehouse
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "t_orders")
data class Order(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    val customer: Customer,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    val product: Product,

    @Column(name = "employee_id", nullable = false)
    val employeeId: Long,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "warehouse_id", nullable = false)
    val warehouse: Warehouse,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "route_id", nullable = false)
    val route: Route,

    @Column(name = "order_date", nullable = false)
    val orderDate: LocalDate,

    @Column(name = "order_status", nullable = false)
    val orderStatus: String,

    @Column(name = "quantity", nullable = false)
    val quantity: Int
)
