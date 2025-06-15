
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notifications from "./pages/Notifications";
import Doctor from "./pages/categories/Doctor";
import Hospital from "./pages/categories/Hospital";
import Blood from "./pages/categories/Blood";
import Diagnostic from "./pages/categories/Diagnostic";
import VehicleRent from "./pages/categories/VehicleRent";
import PoliceStation from "./pages/categories/PoliceStation";
import Lawyer from "./pages/categories/Lawyer";
import Jobs from "./pages/categories/Jobs";
import Teacher from "./pages/categories/Teacher";
import TodaysMarket from "./pages/categories/TodaysMarket";
import BusSchedule from "./pages/categories/BusSchedule";
import TrainSchedule from "./pages/categories/TrainSchedule";
import HouseRent from "./pages/categories/HouseRent";
import Hotel from "./pages/categories/Hotel";
import Entrepreneur from "./pages/categories/Entrepreneur";
import TrainingCenter from "./pages/categories/TrainingCenter";
import Student from "./pages/categories/Student";
import TouristSpots from "./pages/categories/TouristSpots";
import PlotLand from "./pages/categories/PlotLand";
import Mechanic from "./pages/categories/Mechanic";
import Nursery from "./pages/categories/Nursery";
import BuySell from "./pages/categories/BuySell";
import ElectricOffice from "./pages/categories/ElectricOffice";
import EducationalInstitute from "./pages/categories/EducationalInstitute";
import CourierService from "./pages/categories/CourierService";
import WatchVideo from "./pages/categories/WatchVideo";
import BeautyParlor from "./pages/categories/BeautyParlor";
import Website from "./pages/categories/Website";
import Municipality from "./pages/categories/Municipality";
import BankInsurance from "./pages/categories/BankInsurance";
import GasStation from "./pages/categories/GasStation";
import NewspaperPage from "./pages/categories/Newspaper";
import GeneralHelp from "./pages/categories/GeneralHelp";
import DayLaborer from "./pages/categories/DayLaborer";
import DuaZikir from "./pages/categories/DuaZikir";
import NotFound from "./pages/NotFound";
import PWAInstallBanner from "./components/PWAInstallBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/vehicle-rent" element={<VehicleRent />} />
          <Route path="/police-station" element={<PoliceStation />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/todays-market" element={<TodaysMarket />} />
          <Route path="/bus-schedule" element={<BusSchedule />} />
          <Route path="/train-schedule" element={<TrainSchedule />} />
          <Route path="/house-rent" element={<HouseRent />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/entrepreneur" element={<Entrepreneur />} />
          <Route path="/training-center" element={<TrainingCenter />} />
          <Route path="/student" element={<Student />} />
          <Route path="/tourist-spots" element={<TouristSpots />} />
          <Route path="/plot-land" element={<PlotLand />} />
          <Route path="/mechanic" element={<Mechanic />} />
          <Route path="/nursery" element={<Nursery />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/electric-office" element={<ElectricOffice />} />
          <Route path="/educational-institute" element={<EducationalInstitute />} />
          <Route path="/courier-service" element={<CourierService />} />
          <Route path="/watch-video" element={<WatchVideo />} />
          <Route path="/beauty-parlor" element={<BeautyParlor />} />
          <Route path="/website" element={<Website />} />
          <Route path="/municipality" element={<Municipality />} />
          <Route path="/bank-insurance" element={<BankInsurance />} />
          <Route path="/gas-station" element={<GasStation />} />
          <Route path="/newspaper" element={<NewspaperPage />} />
          <Route path="/general-help" element={<GeneralHelp />} />
          <Route path="/day-laborer" element={<DayLaborer />} />
          <Route path="/dua-zikir" element={<DuaZikir />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PWAInstallBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
