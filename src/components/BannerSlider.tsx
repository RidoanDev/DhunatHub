
import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    { 
      id: 1, 
      imageUrl: "https://i.postimg.cc/kg9gS2c2/20250615-165732-0000.png",
      phone: "01712525910",
      isAdvertisement: true
    },
    { 
      id: 2, 
      title: "ধুনট উপজেলা পরিচিতি",
      subtitle: "বগুড়া জেলার অন্তর্গত ধুনট উপজেলা কৃষি, নদী ও ঐতিহ্যে ভরপুর। এখানকার মানুষ আতিথেয়তা ও শিক্ষা-সংস্কৃতিতে অনন্য।",
      color: "bg-gradient-to-r from-violet-400 to-indigo-600"
    },
    { 
      id: 3, 
      title: "দর্শনীয় স্থানসমূহ",
      subtitle: "বিহারী ব্রিজ, যমুনা নদীর কোলঘেঁষা পানাহার, ঐতিহাসিক মসজিদ, ও বিভিন্ন মেলা এখানে আকর্ষণীয়।",
      color: "bg-gradient-to-r from-pink-400 to-pink-600"
    },
    { 
      id: 4, 
      title: "অ্যাপ সম্পর্কে",
      subtitle: "এই অ্যাপ থেকে ধুনটের সকল জরুরি তথ্য ও সেবা খুব সহজেই পেতে পারেন। স্থানীয় তথ্য পরামর্শ, বাজার দর, হাসপাতাল, চাকরি, আরও অনেক কিছু এখানেই!",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, currentSlide === 0 ? 4000 : 2500); // প্রথম ব্যানার ৪ সেকেন্ড, বাকিগুলো ২.৫ সেকেন্ড
    
    return () => clearInterval(timer);
  }, [banners.length, currentSlide]);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const currentBanner = banners[currentSlide];
  const isFirstBanner = currentSlide === 0;

  return (
    <div className="mx-2 sm:mx-4 mt-4 mb-3">
      <div className="aspect-[2.5/1] sm:aspect-[3/1] md:aspect-[3.5/1] lg:aspect-[4/1] rounded-xl overflow-hidden shadow-lg relative">
        {/* প্রথম ব্যানারে শুধু ইমেজ, টেক্সট ছাড়াই, মিনিমাল কল বাটন */}
        {isFirstBanner ? (
          <>
            <img
              src={currentBanner.imageUrl}
              alt="Banner"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              draggable="false"
            />
            <button
              onClick={() => handleCall(currentBanner.phone)}
              className="absolute left-2 bottom-2 bg-white/80 hover:bg-white text-green-600 px-2 py-[2px] rounded-full text-xs font-medium shadow transition-all duration-300 hover:scale-105"
              aria-label="কল করুন"
            >
              📞
            </button>
          </>
        ) : (
          // নতুন তথ্য ব্যানার কালার বেজড, টাইটেল ও সাবটাইটেলসহ
          <div 
            className={`${currentBanner.color} w-full h-full flex items-center justify-between px-3 sm:px-4 md:px-6 text-white transition-all duration-700 ease-in-out`}
          >
            <div className="flex-1 min-w-0">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 truncate">
                {currentBanner.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base opacity-90 truncate">
                {currentBanner.subtitle}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-2 space-x-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

