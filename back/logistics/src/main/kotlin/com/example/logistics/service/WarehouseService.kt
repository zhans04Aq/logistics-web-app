package com.example.logistics.service

import com.example.logistics.repository.WarehouseRepository
import org.springframework.stereotype.Service

@Service
class WarehouseService(
    private val warehouseRepository: WarehouseRepository
) {

}