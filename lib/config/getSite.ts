import siteJson from "@/config/site.json"
import {SiteConfig} from "@/types/site";

const site = siteJson as SiteConfig;

export function getSite(): SiteConfig {
    return site
}
