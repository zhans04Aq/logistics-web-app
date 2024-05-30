package com.example.logistics.controller

import com.example.logistics.model.Customer
import com.example.logistics.response.MessagedResponse
import com.example.logistics.service.CustomerService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/customers")
class CustomerController(
    private val customerService: CustomerService
) {
    @GetMapping("/{custemerId}")
    fun getCustomerById(
        @PathVariable customerId: Long
    ): MessagedResponse<Customer> {
        return customerService.getById(customerId).let(MessagedResponse.Companion::of)
    }
}