package com.example.logistics.controller

import com.example.logistics.exception.CustomerNotFoundException
import com.example.logistics.model.request.LoginRequest
import com.example.logistics.model.request.RegisterRequest
import com.example.logistics.service.AuthenticationService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/v1/auth")
class AuthenticationController(private val authenticationService: AuthenticationService) {

    @PostMapping("/register")
    fun register(@RequestBody registerRequest: RegisterRequest): Long? {
        return authenticationService.register(registerRequest.customerName, registerRequest.password, registerRequest.customerPhone)
    }

    @PostMapping("/login")
    fun login(@RequestBody loginRequest: LoginRequest): Long? {
        return authenticationService.login(loginRequest.customerName, loginRequest.password)
    }
}