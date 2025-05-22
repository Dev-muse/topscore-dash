
"use client";

import React from 'react';

// Components
import CampaignDashboardCard from '@/components/dashboard/CampaignDashboardCard';
import AssessorAveragesCard from '@/components/dashboard/AssessorAveragesCard';
import ExerciseAveragesCard from '@/components/dashboard/ExerciseAveragesCard';
import Footer from '@/components/footer';


// Data
import { assessorAveragesData, campaignStats, exerciseAveragesData, groupPresentationColumns, presentationColumns } from "@/util/constants";

// Helpers
import { formatScore, getNestedValue, getScoreDisplayClasses } from '@/util/dashboardHelpers';

export default function TopScoreDashboardPage() {

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8 text-foreground">

      {/* main campaign dashboard card */}
      <CampaignDashboardCard campaignStats={campaignStats} />

      
      <ExerciseAveragesCard exerciseAveragesData={exerciseAveragesData} />

    {/* Assessor averages */}
      <AssessorAveragesCard
        assessorAveragesData={assessorAveragesData}
        presentationColumns={presentationColumns}
        groupPresentationColumns={groupPresentationColumns}
        getScoreDisplayClasses={getScoreDisplayClasses}
        formatScore={formatScore}
        getNestedValue={getNestedValue}
      />

      {/* Footer */}
     <Footer />
    </div>
  );
}
