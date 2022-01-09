package com.daro.fullstackapp.model

import javax.persistence.*

@Entity
@Table(name = "employees")
class Employee(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(name = "first_name")
    val firstName: String,

    @Column(name = "last_name")
    val lastName: String,

    @Column(name = "email_id")
    val emailId: String
    ) {
}