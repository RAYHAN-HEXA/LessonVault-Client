import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  PenTool,
  LogOut,
  User as UserIcon,
  Settings,
  LayoutDashboard,
  ChevronDown,
  Gem,
  Lock,
} from "lucide-react";
import { NavLink, Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import usePremium from "../../hooks/usePremium";
import useRole from "../../hooks/useRole";

const UserDropdown = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const role = useRole();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group focus:outline-none"
      >
        <div className="relative cursor-pointer">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-9 h-9 rounded-full object-cover border-2 border-[#E5ECE2] group-hover:border-[#2F8F3A] transition-colors"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#2F8F3A] border-2 border-white rounded-full"></div>
        </div>
        <ChevronDown
          size={16}
          className={`text-[#1F2937] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[#E5ECE2] py-2 transform transition-all duration-200 origin-top-right z-50">
          {/* Header with User Info */}
          <div className="px-4 py-3 border-b border-[#E5ECE2]">
            <p className="text-sm font-bold text-[#1F2937] truncate">
              {user?.displayName}
            </p>
            <p className="text-xs text-[#6B7280] truncate">{user?.email}</p>
          </div>

          {/* Menu Items */}
          <div className="py-2 z-50">
            <Link
              to={role === "admin" ? "/dashboard/admin-home" : "/dashboard"}
              className="flex items-center px-4 py-2 text-sm text-[#1F2937] hover:bg-[#F8FAF6] hover:text-[#2F8F3A] transition-colors"
            >
              <LayoutDashboard size={16} className="mr-3" />
              Dashboard
            </Link>
            <Link
              to="/dashboard/profile"
              className="flex items-center px-4 py-2 text-sm text-[#1F2937] hover:bg-[#F8FAF6] hover:text-[#2F8F3A] transition-colors"
            >
              <UserIcon size={16} className="mr-3" />
              Profile
            </Link>
          </div>

          {/* Footer with Logout */}
          <div className="border-t border-[#E5ECE2] pt-2 mt-1 px-2">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-2 py-2 text-sm text-[#D9534F] hover:bg-[#D9534F]/10 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut size={16} className="mr-3 " />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logoutUser } = useAuth();
  const isPremium = usePremium();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1F4D2B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Signed Out!",
              text: "Your have been signed out.",
              icon: "success",
              confirmButtonColor: "#1F4D2B",
            });
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
            isActive
              ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
              : "after:w-0 after:bg-transparent"
          } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/public-lessons"
        className={({ isActive }) =>
          `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
            isActive
              ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
              : "after:w-0 after:bg-transparent"
          } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
        }
      >
        Explore
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
            isActive
              ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
              : "after:w-0 after:bg-transparent"
          } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
            isActive
              ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
              : "after:w-0 after:bg-transparent"
          } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
            isActive
              ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
              : "after:w-0 after:bg-transparent"
          } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
        }
      >
        Contact
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/dashboard/add-lessons"
            className={({ isActive }) =>
              `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
                isActive
                  ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
                  : "after:w-0 after:bg-transparent"
              } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
            }
          >
            Add Lessons
          </NavLink>
          <NavLink
            to="/dashboard/my-lessons"
            className={({ isActive }) =>
              `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
                isActive
                  ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
                  : "after:w-0 after:bg-transparent"
              } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
            }
          >
            My Lessons
          </NavLink>
          <NavLink
            to="/dashboard/favorites"
            className={({ isActive }) =>
              `text-sm font-medium text-[#6B7280] hover:text-[#2F8F3A] relative pb-1 transition-colors ${
                isActive
                  ? "after:w-full after:bg-[#2F8F3A] text-[#2F8F3A]"
                  : "after:w-0 after:bg-transparent"
              } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:transition-all after:duration-300`
            }
          >
            Favorites
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md py-3 border-b border-[#E5ECE2]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-[#1F2937] hidden sm:block">
              Lessonly
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">{links}</div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            <div className="h-6 w-px bg-[#E5ECE2]"></div>

            {user ? (
              <>
                {isPremium ? (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-br from-[#D9A441] via-[#F8FAF6] to-[#C49431] shadow-sm border border-[#E5ECE2]">
                    <Gem size={12} className="text-[#1F4D2B]" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1F4D2B]">
                      Premium
                    </span>
                  </div>
                ) : (
                  <Link
                    to="/payment"
                    className="flex items-center  w-24 gap-1.5 px-3 py-1.5 rounded-full bg-[#2F8F3A] font-sans border text-white border-white/40"
                  >
                    <Lock />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">
                      Upgrade
                    </span>
                  </Link>
                )}
                <UserDropdown user={user} handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="btn bg-white hover:bg-[#F8FAF6] text-[#1F2937] border border-[#E5ECE2] btn-sm px-5 rounded-full hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/register"
                  className="btn bg-[#2F8F3A] hover:bg-[#23722D] text-white border-none btn-sm px-5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <PenTool className="w-4 h-4" />
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            {/* Show mini avatar on mobile if logged in*/}
            {user && (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E5ECE2]">
                <img
                  src={user.photoURL}
                  alt="Me"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1F2937] hover:text-[#2F8F3A] transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#E5ECE2] shadow-lg md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "h-[550px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-3 space-y-4">
          {isPremium ? (
            <div className="flex items-center w-fit gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-br from-[#D9A441] via-[#F8FAF6] to-[#C49431] border border-[#E5ECE2]">
              <Gem size={12} className="text-[#1F4D2B]" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1F4D2B]">
                Premium
              </span>
            </div>
          ) : (
            <Link
              to="/payment"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2F8F3A] border border-[#2F8F3A] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Lock size={12} />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-center">
                Upgrade
              </span>
            </Link>
          )}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium py-2 border-b border-[#E5ECE2] text-[#1F2937] hover:text-[#2F8F3A]"
          >
            Home
          </NavLink>
          <NavLink
            to="/public-lessons"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium py-2 border-b border-[#E5ECE2] text-[#1F2937] hover:text-[#2F8F3A]"
          >
            Public Lessons
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard/add-lessons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium py-2 border-b border-[#E5ECE2] text-[#1F2937] hover:text-[#2F8F3A]"
            >
              Add Lessons
            </NavLink>
          )}
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium py-2 border-b border-[#E5ECE2] text-[#1F2937] hover:text-[#2F8F3A]"
          >
            Contact
          </NavLink>

          <div className="pt-4 flex flex-col gap-3">
            {user ? (
              // Mobile State for Logged In User
              <>
                <div className="flex items-center gap-3 p-3 bg-[#EEF6EF] rounded-lg border border-[#E5ECE2]">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#1F2937] text-sm">
                      {user?.displayName}{" "}
                    </p>

                    <p className="text-xs text-[#6B7280]">{user?.email}</p>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  className="btn btn-outline border-[#E5ECE2] text-[#1F2937] hover:bg-[#EEF6EF] w-full rounded-full flex gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LayoutDashboard size={16} /> Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn bg-[#D9534F]/10 text-[#D9534F] hover:bg-[#D9534F]/20 border border-[#D9534F]/30 w-full rounded-full flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              // Mobile State for Guest
              <>
                <Link
                  to="/auth/login"
                  className="btn btn-outline border-[#E5ECE2] text-[#1F2937] hover:bg-[#EEF6EF] w-full rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/register"
                  className="btn bg-[#2F8F3A] hover:bg-[#23722D] text-white border-none w-full rounded-full shadow-md flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PenTool className="w-4 h-4" /> Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
