
"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  HelpCircle,
  Filter as FilterIcon,
} from "lucide-react";

import CampaignFilters from "./CampaignFilters";
import CampaignStats from "./CampaignStats";

 import { CampaignDashboardCardProps } from '@/lib/types';



export default function CampaignDashboardCard({
  campaignStats,
}: CampaignDashboardCardProps) {
  const [selectedCampaign, setSelectedCampaign] = React.useState("bp-test-campaign");
  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date(2024, 0, 1));
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date(2024, 11, 31));
  const [showFilters, setShowFilters] = React.useState(true);

  return (
    <Card className="shadow-lg rounded-lg border-border bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <LayoutGrid className="h-7 w-7 text-primary" />
            <CardTitle className="text-2xl font-semibold">Campaign Dashboard</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50">
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)} aria-label="Toggle Filters" className="h-8 w-8 border-border hover:bg-muted/50">
              <FilterIcon className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>

      {/* filter here : */}
        <CampaignFilters
          selectedCampaign={selectedCampaign}
          setSelectedCampaign={setSelectedCampaign}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          showFilters={showFilters}
          // setShowFilters is not passed down if CampaignFilters doesn't need to control its own visibility separately
        />
      </CardHeader>
      <CardContent>
        {/* CampaignStats component is rendered here */}
        <CampaignStats campaignStats={campaignStats} />
      </CardContent>
    </Card>
  );
}
