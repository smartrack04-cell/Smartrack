"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    trainName: "",
    from: "",
    to: "",
    journeyDate: "",
    fullName: "",
    age: "",
    sex: "",
    berth: "",
    phone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", bookingData)
    alert("Booking submitted successfully! You will receive a confirmation email shortly.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setBookingData({
      ...bookingData,
      [name]: value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              SmartTrack
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-blue-200 transition-colors">
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
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Railway Ticket Booking</h1>
            <p className="text-blue-200">Book your journey with SmartTrack</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Booking Details Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Booking Details</h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="trainName">Train Name / Number</Label>
                    <Input
                      type="text"
                      id="trainName"
                      name="trainName"
                      value={bookingData.trainName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="e.g., Rajdhani Express or 12001"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from">Journey From</Label>
                      <Input
                        type="text"
                        id="from"
                        name="from"
                        value={bookingData.from}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Departure station"
                      />
                    </div>
                    <div>
                      <Label htmlFor="to">Journey To</Label>
                      <Input
                        type="text"
                        id="to"
                        name="to"
                        value={bookingData.to}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Destination station"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="journeyDate">Journey Date</Label>
                    <Input
                      type="date"
                      id="journeyDate"
                      name="journeyDate"
                      value={bookingData.journeyDate}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Passenger Details Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Passenger Details</h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={bookingData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Enter full name as per ID"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        value={bookingData.age}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        min="1"
                        max="120"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sex">Sex</Label>
                      <Select onValueChange={(value) => handleSelectChange("sex", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="berth">Seat Preference</Label>
                    <Select onValueChange={(value) => handleSelectChange("berth", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="window">Window</SelectItem>
                        <SelectItem value="aisle">Aisle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
              >
                Submit Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
