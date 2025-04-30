import { defineAction } from "astro:actions";
import { getChartData, getRankings } from "src/scripts/ahp";


export const server = {
    getAhp: defineAction({
        handler: (input) => {
            return getRankings(input);
        }
    }),
    getChartData: defineAction({
        handler: () => {
            return getChartData();
        }
    }),
}