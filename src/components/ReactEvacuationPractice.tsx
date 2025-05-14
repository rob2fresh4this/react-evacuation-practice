"use client";

import React from 'react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Problem1 from '@/components/Problem1';
import Problem2 from '@/components/Problem2';
import Problem3 from '@/components/Problem3';
import Problem4 from '@/components/Problem4';
import Problem5 from '@/components/Problem5';
import Problem6 from '@/components/Problem6';
import Problem7 from '@/components/Problem7';
import Problem8 from '@/components/Problem8';
import Problem9 from '@/components/Problem9';
import Problem10 from '@/components/Problem10';

export default function EvacuationPractice() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const mySolutions = [
        Problem1,
        Problem2,
        Problem3,
        Problem4,
        Problem5,
        Problem6,
        Problem7,
        Problem8,
        Problem9,
        Problem10
    ]

    const questions = [
        'Toggle Button: Create a button that toggles between "Show" and "Hide" text when clicked.',
        'Counter: Build a simple counter with "+" and "-" buttons to increase and decrease a number.',
        'Character Limit: Make an input that counts the number of characters as you type.',
        'Theme Switcher: Add a button that switches the background color between light and dark.',
        'Auto Increment: Create a counter that automatically increments by 1 every second.',
        'Component Mount: Use useEffect to log a message when the component mounts.',
        'Cleanup Effect: Create a timer that stops when the component unmounts.',
        'Conditional Effect: Trigger a console log only when the counter hits 5.',
        'Button Click Counter: Track how many times a button has been clicked.',
        'Toggle Class: Add a button that toggles a CSS class to change the text color.'
    ];

    const hints = [
        'Hint: Use a boolean useState variable and the ! operator to flip its value.',
        'Hint: Use useState for the count and two separate onClick handlers for each button.',
        "Hint: Use onChange to update the state with the input's current length.",
        'Hint: Toggle a state that controls a CSS class or inline style.',
        'Hint: Use useEffect with setInterval, and remember to clear the interval when the component unmounts.',
        'Hint: Use an empty dependency array to ensure it only runs once.',
        'Hint: Return a cleanup function from useEffect to clear the timer.',
        'Hint: Use a dependency array to track the counter and a conditional check inside the effect.',
        'Hint: Increment a state variable every time the button is clicked.',
        'Hint: Use state to manage the active class and toggle it on button click.'
    ];

    return (
        <div className="flex flex-col gap-6 p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight drop-shadow-lg">
                React Evacuation Practice
            </h1>
            {questions.map((question, index) => (
                <Card
                    key={index}
                    className={`transition-shadow duration-200 bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-xl ${openIndex === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                >
                    <CardContent className="p-6">
                        <button
                            className="w-full text-left font-semibold text-lg py-3 px-2 hover:bg-gray-700 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="flex items-center gap-2">
                                <span>{question}</span>
                                <span className="ml-auto text-blue-400 text-base">
                                    {openIndex === index ? '▲' : '▼'}
                                </span>
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="mt-5 text-gray-300 border-t border-gray-700 pt-4 animate-fade-in">
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="inline-block bg-blue-600 text-xs font-bold px-2 py-1 rounded-full">
                                        Hint
                                    </span>
                                    <span>{hints[index]}</span>
                                </div>
                                <div className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 mt-2 h-40 resize-none text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow">
                                    {React.createElement(mySolutions[index])}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
