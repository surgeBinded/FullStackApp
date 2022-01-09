package com.daro.fullstackapp.controller

import com.daro.fullstackapp.model.Employee
import com.daro.fullstackapp.repository.EmployeeRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1")
class EmployeeController @Autowired constructor(private val employeeRepository: EmployeeRepository) {

    @GetMapping("/employees")
    fun getAllEmployees(): List<Employee> = employeeRepository.findAll()

    @GetMapping("/employees/{employeeId}")
    fun getEmployee(@PathVariable employeeId: Long): Employee = employeeRepository.findById(employeeId).get()
}