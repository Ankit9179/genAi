import React from 'react';
import userPic from '../assets/dd.jpg'

const testimonials = [
    {
        name: "John Doe",
        star: "⭐⭐⭐⭐⭐",
        feedback: "GenAi has completely transformed the way I work. The AI-powered tools are incredibly efficient and easy to use!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gRu8ypBGz8QKIfphz_uaV0jUuGrui4LTIzz4b4-HC17EitLkPrNeBwR1V4OGhMVaZH8&usqp=CA"
    },
    {
        name: "Sarah Smith",
        star: "⭐⭐⭐",
        feedback: "I love how intuitive and powerful GenAi is. It saves me hours of work every day!",
        image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Michael Brown",
        star: "⭐⭐⭐⭐",
        feedback: "A game-changer for content creators. Highly recommended!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    },
];

const Testimonials = () => {
    return (
        <section className="max-w-6xl mx-auto mt-10 px-6 pb-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">What Our Customers Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full" />
                        <p>{testimonial.star}</p>
                        <b className="text-xl font-semibold mt-4">{testimonial.name}</b>
                        <p className="text-gray-600 mt-2 italic">"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
