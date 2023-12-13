"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/images/furniture-logo.png"
import User from "../../../public/images/user.png"
import Search from "../../../public/images/search.png"
import Heart from "../../../public/images/heart.png"
import Cart from "../../../public/images/cart.png"

import CartModal from "./CartModal"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [cartModalOpen, setCartModalOpen] = useState(false)
    const router = useRouter()
    const { signout, isAuthenticated } = useAuth()

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const toggleCartModal = () => {
        setCartModalOpen(!cartModalOpen)
    }

    const handleLogout = () => {
        signout()
    }

    return (
        <div>
            <header id="header">
                <nav className="flex items-center justify-between">
                    <div>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="hidden md:flex gap-9 text-base font-medium">
                        <Link href="/home">
                            <p className="text-lg">Home</p>
                        </Link>
                        <Link href="/shop">
                            <p className="text-lg">Shop</p>
                        </Link>
                        <Link href="/blog">
                            <p className="text-lg">Blog</p>
                        </Link>
                        <Link href="/contact">
                            <p className="text-lg">Contact</p>
                        </Link>
                    </div>

                    <div className="hidden md:flex gap-9">
                        <Link href="/login">
                            <Image src={User} alt="User" />
                        </Link>
                        <Image src={Search} alt="Search" />
                        <Image src={Heart} alt="Heart" />
                        <button onClick={toggleCartModal}>
                            <Image src={Cart} alt="Cart" />
                        </button>

                        {isAuthenticated && (
                            <button onClick={handleLogout}>Logout</button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu}>☰</button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${
                        mobileMenuOpen ? "block" : "hidden"
                    } absolute top-0 left-0 h-screen w-2/3 bg-white z-50 transform transition-transform ease-in-out duration-300`}>
                    <ul className="flex flex-col items-center justify-center h-full gap-6">
                        <Link href="/home">
                            <li>
                                <p className="text-lg">Home</p>
                            </li>
                        </Link>
                        <Link href="/shop">
                            <li>
                                <p className="text-lg">Shop</p>
                            </li>
                        </Link>
                        <Link href="/blog">
                            <li>
                                <p className="text-lg">Blog</p>
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li>
                                <p className="text-lg">Contact</p>
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Cart Modal */}
                {cartModalOpen && (
                    <div className="fixed top-4 right-4 bg-white p-2 rounded-lg shadow-lg">
                        <CartModal toggleCartModal={toggleCartModal} />
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
