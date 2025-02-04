"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import AdminHome from '@/sub_pages/home/page';
import Collegelaba from '@/sub_pages/laboratory/page';
import Collegelabb from '@/sub_pages/userdetails/page';
import Ictlab from '@/sub_pages/ictlab/page';




const Dashboard = () => {
    const [laboratory, setLaboratory] = useState([]);
    const [selectedLab, setSelectedLab] = useState(null);
    const [computers, setComputers] = useState([]);
    const [labId, setLabId] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [activeContent, setActiveContent] = useState("home");
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const router = useRouter();

    

    const handleLogout = async () => {
        await fetch('/api/logout');
        router.push('/adminlogin');
      };
      

    useEffect(() => {
            setIsClient(true);

            if (activeContent === "logout") {
                router.push('/adminlogin');
            }
          }, [activeContent, router]);

    const renderContent = () => {
    switch (activeContent) {
        case "laboratory":
        return <Collegelaba />;
        case "userdetails":
        return <Collegelabb />;
        case "ictlab":
        return <Ictlab />;
        default:
        return <AdminHome />;
    }
    };
    

    const updateStatuses = async () => {
        await fetch('/api/admin/update-computers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ labId, computers }),
        });
        if(updateStatuses.ok) {
            alert('Successfully set');
        }
        else {
            alert('not added');
        }
    };

    if (!isClient) return null;

    return (
        <div className="dashboard overflow-y-scroll">
      {/* Sidebar */}
      <Sidebar
        onMenuClick={setActiveContent}
        isCollapsed={isSidebarCollapsed}
        onChange={handleLogout}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content */}
      <div className={`main-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <header className="dashboard-header">
          <h1>Arellano University - Plaridel Campus Computer Laboratory Management System</h1>
          <p>
            
            Hold by admin...
          </p>
        </header>

        {/* Render Active Content */}
        <div className="content-area">{renderContent()}</div>
      </div>
    </div>
    );
}
export default Dashboard;
