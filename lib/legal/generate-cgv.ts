import {legalConfig} from "../../config/legal"

export function generateCGV() {

    const l = legalConfig

    return `
Article 1 – Objet

Les présentes Conditions Générales de Vente régissent les prestations proposées par :

${l.companyName}


Article 2 – Services

Les services proposés sont décrits sur le site :

${l.website}


Article 3 – Prix

Les prix sont indiqués en euros et peuvent être modifiés à tout moment.


Article 4 – Paiement

Le paiement s'effectue selon les modalités définies lors de la commande.


Article 5 – Responsabilité

${l.companyName} ne saurait être tenu responsable des dommages résultant d'une mauvaise utilisation du service.


Article 6 – Litiges

En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
`
}