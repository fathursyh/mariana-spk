import { defineAction } from "astro:actions";
import { getRankings } from "src/scripts/ahp";


export const server = {
    getAhp: defineAction({
        handler: (input) => {
            return getRankings(input);
        }
    }),
}