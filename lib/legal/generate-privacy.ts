import {getLegal} from "@/lib/config/getLegal"

export function generatePrivacyPolicy() {

    const l = getLegal()

    return `
Responsable du traitement

Le responsable du traitement des données est :

${l.dataController}

Email : ${l.dataEmail}


Données collectées

Les données pouvant être collectées sur ce site sont :

- nom
- adresse email
- téléphone
- message transmis via formulaire de contact


Finalité du traitement

Ces données sont utilisées uniquement pour :

- répondre aux demandes de contact
- assurer le suivi des échanges avec les utilisateurs


Durée de conservation

Les données sont conservées pendant une durée maximale de 3 ans.


Droits des utilisateurs

Conformément au RGPD, vous disposez des droits suivants :

- droit d'accès
- droit de rectification
- droit de suppression
- droit d'opposition


Pour exercer ces droits :

${l.dataEmail}


Sécurité des données

Le site met en œuvre les mesures nécessaires afin de protéger les données personnelles des utilisateurs.
`
}
