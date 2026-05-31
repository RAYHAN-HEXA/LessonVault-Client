import React, { useState } from "react";
import {
  Feather,
  Mail,
  Lock,
  EyeOff,
  Eye,
  User,
  ImagePlus,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import Logo from "../../components/Shared/Logo";
import SocialLogin from "../../components/Shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUser, setUser, loginUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setLoading(true);
    const profileImage = data.image[0];

    createUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImage);
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${
              import.meta.env.VITE_API_KEY
            }`,
            formData
          )
          .then((res) => {
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };
            updateUser(userProfile)
              .then(() => {
                const newUser = {
                  displayName: data.name,
                  email: data.email,
                  photoURL: userProfile.photoURL,
                  isPremium: false,
                };

                axiosInstance
                  .post("/users", { ...newUser, role: "user" })
                  .then((r) => {
                    if (r.data.insertedId) {
                      setUser({ ...newUser, role: "user" });
                      toast.success("Registration Successful");
                      navigate("/");
                    }
                  });
              })
              .catch((e) => {
                console.log(e);
              })
              .finally(() => {
                setLoading(false);
              });
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleDemoLogin = () => {
    setLoading(true);
    loginUser("admin@gmail.com", "Admin@1234")
      .then(() => {
        toast.success("Demo login successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Demo account not available. Please register.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full overflow-y-auto md:w-1/2 bg-slate-950 flex justify-center p-8 lg:p-16 text-white relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo Area */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Logo />
          </div>
          <div className="flex items-center gap-2 text-violet-400">
            <Sparkles size={16} />
            <span className="text-sm font-medium">LessonVault</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white">
            Create Account
          </h1>
          <p className="text-slate-400 text-sm">
            Sign up to access your personal wisdom journal.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-6 mt-8"
        >
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              Your Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User
                  size={18}
                  className="text-slate-500 group-focus-within:text-violet-400"
                />
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm placeholder-slate-500 text-white"
              />
            </div>
            {errors.name?.type === "required" && (
              <p className="text-red-400 text-xs">Name is required</p>
            )}
          </div>

          {/* Photo Upload */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              Profile Photo
            </label>
            <div className="flex items-center gap-3 bg-slate-900/50 border border-white/10 rounded-xl cursor-pointer hover:border-violet-500/30 transition-all">
              <ImagePlus size={18} className="text-slate-500 ml-3" />
              <input
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
                className="file-input file-input-ghost w-full text-slate-400"
              />
            </div>
            {errors?.image?.type === "required" && (
              <p className="text-red-400 text-xs">Image is required</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail
                  size={18}
                  className="text-slate-500 group-focus-within:text-violet-400"
                />
              </div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm placeholder-slate-500 text-white"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-400 text-xs">Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock
                  size={18}
                  className="text-slate-500 group-focus-within:text-violet-400"
                />
              </div>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                })}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm placeholder-slate-500 text-white"
              />

              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showPass ? (
                  <Eye
                    onClick={() => setShowPass(false)}
                    size={18}
                    className="text-slate-500 hover:text-slate-300"
                  />
                ) : (
                  <EyeOff
                    onClick={() => setShowPass(true)}
                    size={18}
                    className="text-slate-500 hover:text-slate-300"
                  />
                )}
              </div>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-400 text-xs">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-400 text-xs">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-400 text-xs">
                Password must have an uppercase and lowercase character
              </p>
            )}
          </div>

          {/* Sign up Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-medium py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transform active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Creating account...
              </>
            ) : (
              <>
                Sign up
                <Sparkles size={16} />
              </>
            )}
          </button>

          {/* Demo Login Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full bg-transparent border-2 border-violet-500/50 hover:bg-violet-500/10 text-violet-400 font-medium py-3 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Feather className="w-4 h-4" />
            Try Demo Account
          </button>
        </form>
        {/* Google Login */}
        <SocialLogin />
        {/* Footer Text */}
        <div className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-violet-400 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>

        {/* Bottom Meta */}
        <div className="pt-12 border-t border-white/10 mt-8">
          <div className="flex justify-between items-center text-[10px] text-slate-600 font-mono">
            <span>App ID: sage_x8ds_irn</span>
            <span className="border border-white/10 rounded px-2 py-0.5">
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
