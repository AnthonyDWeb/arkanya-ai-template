import legalJson from "@/config/legal.json"
import {LegalCongig} from "@/types/legal";

const legal = legalJson as LegalCongig;
export function getLegal(): LegalCongig {
    return legal
}
