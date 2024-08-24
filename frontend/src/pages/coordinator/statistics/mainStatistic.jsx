import React, { useState } from 'react';
import Navbar from '../../../components/coordinator/mainDashboardInformation/menuMobile/menuMobile';
import MenuCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard';
import ProfileCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/profileCoordinatorDashboard';
import ProfileModal from '../../../components/coordinator/mainDashboardInformation/viewProfileCoordinator/profileModalCoordinator';
import { SimplePieChart } from '../../../components/coordinator/StatisticsGraphics/principalChartsDashboard/simplePieChart';

export default function MainStatistic(){
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
    return(
        <>
        <div>
            <Navbar/>
            <div className="antialiased bg-black w-full min-screen text-slate-300 relative py-16">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
            <div id="menu" className="bg-white/10 col-span-12 md:col-span-3 lg:col-span-2.5 rounded-lg p-2 hidden md:block">
                    <ProfileCoordinatorDashboard onOpenModal={handleOpenModal} />
                    <MenuCoordinatorDashboard/>
                </div>
                <div id="content" className="bg-white/10 col-span-12 md:col-span-9 lg:col-span-9.5 rounded-lg p-4">
                <SimplePieChart/>
                </div>
            </div>
            <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
           
        </div>
        </>
    );
}