package com.example.logistics.model.request

import java.math.BigDecimal

data class ProductData(
    val name: String,
    val price: BigDecimal,
    val customer: CustomerData,
    val warehouse: WarehouseData
)