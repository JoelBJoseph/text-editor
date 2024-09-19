"use client";

import React, { useState } from 'react';
import HomeContent from '../components/home';
import Editor from '../components/text-editor';

const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'home' | 'editor'>('home');

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-white p-4">
                <ul className="flex space-x-6">
                    <li
                        className={`cursor-pointer ${activeTab === 'home' ? 'font-bold underline' : ''}`}
                        onClick={() => setActiveTab('home')}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer ${activeTab === 'editor' ? 'font-bold underline' : ''}`}
                        onClick={() => setActiveTab('editor')}
                    >
                        Text Editor
                    </li>
                </ul>
            </nav>

            {activeTab === 'home' ? (
                <HomeContent />
            ) : (
                <Editor />
            )}
        </div>
    );
};

export default Home;
