import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.png';
import logo from '@/assets/website_name2.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]"> {/* Cream background */}
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#FDFBF7]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FDFBF7]/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
             <img src={logo} alt="Brand Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="bg-white text-[#A67A4B] hover:text-white hover:bg-[#A67A4B] border-[1px] border-[#A67A4B]" onClick={() => navigate('/auth/login')}>
              Login
            </Button>
            <Button className="w-full bg-[#A67A4B] text-white  hover:bg-[#af865a] mr-2" onClick={() => navigate('/auth/register')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
             <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroBanner})`,
              filter: 'brightness(0.7) contrast(1.1)' 
            }}
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
          <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center text-white">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6 drop-shadow-xl text-[#FDFBF7]">
              Redefine Your Unique Style
            </h1>
            <p className="mx-auto max-w-[800px] text-lg md:text-2xl text-gray-100 mb-10 drop-shadow-md font-light">
              Discover the latest trends in fashion. Diverse collections, exclusive deals, and premium quality crafted just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-[#F0F0F0] text-gray-900 hover:bg-[#af865a] px-5 py-3 text-lg font-semibold"
                onClick={() => navigate('/auth/register')}
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent  text-[#F0F0F0] hover:text-white hover:bg-[#A67A4B] hover:border-[1px] hover:border-[#A67A4B] px-5 py-3 text-lg font-semibold"
                onClick={() => navigate('/auth/login')}
              >
                Already a Member?
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-[#F5F5F0]"> {/* Warm Gray section */}
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-8 bg-[#FDFBF7] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="p-4 bg-gray-100 rounded-full mb-6">
                  <TrendingUp className="h-8 w-8 text-[#A67A4B]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Trendy Collections</h3>
                <p className="text-[#A67A4B] leading-relaxed">
                  Stay ahead of the curve with our curated selection of the season's hottest styles.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-8 bg-[#FDFBF7] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="p-4 bg-gray-100 rounded-full mb-6">
                  <ShoppingBag className="h-8 w-8 text-[#A67A4B]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Premium Quality</h3>
                <p className="text-[#A67A4B] leading-relaxed">
                  We verify every product to ensure you get nothing but the best material and craftsmanship.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-8 bg-[#FDFBF7] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="p-4 bg-gray-100 rounded-full mb-6">
                  <ShieldCheck className="h-8 w-8 text-[#A67A4B]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Secure Shopping</h3>
                <p className="text-[#A67A4B] leading-relaxed">
                  Shop with confidence. Our secure payment systems keep your data safe and protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 text-gray-900">
              Ready to Upgrade Your Wardrobe?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed mb-10">
              Join thousands of satisfied customers who have found their perfect look with us.
            </p>
            <Button 
                size="lg" 
                className="bg-[#A67A4B] text-white hover:bg-[#af865a] px-5 py-3 text-lg font-semibold"
                onClick={() => navigate('/auth/register')}
            >
              Create an Account
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-[#F5F5F0]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left ">
          <p className="text-sm text-gray-500 ml-2">
            © 2025 WEARLO E-Shop Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 mr-2">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
