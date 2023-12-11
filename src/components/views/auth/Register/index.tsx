const RegisterView = () => {
    return (
      <div className="container mx-auto mt-10 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">Register</h1>
        <div className="max-w-md mx-auto">
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">
              Register
            </button>
          </form>
        </div>
        <p className="mt-4 text-gray-600">Already have an account?</p>
      </div>
    );
  };
  
  export default RegisterView;
  