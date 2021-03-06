﻿module Music {
    export class OPLConstants {
        public static SampleRate: number = 49700;
        public static SampleTime: number = 1.0 / OPLConstants.SampleRate;
        public static AttackRates: number[] = [
            null,
            null,
            null,
            null,
            2826.24,
            2252.80,
            1884.16,
            1597.44,
            1413.12,
            1126.40,
            942.08,
            798.72,
            706.56,
            563.20,
            471.04,
            399.36,
            353.28,
            281.60,
            235.52,
            199.68,
            176.76,
            140.80,
            117.76,
            99.84,
            88.32,
            70.40,
            58.88,
            49.92,
            44.16,
            35.20,
            29.44,
            24.96,
            22.08,
            17.60,
            14.72,
            12.48,
            11.04,
            8.8,
            7.36,
            6.24,
            5.52,
            4.40,
            3.68,
            3.12,
            2.76,
            2.20,
            1.84,
            1.56,
            1.40,
            1.12,
            0.92,
            0.80,
            0.70,
            0.56,
            0.46,
            0.42,
            0.38,
            0.30,
            0.24,
            0.20,
            0.00,
            0.00,
            0.00,
            0.00
        ];

        public static DecayRates: number[] = [
            null, null, null, null,
            39280.64,
            31416.32,
            26173.44,
            22446.08,
            19640.32,
            15708.16,
            13086.72,
            11223.04,
            9820.16,
            7854.08,
            6543.36,
            5611.52,
            4910.08,
            3927.04,
            3271.68,
            2805.76,
            2455.04,
            1936.52,
            1635.84,
            1402.88,
            1227.52,
            981.76,
            817.92,
            701.44,
            613.76,
            490.88,
            488.96,
            350.72,
            306.88,
            245.44,
            204.48,
            175.36,
            153.44,
            122.72,
            102.24,
            87.68,
            76.72,
            61.36,
            51.12,
            43.84,
            38.36,
            30.68,
            25.56,
            21.92,
            19.20,
            15.36,
            12.80,
            10.96,
            9.60,
            7.68,
            6.40,
            5.48,
            4.80,
            3.84,
            3.20,
            2.74,
            2.40,
            2.40,
            2.40,
            2.40
        ];

        public static KeyScaleLevels: number[][] = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.750, 1.125, 1.5, 1.875, 2.250, 2.625, 3.0],
            [0, 0, 0, 0, 0, 1.875, 3.0, 4.125, 4.875, 5.625, 6.0, 6.750, 7.125, 7.5, 7.875, 8.250, 8.625, 9.0],
            [0, 0, 0, 1.875, 3.0, 4.125, 4.875, 5.625, 6.0, 6.750, 7.125, 7.5, 7.875, 8.250, 8.625, 9.0],
            [0, 0, 3.0, 4.875, 6.0, 7.125, 7.875, 8.625, 9.0, 9.750, 10.125, 10.5, 10.875, 11.25, 11.625, 12.0],
            [0, 3.0, 6.0, 7.875, 9.0, 10.125, 10.875, 1.625, 12.0, 12.750, 13.125, 13.5, 13.875, 14.250, 14.625, 15.0],
            [0, 6.0, 9.0, 10.875, 12.0, 13.125, 13.875, 14.625, 15.0, 15.750, 16.125, 16.5, 16.875, 17.25, 17.625, 18],
            [0, 9.0, 12.0, 13.875, 15.0, 16.125, 16.875, 17.625, 18.0, 18.750, 19.125, 19.5, 19.875, 20.250, 20.625, 21.0]
        ];

        public static FreqStarts: number[] = [0.047, 0.094, 0.189, 0.379, 0.758, 1.517, 3.034, 6.068];
        public static FreqSteps: number[] = [0.048, 0.095, 0.190, 0.379, 0.759, 1.517, 3.034, 6.069];

        public static KeyScaleMultipliers: number[] = [0, 1.0, 0.5, 2.0];
    }
}