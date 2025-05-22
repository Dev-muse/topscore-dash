"use client";

import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { AssessorAveragesProps } from '@/lib/types';


const AssessorAverages: React.FC<AssessorAveragesProps> = ({
  assessorAveragesData,
  presentationColumns,
  groupPresentationColumns,
  presentationSortConfig,
   groupPresentationSortConfig,
   handleSortRequest,
  renderSortIcon,
  getScoreDisplayClasses,
  formatScore,
  getNestedValue,
}) => {

  const sortedPresentationData = React.useMemo(() => {
    let sortableItems = [...assessorAveragesData];
    if (presentationSortConfig !== null) {
      sortableItems.sort((a, b) => {
        const valA = getNestedValue(a, presentationSortConfig.key);
        const valB = getNestedValue(b, presentationSortConfig.key);

        // Handle null or undefined values by pushing them to the end
        if (valA === undefined || valA === null) return 1;
        if (valB === undefined || valB === null) return -1;


        if (typeof valA === 'number' && typeof valB === 'number') {
          return presentationSortConfig.direction === 'ascending' ? valA - valB : valB - valA;
        }
        // For strings (like assessorName)
        if (typeof valA === 'string' && typeof valB === 'string') {
          return presentationSortConfig.direction === 'ascending'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }
        return 0; // Default no change if types are mixed or not sortable
      });
    }
    return sortableItems;
  }, [assessorAveragesData, presentationSortConfig, getNestedValue]);

  const sortedGroupPresentationData = React.useMemo(() => {
    let sortableItems = [...assessorAveragesData];
    if (groupPresentationSortConfig !== null) {
      sortableItems.sort((a, b) => {
        const valA = getNestedValue(a, groupPresentationSortConfig.key);
        const valB = getNestedValue(b, groupPresentationSortConfig.key);

        if (valA === undefined || valA === null) return 1;
        if (valB === undefined || valB === null) return -1;

        if (typeof valA === 'number' && typeof valB === 'number') {
          return groupPresentationSortConfig.direction === 'ascending' ? valA - valB : valB - valA;
        }
        if (typeof valA === 'string' && typeof valB === 'string') {
          return groupPresentationSortConfig.direction === 'ascending'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }
        return 0;
      });
    }
    return sortableItems;
  }, [assessorAveragesData, groupPresentationSortConfig, getNestedValue]);


  return (
    <Tabs defaultValue="presentation" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex mb-0 bg-transparent p-0 border-b rounded-none">
        <TabsTrigger value="presentation" className="text-sm data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:bg-transparent text-muted-foreground pb-2">
          Presentation
        </TabsTrigger>
        <TabsTrigger value="group-presentation" className="text-sm data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:bg-transparent text-muted-foreground pb-2">
          Group Presentation
        </TabsTrigger>
      </TabsList>
      <TabsContent value="presentation" className="mt-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              {presentationColumns.map(col => (
                <TableHead
                  key={col.dataKey}
                  className={cn(
                    "py-2 px-3 h-auto text-xs font-semibold text-foreground",
                    col.dataKey === 'assessorName' ? 'text-left' : 'text-center',
                    'cursor-pointer hover:bg-muted/80 transition-colors'
                  )}
                  onClick={() => handleSortRequest('presentation', col.dataKey)}
                >
                  <div className={cn(
                    "flex items-center",
                    col.dataKey === 'assessorName' ? 'justify-start' : 'justify-center'
                  )}>
                    {col.label}
                    {renderSortIcon(col.dataKey, presentationSortConfig)}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPresentationData.map((row) => (
              <TableRow key={row.id} className="hover:bg-muted/30">
                <TableCell className="font-medium text-left text-sm py-2 px-3">{row.assessorName}</TableCell>
                {presentationColumns.slice(1).map(col => (
                  <TableCell key={col.dataKey} className="text-center py-2 px-3">
                    <span className={getScoreDisplayClasses(getNestedValue(row, col.dataKey))}>
                      {formatScore(getNestedValue(row, col.dataKey))}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-presentation" className="mt-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
               {groupPresentationColumns.map(col => (
                <TableHead
                  key={col.dataKey}
                  className={cn(
                     "py-2 px-3 h-auto text-xs font-semibold text-foreground",
                     col.dataKey === 'assessorName' ? 'text-left' : 'text-center',
                    'cursor-pointer hover:bg-muted/80 transition-colors'
                  )}
                  onClick={() => handleSortRequest('groupPresentation', col.dataKey)}
                >
                  <div className={cn(
                    "flex items-center",
                     col.dataKey === 'assessorName' ? 'justify-start' : 'justify-center'
                  )}>
                    {col.label}
                    {renderSortIcon(col.dataKey, groupPresentationSortConfig)}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedGroupPresentationData.map((row) => (
              <TableRow key={row.id} className="hover:bg-muted/30">
                <TableCell className="font-medium text-left text-sm py-2 px-3">{row.assessorName}</TableCell>
                 {groupPresentationColumns.slice(1).map(col => (
                  <TableCell key={col.dataKey} className="text-center py-2 px-3">
                    <span className={getScoreDisplayClasses(getNestedValue(row, col.dataKey))}>
                      {formatScore(getNestedValue(row, col.dataKey))}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
};

export default AssessorAverages;
