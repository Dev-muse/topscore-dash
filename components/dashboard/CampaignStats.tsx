
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CampaignStatsProps } from '@/lib/types';



function CampaignStats({ campaignStats }:CampaignStatsProps){
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-2">
      {campaignStats.map((stat) => (
        <Card key={stat.title} className="shadow-none border-none bg-transparent">
          <CardContent className="p-0 flex items-center gap-4">
            <div className={`p-3 rounded-full ${stat.iconBg}`}>
              <stat.Icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CampaignStats;
