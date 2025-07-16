import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryDetails from "./pages/CategoryDetails";
import MyApps from "./pages/MyApps";
import Notifications from "./pages/Notifications";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import TodaysMarket from "./pages/categories/TodaysMarket";
import BusSchedule from "./pages/categories/BusSchedule";
import TrainSchedule from "./pages/categories/TrainSchedule";
import HouseRent from "./pages/categories/HouseRent";
import Hotel from "./pages/categories/Hotel";
import Student from "./pages/categories/Student";
import TouristSpots from "./pages/categories/TouristSpots";
import ReligiousPlaces from "./pages/categories/ReligiousPlaces";
import Doctor from "./pages/categories/Doctor";
import Hospital from "./pages/categories/Hospital";
import Diagnostic from "./pages/categories/Diagnostic";
import BloodDonation from "./pages/categories/BloodDonation";
import CarRent from "./pages/categories/CarRent";
import Police from "./pages/categories/Police";
import Lawyer from "./pages/categories/Lawyer";
import Jobs from "./pages/categories/Jobs";
import Teacher from "./pages/categories/Teacher";
import Entrepreneur from "./pages/categories/Entrepreneur";
import TrainingCenter from "./pages/categories/TrainingCenter";
import PlotLand from "./pages/categories/PlotLand";
import Mechanic from "./pages/categories/Mechanic";
import Nursery from "./pages/categories/Nursery";
import BuySell from "./pages/categories/BuySell";
import ElectricityOffice from "./pages/categories/ElectricityOffice";
import EducationalInstitution from "./pages/categories/EducationalInstitution";
import CourierService from "./pages/categories/CourierService";
import Video from "./pages/categories/Video";
import BeautyParlor from "./pages/categories/BeautyParlor";
import Website from "./pages/categories/Website";
import Municipality from "./pages/categories/Municipality";
import BankInsurance from "./pages/categories/BankInsurance";
import GasStation from "./pages/categories/GasStation";
import Newspaper from "./pages/categories/Newspaper";
import GeneralHelp from "./pages/categories/GeneralHelp";
import DayLaborer from "./pages/categories/DayLaborer";
import DuaZikir from "./pages/categories/DuaZikir";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="/my-apps" element={<MyApps />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/category/market" element={<TodaysMarket />} />
          <Route path="/category/bus-schedule" element={<BusSchedule />} />
          <Route path="/category/train-schedule" element={<TrainSchedule />} />
          <Route path="/category/house-rent" element={<HouseRent />} />
          <Route path="/category/hotel" element={<Hotel />} />
          <Route path="/category/student" element={<Student />} />
          <Route path="/category/tourist-spot" element={<TouristSpots />} />
          <Route path="/category/religious" element={<ReligiousPlaces />} />
          <Route path="/category/doctor" element={<Doctor />} />
          <Route path="/category/hospital" element={<Hospital />} />
          <Route path="/category/diagnostic" element={<Diagnostic />} />
          <Route path="/category/blood-donation" element={<BloodDonation />} />
          <Route path="/category/car-rent" element={<CarRent />} />
          <Route path="/category/police" element={<Police />} />
          <Route path="/category/lawyer" element={<Lawyer />} />
          <Route path="/category/job" element={<Jobs />} />
          <Route path="/category/teacher" element={<Teacher />} />
          <Route path="/category/entrepreneur" element={<Entrepreneur />} />
          <Route path="/category/training" element={<TrainingCenter />} />
          <Route path="/category/land" element={<PlotLand />} />
          <Route path="/category/mechanic" element={<Mechanic />} />
          <Route path="/category/nursery" element={<Nursery />} />
          <Route path="/category/buy-sell" element={<BuySell />} />
          <Route path="/category/electricity" element={<ElectricityOffice />} />
          <Route path="/category/education" element={<EducationalInstitution />} />
          <Route path="/category/courier" element={<CourierService />} />
          <Route path="/category/video" element={<Video />} />
          <Route path="/category/beauty-parlor" element={<BeautyParlor />} />
          <Route path="/category/website" element={<Website />} />
          <Route path="/category/municipality" element={<Municipality />} />
          <Route path="/category/bank-insurance" element={<BankInsurance />} />
          <Route path="/category/gas-station" element={<GasStation />} />
          <Route path="/category/newspaper" element={<Newspaper />} />
          <Route path="/category/general-help" element={<GeneralHelp />} />
          <Route path="/category/daily-worker" element={<DayLaborer />} />
          <Route path="/category/dua-zikir" element={<DuaZikir />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
