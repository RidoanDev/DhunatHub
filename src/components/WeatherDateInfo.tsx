import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { CalendarDays, Clock } from "lucide-react";

// Helper: Bengali numerals
const bnNums = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function toBn(num: number | string): string {
  return num.toString().split('').map(d => (/\d/.test(d) ? bnNums[parseInt(d)] : d)).join('');
}

// Helper: Bengali weekday
const bnWeekdays = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];

// Inaccurate month names for fallback. A proper library is needed for accuracy.
const bnMonthNamesFallback = ["পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র", "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ"];

// Approximation for Bengali date
function getBengaliDateString(date: Date): string {
    return `${toBn(date.getDate())} ${bnMonthNamesFallback[date.getMonth()]}, ${toBn(date.getFullYear() - 593)}, ${bnWeekdays[date.getDay()]}`;
}

// Helper: English date
function getEnglishDateString(date: Date): string {
    return format(date, "d MMMM yyyy, EEEE");
}

// Helper: বাংলা দিনের অংশ (ভোর, সকাল, দুপুর, বিকেল, সন্ধ্যা, রাত, মধ্যরাত)
function getBanglaTimePeriod(hour: number): string {
    if (hour >= 0 && hour < 4) return "মধ্যরাত";
    if (hour >= 4 && hour < 6) return "ভোর";
    if (hour >= 6 && hour < 12) return "সকাল";
    if (hour >= 12 && hour < 14) return "দুপুর"; // 12pm to 2pm
    if (hour >= 14 && hour < 18) return "বিকেল"; // 2pm to 6pm
    if (hour >= 18 && hour < 20) return "সন্ধ্যা";
    return "রাত";
}

// Helper: বাংলা সময় (12-hour + period)
function formatLocalTimeBd(date: Date): string {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    const period = getBanglaTimePeriod(h);
    let bh = h % 12;
    bh = bh ? bh : 12; // 12h format
    return `${period} ${toBn(bh)}:${toBn(m.toString().padStart(2, '0'))}:${toBn(s.toString().padStart(2, '0'))}`;
}

const WeatherDateInfo: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  const bengaliDate = getBengaliDateString(now);
  const englishDate = getEnglishDateString(now);
  const localTime = formatLocalTimeBd(now);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 text-center border">
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-4 w-4 text-slate-500 flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs font-medium text-slate-800 leading-tight whitespace-nowrap">{bengaliDate}</p>
            <p className="text-[10px] text-slate-500 leading-tight">{englishDate}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-slate-500 flex-shrink-0" />
          <p className="text-xs font-semibold text-slate-800 whitespace-nowrap">{localTime}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDateInfo;
