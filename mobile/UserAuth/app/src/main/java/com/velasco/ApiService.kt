package com.velasco

import okhttp3.ResponseBody // ADDED: Required for plain text responses
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST
import retrofit2.http.Query

interface ApiService {
    // UPDATED: Changed return type to ResponseBody to avoid JSON parsing errors
    @POST("api/auth/register")
    fun registerUser(@Body user: User): Call<ResponseBody>

    @POST("api/auth/login")
    fun loginUser(
        @Query("email") email: String,
        @Query("password") password: String
    ): Call<AuthResponse>
}