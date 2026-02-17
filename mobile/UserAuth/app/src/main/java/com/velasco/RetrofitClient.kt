package com.velasco

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    // Use your specific IPv4 address here
    private const val BASE_URL = "http://192.168.1.2:8080/"

    val instance: ApiService by lazy {
        val retrofit = Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create()) // Turns JSON into Kotlin objects
            .build()

        retrofit.create(ApiService::class.java)
    }
}