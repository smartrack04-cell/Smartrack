"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm">
        <div className="text-2xl font-bold text-white">SmartTrack</div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors font-medium border-b-2 border-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-200 transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <section className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Welcome to SmartTrack</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our smart AI-powered railway ticket booking system. Experience hassle-free booking, real-time seat
            availability, and a smooth journey planning process.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Booking
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🚄</div>
              <h3 className="text-xl font-semibold mb-2">Smart Booking</h3>
              <p className="text-blue-100">AI-powered seat selection with 3D train visualization</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-blue-100">Live seat availability and journey tracking</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Easy Planning</h3>
              <p className="text-blue-100">Seamless journey planning and booking experience</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
