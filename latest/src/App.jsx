import { useState } from 'react'
import StudentForm from './StudentForm'
import StudentDetails from './StudentDetails'

export default function App() {
  const [student, setStudent] = useState(null)

  const handleRegister = (formData) => {
    setStudent(formData)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 px-4 py-8 text-center text-white sm:py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Student Registration
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-indigo-100">
          Register a student by entering the required details below.
        </p>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 py-8 md:grid-cols-2 md:px-6">
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Registration Form
          </h2>

          <StudentForm onRegister={handleRegister} />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Submitted Information
          </h2>

          <StudentDetails student={student} />
        </section>
      </main>

      <footer className="mt-6 border-t border-gray-200 bg-white px-4 py-5 text-center text-sm text-gray-500">
        Student Registration App | React + Tailwind CSS
      </footer>
    </div>
  )
}
