package com.example.finals

import android.os.Bundle
import androidx.activity.ComponentActivity

class ResidentDashboard: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Connect to your activity_display.xml
        setContentView(R.layout.activity_resident_dashboard)
    }
}