
import React, { useState, useRef } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "./ui/command";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Category {
  name: string;
  path: string;
}

// Category mappings (Bangla name => route path)
const categories: Category[] = [
  { name: "শিক্ষক", path: "/categories/Teacher" },
  { name: "ডাক্তার", path: "/categories/Doctor" },
  { name: "রক্ত", path: "/categories/Blood" },
  { name: "ত্রাণ", path: "/categories/GeneralHelp" },
  { name: "ছাত্র", path: "/categories/Student" },
  { name: "আইনজীবী", path: "/categories/Lawyer" },
  { name: "নার্সারি", path: "/categories/Nursery" },
  { name: "মিস্ত্রি", path: "/categories/Mechanic" },
  { name: "হাসপাতাল", path: "/categories/Hospital" },
  { name: "খবর", path: "/categories/Newspaper" },
  { name: "পত্রিকা", path: "/categories/Newspaper" },
  { name: "গাড়ি ভাড়া", path: "/categories/VehicleRent" },
  { name: "বাড়ি ভাড়া", path: "/categories/HouseRent" },
  { name: "জমি", path: "/categories/PlotLand" },
  { name: "বাজার", path: "/categories/TodaysMarket" },
  { name: "চাকরি", path: "/categories/Jobs" },
  { name: "প্রশিক্ষণ কেন্দ্র", path: "/categories/TrainingCenter" },
  { name: "ট্রেন সময়সূচি", path: "/categories/TrainSchedule" },
  { name: "পৌরসভা", path: "/categories/Municipality" },
  { name: "দর্শনীয় স্থান", path: "/categories/TouristSpots" },
  { name: "ওয়েবসাইট", path: "/categories/Website" },
  { name: "ভিডিও", path: "/categories/WatchVideo" },
  // ভালো হবে categoryRoutes রাউট বের করে এখানে যোগ করা (পরবর্তীতে চাইলে)
];

interface GlobalSearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GlobalSearchDialog: React.FC<GlobalSearchDialogProps> = ({ open, onOpenChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Finds a category if there is an exact match (ignoring leading/trailing spaces)
  const matchedCategory = categories.find(
    cat => cat.name.trim() === searchTerm.trim() && searchTerm.trim() !== ""
  );

  const handleSelect = (path: string) => {
    onOpenChange(false);
    setTimeout(() => navigate(path), 120);
  };

  // Allow pressing "Enter" to open when there's an exact match
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && matchedCategory) {
      e.preventDefault();
      handleSelect(matchedCategory.path);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0">
        <Command>
          <CommandInput
            ref={inputRef}
            placeholder="ক্যাটাগরি সার্চ করুন (যেমন: শিক্ষক, ডাক্তার)..."
            value={searchTerm}
            onValueChange={setSearchTerm}
            autoFocus
            onKeyDown={handleInputKeyDown}
          />
          <CommandList>
            {!matchedCategory && (
              <CommandEmpty>কিছুই পাওয়া যায়নি</CommandEmpty>
            )}
            {matchedCategory && (
              <CommandItem
                value={matchedCategory.name}
                onSelect={() => handleSelect(matchedCategory.path)}
                className="cursor-pointer flex justify-between"
              >
                <span>{matchedCategory.name}</span>
                <ArrowRight className="w-4 h-4" />
              </CommandItem>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalSearchDialog;

