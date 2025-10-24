interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-pulse text-6xl mb-4">👋</div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Hello World! 👋
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Welcome to your simple React widget
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg inline-block font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            ✨ Hello, {data.name || 'World'}! ✨
          </div>
          {data.message && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">{data.message}</p>
            </div>
          )}
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Preview:</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm font-mono">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;