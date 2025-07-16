
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      image: 'https://i.postimg.cc/kg9gS2c2/20250615-165732-0000.png',
      duration: 5000 // ৫ সেকেন্ড
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/KvfG1ty3/Netlistore-20250705-024940-0000.png',
      duration: 5000 // ৫ সেকেন্ড
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % banners.length;
        return nextSlide;
      });
    }, banners[currentSlide].duration);

    return () => clearInterval(timer);
  }, [currentSlide, banners]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleBannerClick = () => {
    window.location.href = 'tel:01712525910';
  };

  return (
    <div className="relative h-24 mx-4 mt-2 mb-2 overflow-hidden rounded-lg shadow-sm">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full h-full flex-shrink-0 bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${banner.image})` }}
            onClick={handleBannerClick}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
      >
        <ChevronLeft className="h-3 w-3 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
      >
        <ChevronRight className="h-3 w-3 text-white" />
      </button>

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
