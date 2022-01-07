package com.daro.fullstackapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class FullStackAppApplication

fun main(args: Array<String>) {
    runApplication<FullStackAppApplication>(*args)
}
