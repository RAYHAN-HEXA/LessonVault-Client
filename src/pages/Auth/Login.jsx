import React, { useState } from "react";
import { Feather, Mail, Lock, EyeOff, ArrowRight, Eye, Loader2, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../components/Shared/Logo";
import SocialLogin from "../../components/Shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setIsLoading(true);
    loginUser(data.email, data.password)
      .then(() => {
        toast.success("Sign in successful");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    loginUser("admin@gmail.com", "Admin@1234")
      .then(() => {
        toast.success("Demo login successful!");
        navigate(location?.state || "/");
      })
      .catch(() => {
        toast.error("Demo account not available. Please register.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full md:w-1/2 bg-[#FFFFFF] flex justify-center p-8 lg:p-16 text-[#1F2937] overflow-y-scroll relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#6E9277]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2F8F3A]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo Area */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Logo />
          </div>
          <div className="flex items-center gap-2 text-[#2F8F3A]">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Lessonly</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-[#1F2937]">
            Welcome Back
          </h1>
          <p className="text-[#6B7280] text-sm">
            Sign in to access your personal wisdom journal.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 mt-8">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail
                  size={18}
                  className="text-[#8A8F98] group-focus-within:text-[#2F8F3A]"
                />
              </div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-[#F8FAF6] border border-[#E5ECE2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F8F3A]/20 focus:border-[#2F8F3A] transition-all text-sm placeholder-[#8A8F98] text-[#1F2937]"
              />
            </div>
            {errors?.email?.type === "required" && (
              <p className="text-[#D9534F] text-xs">Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock
                  size={18}
                  className="text-[#8A8F98] group-focus-within:text-[#2F8F3A]"
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
                className="w-full pl-10 pr-10 py-3 bg-[#F8FAF6] border border-[#E5ECE2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F8F3A]/20 focus:border-[#2F8F3A] transition-all text-sm placeholder-[#8A8F98] text-[#1F2937]"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showPass ? (
                  <Eye
                    onClick={() => setShowPass(false)}
                    size={18}
                    className="text-[#8A8F98] hover:text-[#6B7280]"
                  />
                ) : (
                  <EyeOff
                    onClick={() => setShowPass(true)}
                    size={18}
                    className="text-[#8A8F98] hover:text-[#6B7280]"
                  />
                )}
              </div>
            </div>
            {errors?.password?.type === "required" && (
              <p className="text-[#D9534F] text-xs">Password is required</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="text-[#D9534F] text-xs">Password didn't match</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="text-[#D9534F] text-xs">Password didn't match</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs text-[#6B7280] hover:text-[#2F8F3A] transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#2F8F3A] to-[#1F4D2B] hover:from-[#1F4D2B] hover:to-[#2F8F3A] text-white font-medium py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#2F8F3A]/25 hover:shadow-[#2F8F3A]/40 transform active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Demo Login Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full bg-transparent border-2 border-[#2F8F3A]/30 hover:bg-[#2F8F3A]/10 text-[#2F8F3A] font-medium py-3 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Feather className="w-4 h-4" />
            Try Demo Account
          </button>
        </form>
        <SocialLogin />
        {/* Footer Text */}
        <div className="text-center text-sm text-[#6B7280] mt-6">
          New to Lessonly?{" "}
          <Link
            to="/auth/register"
            className="text-[#2F8F3A] font-semibold hover:underline"
          >
            Create an account
          </Link>
        </div>

        <div className="pt-12 border-t border-[#E5ECE2] mt-8">
          <div className="flex justify-between items-center text-[10px] text-[#8A8F98] font-mono">
            <span>App ID: lessonly_x8ds_irn</span>
            <span className="border border-[#E5ECE2] rounded px-2 py-0.5">
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
