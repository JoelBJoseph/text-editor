"use client";

import React, { useState } from 'react';

export default function Editor() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [cppCode, setCppCode] = useState(`#include <iostream>\n\nint main() {\n  std::cout << "Hello, C++!" << std::endl;\n  return 0;\n}`);
    const [rustCode, setRustCode] = useState(`fn main() {\n  println!("Hello, Rust!");\n}`);

    // Placeholder conversion logic
    const convertCppToRust = () => {
        // Here you can add real C++ to Rust conversion logic if needed
        // For now, it's just a placeholder logic that replaces C++ syntax with Rust-like syntax.
        const convertedCode = cppCode
            .replace(/std::cout << (.*) << std::endl;/g, `println!($1);`)
            .replace(/#include <iostream>/, "// Converted C++ code to Rust");

        setRustCode(convertedCode);
    };

    return (
        <div className="flex h-screen text-black bg-white">
            {/* Sidebar for file explorers */}
            <div
                className={`${
                    showSidebar ? 'block' : 'hidden'
                } md:block md:w-1/4 bg-gray-100 p-4`}
            >
                <h2 className="text-xl font-bold mb-2">C/C++ File Explorer</h2>
                <ul className="text-sm mb-4">
                    <li>main.cpp</li>
                    <li>utils.cpp</li>
                    <li>README.md</li>
                </ul>

                <h2 className="text-xl font-bold mb-2">Rust Directory Explorer</h2>
                <ul className="text-sm">
                    <li>main.rs</li>
                    <li>lib.rs</li>
                    <li>Cargo.toml</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:w-3/4 flex flex-col p-4 space-y-4">
                {/* Toggle button for sidebar */}
                <button
                    className="md:hidden bg-blue-500 text-white px-4 py-2 mb-4 rounded"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>

                {/* C/C++ Code Window */}
                <div className="flex-1 bg-white p-4">
                    <h2 className="text-xl font-bold mb-2">C/C++ Code Window</h2>
                    <textarea
                        className="w-full h-60 md:h-full bg-white border border-gray-300 rounded-md p-2 text-black"
                        value={cppCode}
                        onChange={(e) => setCppCode(e.target.value)}
                    ></textarea>
                </div>

                {/* Convert Button */}
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={convertCppToRust}
                >
                    Convert
                </button>

                {/* Rust Code Window */}
                <div className="flex-1 bg-white p-4">
                    <h2 className="text-xl font-bold mb-2">Rust Code Window</h2>
                    <textarea
                        className="w-full h-60 md:h-full bg-white border border-gray-300 rounded-md p-2 text-black"
                        value={rustCode}
                        onChange={(e) => setRustCode(e.target.value)}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
