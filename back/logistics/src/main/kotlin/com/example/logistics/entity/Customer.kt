package com.example.logistics.entity

import jakarta.persistence.*

@Entity
@Table(name = "t_customers")
data class Customer(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "customer_name", nullable = false)
    val customerName: String,

    @Column(name = "customer_address", nullable = false)
    val customerAddress: String,

    @Column(name = "customer_phone", nullable = false)
    val customerPhone: String,

    @Column(name = "login", nullable = false, unique = true)
    val login: String,

    @Column(name = "password", nullable = false)
    val password: String,

    @OneToMany(mappedBy = "customer")
    val orders: List<Order> = mutableListOf()
)
