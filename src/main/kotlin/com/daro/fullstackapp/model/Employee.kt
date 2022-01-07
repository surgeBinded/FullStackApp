package com.daro.fullstackapp.model

import javax.persistence.*

@Entity
@Table(name = "employees")
class Employee(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long,

    @Column(name = "first_name")
    private val firstName: String,

    @Column(name = "last_name")
    private val lastName: String,

    @Column(name = "email_id")
    private val emailId: String
    ) {
}