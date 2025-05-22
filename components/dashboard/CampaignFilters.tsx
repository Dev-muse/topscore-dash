
"use client";

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Search } from "lucide-react"; // FilterIcon and HelpCircle are in the parent
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CampaignFiltersProps, DatePickerProps } from '@/lib/types';



function DatePickerComponent({ date, setDate, placeholderText = "Pick a date" }: DatePickerProps) {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button
        variant={"outline"}
        className={cn(
          "w-full justify-start text-left font-normal bg-card border-border",
          "text-muted-foreground"
        )}
        disabled  
      >
        <CalendarDays className="mr-2 h-4 w-4" />
        <span>{placeholderText}</span>
      </Button>
    );
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal bg-card border-border",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarDays className="mr-2 h-4 w-4" />
          {date ? format(date, "dd MMM yyyy") : <span>{placeholderText}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-popover border-border">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}




const CampaignFilters: React.FC<CampaignFiltersProps> = ({
  selectedCampaign,
  setSelectedCampaign,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  showFilters,
}) => {
  if (!showFilters) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
      <div>
        <label htmlFor="select-campaign" className="block text-sm font-medium text-muted-foreground mb-1">
          Select campaign
        </label>
        <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
          <SelectTrigger id="select-campaign" className="bg-card border-border">
            <SelectValue placeholder="Select campaign" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="bp-test-campaign">BP Test Campaign</SelectItem>
            <SelectItem value="tech-graduates-2024">Tech Graduates 2024</SelectItem>
            <SelectItem value="summer-internship-2024">Summer Internship 2024</SelectItem>
            <SelectItem value="senior-dev-q3-2024">Senior Developers Q3 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="start-date" className="block text-sm font-medium text-muted-foreground mb-1">Start date</label>
        <DatePickerComponent date={startDate} setDate={setStartDate} placeholderText="Select start date"/>
      </div>
      <div>
        <label htmlFor="end-date" className="block text-sm font-medium text-muted-foreground mb-1">End date</label>
        <DatePickerComponent date={endDate} setDate={setEndDate} placeholderText="Select end date"/>
      </div>
      <div className="flex items-end gap-2">
        <div className="flex-grow relative">
          <label htmlFor="search-dashboard" className="block text-sm font-medium text-muted-foreground mb-1 sr-only">Search</label>
          <Input id="search-dashboard" placeholder="Search" className="bg-card border-input h-10 pl-4 pr-10" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignFilters;
