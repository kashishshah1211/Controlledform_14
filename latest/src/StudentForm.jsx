import { useState } from 'react'

export default function StudentForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    course: '',
    gender: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onRegister(formData)

    setFormData({
      name: '',
      email: '',
      age: '',
      course: '',
      gender: '',
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-semibold text-gray-700"
        >
          Student Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          minLength={2}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-semibold text-gray-700"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="student@example.com"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="age"
          className="mb-2 block font-semibold text-gray-700"
        >
          Age
        </label>

        <input
          id="age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          min="1"
          max="120"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div>
        <label
          htmlFor="course"
          className="mb-2 block font-semibold text-gray-700"
        >
          Select Course
        </label>

        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        >
          <option value="">Choose a course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
        </select>
      </div>

      <fieldset>
        <legend className="mb-3 font-semibold text-gray-700">
          Gender
        </legend>

        <div className="flex flex-wrap gap-5">
          {['Male', 'Female', 'Other'].map((gender) => (
            <label
              key={gender}
              className="flex cursor-pointer items-center gap-2 text-gray-600"
            >
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={formData.gender === gender}
                onChange={handleChange}
                required
                className="accent-indigo-600"
              />

              {gender}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Register Student
      </button>
    </form>
  )
}