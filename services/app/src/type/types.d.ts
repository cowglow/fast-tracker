type FastConfigType = "12/12" | "16/8" | "20/4";

type WeightConfigType = "Kg" | "Lbs";

type WeightEntry = {
  timestamp: Date;
  value: number;
};

interface StateSchema {
  fastConfiguration: FastConfigType;
  fastLatestStart?: Date;
  fastLatestEnd?: Date;
  fastEnableNotification: boolean;
  waterConsumption: number;
  waterConsumptionMax?: number;
  weightTracker: WeightEntry[];
  weightScaleConfiguration: WeightConfigType;
}
