export default function StudentDetails({ student }) {
  if (!student) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 text-center">
        <div className="text-4xl">🎓</div>

        <h2 className="mt-3 text-xl font-bold text-gray-800">
          Student Details
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Submit the registration form to see student details here.
        </p>
      </div>
    )
  }

  const details = [
    { label: 'Full Name', value: student.name },
    { label: 'Email Address', value: student.email },
    { label: 'Age', value: student.age },
    { label: 'Course', value: student.course },
    { label: 'Gender', value: student.gender },
  ]

  return (
    <section className="rounded-2xl border border-green-200 bg-white p-6 shadow-lg sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Registration Successful!
          </h2>

          <p className="text-sm text-green-700">
            Student details submitted successfully.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="flex flex-col gap-1 border-b border-gray-100 pb-3 sm:flex-row sm:justify-between"
          >
            <span className="text-sm font-medium text-gray-500">
              {detail.label}
            </span>

            <span className="break-words font-semibold text-gray-900 sm:max-w-[65%] sm:text-right">
              {detail.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}