import React, { useState } from 'react';

const ColorChangerApp = () => {
  const [color, setColor] = useState('');

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">🎨 Color Changer App</h1>

      {/* Color-changing box */}
      <div
        className={`w-52 h-52 mx-auto mb-6 border-2 border-black transition-colors duration-400`}
        style={{ backgroundColor: color }}
      ></div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setColor('red')}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:opacity-80"
        >
          Red
        </button>
        <button
          onClick={() => setColor('blue')}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:opacity-80"
        >
          Blue
        </button>
        <button
          onClick={() => setColor('green')}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:opacity-80"
        >
          Green
        </button>
        <button
          onClick={() => setColor('yellow')}
          className="bg-yellow-400 text-black px-4 py-2 rounded shadow hover:opacity-80"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor('')}
          className="bg-gray-300 text-black px-4 py-2 rounded shadow hover:opacity-80"
        >
          Reset
        </button>
      </div>

      {/* Display Selected Color */}
      <p className="mt-5 text-xl">
        Selected Color:{' '}
        <span className="font-semibold">
          {color ? color.charAt(0).toUpperCase() + color.slice(1) : 'None'}
        </span>
      </p>
    </div>
  );
};

export default ColorChangerApp;
