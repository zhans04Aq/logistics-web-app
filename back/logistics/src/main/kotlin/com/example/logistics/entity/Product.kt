package com.example.logistics.entity

import jakarta.persistence.*
import java.math.BigDecimal

@Entity
@Table(name = "t_products")
data class Product(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "product_name", nullable = false)
    val productName: String,

    @Column(name = "product_price", nullable = false)
    val productPrice: BigDecimal,

    @Column(name = "quantity", nullable = false)
    val quantity: Int,

    @OneToMany(mappedBy = "product")
    val orders: List<Order> = mutableListOf()
)
