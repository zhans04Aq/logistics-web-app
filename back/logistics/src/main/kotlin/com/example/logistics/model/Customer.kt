package com.example.logistics.model.entity

import jakarta.persistence.*

@Entity
@Table(name = "t_customers")
data class Customer(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "customer_name", nullable = false)
    val customerName: String,

    @Column(name = "customer_phone", nullable = false)
    val customerPhone: String,

    @Column(name = "password", nullable = false)
    val password: String
)