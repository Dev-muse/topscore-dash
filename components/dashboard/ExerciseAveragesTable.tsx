// @ts-nocheck
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExerciseAveragesTableProps, Exercise } from "@/lib/types";

const ExerciseAveragesTable: React.FC<ExerciseAveragesTableProps> = ({
  exerciseAveragesData,
}) => {
  return (
    <Card className="shadow-lg rounded-lg border-border bg-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle className="text-xl font-semibold">
            Exercise averages across all candidates
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {exerciseAveragesData.map((exercise: Exercise, index) => (
          <React.Fragment key={exercise.name}>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-sm text-foreground">{exercise.name}</span>
              <Badge
                variant="outline"
                className="text-xs font-semibold border-transparent hover:border-primary text-primary bg-primary/10 px-2 py-0.5"
              >
                {exercise.score} / {exercise.maxScore}
              </Badge>
            </div>
            {index < exerciseAveragesData.length - 1 && (
              <Separator className="my-1 bg-border" />
            )}
            \n{" "}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default ExerciseAveragesTable;
