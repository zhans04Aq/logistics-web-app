package com.example.logistics.entity

import jakarta.persistence.*

@Entity
@Table(name = "t_routes")
data class Route(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(name = "route_name", nullable = false)
    val routeName: String,

    @Column(name = "route_description", nullable = false)
    val routeDescription: String,

    @Column(name = "start_location", nullable = false)
    val startLocation: String,

    @Column(name = "end_location", nullable = false)
    val endLocation: String,

    @OneToMany(mappedBy = "route")
    val orders: List<Order> = mutableListOf()
)
