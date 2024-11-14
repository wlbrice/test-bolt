import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
  image: string;
}

const items: Item[] = [
  {
    id: 1,
    text: "Lion",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=200&h=150&q=80"
  },
  {
    id: 2,
    text: "Eagle",
    image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=200&h=150&q=80"
  },
  {
    id: 3,
    text: "Dolphin",
    image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=200&h=150&q=80"
  }
];

function MatchingGame() {
  const [selectedText, setSelectedText] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleCheck = () => {
    if (selectedText !== null && selectedImage !== null) {
      setIsCorrect(selectedText === selectedImage);
      setShowResult(true);
    }
  };

  const closeModal = () => {
    setShowResult(false);
    setSelectedText(null);
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">
        Match the Animal with its Picture
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Text</h3>
          {items.map((item) => (
            <button
              key={`text-${item.id}`}
              onClick={() => setSelectedText(item.id)}
              className={`w-full p-3 rounded-lg border-2 transition-all ${
                selectedText === item.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Image</h3>
          <div className="grid gap-3">
            {items.map((item) => (
              <button
                key={`image-${item.id}`}
                onClick={() => setSelectedImage(item.id)}
                className={`w-full h-[150px] rounded-lg border-2 overflow-hidden transition-all ${
                  selectedImage === item.id
                    ? 'border-indigo-600 ring-2 ring-indigo-200'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCheck}
          disabled={selectedText === null || selectedImage === null}
          className={`px-6 py-2 rounded-lg font-semibold text-white transition-all ${
            selectedText === null || selectedImage === null
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          Check Match
        </button>
      </div>

      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className={`text-xl font-bold mb-3 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'Correct Match!' : 'Incorrect Match!'}
            </h3>
            <p className="text-gray-600 mb-4">
              {isCorrect
                ? 'Great job! You matched the correct pair!'
                : 'Try again! The image and text don\'t match.'}
            </p>
            <button
              onClick={closeModal}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchingGame;