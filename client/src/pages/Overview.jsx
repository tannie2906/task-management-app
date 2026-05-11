export default function Overview() {
    return (
      <div className="space-y-6">
  
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome to your task manager</p>
        </div>
  
        {/* TOP CARD */}
        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Your Task Management Area</h2>
            <p className="text-gray-500 mt-2">
              Manage your tasks efficiently 🚀
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
  
          <div className="hidden md:block">
            <img
              src="https://undraw.co/api/illustrations/working.svg"
              alt="illustration"
              className="w-40"
            />
          </div>
        </div>
  
        {/* STATS + CHART PLACEHOLDER */}
        <div className="grid grid-cols-3 gap-6">
  
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Tasks Overview</h3>
            <div className="h-40 flex items-center justify-center text-gray-400">
              Chart goes here 📊
            </div>
          </div>
  
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">50%+</h3>
            <p>Projects</p>
  
            <div className="mt-4">
              <h3 className="text-lg font-bold">50%+</h3>
              <p>Tasks</p>
            </div>
          </div>
  
        </div>
  
      </div>
    );
  }