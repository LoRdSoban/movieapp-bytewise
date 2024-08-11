import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <section className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-teal-500 flex items-center justify-center mb-6">
          <FaSignInAlt className="mr-2" /> Login
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Login and start setting goals
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="form-group">
            <input
              type="email"
              className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none text-white"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none text-white"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-4 rounded-lg font-bold hover:bg-teal-400 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
