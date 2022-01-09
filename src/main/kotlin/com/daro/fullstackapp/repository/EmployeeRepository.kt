package com.daro.fullstackapp.repository

import com.daro.fullstackapp.model.Employee
import org.springframework.data.jpa.repository.JpaRepository

interface EmployeeRepository: JpaRepository<Employee, Long>  {
}