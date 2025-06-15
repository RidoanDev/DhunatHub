
import React from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import NoticeMarquee from '../components/NoticeMarquee';
import CategoryGrid from '../components/CategoryGrid';
import BottomNavBar from '../components/BottomNavBar';
import WeatherDateInfo from '../components/WeatherDateInfo';
import LiveChat from '../components/LiveChat';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 bg-gray-50">
        <Header />
        <BannerSlider />
        <NoticeMarquee />
      </div>
      <div className="pb-20">
        <CategoryGrid />
        <div className="px-4">
          <WeatherDateInfo />
        </div>
      </div>
      <BottomNavBar />
      <LiveChat /> {/* ফ্লোটিং চ্যাট সব সময় থাকবে */}
    </div>
  );
};

export default Home;
