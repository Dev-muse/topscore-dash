
"use client";

import React from 'react';

// Components
  

// Data
import { campaignStats } from "@/util/constants";
import CampaignDashboardCard from '@/components/dashboard/CampaignDashboardCard';
 


export default function TopScoreDashboardPage() {
 
  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8 text-foreground">
      <CampaignDashboardCard campaignStats={campaignStats} />

      

      {/* Footer */}
      <footer className="text-center text-xs text-muted-foreground pt-8 pb-4">
        <p>&copy;2025 TopScore Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
