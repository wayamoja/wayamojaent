import { StrictMode } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.3 }}
          >
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </StrictMode>
  );
}