import React from 'react';
import { courses } from '../data/dummyData';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const data = courses.filter(item => item.id == id);
    return <>
        <div>{JSON.stringify(data, null, 2)}</div>
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">{data[0].name}</h1>
                    <p className="text-lg leading-relaxed">
                        Prepare for {data[0].name} with our result-oriented program designed for students of
                        <strong> Class XI & XII</strong>. Learn from top mentors, practice with structured
                        tests, and master concepts with clarity.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/education-landing-page-template_23-2148894571.jpg"
                    alt="jee coaching"
                    className="w-full max-w-md mt-10 lg:mt-0 rounded-lg shadow-lg"
                />
            </div>

            {/* Course Information Section */}
            <div className='flex'>
                <div className="px-6 lg:px-20 py-10">
                    <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
                    <ul className="list-disc pl-6 space-y-2 text-base">
                        <li>Target Exams: {data[0].name}</li>
                        <li>Ideal For: Class XI & XII students</li>
                        <li>Mode: Classroom + Online Hybrid</li>
                        <li>Language: English + Hindi</li>
                        <li>Study Material: Printed + Digital Notes</li>
                    </ul>
                </div>

                {/* Course Duration */}
                <div className="px-6 lg:px-20 py-10">
                    <h2 className="text-2xl font-semibold mb-4">Course Duration</h2>
                    <p className="text-base leading-relaxed">
                        The course spans <strong>2 academic years</strong> for Class XI students and
                        <strong> 1 year</strong> for Class XII or repeaters. It includes:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
                        <li>Weekly Classes (5–6 days/week)</li>
                        <li>Monthly Mock Tests and Performance Analysis</li>
                        <li>Full syllabus revision + Crash Course before exams</li>
                    </ul>
                </div>
            </div>

            {/* Modules / Topics Covered */}
            <section className="px-6 lg:px-20 py-12 bg-gray-50">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                    Course Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
                    <li className="bg-white p-6 shadow-md rounded-xl">📘 In-depth Conceptual Teaching</li>
                    <li className="bg-white p-6 shadow-md rounded-xl">🧪 Daily Practice Problems (DPPs)</li>
                    <li className="bg-white p-6 shadow-md rounded-xl">📝 Regular Mock Tests</li>
                    <li className="bg-white p-6 shadow-md rounded-xl">📊 Performance Analytics & Feedback</li>
                    <li className="bg-white p-6 shadow-md rounded-xl">🎯 Doubt Solving Sessions</li>
                    <li className="bg-white p-6 shadow-md rounded-xl">💡 Special Crash Courses & Revisions</li>
                </ul>
            </section>

            {/* Enroll CTA */}
            <div className="text-center py-12 px-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enroll Now!</h3>
                <p className="mb-6 text-gray-700">
                    Limited seats available. Begin your JEE journey with Chate Coaching Classes.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
                    Apply Now
                </button>
            </div>
        </div>
    </>
};

export default Details;