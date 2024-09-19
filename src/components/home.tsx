import React from 'react';

export default function Home() {
    return (
        <div className="text-black bg-white p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-6 text-center">
                Welcome to the C/C++ to Rust Code Converter
            </h1>
            <p className="text-lg mb-4 leading-relaxed">
                This powerful text editor is designed to help you write and convert code from C/C++ to Rust. The platform provides a seamless experience with two code editors: one for C/C++ and the other for Rust. It also features file explorers for both languages.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
                Built with modern web technologies like React, TypeScript, and Tailwind CSS, this editor offers a responsive and intuitive interface. The conversion between C/C++ and Rust is handled through placeholder logic, which you can expand to meet more complex conversion needs.
            </p>
            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Features:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Two dedicated code editors for C/C++ and Rust.</li>
                    <li>File explorers to manage your code and projects efficiently.</li>
                    <li>Responsive design for an optimal experience on any device.</li>
                    <li>Expandable code conversion logic to fit your specific needs.</li>
                </ul>
            </div>
        </div>
    );
}
