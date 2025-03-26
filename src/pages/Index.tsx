
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Shield, Trophy, Zap, CreditCard, Users, Dice } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const translateY = useTransform(scrollY, [0, 400], [0, -100]);

  useEffect(() => {
    // Preload images for better UX
    const images = [
      "/assets/hero-bg.jpg",
      "/assets/game1.jpg",
      "/assets/game2.jpg",
      "/assets/game3.jpg",
      "/assets/game4.jpg",
    ];
    
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const games = [
    {
      id: 1,
      title: "Poker Royal",
      image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Master the art of poker with our premium online experience.",
      category: "Card Games",
    },
    {
      id: 2,
      title: "Black Diamond Slots",
      image: "https://images.unsplash.com/photo-1596473537027-912ad6d8c83f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Spin your way to fortune with dazzling graphics and massive jackpots.",
      category: "Slots",
    },
    {
      id: 3,
      title: "Roulette Master",
      image: "https://images.unsplash.com/photo-1601370552761-d7825047d36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Feel the thrill of the wheel with our immersive roulette experience.",
      category: "Table Games",
    },
    {
      id: 4,
      title: "Golden Blackjack",
      image: "https://images.unsplash.com/photo-1672780842019-c24b487605dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Test your skills against our dealers in this classic card game.",
      category: "Card Games",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-casino-gold" />,
      title: "Secure Transactions",
      description:
        "Your financial data is protected with state-of-the-art encryption technology, ensuring all your transactions are safe and secure.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-casino-gold" />,
      title: "VIP Rewards",
      description:
        "Unlock exclusive bonuses, personal account managers, and special promotions as you play and climb our VIP tiers.",
    },
    {
      icon: <Zap className="h-10 w-10 text-casino-gold" />,
      title: "Instant Payouts",
      description:
        "Enjoy lightning-fast withdrawals with our optimized payment processing system, getting your winnings when you want them.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-casino-gold" />,
      title: "Multiple Payment Methods",
      description:
        "From credit cards to e-wallets and cryptocurrencies, we offer a wide range of payment options to suit your preferences.",
    },
    {
      icon: <Users className="h-10 w-10 text-casino-gold" />,
      title: "24/7 Support",
      description:
        "Our dedicated customer support team is available around the clock to assist you with any questions or concerns.",
    },
    {
      icon: <Dice className="h-10 w-10 text-casino-gold" />,
      title: "Fair Gaming",
      description:
        "All our games are regularly audited by independent testing agencies to ensure fairness and random outcomes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1596731498067-a3ff3c495151?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          style={{ opacity, scale, y: translateY }}
          className="container mx-auto px-4 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="bg-casino-gold text-black px-4 py-1 rounded-full text-sm font-medium">
              Welcome to LuxCasino
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Experience Premium <br />
            <span className="text-casino-gold">Online Gaming</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Join the most sophisticated online casino platform with over 500 games,
            exclusive rewards, and instant payouts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button
              asChild
              className="bg-casino-gold text-black font-medium px-8 py-6 text-lg hover:bg-opacity-90 transition-all"
            >
              <Link to="/register">
                Create Account <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:bg-opacity-10 font-medium px-8 py-6 text-lg"
            >
              <Link to="/games">Explore Games</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white text-sm"
          >
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-casino-gold" />
              <span>Licensed & Regulated</span>
            </div>
            <div className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-casino-gold" />
              <span>Award-Winning Platform</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-casino-gold" />
              <span>Instant Withdrawals</span>
            </div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent"></div>
      </motion.section>

      {/* Featured Games Section */}
      <section className="py-24 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-casino-gold bg-opacity-10 text-casino-gold px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Top Games
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Games</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of premium casino games designed to provide
              an immersive and exciting gaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-casino-gold text-black text-xs font-semibold py-1 px-2 rounded">
                    {game.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/games/${game.id}`}
                      className="text-casino-gold font-medium text-sm hover:underline"
                    >
                      Play Now <ChevronRight className="h-4 w-4 inline ml-1" />
                    </Link>
                    <span className="text-xs font-medium bg-green-50 text-green-600 py-1 px-2 rounded">
                      Hot Game
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-white"
            >
              <Link to="/games">View All Games</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-casino-gold bg-opacity-10 text-casino-gold px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At LuxCasino, we pride ourselves on offering a superior online
              gaming experience with features designed for your enjoyment and
              peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
