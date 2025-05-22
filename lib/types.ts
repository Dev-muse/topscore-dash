import { LucideIcon } from "lucide-react";
import { JSX } from "react";

export interface AssessorAveragesCardProps {
  assessorAveragesData: any[];
  presentationColumns: { dataKey: string; label: string }[];
  groupPresentationColumns: { dataKey: string; label: string }[];
  getScoreDisplayClasses: (score: number | undefined | null) => string;
  formatScore: (score: number | undefined | null) => string;
  getNestedValue: (obj: any, path: string) => any;
}

export interface CampaignDashboardCardProps {
  campaignStats: { title: string; value: string; Icon: LucideIcon; iconBg: string; iconColor: string; }[];
}

export interface CampaignFiltersProps {
  selectedCampaign: string;
  setSelectedCampaign: (campaign: string) => void;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
  showFilters: boolean;
}

export interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholderText?: string;
}

export interface AssessorAveragesProps {
  assessorAveragesData: any[];
  presentationColumns: { dataKey: string; label: string }[];
  groupPresentationColumns: { dataKey: string; label: string }[];
  presentationSortConfig: { key: string; direction: 'ascending' | 'descending' } | null;
   groupPresentationSortConfig: { key: string; direction: 'ascending' | 'descending' } | null;
   handleSortRequest: (tableType: 'presentation' | 'groupPresentation', key: string) => void;
  renderSortIcon: (columnKey: string, currentSortConfig: { key: string; direction: 'ascending' | 'descending' } | null) => JSX.Element;
  getScoreDisplayClasses: (score: number | undefined | null) => string;
  formatScore: (score: number | undefined | null) => string;
  getNestedValue: (obj: any, path: string) => any;
}
