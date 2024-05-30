package com.example.logistics.model.entity

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "t_products")
data class Product(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "product_name", nullable = false)
    val productName: String,

    @Column(name = "start_date", nullable = false)
    val startDate: LocalDate,

    @Column(name = "expiration_date", nullable = false)
    val expirationDate: LocalDate,

    @Column(name = "quantity", nullable = false)
    val quantity: Int
)
