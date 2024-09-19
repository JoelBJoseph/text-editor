import React from 'react';

export default function Home() {
    return (
        <div className="text-black bg-white p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the C/C++ to Rust Code Converter</h1>
            <p>
                This is a powerful text editor designed to help you write and convert code from C/C++ to Rust.
                The platform provides a seamless experience with two code editors: one for C/C++ and the other
                for Rust. It also features file explorers for both languages.
            </p>
            <p className="mt-4">
                The editor uses modern web technologies like React, TypeScript, and Tailwind CSS to provide a responsive
                and intuitive interface. The conversion between C/C++ and Rust is handled through a placeholder conversion
                logic, which you can expand to suit more complex conversion needs.
            </p>
        </div>
    );
}
