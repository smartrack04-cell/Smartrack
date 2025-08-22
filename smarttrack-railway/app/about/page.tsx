import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-900">SmartTrack</div>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 font-medium border-b-2 border-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-600 transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About SmartTrack</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SmartTrack is an innovative online railway ticket booking platform that revolutionizes the way passengers
              book their train journeys. Our cutting-edge system provides passengers with a unique 3D view of trains,
              allowing them to select their preferred seats with unprecedented clarity and convenience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to making ticket booking simple, smart, and user-friendly through advanced AI technology
              and intuitive design. Our mission is to transform the railway booking experience into a seamless,
              efficient, and enjoyable process for every traveler.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading railway booking platform that combines technology with user experience to make
                train travel accessible and enjoyable for everyone.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 3D train visualization</li>
                <li>• Smart seat selection</li>
                <li>• Real-time availability</li>
                <li>• AI-powered recommendations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
