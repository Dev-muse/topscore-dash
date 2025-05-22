
"use client";
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText as FileTextIcon, ArrowUp, ArrowDown, ChevronsUpDown } from "lucide-react";
import AssessorAverages from './AssessorAverages';
import { AssessorAveragesCardProps } from '@/lib/types';
 


function AssessorAveragesCard ({
  assessorAveragesData,
  presentationColumns,
  groupPresentationColumns,
  getScoreDisplayClasses,
  formatScore,
  getNestedValue,
}: AssessorAveragesCardProps) {
  const [presentationSortConfig, setPresentationSortConfig] = React.useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);
  const [groupPresentationSortConfig, setGroupPresentationSortConfig] = React.useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  const handleSortRequest = (tableType: 'presentation' | 'groupPresentation', key: string) => {
    const currentSortConfig = tableType === 'presentation' ? presentationSortConfig : groupPresentationSortConfig;
    const setSortConfig = tableType === 'presentation' ? setPresentationSortConfig : setGroupPresentationSortConfig;
    let direction: 'ascending' | 'descending' = 'ascending';
    if (currentSortConfig && currentSortConfig.key === key && currentSortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const renderSortIcon = (columnKey: string, currentSortConfig: { key: string; direction: 'ascending' | 'descending'; } | null) => {
    if (!currentSortConfig || currentSortConfig.key !== columnKey) {
      return <ChevronsUpDown className="ml-2 h-3 w-3 text-muted-foreground/70" />;
    }
    if (currentSortConfig.direction === 'ascending') {
      return <ArrowUp className="ml-2 h-3 w-3" />;
    }
    return <ArrowDown className="ml-2 h-3 w-3" />;
  };

  return (
    <Card className="shadow-lg rounded-lg border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <CardTitle className="text-xl font-semibold">Assessor averages</CardTitle>
        </div>
         <Button variant="outline" size="sm" className="text-muted-foreground hover:text-primary border-border hover:bg-muted/50 h-8 px-3">
          <FileTextIcon className="mr-2 h-4 w-4" />
          PDF Report
        </Button>
      </CardHeader>
      <CardContent>
        <AssessorAverages
          assessorAveragesData={assessorAveragesData}
          presentationColumns={presentationColumns}
          groupPresentationColumns={groupPresentationColumns}
          presentationSortConfig={presentationSortConfig}
          groupPresentationSortConfig={groupPresentationSortConfig}
          handleSortRequest={handleSortRequest}
          renderSortIcon={renderSortIcon}
          getScoreDisplayClasses={getScoreDisplayClasses}
          formatScore={formatScore}
          getNestedValue={getNestedValue}
        />
      </CardContent>
    </Card>
  );
};

export default AssessorAveragesCard;
