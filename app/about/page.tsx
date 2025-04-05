// app/about/page.tsx
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About JobRex</h1>
        <p className="text-lg mb-6">
          JobRex is your trusted companion in navigating the job market. We’re
          committed to connecting job seekers with the right opportunities and
          helping employers find the best talent — all in one seamless platform.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-base leading-relaxed">
            At JobRex, our mission is to simplify the job search and hiring
            process by providing smart matching tools, personalized job
            suggestions, and insightful career resources. We believe everyone
            deserves a job that fits their passion and potential.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>AI-powered job matching tailored to your profile</li>
            <li>Real-time job alerts and easy application tracking</li>
            <li>Supportive career advice and resume tips</li>
            <li>Trusted by thousands of recruiters and job seekers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Join the Future of Hiring
          </h2>
          <p className="text-base leading-relaxed">
            Whether you're looking for your first job, a career change, or top
            talent to join your team — JobRex is here to help. Let’s build the
            future of work, together.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
