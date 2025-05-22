
import type { LucideIcon } from "lucide-react";
import {
  Users,
  UsersRound,
  Clock,
  ClipboardCheck,
} from "lucide-react";

export const campaignStats: { title: string; value: string; Icon: LucideIcon; iconBg: string; iconColor: string; }[] = [
  { title: "Candidates", value: "16", Icon: Users, iconBg: "bg-primary/10", iconColor: "text-primary" },
  { title: "Assessors", value: "16", Icon: UsersRound, iconBg: "bg-primary/10", iconColor: "text-primary" },
  { title: "Pending exercise", value: "94", Icon: Clock, iconBg: "bg-primary/10", iconColor: "text-primary" },
  { title: "Completed exercise", value: "11", Icon: ClipboardCheck, iconBg: "bg-primary/10", iconColor: "text-primary" },
];

export const exerciseAveragesData = [
  { name: "Presentation", score: "0.98", maxScore: "20" },
  { name: "Group Presentation", score: "1.6", maxScore: "15" },
  { name: "Interview of somesort", score: "1.5", maxScore: "28" },
  { name: "Written Exercise / Preparation Work", score: "1.17", maxScore: "15" },
  { name: "Funky Interview", score: "2", maxScore: "4" },
  { name: "Strengths-Based Interview", score: "0", maxScore: "100" },
  { name: "In Tray VS", score: "0", maxScore: "5" },
  { name: "data science test", score: "0", maxScore: "290" },
  { name: "UI Test Exercise 123", score: "0", maxScore: "5" },
  { name: "Question ordering test", score: "7", maxScore: "10" },
  { name: "Case-Study Written Exercise", score: "0", maxScore: "5" },
  { name: "Written Exercise Dec 23", score: "0", maxScore: "15" },
  { name: "Fresh Exercise - Non-Sequential Scoring", score: "64.05", maxScore: "125" },
];

export const assessorAveragesData = [
  {
    id: 1,
    assessorName: "Charlotte Hek",
    presentation: { teamwork: 1.7, customerFocus: 0, analyticalThinking: 0, commercialAcumen: 0 },
    groupPresentation: { customerFocus: null, problemSolving: null }
  },
  {
    id: 2,
    assessorName: "Lewis Whitehead",
    presentation: { teamwork: 4, customerFocus: 4, analyticalThinking: 3, commercialAcumen: 3 },
    groupPresentation: { customerFocus: 1, problemSolving: 2 }
  },
  {
    id: 3,
    assessorName: "Saeed Assessor",
    presentation: { teamwork: 0, customerFocus: 0, analyticalThinking: 0, commercialAcumen: 0 },
    groupPresentation: { customerFocus: null, problemSolving: null }
  },
  {
    id: 4,
    assessorName: "Tammy Ross",
    presentation: { teamwork: 0, customerFocus: 0, analyticalThinking: 0, commercialAcumen: 0 },
    groupPresentation: { customerFocus: null, problemSolving: null }
  },
  {
    id: 5,
    assessorName: "Samantha Lee",
    presentation: { teamwork: 2.5, customerFocus: 3, analyticalThinking: 2, commercialAcumen: 3.5 },
    groupPresentation: { customerFocus: 2.5, problemSolving: 3 }
  },
  {
    id: 6,
    assessorName: "Sophie Thomas",
    presentation: { teamwork: 1.0, customerFocus: 2.0, analyticalThinking: 1.5, commercialAcumen: 2.5 },
    groupPresentation: { customerFocus: 1.5, problemSolving: 2.0 }
  },
];

export const presentationColumns = [
  { dataKey: "assessorName", label: "Assessor Name" },
  { dataKey: "presentation.teamwork", label: "Teamwork (5)" },
  { dataKey: "presentation.customerFocus", label: "Customer Focus (5)" },
  { dataKey: "presentation.analyticalThinking", label: "Analytical Thinking (5)" },
  { dataKey: "presentation.commercialAcumen", label: "Commercial Acumen (5)" },
];

export const groupPresentationColumns = [
  { dataKey: "assessorName", label: "Assessor Name" },
  { dataKey: "groupPresentation.customerFocus", label: "Customer Focus (5)" },
  { dataKey: "groupPresentation.problemSolving", label: "Problem Solving (5)" },
];
