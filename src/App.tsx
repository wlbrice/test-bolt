import React, { useState } from 'react';
import { 
  Gamepad2, 
  Brain, 
  Puzzle, 
  BookOpen, 
  Palette, 
  Music 
} from 'lucide-react';
import MatchingGame from './components/MatchingGame';

function App() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const games = [
    { id: 1, icon: Gamepad2, name: 'Matching Game' },
    { id: 2, icon: Brain, name: 'Memory Game' },
    { id: 3, icon: Puzzle, name: 'Puzzle Game' },
    { id: 4, icon: BookOpen, name: 'Quiz Game' },
    { id: 5, icon: Palette, name: 'Coloring Game' },
    { id: 6, icon: Music, name: 'Music Game' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      {!selectedGame ? (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">
            Select a Game
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {games.map(({ id, icon: Icon, name }) => (
              <button
                key={id}
                onClick={() => setSelectedGame(id)}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col items-center gap-3"
              >
                <Icon className="w-12 h-12 text-indigo-600" />
                <span className="font-medium text-gray-700">{name}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedGame(null)}
            className="mb-6 px-4 py-2 text-indigo-600 hover:text-indigo-800 flex items-center gap-2 transition-colors"
          >
            ← Back to Games
          </button>
          {selectedGame === 1 && <MatchingGame />}
          {selectedGame !== 1 && (
            <div className="text-center text-gray-600">
              Game under development
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;