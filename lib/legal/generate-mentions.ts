import {legalConfig} from "../../config/legal"

export function generateMentionsLegales() {

    const l = legalConfig

    return `
Éditeur du site

Le présent site est édité par :

${l.companyName}
Statut : ${l.legalStatus}

Responsable de publication : ${l.ownerName}

Adresse : ${l.address}
Email : ${l.email}
Téléphone : ${l.phone}

Numéro SIRET : ${l.siret}
RCS : ${l.rcs}

Hébergement

Le site est hébergé par :

${l.hostName}
${l.hostAddress}

Site web : ${l.hostWebsite}
`
}