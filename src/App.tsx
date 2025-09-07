import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Laptops from "./pages/Laptops";
import Desktops from "./pages/Desktops";
import Workstations from "./pages/Workstations";
import Mini from "./pages/Mini";
import Servers from "./pages/Servers";
import Keyboards from "./pages/Keyboards";
import Components from "./pages/Components";
import PopOS from "./pages/PopOS";
import Merch from "./pages/Merch";
import Specials from "./pages/Specials";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/desktops" element={<Desktops />} />
          <Route path="/workstations" element={<Workstations />} />
          <Route path="/mini" element={<Mini />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/components" element={<Components />} />
          <Route path="/pop-os" element={<PopOS />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
