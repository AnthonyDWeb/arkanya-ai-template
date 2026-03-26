import site from "@/config/site.json"
import {SiteConfig} from "@/types/site";

export function getSite(): SiteConfig {
    return site
}
