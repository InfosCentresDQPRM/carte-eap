// FICHES DÉTAILLÉES DES CENTRES (source : tableau « Infos centres » des promos)
// La clé de chaque bloc = l'id du centre dans data.js. Champ vide "" = non affiché, à compléter.
//   site : adresse du site web du centre
//   photos : liste d'images, ex. ["photos/lille-col.jpg", "https://..."]
//   equipe : effectifs du service de physique médicale
//   ailleurs : parties de formation dans d'autres centres,
//     { texte: "...", id: "id-dun-centre-de-la-carte" } ou { texte: "...", url: "https://..." }
//   themes : ordre et titres des grands blocs de la fiche, [{ cle, titre }] — [] = ordre standard.
//     Clés standard : conditions, service, machines, avisRecents, avisPrecedents, contacts.
//     Une clé personnalisée crée un nouveau bloc (rempli par ses sections).
//   sections : cases supplémentaires { theme: cle-du-bloc, titre, texte }
//   machinesListe : machines du centre (noms de la liste MACHINES) — null = détection
//     automatique par mots-clés dans les textes
//   machines, avis, avisAnciens, contacts : textes libres entre accents graves `...`
// MACHINES : liste des machines connues (filtre « Machine… » et fiches).
// Tout se modifie aussi depuis la carte : « Modifier les infos » sur une fiche,
// puis « Exporter infos.js » pour publier le fichier mis à jour.

const MACHINES = [
  { nom: "TrueBeam", alias: ["truebeam", "true beam", "truebeams"] },
  { nom: "Novalis", alias: ["novalis"] },
  { nom: "Clinac", alias: ["clinac", "clinacs"] },
  { nom: "Halcyon", alias: ["halcyon", "halcyons"] },
  { nom: "Ethos", alias: ["ethos"] },
  { nom: "Versa", alias: ["versa", "versa hd"] },
  { nom: "Synergy", alias: ["synergy"] },
  { nom: "Tomothérapie", alias: ["tomothérapie", "tomotherapie", "tomo", "tomos", "tomohd", "tomo hd"] },
  { nom: "Radixact", alias: ["radixact", "radixacts"] },
  { nom: "CyberKnife", alias: ["cyberknife", "cyberknifes", "cyber knife"] },
  { nom: "GammaKnife", alias: ["gammaknife", "gamma knife"] },
  { nom: "IRM-Linac", alias: ["irm-linac", "irm linac", "mridian", "unity", "viewray"] },
  { nom: "ZapX", alias: ["zapx", "zap x"] },
  { nom: "Protonthérapie", alias: ["protonthérapie", "protontherapie", "proton", "protons"] },
  { nom: "Curiethérapie", alias: ["curiethérapie", "curietherapie", "curiethérapies", "curithérapie", "curitherapie", "curie hdr", "curie pdr", "curie ldr"] },
  { nom: "X-Strahl / Papillon", alias: ["x-strahl", "xstrahl", "papillon"] },
  { nom: "IntraBeam", alias: ["intrabeam"] },
  { nom: "TEP", alias: ["tep", "tep-ct", "pet"] },
  { nom: "Gamma-caméra / SPECT", alias: ["gamma-caméra", "gamma caméra", "gamma-caméras", "gamma caméras", "gamma-camera", "gamma camera", "spect", "temp", "d-spect", "dspect", "scintigraphie", "scinti"] },
  { nom: "IRM", alias: ["irm"] },
  { nom: "Scanner", alias: ["scanner", "scanners", "tdm"] },
  { nom: "Mammographe", alias: ["mammographe", "mammographes", "mammo", "mammographie"] },
  { nom: "EOS", alias: ["eos"] },
];

const INFOS = {
  "angers-ico": {
    responsables: { im: "Camille Guillerminet", rth: "Maxime Bremaud" },
    partenariats: { im: "CHU d'Angers, ICO René Gauducheau", rth: "" },
    site: "https://www.institut-cancerologie-ouest.com",
    photos: [],
    statut: "Stagiaire",
    salaire: "1930",
    retraite: "oui",
    chomage: "non",
    conges: "24 (12 × 2)",
    revisions: "plus besoin",
    equipe: { physiciens: "8 en RT ; 2 en MN (1 ICO, 1 CHU)", dosimetristes: "7", techniciens: "4", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "MN dans les locaux du CHU d'Angers", url: "https://www.chu-angers.fr" },
      { texte: "Quelques jours à l'ICO Nantes", id: "nantes-ico" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Radiothérapie : ~16h ou 18h30 (en fonction des équipes de manip et des machines) + créneaux CQ
Caméras Médecine Nucléaire : après 16h50
IRM : 19h/20h
TEP : 18h`,
    avis: `MN: Dans les locaux du CHU. Partagé entre un physicien CHU et une physicienne ICO. Appareil CHU: 1 SPECT Intevo, 1 CZT (Changement actuel du parc machine, installation 1 SPECT 870 de GE, 1 Starguide de chez GE). Appareil ICO: 1 SPECT Symbia T16 Bold. Appareil partagé CHU/ICO: 1 TEP Vereos Philips, 1 TEP Vision 600 Siemens. Pour la thérapie : ICO (iode, lutathéra, Lu-PSMA) et CHU (radioembolisation à l'Y90 (Sir-sphères et ThéraSphère))
Les personnes: Equipe de manip et radiopharmacien très sympas, coté ICO et CHU. Médecins jeunes et répondant aux questions.
Locaux: Problème de place et de bureau, travail sur PC portable CHU et PC portable ICO (possibilité d'avoir la place dans le bureau de la physicienne ICO certains jours, lumière, double écran et réseau +++) sinon "bureau" (table) dans le bureau des internes qui sont très sympas (en cours de réaménagement, alors peut-être) mais pas de fenêtre. Parking du personnel côté ICO, arrêt de tram proche CHU, sinon possibilité de mettre vélo.
Déroulement: Suivi des manip dans un planning. Possibilité d'alterner RX et MN. Ne pas hésitez à demander pour faire des CQ. Physicien et physiciennes sont à l'écoute et répondent aux questions. Traitement et analyse des images en autonomie, pas spécialement de logiciel dédié (perso: imageJ, python, et syngo.via). Quelques jours sur Nantes prévus et pris en charge.
RX: Voir commentaire promos précédentes (avis plus tard) Parc très étendu, beaucoup d'appareil et d'intervention réalisées. Cependant vous pouvez rencontrez des difficultés avec une des physicienne (avis perso) Pour plus d'infos n'hésitez pas à venir nous en parler ça sera sûrement plus simple.

Le centre tourne globalement sans l'aide des DQ donc il y a moins de pression sur les CQ ou les dosimétries (sauf l'été pour le S3 où l'on vient en soutien pour les dosi). Rythme plutôt serein pour les fiches. Beaucoup de mise en place ou mise à jour technique actuellement (multiméta, adaptatif, stéréo), il y a toujours des projets en cours. Centre bien développé au niveau de la curiethérapie (flap, interstitielle, utéro-vaginale prostate, chélöides). Stéréotaxie bien approfondie malgré une machine unique dédiée
Bureau stagiaire proche des physiciens et de la dosimétrie. Equipe très sympa et formatrice, on répondra toujours à vos questions. Curiosité appréciée. Cependant léger manque d'intégration dans les projets (ex: les DQ ne sont pas dans la liste de mail de la physique, ou ne sont pas invité dans les réunions) ce qui peut rendre parfois difficile la découverte de projet ou de mise en place technique. Pose de congés assez libre. Temps dédié aux CQ machines faits en journée. Accès aux machines pour les mesures est assez variables entre les machines et les périodes (ça peut aller de 15h à 19h30). Possibilité d'aller à des congrès (SFPM, congrès régionaux, etc) sans poser de congé mais pas remboursé. Possibilité de participer à l'EPU d'Angers sur l'IA (je recommande). Facile d'accéder au centre (tram, parking, vélo). Ville très agréable avec des endroits animés (concerts, activité pleine air, visite, boutique, balade, etc) mais aussi avec pleins d'endroits calmes. Peu être tendu pour trouver des logements (beaucoup de logement mais partent vite). Assez proche de la mer et de Paris (1-2h en train et voiture).`,
    avisAnciens: `MN : se fait dans les locaux du CHU, mais les machines et encadrement se répartissent entre CHU (1 SPECT GE, 1 SPECT Symbia Intevo et 1 CZT dédiés cardio;) et ICO (1 SPECT Symbia Intevo Bold ; 1 TEP Philips Vereos; 1 TEP Vision 600). Machines dispo vers 16h30-17h (SPECT) et 18h (TEP). Dans l'ensemble, les équipes de MN sont très sympa et les médecins assez accessibles pour répondre aux questions. Pour la thérapie : ICO (iode, lutathéra, Lu-PSMA) et CHU (radioembolisation à l'Y90 (Sir-sphères)) Les 2 physiciens (1 ICO et 1 CHU) sont très disponibles pour des questions, faire des manips avec eux au besoin. Pas de bureau attitré au CHU, donc obligé de squatter les bureaux vides (il y en a très peu hélas !).
RX : principalement au CHU sauf mammo et IRM qui sont fait à l'ICO. Mammo assez dispo (au moins 1/2 journée par semaine), avec TOUT le matériel nécessaire au CQ externe (donc possible de faire quasi tous les tests sans le contrôleur). Scanner et radiologie conventionnelle relativement disponible (au moins 1/2 journée voire + quasiment toutes les semaines). Pour l'interventionnel, arceaux mobiles très dispo en journée, mais c'est un peu + compliqué pour les salles fixes (planning très variable).

Equipe très sympa et diversité de machines : 8 Phys, 7 Dosi, 4 Tech
1 TB Novalis, 1 TB, 3 Halcyon, Curie HDR Vaginale et BDD prostate
SIRT : ARIA; Eclipse avec RapidPlan, Acuros pour VMAT, AAA pour RC3D, Elements pour intracranien. Matériel IBA, Sun Nuclear et Artiscan pour les CQ
MiM pour recalage élastique et ré irradiation
Autonomie importante, mais un physicien sera toujours dispo pour répondre aux questions
Moins de CQ aux S3, au profit de la dosimétrie, RC3D VMAT Stéréo, bien aidé par les dosimétristes !

Radiothérapie : en autonomie, mais des physiciens sont toujours dispo pour des questions
Médecine nucléaire : très dispo et présente pour les TPs`,
    contacts: `Imagerie/RT : andrea.crochet@icloud.com (2024-2026), adelegabillaud@gmail.com (2023-2025), theo.letersec@gmail.com (2023-2025)
Anciens : mathilde-levardon@hotmail.fr (2021-2023), val.giordano@orange.fr (2022-2024)`
  },
  "avignon": {
    responsables: { im: "", rth: "Véronique Bodez" },
    partenariats: { im: "", rth: "" },
    site: "https://www.icap84.org",
    photos: [],
    statut: "Stagiaire",
    salaire: "1900+",
    retraite: "",
    chomage: "",
    conges: "24 (12 × 2)",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: `Équipe très sympa, plateau 100% Varian avec 4 TrueBeam dont 2 STx, 2 halcyon's, et 1 ethos. J'ai beaucoup aimé mon DQ ici je recommande le centre. Sinon pour la ville en elle-même plus mitigé, compliqué de trouver un logement (et si possible prennez avec la clim) et c'est le bordel sur la route (ça doit être là proximité avec Marseille qui veut ça). Mais bon au final c'est quand même super j'ai beaucoup appris !`,
    avisAnciens: "",
    contacts: ""
  },
  "bordeaux-bergonie": {
    responsables: { im: "", rth: "Jean-Pierre Taupiac" },
    partenariats: { im: "", rth: "" },
    site: "https://www.bergonie.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1700",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "théoriquement non",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Disponibilité après 19h30 sauf les jours de CQ mensuel
TOP réalisé par les manips
DQA entre 13h et 14h tous les jours
MN gamma caméra disponible a partir de 15h le mardi et TEP à 19h30`,
    avis: `Formation bonne en Radiothérapie bon encadrement, physicien disponible pour les questions
MN : pas de physicien a plein temps plateau technique réduit (1 gamma et une TEP)
Radio : pas de physicien a plein temps`,
    avisAnciens: "",
    contacts: `corentin.desport@gmail.com`
  },
  "bordeaux-chu": {
    responsables: { im: "Marie Eresue", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-bordeaux.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1914",
    retraite: "non",
    chomage: "non",
    conges: "25",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Disponibilité apres 19h30`,
    avis: "",
    avisAnciens: "",
    contacts: `fanny.solinhac@gmail.com`
  },
  "brest-chru": {
    responsables: { im: "Mathieu Pavoine", rth: "Gaelle Goasduff, Emmanuelle Martin" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-brest.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1928",
    retraite: "non (trimestres travaillés non comptés, gros point noir malgré de nombreuses sollicitations aux RH)",
    chomage: "non",
    conges: "12 par semestre",
    revisions: "plus besoin",
    equipe: { physiciens: "5,5 en RT (dont 0,5 recherche) ; 2 en MN", dosimetristes: "3", techniciens: "1 technicienne", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Grosse activité en Médecine Nucléaire (TEP ~17h30; Scinti 16h30-17h) Radio et TDM dispo; NRI plus compliqué. RTE : 3 TrueBeam, 1 Ethos et 1 scanner Siemens SOMATOM stéréotaxie, vmat`,
    avis: `Service de Médecine Nucleaire flambant neuf, au 3ème étage ! Quasi-100% du stage se déroule à présent à l'ICI (Institut de Cancérologie et d'Imagerie), à l'hôpital de la Cavale Blanche. La ligne 1 du réseau de bus dessert 2 arrêts à l'hôpital depuis le centre-ville. Gros chantier en cours pour l'arrivée du tram à l'hôpital (ligne B) vers 2026. Bureau des DQPRM très proche de ceux des physiciens. Très bonne équipe, ambiance conviviale. MN : 4 Gamma-cameras : 2 Siemens ProSpecta toutes neuves et 2 Siemens Intevo. Fin traitements vers 16h - 16h30. 3 TEP : 2 Siemens Vision et 1 Siemens Vision Quadra (unique en Europe !). Fin traitements vers 17h00. Accès aux machines et au labo chaud très facile, manips sympas et accessibles. Un labo avec activimètre est dédié aux physiciens. RX : Au même étage, 1 IRM GE et des équipements de radio conventionnelle (très facilement accessible en stage). Dans l'année 2025, installation d'un scanner à comptage photonique. Un 2ème service d'imagerie est présent dans l'hopital (radio conv, scanners, ...) Accès aux blocs pour l'interventionnel lors des contrôles trimestriels ou initiaux. Logiciels : SyngoVia, MiM, PACS, DACS, QATrack pour les CQ, ...

Service neuf
Bureau sympa mais très à l'écart de la physique
Les physiciens sont sympas mais ont vraiment très peu de temps pour encadrer les DQPRM (service débordé) : Autonomie ++++++, Très bonne formation en CQ avec la technicienne mais très très peu formé en dosimétrie
3 accélérateurs : 2 TB Novalis stx miroir (mlc HD), 1 Ethos. TPS : Eclipse SIRT : Aria
1 projecteur de source de source HDR pour la curithérapie utéro-vaginal. 3 curithérapie de prostate par semaine au bloc (le DQ y va une fois sur deux). Matériel de CQ : Octavius 4D, Aquilab`,
    avisAnciens: `MN : l'essentiel se passe à Morvan (95% du stage) Deux physiciens à temps plein (sur le finistère nord), 2 SPECT Symbia et Intevo, 2 TEP Biograph dernière gèn à Morvan. Bon suivi, et possibilité de participer à des projets de recherche (s'il y a). RX : scanner (sur les tep/spect ou à Cavale Blanche) et conventionnel assez accessible. Interventionnel à Cavale Blanche: compliqué d'y accéder, vous n'aurez pas forcément les deux semaines nécessaires. Bureau DQ = petit open space, à coté de celui des physiciens = facilité de communication. Equipe très sympathique. Les mains dans le camboui dès la première semaine. Soyez demandeur pour aller observer et pour les CQ RX. Hôpital de centre ville

Très bon service, équipe sympa. 5,5 physicien à temps plein (0,5 recherche) 1 technicienne 3 dosimétriste
3 accélérateurs : 2 TB Novalis stx miroir dédiés stéréo (mlc HD), 1 TB "standard" qui permet de faire des grands champs. TPS : Pinnalce SIRT : Aria
1 projecteur de source de source HDR pour la curithérapie utéro-vaginal. 3 curithérapie de prostate par semaine au bloc (le DQ y va une semaine sur deux). Radiothérapie intra opératoire régulière au bloc (IntraBeam). Matériel de CQ : Octavius 4D, Aquilab
Le DQ est très vite intégré à la routine CQ machine et CQ patient (ça se calme un peu plus en 2è année), les physiciens et la technicienne sont très dispo dès qu'il y a des questions ou pour l'encadrement.`,
    contacts: `Imagerie : caroffpc@gmail.com (24-26), paul.gillet.pro@gmail.com (23-25), delpierre.pauline@gmail.com (23-25)
IM/RT : loreena.quintin@hotmail.fr (23-25) — RT : bakondiabaloaffoh@gmail.com (23-25)
Anciens : erwancossker@gmail.com (22-24), clemence.robert98@gmail.com (22-24) — PM : mathieu.pavoine@gmail.com`
  },
  "caen-baclesse": {
    responsables: { im: "Cyril Jaudet, Alain Batalla", rth: "Philippe Berejny" },
    partenariats: { im: "Rouen", rth: "" },
    site: "https://www.baclesse.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1870",
    retraite: "oui",
    chomage: "non",
    conges: "25 (12,5 par stage)",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `imagerie MN : gamma caméra disponible 1h (12h30-13h30) et vers 17h en temps normal // TEP dispo vers 17h ou le matin avant le début des acqui à 9h Radiologie : scanner dispo vers 16h30 // radio conv pas de planning prédéfini IRM : CQ fait durant la pause méridienne des manips`,
    avis: `Le parc machine est identique à celui présenté par les anciennes promos (dont l'ajout d'un scanner dans l'optique de remplacer à terme le BigBore pour l'été 2024). Bureaux adjacents avec ceux des encadrants, juste au-dessus des services d'imagerie et de MN, le contact est facile. Équipe médicale agréable et avec qui il est facile de discuter (manips, médecins, radiopharmaciens). Attention, 1 an de travaux d'aménagement de l'été 2024 à l'été 2025 entre le CHU et Baclesse vont rendre l'accès en voiture compliqué, mais le tram passe à proximité ainsi que quelques lignes de bus.`,
    avisAnciens: `plateau tehcnique : 2 mmamographes : GE pristina (angio+tomosynhtèse) // GE Esential radio conv : 1 mobile stephanix // table stephanix // 1 suspension
3 scanners (imagerie+RT) : philips incisive, siemens confidenceRT, philips big bore (RT mais changement courant 2023)
radio inter : 4 ampli de bloc, 1 salle interventionnelle (philips-allura) MN : 3 gamma caméra (siemens intevo bold, siemens symbia T2, GE brivo) // 1 TEP philips vereos 2 IRM : siemens vida (3T) et siemens aera (1,5T)
1 tuteur qui gère la partie radologie-IRM et 1 tuteur qui gère la partie médecine nucléaire ils sont tous les 2 les géniaux. Professionnels, pédagogues et très compétents !

Plateau technique : 2 Clinacs, 2 Halcyons, 2 tomo, 1 CyberKnife, Curiethérapie HDR/LDR(I125), IntraBeam + proton Participation/réalisation aux CQ (périodiques, patients etc...) Autonomie recommandée
Les DQ sont plus ou moins libres de faire ce qu'ils souhaitent (possibilité d'approfondir les fiches sur base de volontariat mais l'inverse est aussi possible + peu d'obligations de participation active au service, mais toujours sur base de volontariat) Les physiciens sont plus ou moins disponibles pour répondre aux questions ou pour aller faire des mesures Créneau dédié aux CQ périodiques chaque semaine sur une voir deux machines
promo 2022-2024 : 1er étudiant dq en imagerie à Caen`,
    contacts: `Imagerie : alexis.doudard5@gmail.com
DQ1 : m.rayer@baclesse.unicancer.fr — DQ2 : thelie.alexis@gmail.com`
  },
  "chambery": {
    responsables: { im: "", rth: "Magali Romanet" },
    partenariats: { im: "", rth: "CHU Grenoble Alpes" },
    site: "https://www.ch-metropole-savoie.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "clermont-jean-perrin": {
    responsables: { im: "Véronique Dedieu", rth: "Véronique Dedieu" },
    partenariats: { im: "CHU de Clermont-Ferrand", rth: "" },
    site: "https://www.cjp.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1912,65 + 100 % frais de transport",
    retraite: "oui",
    chomage: "non",
    conges: "24 (12 j / 6 mois)",
    revisions: "plus besoin, mais possibilité de réviser la synthèse pendant le temps libre (DQ2)",
    equipe: { physiciens: "2 en MN", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Radiologie interventionnelle au CHU Gabriel Montpied", url: "https://www.chu-clermontferrand.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `RT : 4 accélérateurs : libre à partir de 18h-19h (en fonction des patients et de l'affluence) MN : Machines disponibles en fin d'après-midi en fonction des programmes (16h30-17h)`,
    avis: `MN (3 premiers mois de stage) : Le stage concerne uniquement le service de MN du centre Jean Perrin qui dispose de 2 caméras hybrides SPECT-CT "Symbia" et "Intevo" (bientôt 3, remplacement de la Gamma-caméra "Axis"), d'une caméra dédiée cardio (D-SPECT), de 2 TEP (Discovery 710 et Discovery MIDR) et d'une radiopharmacie (CQ mensuel activimètre par les DQ1). L'encadrement est effectué par 2 physiciens (N. Sas et T. Billoux). RX : Malheureusement, pas grand chose à dire. Nous devions réaliser 3 mois au sein du service de radiologie de CJP et du CHU mais le covid19 en a décidé autrement. À CJP, vous disposez d'un scanner dédié RT dans le service de radiothérapie (CQ mensuel fait par les DQ1), d'un scanner diagnostic et interventionnel dans le service de radiologie et d'une IRM. Il y a également 2 salles de radiologie (dont 1 où il y a de l'interventionnelle --> GPR) et où le CQ trimestriel et annuel de l'ampli de brillance est réalisé. Il y a également un service de sénologie disposant de 4 mammographes Hologic et d'un appareil de macrobiopsie. Au CHU, il y a le service de radiologie interventionnel situé au CHU Gabriel Montpied (en face du centre) qui est divisé en 3 parties différentes (cardio, neurovasculaire et vasculaire). Les DQ sont tous dans un bureau situé au sein du service de physique = communication facile. Conseil : N'hésitez pas à aller demander à faire des manips aux physiciens ;)

Information DQ2 : 4 accélérateurs Varian (2 Novalis et 2 Clinac) ; Participation/réalisation aux CQ Mensuels/semestriels/annuels ; Réalisation de perm en binôme avec un physicien ; Réalisation de CQ pré-traitement (Delta4/Lucy/PDIP) ; R&V sur Aria ; Dosimétrie sur Eclipse ;
Bonne ambiance et bon encadrement`,
    avisAnciens: "",
    contacts: `DQ1 : aurelie-pauthe@orange.fr, auappavou.richard@gmail.com`
  },
  "dijon-cgfl": {
    responsables: { im: "Jean-Marc Vrigneaud", rth: "Leone Aubignac" },
    partenariats: { im: "", rth: "" },
    site: "https://www.cgfl.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1900 + 75 % frais de transport",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "oui",
    equipe: { physiciens: "9 en RT ; 2 en imagerie/MN", dosimetristes: "4", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `RTE : Au mieux après 17/18h, en général 19/20h. TOP allumage machine matin. DQA midi/soir. Jeudi aprém CQ machine. MN : dispo gamma caméra 16h30, labo 16h et TEP après 17h30. RX: Scanner/Mammo dispo à partir de 17/18h, salle interventionnelle dédiée: dispo 1 après-midi par semaine (sauf urgences) sinon à partir de 17h.`,
    avis: `Pour les machines : 1 TEP Quadra de Siemens (grand champ), 1 TEP VISION, 2 gamma-caméras miroir Siemens, 1 D-SPECT (dédiée cardiaque). En radiologie : 2 arceaux de blocs (GE, Siemens), salle interventionnelle dédiée Artis zee celling Siemens + scanner interventionnel, 2 mammographes, 1 scanner (Siemens), 1 mobile de radio et 1 salle conventionnelle Nova (Fuji)
Centre situé à 2min à pied de l'arret de tram CHU
Encadrants très présents, toujours disponibles pour répondre aux questions. Très bien encadré en médecine nucléaire avec l'encadrant référent présent pour les contrôles même le soir. Plus d'autonomie à avoir sur les machines en radiologie mais vous ne serez jamais complètement livré à vous même, vous aurez toujours des pistes ou des réponses à vos questions. Si vous êtes qu'un seul DQPRM, il reste aussi avec vous au début pour pas que vous soyez complètement seul. Très bonne ambiance dans l'équipe, tout le monde mange ensemble (DQ, physiciens, doctorant, ingénieur de recherche), pas d'horaire tant que le travail est fait, flexibilité pour poser des jours de congé. Bureau en MN partagé avec les doctorants / stagiaires de M2 avec une station MIM. Possibilités de suivre les traitements et la clinique. Pas mal de traitement en MN : radioembolisation Yttrium 90, iode 131, xofigo, Lutathera, Lu177-PSMA
Pour les fiches, possibilité de rendre des fiches écrites, diapo, excels... Le self est très bon !

Encadrement : 9 physiciens et 4 dosimétristes
Equipements :
- 1 Scanner Siemens
- 1 TrueBean Novalis avec Exactrac
- 1 True Beam STX
- 2 Halcyons
- 1 IRM Linac
- SGRT: VisionRT sur toutes les machines + MapRT sur le Scanner
- Cuve PTW Beamscan
- Nombreux fantômes disponibles pour les contrôles
- Qualiformed pour l'analyse des images
Observations:
- Encadrement moyen
- Les CQ machine sont à faire avec un physicien et un dosi
- Plusieurs mini-projet à faire avec les fiches (Tâches que les physiciens ne veulent pas réaliser)
- Grosse flexibilité pour posser des jours de congé ( Bof depuis 2026 )
- Bureau partagé avec des stagières (les physiciens ne se mélange pas au étudiant)
Remarque DQ Promo 2024/2026: Pour notre année, il n'y a pas eu de problème.
- Pour la Dosi, physicien trés disponible
- Aucun Problème pour poser les jours de congés de notre coté
- Assez d'ordi pour faire des dosies à 2DQ durant la journée donc pas obligé d'attendre le soir pour en faire
- Les physiciens ne vous laissent pas utiliser les machines lorsque qu'il n'y a plus personne dans le service (donc pas de mesure durant la nuit)
- Pour notre année, concernant les CQ Patient, on s'occupait seulement de ceux de l'IRM linac. (environ 6h par semaine de notre temps)
- Pour le Semestre 3, surtout en fin de semestre, on est un peu plus incorporé dans la routine clinique ( Import Scan, Dosi Classique ou Stéréo)
- 1 fois par semaine 1 DQ est chargé de faire le TOP du matin
- Bureau situé dans les mêmes locaux que salle Dosi et bureau des physiciens (on a trouvé la plupart des physiciens et dosi assez disponible)
- Par contre sur certaine situations on pouvait se sentir parfois mis à l'écart ( Secret Santa, Repas du nouvel an, Pot de départ d'un physicien fait sans nous) et on pouvait sentir la tension/Remarques entre certains membres des équipes. De façon général, il y a quand même plutôt une bonne ambiance`,
    avisAnciens: `Une ambiance très conviviale dans l'équipe avec deux physiciens (1 en MN à 100% et l'autre partagé 50/50 entre MN et radio).
Machines:
-MN: + 2 Gamma Caméras GE: NM/CT Discovery 870 & NM/CT Discovery 670 + 2 TEP/CT numérique: GE Discovery MI 4 ring & Siemens Biograph + SPECT/CT Cardiaque: DSPECT Spectrum Dynamics
- RX: + 2 Scanners : GE Optima 540 (sera bientôt remplacé par un Siemens) & Siemens SOMATOM Edge (Scanner interventionnel) + 2 Mammographes: Hologic 3Dimension + 2 arceaux de bloc: Siemens CIOS Select FD & arceau GE avec ampli de brillance + Une table télécommandée: Siemens Luminos dRF + Arceau salle dédiée: Siemens Artis Zee ceiling
Pas d'IRM dans le centre donc la fiche IRM est effectuée sur l'IRM-Linac (MRIdian) du centre avec l'équipe de RT....ça peut être très enrichissant
Remarques
. Les encadrants sont présents la quasi totalité du temps. La partie radiologie nécessite un peu plus d'autonomie pour les manips mais physicien toujours disponible pour les questions/réflexions.
. Centre très bien équipé en termes de machines avec beaucoup de choses à voir côté traitements en MN: radioembolisation à Y90 et Ho166 + RIV à Lutathera et Lu-PSMA (parfois Xofigo) + Irathérapie (I-131).
. Les DQ sont logés dans le bureau des jeunes physiciens (service de médecine nucléaire) avec le doctorants et les stagiares M2. Cette salle dispose d'une station MIM utilisée pour la planification des traitements en radioembolisation donc très facile pour s'impliquer dans la routine avec les physiciens et médecins.
. Toutes les fiches sont faites sous forme de rapports écrits --> ça prend donc un temps de rédaction mais c'est un plus pour la synthèse.
. Le self est incroyable!!
. Pour poser des congés, c'est très simple et l'équipe est très flexible`,
    contacts: `Imagerie/MN : theo.letersec@gmail.com, valentine.david85@gmail.com
DQ1 (21-24) : jedidisarahbcr@gmail.com, sayahfarzam@gmail.com`
  },
  "grenoble-chu": {
    responsables: { im: "Ghislaine Reboulet", rth: "Manon Jaumot" },
    partenariats: { im: "", rth: "CH Métropole Savoie" },
    site: "https://www.chu-grenoble.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1850",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "théoriquement non",
    equipe: { physiciens: "3 en imagerie", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `~19h/20h selon les machines MN : -Gamma caméra Siemens Symbia Intevo (*2) - 17h30 -Gamma caméra Ge Infinia - 15h30 -TEP - 20h Radio : -15h30 en conventionelle - Scanner après 20h (possibilité d'utiliser le scanner de RT vers 16h, voir avec les phy med de RT)`,
    avis: `Organisation : 3mois en MN puis 3mois en radio avec changement d'encadrement entre les deux. Important de prendre l'initative d'aller voir les examens avec les médecins et les manips. 3 Physicienne (une en MN, une en interventionelle et une 20% MN, 80% conventionelle). Horaires libres et choix de l'ordre des manips à voir avec les physiciens mais assez libre/autonome également.
MN : 2 Siemens Symbia Intevo, 1 Ge Infina, une caméra CZT scinti myocardique et un TEP Siemens Biograph Horizon
Corrections des fiches à la fin des trois mois uniquement, autonomie complète à la fin du stage mais encadrement pour les premières manips et la prise en main de chaque appareil
Les horaires peuvent être larges notamment le matin sur les activimètre et le soir pour la TEP.
Radio : Siemens Luminos, Primax Calypso, les scanners vont êtres changés en 2025 (evolution de scanners canons) et potentiel mise à disposition du scanner de RT Siemens SOMATOM Go.sim pour la partie optimisation. Les CQI sont sous-traités, il est intéressant d'aller les voir si ça tombe dans la bonne période.`,
    avisAnciens: `Bien bosser en autonomie, ne pas hésiter à venir poser ses questions et à demander régulièrement un suivi des fiches. Bonne équipe avec une bonne entente.
A savoir : renouvelement complet du service prévu pour 2024 avec construction de nouveaux bunkers (3 à 5)... Physiciens potentiellement très pris par cette activité et la routine
Etre capable de bosser en autonomie.`,
    contacts: `marine.deleu@outlook.com`
  },
  "grenoble-icdh": {
    responsables: { im: "", rth: "Christophe Mazzara" },
    partenariats: { im: "", rth: "Centre Léon Bérard (S2–S3)" },
    site: "https://www.ghm-grenoble.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "lille-chu": {
    responsables: { im: "Jean-Baptiste Maurice", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-lille.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1860",
    retraite: "non",
    chomage: "non",
    conges: "12 (pour le semestre)",
    revisions: "non",
    equipe: { physiciens: "3-4", dosimetristes: "", techniciens: "", ingenieurs: "1", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `MN : 17h (TEP : 17/18h) [5 TEMP, 2 TEP, 1 DSpect], CT : difficile, RX/interv : selon dispo (certaines salles, certains jours), 1 mammographe: selon dispo; IRM : selon dispo [ 2 clinique (1.5 et 3 Tesla) ; 1 recherche]`,
    avis: `Avantages : Très flexible pour poser des congés, horaires libres tant que le travail avance bien et qu'aucune mesure n'est prévue. Equipe sympathique et accessible en cas de questions, pas mal d'autonomie sauf les premières mesures (rassurant lorsqu'on ne connait pas les machines au début).
Inconvénients : Bureau éloigné des différents services, partie clinique pas forcément prévue d'office dans l'emploi du temps, se fait plutôt en autonomie et à la demande aux encadrants.
Dans l'ensemble, le stage s'est bien déroulé ! Conseil n'hésitez pas à demander pour aller voir de la clinique :)`,
    avisAnciens: `Physicien très acéssible, qui accompagne tout au long du stage, manque d'autonomie qui peut être pesant. L'ambiance est bonne. Ne pas hésiter à sortir du bureau pour se faire connaitre des équipes qui ne sont pas à proximité. 3/4 Physiciens 100% + 1 ingénieur 100%`,
    contacts: `nagy.antho@gmail.com (DQ 23-26), reibel.claire@caramail.fr (DQ 23-26)
Anciens : marine.deleu@outlook.com (2019-2021), severine.lannoy@outlook.fr, thelie.alexis@gmail.com (2021-2023), vincent.beaudoux2@gmail.com (2021-2023)`
  },
  "lille-col": {
    responsables: { im: "", rth: "Erwann Rault" },
    partenariats: { im: "", rth: "" },
    site: "https://www.centreoscarlambret.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "env. 2100",
    retraite: "non",
    chomage: "non",
    conges: "12,5 par semestre",
    revisions: "oui",
    equipe: { physiciens: "11", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Radiothérapie : 16h30 (une machine sur deux) MN : 16h Radiologie : 17h`,
    avis: `Bonne organisation du service, grosse équipe (11 physiciens), physiciens très accessible en cas de questions mais autonomie +, bonne ambiance d'équipe (pauses cafés incroyables. sorties au bar / karaoke / restaurants / foot si vous proposez !), les locaux sont partagés entre les physiciens et les stagiaires ce qui permet une bonne communication. Parc impressionant (1 Tomo, 2 Radixacts, 2 Halcyons, 1 Cyberknife, 1 IRM-Linac et 1 Truebeam (et 1 X-Strahl) et bonne disponibilité machine (16 h) Curiethérapie HDR avec TPS Oncentra, TPS raystation, Precision et Eclipse (si l'envie vous prend). Implication en routine clinique (réalisation des CQ, dosimètrie, les différents projets mis en place). Forte implication en curie (lundi et mercredi après-midi) en S3 / S4 ce sont les DQ qui font toutes les dosi curie. Pas de PSQA inutile. Les CQ du Truebeam et Halcyon sont en parti gérés par les DQ`,
    avisAnciens: `AUTONOMIE+++, physiciens accessibles en cas de questions. Parc impressionnant (1 Tomo, 2 Radixacts, 2 Halcyons, 2 Cyberknifes, 1 Clinac, prochainement 1 IRM-Linac et 1 Truebeam), curiethérapie HDR. Machines disponibles à partir de 16h30, 18h au plus tard. TPS Raystation / Precision (Accuray) / Oncentra (RC3D et curiethérapie). Bonne immersion en routine clinique.`,
    contacts: `thomasopsommer@yahoo.com (DQ 22-25), nagy.antho@gmail.com (DQ 23-26), reibel.claire@caramail.fr (DQ 23-26)
Anciens : simon.martin.phy@outlook.fr, vincent.beaudoux2@gmail.com (2021-2023)`
  },
  "lyon-clb": {
    responsables: { im: "Jean-Noël Badel", rth: "Pauline Dupuis" },
    partenariats: { im: "", rth: "" },
    site: "https://www.centreleonberard.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1915",
    retraite: "oui",
    chomage: "non",
    conges: "12 par semestre",
    revisions: "oui",
    equipe: { physiciens: "MN : 1 temps plein + 1 à 50 % ; radio : 1 à mi-temps", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Scanner de RT: à partir de 17h, SPECT/CT: à partir de 16h-16h30, TEP: 17h30-18h. EN RT: Un linac ELEKTA dispo à partir de 16h30, Les 5 autres machines à partir de 19h30-20h. Plages CQ machines: 3h par semaine par machine pour CQ réglementaires + Une journée de maintenance par mois par machine. CQ patients (VMAT, TOMO, CyberKnife) plages dédiées en journée ou fin de journée. CQ machine (Aide physiciens/DQPRM). CQ patients (Dosimétristes/DQPRM). TOP réalisé par manips à 7h30.`,
    avis: `Médecine nucléaire : 1 physicien à temps plein (peu disponible), 1 physicien à 50%, autonomie +++, 2 TEP (dont une TEP United Imaging Healthcare unique en Europe ) 3 SPECT 3 Activimètres. Bureaux isolés. Concernant l'encadrement: quelques réunions pour présenter les fiches, mais sinon très peu de suivi et d'apport de la part des physiciens. Bonne ambiance générale au sein du centre et accès facile au travail réalisé par les DQ des années précédentes. 1 jour d'observation réalisé aux HCL (Hospices Civils de Lyon).
Radiologie : 1 physicienne à mi-temps, très organisée et impliquée, met en place un planning pour le déroulement du stage. Beaucoup de CQ internes réalisés par des entreprises sous traitantes`,
    avisAnciens: `Médecine nucléaire : 1 physicien à temps plein (très impliqué en recherche) autonomie +++, 2 TEP 3 SPECT 3 Activimètres
Radiologie : 1 physicienne à mi-temps, très organisée Beaucoup de CQ internes réalisés par des entreprises sous traitantes
AUTONOMIE AUTONOMIE AUTONOMIE. Physiciens disponibles en cas de questions. MN et Radio pas de physiciens à temps plein. Accessibilité à tout sans difficulté particulière. Etre capable de prendre des initiatives pour les manips'+ fiches.`,
    contacts: `daireraymond.nicolas@gmail.com (DQ 24-26), nicolas.andre.pro15@gmail.com (DQ 24-26)
Anciens : geffroy.maiwenn@gmail.com, hug.rousseau8@gmail.com`
  },
  "lyon-chu": {
    responsables: { im: "", rth: "Amandine Beneux" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-lyon.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1650",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "oui en RT, quelques semaines avant les examens",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Radiologie: Les mesures se font dans un service d'urgence, donc les horaires sont (très) variables, à noter qu'une machine est quasiment tout le temps disponible (radio conventionnelle) Médecine nucléaire: Les machines sont disponibles à 17h au plus tard, le plus souvent 16h. Un activimètre est à contrôler le matin à 6h30 (mensuellement) Radiothérapie: Top le matin par les techniciens/dosimétristes (6h30 pour y assister). Les machines sont disponibles après les traitements pour DQA et fiches de compétences. Pour les CQ mensuels/annuels, la machine est réservée toute la journée (possible d'en profiter pour quelques fiches également`,
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "marseille-timone": {
    responsables: { im: "Bardia Farman", rth: "Stéphanie Raucoules" },
    partenariats: { im: "", rth: "Institut Paoli-Calmettes" },
    site: "https://www.ap-hm.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1954",
    retraite: "oui",
    chomage: "non",
    conges: "24",
    revisions: "oui (dernière semaine avant les exams, uniquement révision)",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Médecine nucléaire: une gamma caméra utilisée pour les fiches et les CQ dispo souvent à 14h30. TEP vers 16h30. RT: 3 versa dont un inutilisé pour manque de manip donc une machine est dispo tout le temps pour les mesures. DQA faits par dosimétriste le soir, TOP fait par les dosimétristes le matin. Radio: créneau pris par le physicien pour manip des fiches.`,
    avis: `Promo 2024-2026 : MN : 2 gammas caméras + 1 CZT + 2 TEP + 6 activimètres. Gammas caméras et TEP disponibles au plus tard à 17h (souvent vers 16h). Temps machine disponible pendant les vacances très important. Imagerie : 5 IRM (hors IRM du cemerem), 5 scanners, 1 scanner interventionnel, grande quantité de salles de radiologie et radiologie interventionnelle. 1 mois d'observation au début du stage`,
    avisAnciens: `Très bon encadrement dans les 3 domaines. Très bonne ambiance. A l'arrivée au centre 2 semaines d'observations dans chaque domaine, ce qui est un plus pour les révisions des exams. Renouvellement des machines prévu sur les 5 prochaines années.`,
    contacts: `MN/Imagerie (24-26) : cloe.roquigny@gmail.com — RT : emma.charlot1510@gmail.com
Anciens : lacroix-fanny@hotmail.fr, pfletschinger.estelle@outlook.com, brahim.mehadji@outlook.fr`
  },
  "marseille-ipc": {
    responsables: { im: "Pierre Fau", rth: "Pierre Fau" },
    partenariats: { im: "AP-HM", rth: "" },
    site: "https://www.institutpaolicalmettes.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "2466",
    retraite: "oui",
    chomage: "non",
    conges: "26",
    revisions: "",
    equipe: { physiciens: "8 (4 RT, 2 RT+IM, 2 RT+MN)", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `RT : 4 accélérateurs, 3 elekta et 1 IRM-linac MRIdian. TPS : Raystation et Viewray. Disponibilité des machines pour les DQs sur les jours de CQ et maintenances. TOP et CQ quotidien+hebdo fait par les manips. 8 physiciens dont 4 en RT plein temps, 2 se partagent RT+IM et 2 RT+MN. Les physiciens sont disponibles pour les questions et sympathiques. Beaucoup d'autonomie est attendu sur le long du stage. Les fiches font l'objet d'oraux à présenter devant les physiciens pour validation.`,
    avis: `Les DQPRM sont autonomes et peuvent poser des questions aux physiciens quand ils ont besoin. Toutes les fiches sont à présenter à l'équipe de physiciens, pour s'assurer qu'il n'y a pas d'erreurs dans l'apprentissage. On réalise les fiches mais également plusieurs autres tâches de physiciens, ce qui rend le stage beaucoup plus intéressant. On peut faire des présentations à des congrès si on le souhaite. On n'a pas de jours de congés pour la synthèse mais on a le temps que l'on veut (un mois ou plus) pour réviser à l'institut.`,
    avisAnciens: "",
    contacts: `charpevan@gmail.com, violettesgr@outlook.fr
Ancien : adam.renard@yahoo.com`
  },
  "martinique-chu": {
    responsables: { im: "Axel Govindoorazoo", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-martinique.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "metz-chr": {
    responsables: { im: "Paul Retif", rth: "Paul Retif" },
    partenariats: { im: "CHU de Nancy", rth: "" },
    site: "https://www.chr-metz-thionville.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "",
    retraite: "non",
    chomage: "non",
    conges: "12,5 par semestre",
    revisions: "",
    equipe: { physiciens: "7 (1 MN, 5 RT, 1 RT/radio)", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: `Equipe jeune, sympa et dynamique. Très bonne ambiance et très bon encadrement dans les 3 domaines (les physiciens sont toujours disponibles pour répondre à vos questions). Les horaires sont libres tant que le travail est fait ! 7 physiciens : 1 temps plein en MN, 5 temps plein en RT et 1 physicien RT/Radio. En radiothérapie participation à la routine clinique ( 2 TrueBeam STX, 1 Radixact 1 Tomothérapie, Curiethérapie ): réalisation des CQ machines, des dosimétries, des DQA, curiethérapie …. EN médecine nucléaire : pour les mesures des fiches, les gamma caméras sont disponibles vers 16 h et les TEP vers 18h ; des créneaux sont généralement bloqués pour les CQ réglementaires. En radiologie : les machines sont dispos vers 17 h.`,
    avisAnciens: "",
    contacts: `amale.kh@hotmail.com`
  },
  "montbeliard": {
    responsables: { im: "", rth: "Jean-Michel Rouvier" },
    partenariats: { im: "", rth: "" },
    site: "https://www.hnfc.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "2400",
    retraite: "oui",
    chomage: "oui",
    conges: "25",
    revisions: "sûrement",
    equipe: { physiciens: "1 en imagerie ; 4 en RT", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Une semaine de MN à la Timone (Marseille)", id: "marseille-timone" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Imagerie : Les machines sont disponibles de façon ponctuelle pour l'imagerie. Pour la médecine nucléaire et le scanner disponibilité après 17h30.`,
    avis: `Attention l'HNFC pour le stage d'imagerie n'est pas à Montbéliard mais à Trévenans (90). L'hôpital se situe à Trévenans 15 min à Belfort. C'est préférable de chercher un logement à Belfort plutôt que Montbéliard. Il y a une semaine de stage à faire à la Timone, CHU de Marseille, pour réaliser quelques fiches en médecine nucléaire. Equipe très sympathique. Autonomie initiative et communication importante à avoir. 1 physicienne à temps plein pour les modalités d'imagerie à l'HNFC. Equipe de 4 physiciens en RT.`,
    avisAnciens: "",
    contacts: `achag.ilyas21@gmail.com, manyani39@gmail.com`
  },
  "montpellier-icm": {
    responsables: { im: "Lore Santoro", rth: "Norbert Ailleres" },
    partenariats: { im: "CHU de Montpellier", rth: "" },
    site: "https://www.icm.unicancer.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1915",
    retraite: "oui",
    chomage: "oui",
    conges: "25",
    revisions: "théoriquement non, mais possible",
    equipe: { physiciens: "7 en RT ; 1 à 80 % en RX (CHU) ; 1 en MN", dosimetristes: "6", techniciens: "2 en RT ; 2 en imagerie (CHU)", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Radiologie au CHU de Montpellier (3 premiers mois)", url: "https://www.chu-montpellier.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `MN : 2 Gamma-caméras GE (1 analogique, 1 numérique) libres à partir de 16h30 et TEP-Scan libre à partir de 17h/17h30. Labo disponible à partir de 14h.
Radio : salle radio conventionnelle disponible à partir de 17h15/17h30 (ou radio pédiatrie aux urgences dispo en journée parfois), salle fixe interventionnelle disponible après 16/17h, salle fixe interventionnelle en pédiatrie disponible dès 13h, arceaux facilement accessibles en journée, scanners disponibles vers 17h, mammo libre 1jour/semaine et disponible tous les soirs à partir de 17h/18h.
RT : 4 Truebeam (dont 2 STX), 2 Ethos, 1 IRM-Linac (ViewRay). Machines miroirs donc toujours une machine de dispo le matin et/ou l'après-midi.`,
    avis: `RX :
Les 3 premiers mois de formations se déroulent au CHU de Montpellier facilement accessible en tram arrêt CHU lapeyronie.
Encadrement : 1 physicien à 80% et deux techniciens qui présentent tous les CQ. Bureau personnel pour les stagiaires.
Equipement : répartis entre les 3 pôles du CHU, Lapeyronie, Arnaud de Villeneuve et Gui de Chauliac. Utilisation de 3 scanners Siemens, 1 mammographie, un EOS, plusieurs salles de radiologie conventionnelle et interventionnelle Siemens, 1 salle hybride, 1 bi-plan, 1 IRM
Remarque : Stage guidé, les contrôles sont montrés aux étudiants et ils doivent les reproduire en autonomie. Autonomie sur l'organisation des fiches. Entretien individuel avec le physicien après chaque fiche pour vérifier les acquis et poser nos questions si besoin. Possibilité de faire de l'observation à la demande de l'étudiant : nous avons observé des infiltrations, la réalisation d'examens scanner standard, d'examens de radiologie interventionnelle (TOGD, coronarographie, angiographie du cerveau), mammographie. Horaires libres
MN :
De début avril à fin juin à l'ICM de Montpellier
Encadrement ; une physicienne à temps plein
Equipement :
- un labo chaud
- 2 gamma caméra (une analogique et une numérique)
- un TEP
Traitement au 177 Lu et 131 I dans le centre. Traitement à 90 Y à Gui de Chauliac avec une autre physicienne (réalisation de dosimétries là bas, présence au bloc lors des injections)
Remarque : Autonomie dans l'organisation des fiches, protocoles détaillés du centre pour tous les contrôles qualité fournis aux étudiants. Présentation de la bonne utilisation des sources radioactives, puis réalisation des mesures en autonomie. Une semaine d'observation à l'arrivée dans le centre. Horaires libres

Equipe composée de 7 physiciens en clinique, 6 dosimétristes, 2 techniciens. Très bonne équipe avec une bonne ambiance. Les physiciens sont très occupés mais prennent le temps de répondre aux questions (les dosimétristes également), en revanche il faut être autonome. Dès notre arrivée en S2, on nous laisse la main sur les machines pour les CQ (point très positif !) et on participe aux CQ en routine. On nous implique dans les tâches de la routine clinique : reprise étalonnage, EQUAL ESTRO, CQ curie, étalonnage des diodes pour l’ICT… Aucune pression sur le rendu des fiches tant qu’elles sont réalisées et rendues avant la fin du semestre.
Le parc est composé de : 4 Truebeam (dont 2 STX), 2 Ethos, 1 IRM-Linac (ViewRay). Les machines sont miroirs, donc on a toujours la possibilité d’avoir accès aux machines le matin et/ou l’après-midi dès 14h pour les CQ, les mesures à la cuve etc. En curiethérapie, il y a 3 chambres PDR et un bunker HDR (Elekta).
Seul inconvénient : le bureau est petit (3 postes), et on le partage avec les étudiants en Master. Par moments, il faut alterner et s’arranger pour trouver un PC ailleurs (ce qui est faisable). En revanche, le bureau est bien placé, il est situé à proximité du bureau des tech, des machines, de la dosimétrie etc. Le self est moyen et assez cher (malgré la remise de 30%).
Tâches attribuées aux DQ : RIOP (CQ+traitement) avec en moyenne 3 RIOP (max 5) par semaine ; CQ scanner.`,
    avisAnciens: `Équipe très sympathique et à l’écoute. Autonomie importante physicienne à temps plein en médecine nucleaire et physicien à temps plein en imagerie.`,
    contacts: `maunet.mathis@gmail.com (DQ 23-26), nirmah.omarjee@gmail.com (DQ 23-26)
Imagerie (24-26) : elisa.hironde@sfr.fr, emma.charlot1510@gmail.com
Anciens : trauchessecdorian@gmail.com, galliano.geoffrey@gmail.com`
  },
  "mulhouse": {
    responsables: { im: "Rui Guerra", rth: "" },
    partenariats: { im: "Strasbourg (Institut Strauss)", rth: "" },
    site: "https://www.ghrmsa.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1900",
    retraite: "à vérifier",
    chomage: "à vérifier",
    conges: "25 (12,5 par semestre)",
    revisions: "à voir, mais sûrement oui",
    equipe: { physiciens: "2 en imagerie", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Fiche RIV à l'ICANS (Strasbourg)", id: "strasbourg-icans" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `MN : à partir de 17h au plus tard (gamma et TEP), labo à partir de 15h
Radio : machines très disponibles dans la journée (salle de pédiatrie peu utilisée, mammo que certains jours dans la semaine, scanner de RT facilement disponible, arceaux et salles facilement dispos pour un créneau de mesure = pas de nocturne à envisager :D)`,
    avis: `Service : 2 physiciens à plein temps en imagerie, très grand parc : 1 TEP-CT, 1 gamma caméra, 3 activimètres, 10 arceaux, 4 salles fixes interventionnelles, 3 scanners, 10 salles RX conventionnelles, 1 EOS, 5 mobiles, 1 mammo, 3 IRM, utilisation du DACS en routine
Seule la fiche RIV sera à réaliser en collaboration avec Strasbourg à l’ICANS (frais de déplacement pris en charge les jours concernés, 50 minutes de train, horaires flexibles)
Bureau dédié aux deux étudiants DQ dans le service d’imagerie (bureaux des physiciens en RT)
Très bonne équipe, bonne ambiance, physiciens dédiés en imagerie donc très dispo, bonne connaissance des compétences à acquérir et très bon encadrement et accompagnement sur la réalisation des CQ et des mesures. Très bonne pédagogie et communication avec l’équipe très facile. Pas de contraintes sur les horaires de travail ni sur les congés
Possibilité d’obtenir un logement avec le centre hospitalier sur site (loyer réduit), renseignements à voir directement avec les encadrants après le choix de stage`,
    avisAnciens: "",
    contacts: `Imagerie (23-25) : ringuenoire.clement@gmail.com, thymele.muller-stahn@orange.fr`
  },
  "nancy-chru": {
    responsables: { im: "Fleur Saunier", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chru-nancy.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1913,64 (CHRU)",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "plus besoin",
    equipe: { physiciens: "2 en MN ; 3 en RX (dont temps partiels)", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `La plupart des appareils d'imagerie sont disponibles autour de 16h00 sauf les scanners (compter 17h30 au
plus tôt). MN : 3 gamma-caméra SYMBIA T (Siemens), 1 D-SPECT (coeur), 1 VERITON, 3 TEP VEROS (Philips)`,
    avis: `MN :
Encadrement : Deux physiciens (un a temps partiel)
Equipements :
- 2 labos chaud (1 thérapie + 1 traitement) avec plusieurs activimètres
- 1 TEP-CT Siemens
- 3 TEP-CT VEROS (Philips)
- 2 SPECT Symbia T
- 2 SPECT Veriton
- Traitements : 90-Y , 177-Lu (prostate et TNE), I-131
Nombreux fantômes disponibles.
Observations :
- Travail en autonomie
- Observations à la demande en scintigraphie, TEP et en traitement
- On partage le bureau avec l'équipe de recherche de Nancyclotep
RX :
Encadrement : Trois physiciens (un a temps partiel)
Equipements :
Les équipements sont répartis entre le CHU Nancy au centre et le CHU Brabois. Il y a plusieurs Scanner diagnostique, plusieurs salles de radioologie conventionnelle et interventionnelle. Nombreux fantômes disponibles.
Observations :
- Les contrôles se font dans les deux CHU: centre et Brabois.
- L'observation en clinique est posisble mais à la demande
- La fiche IRM est faite à Brabois, l'observation en IRM est aussi posible mais à la demande.
Organisation générale:
- Pour la MN est à vous de faire votre planning et de presenter/envoyer vos fiches.
- Pour la RX il y a un planning pour la réalisation des fiches avec les jours des congés de physiciens. (Faire très attention aux congés pour la signature des vos fiches)`,
    avisAnciens: `RT: Le soir après les traitements ~18h-18h30 (Clinacs)/ Radiodiagnostique: en journée quand il n'y a pas de patient, s'organiser avec les manips/ MN: Depuis la réforme, 3 mois à temps plein. Possibilité de faire des manips en journée si machines dispo (mais cela reste rare). 3 TEP : soir après 18h30. 5 Gamma-caméra : +/- 17h. Labo chaud (Activimètre) disponible toute la journée (s'arranger avec les pharmaciens). Console de dosimétrie (pour la thérapie) dispo toute la journée également en salle de réunion.`,
    contacts: `rachaussin@gmail.com, jacquemin.manon01@gmail.com`
  },
  "nancy-icl": {
    responsables: { im: "", rth: "Karine Gerard" },
    partenariats: { im: "", rth: "" },
    site: "https://www.icl-lorraine.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "nantes-ico": {
    responsables: { im: "", rth: "Alexandre Moignier" },
    partenariats: { im: "", rth: "" },
    site: "https://www.institut-cancerologie-ouest.com",
    photos: [],
    statut: "Stagiaire",
    salaire: "1917",
    retraite: "oui",
    chomage: "non",
    conges: "12 par semestre",
    revisions: "plus besoin",
    equipe: { physiciens: "8 en RT ; 2 en MN", dosimetristes: "8", techniciens: "3", ingenieurs: "", autres: "4 biomédicaux" },
    ailleurs: [
      { texte: "Imagerie au CHU de Nantes (Hôtel-Dieu et Laennec)", url: "https://www.chu-nantes.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Machines disponibles vers 17h, 2 TEP Siemens + 1 gamma-caméra Discovery et une Gamma caméra Intevo`,
    avis: `MN : toute la médecine nucléaire se fait à l'ICO (Saint-Herblain) avec 2 physiciens (Ludovic Ferrer et Nicolas Varmenot) : 2 TEP et 2 SPECT, machines disponibles après 17 h 30 pour les SPECT (voire plus tard) et 18 h 30 pour la TEP. Tout est fait sous Python, pas de logiciels constructeurs. Service sympa, physiciens et médecins disponibles pour répondre aux questions ; vous serez formés sur les machines (notamment les CQ) puis livrés à vous-mêmes. Autonomie ++, ambiance très sympathique, inclusion dans la clinique +.

Imagerie : au CHU de Nantes (moitié à l'Hôtel-Dieu = centre-ville, moitié à Laennec = Saint-Herblain), sauf la mammographie faite à l'ICO (la physicienne est très sympa). Vous serez très très bien formés mais il y a une tonne de choses à faire : autonomie ++++, rythme +++. Beaucoup de machines au CHU : arceaux, bi-tube, 4 IRM, 4 scanners, O-arm, dentaire...

RT : DQ1 : dosimétrie 3D (1 semaine/DQ), très impliqué dans les CQ périodiques ; un physicien est là en cas de besoin si mesure après les plages de traitement (8 h-20 h). DQ2 : très bonne ambiance, très impliqué en routine clinique, projets possibles si vous le souhaitez. Dosi : VMAT dès le début du S3, tomo, IMRT et stéréo en fin de S3 ; physiciens dispo pour les questions, points très réguliers avec les physiciennes responsables des DQ ; un référent dosi vous forme tout au long de la formation (dosimétristes très sympas). Parc : 1 Clinac avec 5 énergies d'électrons, ICT, bain d'électrons, 1 Novalis TrueBeam (stéréo, gating), 2 Radixact, 2 Halcyon équipés SGRT VisionRT, HDR. Équipe de 8 physiciens + 3 techs + 4 biomed + 8 dosimétristes, inclusion dans la clinique ++. Les mesures se font majoritairement au Clinac (dispo à partir de 15 h 30-16 h), équipe très sympa et disponible, autonomie +.`,
    avisAnciens: `* MN: toute la médecine nucléaire est à faire dans le service de MN avec 2 physiciens. il y a 2 TEP et 2 SPECT. les machines ne sont dispoinbles qu'après 17h30 pour le sSPECT (voire plus tard) et 18h30 pour la TEP. Tout est fait sur PYTHON, pas d'utilisation des logiciels constructeurs. tout le service est sympa, comme partout il y a des gens avec qui le courant ne passe pas les 2 physiciens et les médecins sont sympa et disponibles pour répondre aux questions. vous serez formés sur les machines, notamment la réalisation des CQ, puis vous serez livrés à vous même.* Toute l'imagerie est à faire dans le CHU de nantes, sauf pour la mammographie qui est faite à l'ICO (la physicienne est trop sympa). Alors pour le reste de l'imagerie c'est une autre histoire, vous serez très très bien formés, mais il y a une tonne de choses à faire. autonomie ++++ Médecine nucléaire à l'ICO (Saint-Herblain) encadré par Ludovic Ferrer et Nicolas Varmenot. Autonomie ++, ambiance très sympathique, inclusion dans la cliniques + Imagerie au CHU (la moitié à Hotel Dieu = Nantes centre + la moitié à Laennec = Saint- Herblain), autonomie +, rythme +++, mammo à l'ICO, beaucoup de machine au CHU, arceaux, bi-tube, 4 IRM, 4 scanners, o-arm, dentaire...

DQ 1 : dosimétrie 3D (1 semaine/DQ ), CQ périodiques : très impliqué dans les CQ. un physicien est là en cas de besoin si mesure après les plages de traitement. plage de traitement de 8h à 20h. DQ2: très bonne ambiance, très impliqué en routine clinique, voire les projets si vous le souhaitez. Dosi : VMAT dès le début du S3, tomo, imrt et stéréo à la fin du S3. physiciens dispos pour questions; des points très réguliers avec les physiciennes responsables des DQ. Ps : pour la dosimétrie, vous aurez un référent en dosi qui vous forme tout au long de la formation (dosimétristes très sympa) 1 Clinac avec 5 énergies d'électron, ICT, bain d'électron, 1 Novalis TrueBeam (stéréo, gating), 2 Radixact, 2 Halcyon équipés SGRT VisionRT, HDR, équipe de 8 physisiens + 3 techs + 4 biomed + 8 dosimétristes, inclusion dans la clinique ++ Les mesures se font majoritaiement au Clinac (dispo à partir de 15h30 - 16h) , plus d'accélérateur disponible la journée, équipe très sympa et disponible, autonomie +,`,
    contacts: ""
  },
  "nice-cal": {
    responsables: { im: "Malick Koulibaly", rth: "Mathieu Gautier" },
    partenariats: { im: "", rth: "" },
    site: "https://www.centreantoinelacassagne.org",
    photos: [],
    statut: "",
    salaire: "1954",
    retraite: "oui",
    chomage: "non",
    conges: "12,5 par semestre",
    revisions: "",
    equipe: { physiciens: "2-3 en imagerie", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `MN : plusieurs journées bloquées pour les CQ sur SPECT, pour les CQ TEP : le matin jusqu'à 8h ou le soir après 18h (parfois plus tôt). Un activimètre réservé pour les physiciens toujours diponible.
RX : Disponibilité des machines le matin avant 8h ou le soir après 17h30 (exception en radiologie conventionnelle où des créneaux peuvent être trouvé en journée selon l'activité)`,
    avis: `Encadrement : 2 Physiciens à temps plein, un en charge de la MedNuc, le deuxième sur la partie radiologie. Un 3eme physicien tout juste diplômé a été recruté cette année. Le stage est divisé en deux, généralement les 3 premiers mois en MN puis les trois mois suivant en Radiologie (les congés doivent donc être répartis de façon égales entre les deux périodes).
Equipement :
- 3 gamma-caméra (1 Siemens Intevo Bold, 1 Siemens Symbia T2, 1 GE Discovery NMCT 670)
- 2 TEP Siemens Biograph Vision 600
- 2 Mammographes Hologic Selenia Dimensions
- 1 salle de radiologie conventionnelle avec table Luminos
- 1 arceau mobile Ziehm Solo FD (pas de salle interventionnelle dédiée mais visite prévue à Monaco si possible)
- 1 Scanner spectral iQon Philips
- 1 IRM 1,5T GE
Remarques :
- Horaire minimum attendu : 8h30-17h30 (dans les faits vous ferez souvent plus)
- Autonomie demandée en radiologie, beaucoup moins en médecine nucléaire
- Physicien en MN très pédagogue et investi, prendra le temps avant chaque fiche de revoir ce qui est demandé, les attendus et même vous donnera un cours selon les fiches.
- Un planning est mis en place par les deux physiciens pour l'organisation des fiches (très utile).
- Les machines sont présentées avant chaque fiche, les CQ se font en autonomie mais l'encadrant n'est jamais loin en cas de problème.
- Exigence par rapport aux fiches très élevées.
- Sinon service très accueillant, vous partagerez un bureau avec un manipulateur/référent informatique. N'hésitez pas à profiter des avantages CSE (chèque-vacances, bons de Noël, remboursements de frais de vacances ...etc).

Formation sur 2 sites (principalement sur le 1er, 1 semaine est prévue sur le 2eme site au S2 pour la fiche CQ, environ 1 mois au S3 pour les fiches photons petits champs et planification en stereotaxie.)
1er site :
- 1 Clinac 21EX en fin de service
- 1 Halcyon v.4
- 1 TomoHD Legacy
- 1 TrueBeam Hypersight nouvellement installé
- 1 Projecteur de source Flexitron
- 1 Papillon 50
- 1 Papillon+ au bloc
- 1 Scanner de planification Discovery RT Gen 3 (GE)
2ème site :
- 1 Cyberknife
- Protonthérapie basse et haute énergie
- 1 Scanner
TPS : Raystation
SIRT : Mosaiq
Tâches clinique attribuées aux DQ : double calcul d'UM, CQ Patient (1-2/semaine), CQ hebdomadaire (1/1-2semaines) et mensuel (dans notre cas, tous ceux du Clinac), une fois les fiches de planification validées -> planification de traitement sur patients. Les tâches de routine clinique se font après habilitation (=évaluation) par un physicien. Une fiche peut avoir plusieurs évaluations (à l'oral, au tableau pour certaines) en plus du rendu final.
Il est demandé aux étudiants que la rédaction des fiches se fasse à la maison (en-dehors du temps de travail) uniquement pour les fiches avec un compte-rendu (on n'a pas trop obéi à la règle et c'était ok).
Si vous avez une question à poser sur une fiche il faut faire très attention à la poser au(x) physicien(s) responsable(s) de la fiche.
La fiche optionnelle basse énergie est traitée en S3, pas d'autres fiches optionnelles. Plage de traitement maximale : 8h-19h (dans notre cas nous avons pu avoir régulièrement des moments où les traitements se finissaient vers 16h-17h pour le Clinac). La fiche de CQ, les mesures pour les fiches photons, électrons se sont faites sur le Clinac et le Truebeam dans notre cas (probablement uniquement Truebeam pour les prochains étudiants). Pas de problème pour la pose de congés.
Bureau en open-space dans la salle de dosimétrie avec les tech-dosi et les physiciens.
Gros point négatif : la cantine :(`,
    avisAnciens: `En radio : table de radio Luminos, arceau de bloc (pas de salle de radiologie interventionnelle dédiée mais en projet), 2 mammographes, une IRM, un scanner GE. Le physicien dédié radio vient de quitter le centre mais bonne disponibilité, beaucoup de temps passé sur la correction des fiches, une certaine part d'autonomie nécessaire. L'arceau de bloc est dispo toute la journée du mercredi, la table Luminos est assez dispo l'après-midi et le scanner n'est pas du tout dispo en journée (les mesures sont réalisées le soir ou tôt le matin). La fiche IRM n'est pas traitée. 2 physiciens à temps plein dédiés à l'imagerie, l'un plutôt côté MN, l'autre plutôt Radio. La partie MN et radio sont séparées temporellement : la première partie du semestre (janvier/mi-avril) est dédiée à la MN, et la seconde est dédiée à la Radio.
En MN : 3 γ-caméra, un TEP (préparation de l'accueil d'un 2e), radiopharmacie, un local pour les déchets radioactifs et la préparation des fantômes. 1 γ-caméra réservée pour les CQ tous les jeudis matins (donc pas besoin de rester tard pour ça).
Encadrement au top, formation à manipuler les sources radioactives (vous laissera pas seul avec), de l'exigence mais de la réciprocité dans le travail. Communication facile. Importance de passer du temps dans le service (et ils sont tous sympas), vous ferez également des fiches liées aux acquisitions liées à chaque zone du corps, bien pratique pour la synthèse.
En radio : NOUVELLE table de radio Luminos, arceau de bloc, 2 mammographes, une IRM, un scanner GE. Il y a aussi un physicien dédié, dont l'encadrement est également top. Effectue les manips devant vous puis laisse gérer en autonomie. Propose et laisse une grande marge de manoeuvre pour approfondir les sujets et proposer des projets annexes supplémentaires. Il est aussi fortement recommandé de passer du temps dans le service, utilité +++ pour la synthèse..
En MN : 2 gamma caméras (bientôt 3), un TEP, radiopharmacie, local physique pour préparer les fantômes (préparation de toutes les sources). Un physicien dédié MN plein temps : très bon encadrement/suivi pédagogique, important de participer à la vie du service (service sympa), importance accordée à la rédaction des fiches. Des journées ou demies journées sont bloquées pour la réalisation des CQ.`,
    contacts: `Imagerie + RT (24-26) : roxane.brunel@hotmail.fr
Anciens : sylviedeoliveiraduarte@gmail.com ; Imagerie 2021-2024 : jonathan-page@live.com ; DQ2 : charlotte.gontier@hotmail.com, marionboulanger@live.fr ; DQ1 : matduncanj@gmail.com`
  },
  "nice-chu": {
    responsables: { im: "", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-nice.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "nimes-chu": {
    responsables: { im: "Corinne Barrau, Joël Greffier", rth: "Karine Taillade, Maxime Michaud" },
    partenariats: { im: "", rth: "ICM Val d'Aurelle" },
    site: "https://www.chu-nimes.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1941",
    retraite: "non",
    chomage: "non",
    conges: "25",
    revisions: "",
    equipe: { physiciens: "4 en imagerie", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `En permanence : un Clinac 2100D non utilisé en clinique (utilisé seulement par les DQ), sinon les autres linacs sont dispos avant 7h30 et après 19h. En
MN : machines dispos à partir de 17h (parfois 16h sur la gamma camera). En radiologie, si les machines ne sont pas dispos, possibilité de faire les manips le samedi (par conséquent, le lundi qui suit est libéré). gamma caméra numérique et analogique`,
    avis: `Deux physiciens en imagerie. L'encadrement est excellent voir étouffant selon vos relations avec les 2 physiciens. Malgré les délais serrés du stage en imagerie, ils essaieront de vous impliquer dans la clinique et de vous faire observer des actes et techniques rares, il faut vraiment en profiter. Mention spéciale pour la fiche scanner qui va occuper vos jours et vos nuits pendant plusieurs semaines. Deux physiciennes en MN, l'encadrement est plus relâché et vous serez laissé en autonomie. Si vous voulez aller au-delà de vos fiches, ce sera à vous de faire les démarches. Il faudra être particulièrement vigilent à ce que cet encadrement moins serré ne soit pas un motif pour accumuler du retard dans vos fiches (expérience perso). Commentaire Lisa DQ24/26 (merci de ne pas supprimer): Stage en cours. Partie imagerie réalisée.
* Encadrement: 4 physiciens à présent (2 derniers jeunes physiciens embauchés).
* Planning: très serrré, ce qui rend le stage fatiguant (c'est le cas pour tous les centres).
* Gestes pratiqués: Venant de formation manip, les gestes pratiqués sont couramments pratiqués dans tous les centres, vous avez la possibilité d'aller voir tous les gestes souhaités.
* Mesures dépendantes du temps libre machine (Si vous avez de la chance comme nous: Salle interventionnel Coro B libre tous les matins).
* Intégration dans la routine clinique dernière semaine de stage.
* La fiche scanner est bien encadrée et avec de la rigueur réalisée dans le temps imparti imposé par la deadline physicien.
* Vous êtes en total autonomie pour vous organiser avec les manips, le temps machine et le matériel.
* Le relationnel avec les physiciens est dépendant de votre tempéramment, en effet, ayant un encadrement poussé, cela peut être étouffant. Si vous sentez un mal-être ou un problème sur une fiche, n'hésitez surtout pas à en parler avec eux, cela fait avancer les choses et vous serez plus efficace (pas de panique).
* Horaires: peuvent être flexible mais doivent rester dans la limite du raisonnable.
* Bureau des DQ: situé en face du CH à la fac de médecine --> Inconvénient car à l'écart de l'équipe et de la routine)
* A retenir: Soyez rigoureux et suivez les instructions de mise en forme à la lettre (physicien pointilleux
++++++)
* A noter l'importance de votre binome CoDQ ! Une belle coopération est toujours utile et appréciable afin de réaliser votre stage dans les meilleures conditions possibles.
* Privilégiez l'esprit d'équipe que l'esprit de compétition, vous avancerez plus vite et efficacement ensemble ;)
* Infomation RH: pas de cotisation pour le chomage et la retraite sur la fiche de paie (demandé au service concerné)`,
    avisAnciens: `séparation des deux étudiants pendant le stage. ils alternent la partie mn et la partie rx.

2 physiciens à 100% en imagerie et 2 physiciens à 100% et 50 % en médecine nucléaire. En RT : un planning de fiches est mis en place par les physiciens avec des deadlines. Implication rapide en routine clinique (premiere dosi sur un vrai patient en février). Horaires en RT : 2 jours de garde par semaine (7h30-15h ou 12h-19h30), les 3 autres jours (9h-17h) sont dispos pour révisions + fiches.`,
    contacts: `gracchus.bottin@hotmail.fr, lisachazottes34@gmail.com (DQ 24-26)
Ancienne promo : mathildebigot4@gmail.com`
  },
  "orleans": {
    responsables: { im: "Gilles Le Rouzic", rth: "Nicolas Tang" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-orleans.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1870",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "possible tout en continuant la routine",
    equipe: { physiciens: "5 en RT ; 2 en MN ; 1 en radio", dosimetristes: "3", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Radiothérapie : 2 Accélerateurs Synergy (Elekta), 1 TrueBeam STX (Varian) et 1 Tomo. TOP faits le matin par les MERMs. Les DQA sont fait par deux équipes, une à 12h pour le Novalis et à 13h pour la tomo. CQ machines faits le mercredi (ou en 2 demi journées) par le technicien. Machines disponibles après les traitements, l'heure dépend de la machine et des jours. En MN gamma caméras.
MN : 3 gamma-caméras dont une CZT, 2 TEP (Vereos et Siemens). Machines disponibles vers
Radiologie : mesures faites en journée sauf pour le scanner qui est plutôt disponible vers 17h30.`,
    avis: `MN : 2 physiciens --> tuteur qui accompagne ++. Il apprécie la programmation Python et fait un point théorique sur les fiches avant de les commencer
Radiologie : 1 physicien --> autonomie attendue +++`,
    avisAnciens: `RX : 1 Physicien très bonne ambiance dans le service et physicien disponible ------------
MN : 1 Physicien, très bonne ambiance aussi et disponible également, formation très complète en MN ---------------- Globalement les deux physiciens sont très présents, prise d'initiatives et autonomie appréciées, super ambiance générale dans le service avec tous les membres de l'équipe (Médecins nucléaires, radiopharciens ou manips)

Avis DQ 2 :
Radiologie : 1 Physicien - Bon suivi et très bonne ambiance
MN : 1 Physicien - Bon suivi et très bonne ambiance (autonomie et prise d'initiative appréciée)
Radiothérapie : 5 Physiciens, 3 Dosimétristes (à temps plein). Bon suivi régulier et très bonne ambiance (autonomie et prise d'initiative appréciée). Participation à la routine clinique (CQ patient, CQ machine, dosimétrie et curiethérapie) Dans les 3 domaines, les physiciens sont disponibles et impliqués dans notre formation
Changement à venir : remplacement d'une gamma caméra en MN (été 2020)`,
    contacts: `Imagerie et RT : clarisse.lecomte23@gmail.com (DQ 24-26)
Anciens : karim.ada@outlook.fr, estelle.guyard0@gmail.com, paris.arthur29@gmail.com, hb.sallem@gmail.com, marjorie.grandvillain@laposte.net ; DQ2 : coline.gautheron@gmail.com (promo 18-20)`
  },
  "paris-hegp": {
    responsables: { im: "Claire Van Ngoc Ty", rth: "Stephane Dupont" },
    partenariats: { im: "", rth: "" },
    site: "https://hopital-georgespompidou.aphp.fr",
    photos: [],
    statut: "CDD",
    salaire: "1958 + 75 % frais de transport",
    retraite: "oui",
    chomage: "oui",
    conges: "12,5 par semestre",
    revisions: "oui",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `1 TrueBeam STX avec Exactrac (stéréo)
2 TrueBeam avec AlignRT
1 Cyberknife
Curie : 1 projecteur de source (Ir192) + curie prostate (grains d'iode)
TPS : Eclipse et Precision (CK)
Dispo machine : TTT de 8h à 15h30 puis ensuite disponible pour les CQ ou les mesures du DQ :)`,
    avis: `Accessibilité : Metro 8 terminus Balard, T3a Balard, RER C pont du garigliano
Horaire flexible (vous pouvez venir quand vous voulez tant que vous faites votre quota horaire, logique). Bonne équipe légèrement en sous effectif mais bonne ambiance. Savoir être autonome et ne pas hésiter à poser des questions surtout si vous arrivez en S2. Très bonne expérience de mon coté. Beaucoup de routine clinique (dosimétrie, curie, cq). Aucune difficulté recontrée pour poser des congés`,
    avisAnciens: "",
    contacts: `RT (23-25) : ambrabm@gmail.com`
  },
  "paris-curie": {
    responsables: { im: "Romaric Dal", rth: "Imène Birba-Iarkani" },
    partenariats: { im: "Hôpital Bicêtre (AP-HP), HEGP", rth: "" },
    site: "https://curie.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1925 (1887,5 + 50 % frais de transport)",
    retraite: "oui",
    chomage: "non",
    conges: "12 par semestre",
    revisions: "oui",
    equipe: { physiciens: "10 en RT ; 2 en imagerie", dosimetristes: "7", techniciens: "5", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Radiologie interventionnelle à l'HEGP (2 semaines)", id: "paris-hegp" },
      { texte: "Observation de la RIV à Curie Saint-Cloud", id: "saint-cloud-curie" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Imagerie :
MN : 1 SPECT avec 99Tc+ 1 TEP avec 18F (Siemens)
Radio :
- 2 salles de radio (Philips), 5 appareils mobiles
- 3 mammographie (1 GE et 2 Hologic)
- 1 scanner interventionnel (Siemens), 3 amplis de bloc (Ziehm)
- 1 scanner de diag (Somatom Pro Pulse Siemens)
- 1 IRM de diag (Siemens)
- 1 scanner dosimétrique (Siemens) --> installation d'une IRM dosimétrique ?
Organisation :
- observation d'actes de radiologie interventionel à l'HEGP pendant 2 semaines
- observation de la RIV (gellules d'iode et Lutathera) à l'institut Curie Saint Cloud, environ 5 jours repartis pendant le stage
- disponibilité des machines vers ~17h, après les patients
RT : 5 Accélérateurs Varian et un Xstrahl pour les traitements cutanés. Curiethérapie gynec + prostate + occulaire (PDR, LDR). ARIA 18 en Novembre 2k25. Top faits par les manips le matin. Accélérateurs disponibles (pour les DQA, les mesures, etc...) le soir après les traitements vers 19h ou en journée lorsqu'il y a moins de manip ou une PMI. MN (SPECT et TEP) disponibles après 17h.`,
    avis: `2 physiciens en imagerie dont :
- 1 physicien à 20% imagerie et 80% RT en charge des appareils de radios, amplis de bloc, appareils mobiles et mammographie
- 1 physicien à 100% imagerie, responsable des DQPRM et en charges de l'IRM, de la partie MN et des scanners présents sur sites
Une seule équipe de physiciens regroupant les physiciens d'imagerie et de RT. Equipe dynamique et disponible. Bonne ambiance générale dans le service.
Autonomie dans la réalisation et l'organisation des fiches. Responsable du stage trés sympathique, disponible et présent pour répondre à toutes les questions. Toutes les mesures de MN sont réalisées avec le physicien, seules les acqusitions et les CQ radio (appareils de radio, mammographie et ampli de blocs) sont faites en autonomie. Stage très bien encadré avec un responsable qui s'adapte aux étudiants. Pas de contraintes pour poser les vacances

10 physiciens présents sur site avec une équipe de jeunes physiciens et de physiciens avec plus d'expérience. Très bon relationnel avec toute l'équipe et intégration rapide. Le planning tourne entre le plateau technique, la dosimétrie, les projets et le back-up. Tout le monde est présent pour répondre à vos questions (même s'il faut parfois insister). L'ambiance entre les étudiants et l'équipe est très cool et professionnelle. Le petit plus de Curie Paris sont vraiement les manips radio qui sont tops et qui vont vous expliquer beaucoup de choses sur la RT et le parcours patient pendant vos observations. L'équipe de dosimétrie est super expérimentée également. A savoir que Curie est le spécialiste du sein et qu'ils font de la stéréo sur Truebeam. Beaucoup de localisations sont réalisées et pas mal de pédiatrie également. Au delà de ça, le cadre est vraiement top et les équipes bienveillantes et les congés bien respectés. Beaucoup de conférences sont proposées chaque semaines sur des thèmes autour du cancer (Physique, biologie, médecine ...).`,
    avisAnciens: `Environnement Varian : 3 Clinacs, 1 Truebeam et 2 halcyons. 2 scanners de RT : Toshiba et Siemens.
R&V Aria et TPS Eclipse.
Planning des fiches défini dès le début du semestre en réunion avec un ou deux physiciens référents pour chaque fiche.
La première fiche introductive est réalisée en allant en observation les 2/3 premières semaines sur les différents postes en suivant le parcours patient : consultation d'annonce, scanner de RT, dosimétrie, etc... Validation des fiches se fait en présentations orales réalisées devant les physiciens référents et ceux de l'équipe qui veulent assister.
Equipe RT : 10 physiciens, 5 techniciens, 7 dosimétristes.

MN:1 physicien - planning de fiches établi au début de l'année;
RT: 8 physiciens; Radio: 3 physiciens se répartissent les tâches. Une garde du soir par semaine (une garde en + une fois par mois) jusqu'à 20h. En dehors de ces gardes, horaires libres. Implication en routine clinique ++, aussi bien avec les techniciens (CQ hebdo, mensuels, analyses DQA...) qu'avec les dosimétristes`,
    contacts: `Imagerie : manon.guillou97.mg@gmail.com ; RT (23-25) : charles-bapaume@hotmail.fr, nathan.benzazon@hotmail.fr
Anciens : michel_atieh963@hotmail.com (2021, imagerie), dirandannesophie@gmail.com (2020), antoinegobert@yahoo.com (2020), arthur.darricau@hotmail.fr (2019), hiron.quentin@gmail.com (2019, imagerie)`
  },
  "paris-salpetriere": {
    responsables: { im: "", rth: "Michel Chea" },
    partenariats: { im: "", rth: "Hôpital Saint-Louis / GHU Saint-Louis" },
    site: "https://pitiesalpetriere.aphp.fr",
    photos: [],
    statut: "CDD",
    salaire: "1750 + 75 % frais de transport",
    retraite: "oui",
    chomage: "oui",
    conges: "24 par an",
    revisions: "oui",
    equipe: { physiciens: "11", dosimetristes: "2", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Machines de RT + radiochirurgie :
- 1 Truebeam avec Exactrac (stéréo intra et extra)
-> sera remplacé par un Edge en 2026
- 1 Halcyon avec surfacique VisionRT (installation en 2025)
- 1 tomothérapie Radixact
- 1 IRM-Linac MRIdian
- 1 GammaKnife
Curiethérapie : 2 chambres PDR + 1 bloc HDR
TPS :
- Eclipse (TrueBeam et Halcyon)
- Precision (tomo)
- Viewray (MRIdian)
- Oncentra (Curie)
Autre matériel :
- Cuve SunScan 3D, SUN NUCLEAR (arrivée fin 2024)
- Delta4, ScandiDos
- OCTAVIUS, PTW
- etc
Organisation :
Plages horaires dédiées pour les CQ. Il est demandé aux DQPRM de participer aux TOP (1 à 2/semaine en général), au CQ hebdomadaire des chambres de curiethérapie PDR et de se greffer aux CQ machines (particulièrement durant le S2 comme cette partie fait l'objet d'une fiche).`,
    avis: `Equipe sympathique et bienveillante composée de 11 physiciens et de 2 dosimétristes. Le service présente un parc très varié et intéressant pour se former ! Les fiches sont bien encadrées, pour chacune d'entre elles, un physicien est désigné responsable.
Remarques :
- Vous signerez un contrat CDD (cotisation au chômage)
- Il est demandé de déposer vos congés en décalé avec votre co-DQ
- Accès via M5 ou M6 + parc Vélib dans l'enceinte de la Pitié-Saplêtrière`,
    avisAnciens: `être capable de bosser en autonomie, physiciens en radiothérapie disponibles ++, plateau technique intéressant (1 LINAC, 1 TB STX, 1 Gammaknife, 1 TOMO, CT, IRM LINAC, Curiethérapie HDR/PDR).`,
    contacts: `RT (23-25) : thymele.muller-stahn@orange.fr, amelie.tourais@gmail.com
Anciens : parsampaio.gui@gmail.com (2020-2022) ; lanouars104@gmail.com, tkayosra@yahoo.fr (2021-2023)`
  },
  "paris-kremlin-bicetre": {
    responsables: { im: "Michel Atieh", rth: "" },
    partenariats: { im: "Institut Curie – site Saint-Cloud", rth: "" },
    site: "https://hopital-bicetre.aphp.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "paris-saint-louis": {
    responsables: { im: "Antoine Martineau", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://hopital-saintlouis.aphp.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "poitiers-chu": {
    responsables: { im: "", rth: "Alexandre Garcia" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-poitiers.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "oui",
    equipe: { physiciens: "5,5 en RT ; 1,5 en MN/radio", dosimetristes: "", techniciens: "2", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `4 accelerateurs Elekta + 1 cyberknife. Creneaux d'1H le midi sur les machines, le soir machines dispo vers 17h30. TOP faits par les manips. DQA 4 soirs par semaine à se répartir entre les DQ. En médecine nucléaire et TEP, machines dispo tôt l'apres midi. TPS Raystation`,
    avis: `5,5 physiciens en RT, 1,5 en MN/radio. Très bon encadrement en imagerie et en radiothérapie, l'équipe est jeune et disponible. Le suivi des fiches est régulier avec un planning bien établi. 2 techniciens pour faire les CQ mécaniques. Nos horaires sont libres, tant que le travail est fait ! Pour l'imagerie, accès au secteur radio conventionnelle/interventionnelle aisé pour la réalisation des fiches/projets/CQ. Très bonne ambiance entre toute l'équipe de physique (dosimétristes, médecins, manips, techniciens...) !`,
    avisAnciens: `5,5 physiciens en RT, 1,5 en MN/radio. Très bon encadrement en imagerie et en radiothérapie, l'équipe est jeune et disponible. Le suivi des fiches est régulier avec un planning bien établi. 2 techniciens pour faire les CQ mécaniques. Nos horaires sont libres, tant que le travail est fait ! Pour l'imagerie, accès au secteur radio conventionnelle/interventionnelle aisé pour la réalisation des fiches/projets/CQ. Très bonne ambiance entre toute l'équipe de physique (dosimétristes, médecins, manip, techniciens ...) !`,
    contacts: `blinannelise@gmail.com, kilien.parent@gmail.com`
  },
  "reims-godinot": {
    responsables: { im: "Christopher Hoog", rth: "Sofiane Guendouzen" },
    partenariats: { im: "CHU de Reims", rth: "" },
    site: "https://www.institutgodinot.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1899",
    retraite: "oui",
    chomage: "oui",
    conges: "12 par semestre",
    revisions: "oui",
    equipe: { physiciens: "7 (5 RT, 1 imagerie, 1 partagé RT/imagerie CHU)", dosimetristes: "4", techniciens: "2 maintenance RT + 1 radioprotection/MN", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "~4 fiches d'imagerie au CHU de Reims", url: "https://www.chu-reims.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `RT : 2 Accélérateurs ELEKTA + 1 Tomothérapie + 1 linac sur le site de Soissons / TPS : Monaco - Tous les matins : TOP / DQA : Créneaux de 30 min par machines midi et soir (qui vont être éliminés). Pour les manipulations nécessitant un temps conséquent sur machines (Cuves...) : jours de maintenance (fin de maintenance à 17h) ou samedis (Récupérable en jour de repos).
MN : 3 Gammas caméra et 2 TEP dispo tous les jours rès 17h-18h.
IM : 2 scanners, une table radio, 2 mammographes, une IRM et des appareils mobiles au sein de l'intisitut Godinot + CHU : 3 scanners, 2 IRMs, 15 tables radio, 5 salles interventionnelles, 25 appareils mobiles (Radiologie conventionnelle + Ampli de brillance)`,
    avis: `Le stage se déroule principalement au CLCC Godinot pour ~12 fiches et ~4 se font au CHU situé juste à coté. Horaire 9h-17h pour le CLCC et 8h-16h pour le CHU à moduler en fonction du travail et des mesures qui finissent tard le soir de temps à autres. Un nouveau CHU est en cours de construction donc je pense que les prochains étudiants effectuerons les mesures dans de toutes nouvelles salles interventionnelles. Une bonne autonomie est un plus au CLCC car certaines mesures sans supervision. Par contre les tuteurs (CLCC et CHU) sont compétents et pédagogues.
Pour les transports, j'ai personnellement utilisé le bus et parfois le tram. Pour la voiture je ne sais pas trop... (bien réviser ses cours d'imagerie car le tuteur du CLCC aime bien faire des quizz sur nos connaissances haha) DQ 24-26 : Pour notre part les horaires sont flexibles, on fait notre propre planning ( si des jours il faut finir plus tôt etc..) Excellente ambiance de travail, étudiants dans l'open space. Nous n'avons pas beaucoup connu le CHU car la physicienne est en congé maternité mais notre tuteur de Godinot (C.HOOG) est un excellent encadrant et est très pédagogue.
ps : il organise des quizz tous les premiers mercredi du mois dans un bar du centre de Reims, vous serez les bienvenus :) Possibilité de garer la voiture sur le parking personnel mais il y a un manque de place à partir de 9h30.`,
    avisAnciens: `5 physiciens à temps complet et 2 à temps partiel (1 jour et 2 jours par semaine), 1 physicien en imagerie à Godinot et 1 à temps partiel au CHU. 3 dosimétristes et 2 techniciens de maintenance. Acquisition d'une nouvelle TOMO dont l'installation est censé commencer en septembre 2021. Travail en autonomie complète même pour la cuve et autre. Les physiciens sont toujours là pour répondre aux questions mais pas de suivi, pas de points sur les fiches et intégration compliqué dans certaines tâches ( peu d'information comuniqué au DQ).

Equipe chaleureuse, jeune, dynamique et disponible (7 Physiciens dont 5 à temps plein en Radiothérapie, 1 physicien à temps plein en imagerie à Godinot (Planaire et MN), 1 physicien partagé entre la Radiothérapie à Godinot et l'imagerie au CHU de Reims, 4 dosimétristes, 2 techniciens de maintenance en radiothérapie, 1 technicien en radioprotection et MN). Emploi du temps libre : Programme en fonction de vos besoins avec un point possible avec les physiciens. Horaires :
Au choix (Top : 6h-13h / Journée : 8h-16h ou 9h-17h / Soir : 13/14 h - 20/21h / Modulable en fonction des besoins).
En radiothérapie : Implication rapide en routine clinique (réalisation des CQ notamment l'Estro et en cas de sous- effectif, recherche clinique si désirée, réalisation des dosimétries, des dossiers patients, des DQA, curiethérapie...).
En médecine nucléaire : les CQs réglementaires sont généralement effectués le mercredi soir. En radiologie, il est possible d'être à l'Institut ou au CHU (Présence du physicien au CHU le Lundi - Mercredi et Vendredi) pour la radiologie conventionnelle. L'interventionnelle s'effectue uniquement au CHU. Le service nous aide à répondre aux questions pour les annales des examens y compris par mail. CAPACITE A TRAVAILLER EN AUTONOMIE RECOMMANDEE`,
    contacts: `Imagerie : c.paris199.cp@gmail.com (24-26), lea2000.8598@gmail.com (24-26), morgane.beucherie@gmail.com (23-25), senemarie89@gmail.com (23-25)
Anciens : estebanjimenezec@gmail.com, severine.lannoy@outlook.fr`
  },
  "rennes-cem": {
    responsables: { im: "Sophie Laffont", rth: "Nolwenn Delaby" },
    partenariats: { im: "Brest", rth: "" },
    site: "https://www.centre-eugene-marquis.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1871 + 75 % frais de transport (ou indemnités kilométriques vélo)",
    retraite: "oui",
    chomage: "non",
    conges: "25 (5 semaines)",
    revisions: "oui",
    equipe: { physiciens: "11", dosimetristes: "6", techniciens: "2 mesures physiques", ingenieurs: "", autres: "3 techniciens biomédicaux" },
    ailleurs: [
      { texte: "Une semaine d'observation au CHU de Brest", id: "brest-chru" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `RT : 1 Cyberknife, 1 Versa, 2 Halcyon, 1 IRM Linac Elekta Unity, 1 scanner Confidence (Siemens), Curie HDR (projecteur + TPS Elekta) TPS RayStation, TPS monaco pour IRM Linac, TPS Precision pour Cyber.
RX : 1 scanner AS64 (Siemens), 1 table radiologie conventionnelle Luminos (Siemens), 2 mammographes (Hologic), 1 table radiologie interventionnelle Artis Zee (Siemens), 1 IRM partagé avec le CHU (Siemens). Remarque : l'IRM linac Unity peut également servir à l'acquisition d'images durant le stage d'imagerie.
MN : 1 gamma caméra CZT (GE), 2 gamma caméra TEMP/TDM (GE et Siemens), 2 TEP/TDM (Siemens + GE).`,
    avis: `Le stage se déroule dans un CLCC. Pour la partie MN, il y a beaucoup d'examens différents. Les imageurs sont tout aussi divers. Cela est plaisant de travailler en MN. Pour la partie radiologie, cela également au centre, mais il y a une semaine d'observation d'examens au CHU de Brest. Le stage est donc plus focalisé sur la MN par rapport à la radiologie.
Il faut être très investi pour que le stage se passe bien en étant ponctuel et en ayant pas peur de compter ces heures (8h - 18h tous les jours). Si la personne parrait ne pas s'investir dans le stage, il est possible que les tuteurs aient un apriori négatif. Je vais partager une anecdote pour clarifier ce que je veux dire. À la toute fin du stage, on nous a reproché de ne pas avoir vu beaucoup d'examens radiologiques. Nous avions dit que aucun physicien ne nous a dit/guidé pour nous faire voir d'avantage d'examens. On nous a répondu que l'on était autonomes pour aller les voir tout seul et que l'on aurait pu aller leur demander de voir plus d'examen. Cela démontre qu'il faut faire preuve d'autonomie et ne pas hésiter à parler ou aller vers les tuteurs en cas de problème. À part cela, le stage s'est bien déroulé. Ce n'était pas le cas pour un étudiant d'imagerie en 2024.
En résumé : ne pas hésiter à dialoguer et à aller vers les tuteurs en cas de questionnement. Je suis d'accord que certains nous font ressentir un peu de "crainte". Cela peut être dans la manière de parler ou alors le fait que parfois certains sont tellement occupés qu'ils ne peuvent pas décrocher leur téléphone lorsqu'on les appelle pour juste poser une question. Mais en réalité, c'est beaucop mieux d'aller vers eux (pour voir plus examens, faire plus de mesures, faire plus de CQ etc). C'est ce qu'ils attendent de la part des étudiants. Le self est juste en face du centre. On y mange bien (mais je ne suis pas difficile niveau nourriture) avec un prix moyen entre 4 et 5 €/repas. Le CEM n'aura pas de place de parking pour garer votre voiture. Soit vous vous garer à coté (à quelques centaines de mètres du centre), soit vous prenez les transports en commun, soit vous arrivez à vélo ou à pied. Le CEM rembourse les frais de transport en commun à hauteur de 75 %. Pour les congés, ce n'est pas possible de les poser en même temps que son co-DQ. Concernant le cadre de vie en général : la ville de Rennes est une grande ville comme n'importe quelle autre. Ni plus agréable, ni plus horrible. Le ciel est gris et pluvieux aussi souvent qu'à Paris mais moins souvent qu'à
Brest (sources : https://www.cartesfrance.fr/geographie/cartes-france-climat/carte-ensoleillement.html ; https://meteofrance.com/actualites-et-dossiers/magazine/ou-pleut-il-le-plus-en-france-hexagonale ; consulté le 21/09/2025). Je m'y sens bien mais la seule fois ou j'ai vécu en dehors de la Bretagne c'était à Palaiseau (l'horreur) pour les cours à l'INSTN.
En conclusion, le stage à Rennes c'est bien mais ce témoignage est à prendre avec du recul (comme tout témoingnage finalement). Je ne serai en aucun cas être tenu responsable de votre mal être personnel ou/et professionnel à Rennes durant votre semestre d'imagerie. Cordialement. Léo [écrit le 05/05/2026]

La RT c'est le point fort du CEM. Le centre est vraiment gâté et peut se vanter de posséder de l'Elekta, du Varian, un CyberKnife dédié à la stéréotaxie intra et extra cranienne ainsi qu'un IRM linac de 1,5 T pour des traitements de radiothérapie adaptative. L'équipe de physique est expérimenté et encadre bien les étudiants. Dès le début du stage de S2, les étudiants DQPRM sont répartis alternativement en une semaine de dosimétrie puis une semaine de CQ. Cet enchainement continue (en gros) jusqu'à la fin du stage. Je tiens à préciser que comme pour le stage d'imagerie, il faut se montrer sérieux et inverti professionellement. Durant les semaines de dosimétrie, on fait d'abord de l'observation. On regarde les physiciens et les dosimétristes faire des plans de traitement, puis des sorties de dossier. Dès que l'on se sent à l'aise pour un traitement en particulier, on commence à faire des dosimétries tout seul. Cela peut être sur des dossiers observés avec le personnel, ou alors sur un tout nouveau dossier. L'objectif est de savoir se débrouiller pour faire des plans de traitment à la fin du stage de S2. Bien sûr, ce sont des traitements "simples" (pas de cumul de dose, de fusion d'images, de stéréotaxie, etc. durant le 1er semestre de radiothérapie). Néanmoins cela est très formateur de faire des dosimétries sur des nouveaux dossiers et non des dossiers déjà traités. On a le sentiment de faire parti de l'équipe de physiciens. D'ailleurs, l'équipe est à l'écoute si l'on a le moindre souci lors d'une dosimétrie.
Durant les semaines de CQ, on s'occupe des CQ patients qui on été tirés au accélérateurs. On regarde que le gamma index passe pour chaque patient. On s'occupe également de certains CQ quotidiens et hebdomadaires, le suivi dans le temps des imageurs surfaciques et les controles "end to end" sur les accélérateurs par exemple.
Enfin, de temps en temps, on effectue la maintenance d'un accélérateur avec des membres de l'équipe de physiciens. Même s'il y a beaucoup d'investissement en routine clinique, on a tout le temps de faire les fiches pour l'INSTN. Pour plus d'informations sur le CEM et la vie à Rennes en général, regarder le commentaire du semestre d'imagerie (case à gauche de celle-ci). Je suis très content de faire mon stage de RT au CEM car j'ai le sentiment d'être très bien formé. Je pense qu'il s'agit d'un des meilleurs centres de France pour la formation des étudiants en radiothérapie. C'est pourquoi je le recommande très fortement et sans hésiter le centre Eugène Marquis de Rennes pour vos 2 semestres de RT. Cordialement. Léo [écrit le 05/05/2025]`,
    avisAnciens: `- Important d'être autonome et de s'avoir s'adapter facilement.
- Partie imagerie : grande autonomie demandée, CQ à faire seul avec procédure
- Partie médecine nucléaire : encadrement ++ mais validation globale des fiches à la fin du stage
- Ne pas avoir peur de faire des heures mais dépend des étudiants (45h/semaine minimum)
- intégration rapide dans les tâches cliniques dès les premières semaines (50% clinique / 50% fiches)
- Bonne intégration à l'équipe de manips/techniciens/physiciens
- Bureau étudiant avec DQ1/DQ2/M2 permet une entraide.
- Un mois d'imagerie est fait à Vannes (radio interventionnelle, dosi scanner et dose foetus)

- Beaucoup de clinique demandé
- Savoir accepter la critique (forte exigence)
- DQ impliqués dans les maintenances accélérateur (soirée tardive, en général fin à 20h30)
- Mini projets de recherches en plus durant l'année en plus du projet de 2ème année.
- De nombreux points fiches avec les physiciens avant validation.
- Horaires en semaine CQ 8h30/17h30-18h
- Apprentissage sur les techniques complexes type stéréo début DQ2
- Responsabilité de l'astreinte possible en 2ème année
- Grosse équipe : 11 physiciens, 6 dosimétristes, 2 techniciens mesure physique, 3 technciens biomédicaux

Bureau au sous-sol, pas de lumière naturelle. Bonne ambiance car étudiants tous ensemble (Master 2, Master 1, DQ...) Repas entre stagiaires`,
    contacts: `Imagerie et RT : jambou.le.bozec.leo@gmail.com (24-26) — « Je suis vraiment super gentil donc si vous avez des questions, j'y répondrai avec plaisir »
Ancien : lemaire.lucien@outlook.fr (DQ1 2022-2025)`
  },
  "rouen-chb": {
    responsables: { im: "Sebastien Hapdey", rth: "Sylvie Derreumaux, David Gensanne" },
    partenariats: { im: "Caen", rth: "" },
    site: "https://www.becquerel.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1950",
    retraite: "oui",
    chomage: "non",
    conges: "12,5 par semestre",
    revisions: "",
    equipe: { physiciens: "8 en RT ; 2 en imagerie/MN", dosimetristes: "7", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Radiologie interventionnelle et curiethérapie (S3) au Centre François Baclesse (Caen)", id: "caen-baclesse" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `RT : 2 Truebeam Novalis, 1 Halcyon (installation juillet 2021) + 2ème Halcyon (2022)+ 3ème Halcyon Ethos (2025) TOP sur portal et chambre tout les matins fait par les techniciens, CQ réalisés tout les matins avec un créneau de 7h à 9h-10h.
Pour les manipulations, très rarement le soir mais créneau à réserver en avance pour le samedi matin`,
    avis: `MN : 2 caméras Anger (Symbia) + 1 caméra CZT (Spectrum Dynamics) et 2 TEP. Disponibilité : les caméras entre 16 h 30 et 17 h, TEP pas avant 18 h 30. Labo chaud : 1 enceinte basse énergie + 1 haute énergie + 1 Ga. Radiologie : 2 mammographes + 1 scanner GE + 1 salle radio et un mobile + 1 arceau de bloc + 1 salle IRM. L'ensemble des fiches est réalisé au CHB, sauf 2 fiches de radiologie interventionnelle à Caen. Pas de planning particulier : ça revient à l'étudiant de s'organiser selon les disponibilités machines et physiciens. 2 physiciens (temps plein) présents à tout moment pour une éventuelle aide. Autonomie ++++, équipe très très sympa, bureau partagé avec les physiciens.

RT : 2 TrueBeam STx + 3 Halcyon. 8 physiciens en radiothérapie avec 7 dosimétristes. Centre en plein développement : installation Ethos sur Halcyon, projet d'installation d'un ZapX et d'une 6e machine. Travail avec les physiciens et l'équipe agréable, bienveillants et disponibles en cas de besoin. L'organisation demande plus d'autonomie pour les fiches ; il faut vraiment solliciter les gens en cas de besoin. Machines en fin de traitements vers 19 h ; possible de venir le samedi (jour récupérable) pour des mesures. Au S3, les fiches curiethérapie sont faites au CFB à Caen.`,
    avisAnciens: `-MN: Machines : 2 caméra Anger (symbia) + 1 camera CZT (Dynamicspectrum) et 2 TEP
Disponibilité : les cameras entre 16h30-17h / TEP pas avant 18h30
Labo chuad : 1 enceinte basse energie+ 1 haute energie + 1 Ga
Radiologie Machines : 2 mammographe + 1 scanner GE + 1 salle radio et un mobile + 1 arcseau du bloc+ 1 salle IRM
-l'ensemble des fiches sont réalisée au CHB sauf 2 fiches de radio 'interventionnelle à CAEN
- pas de planning particulier ça revient à l'etudiant de s'organiser selon disponibilité machine et physiciens / 2 physiciens (temps plein) présents à tout moment pour une éventuelle aide / Autonomie ++++++++++++++ / équipe trés trés sympa / bureau partagé avec les physiciens

RT :
2 Truebeam STX + 3 Halcyon.
8 physiciens en radiothérapie avec 7 dosimétristes.
C'est un centre en plein développement : installation Ethos sur Halcyon, projet d'installation de ZapX et aussi une 6ᵉ machine. Généralement, le travail avec les physiciens et l'équipe en service est assez agréable. Ils sont bienveillants et disponibles en cas de besoin. Au niveau de l'organisation du stage, ça demande plus d'autonomie pour l'organisation des fiches, et aussi il faut vraiment solliciter les gens en cas de besoin.
Les machines finissent les traitements vers 19 h 00. En cas de besoin des machines pour des mesures, possible de venir le samedi (le jour est récupérable). En 3ᵉ semestre, les fiches curiethérapie sont faites au CFB à Caen.`,
    contacts: `pannier.mathilde@orange.fr (2020-2022), assia.benhamla46@gmail.com (2022-2025), manyani39@gmail.com (RT 2022-2025)`
  },
  "saint-cloud-curie": {
    responsables: { im: "Bénédicte Lonkuta", rth: "Clement Chevillard" },
    partenariats: { im: "HEGP (AP-HP), Hôpital Bicêtre (AP-HP)", rth: "" },
    site: "https://curie.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "",
    retraite: "oui",
    chomage: "non",
    conges: "12,5 par semestre",
    revisions: "",
    equipe: { physiciens: "2 en RX/MN", dosimetristes: "", techniciens: "1 (en formation CQ)", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "10 jours de RX interventionnelle à Lariboisière (AP-HP)", url: "https://hopital-lariboisiere.aphp.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Im: 1 scanner GE, 1 table radio Primax, 1 mobylett, 3 mammographes/tomosynthèse GE, 1 IRM GE. MN: 1 gamma caméra, 1 TEP Philips Vereos`,
    avis: `IM : prévoir de faire 10 jours dans un autre hôpital pour la partie RX interventionnelle (conventions avec Lariboisière gérées par l'établissement). Deux physiciens en RX/MN et un technicien en imagerie en cours de formation sur les CQ. Disponibilité des machines globalement à partir de 17 h-17 h 30, et une des deux gamma caméras disponible certaines journées. À prévoir : le remplacement d'un des mammographes, l'agrandissement du service de MN.`,
    avisAnciens: `Im: prévoir de faire 10 jours dans un autre hôpital pour la partie Rx interventionnelle (conventions avec Lariboisière gérées par l'établissement). Deux physiciens en RX/MN et un technicien en imagerie en cours de formation sur les CQ. Disponibilité des machines globalement à partir de 17h-17h30, et une des deux gamma caméra disponible certaines
journées. A prévoir : le remplacement d'un des mammographes, l'agrandissement du service de MN.`,
    contacts: `tanguyferran@gmail.com`
  },
  "strasbourg-icans": {
    responsables: { im: "Julien Salvadori", rth: "Nicolas Dehaynin" },
    partenariats: { im: "Hôpitaux Civils de Colmar", rth: "" },
    site: "https://www.icans.eu",
    photos: [],
    statut: "Stagiaire",
    salaire: "1856 + 75 % frais de transport",
    retraite: "non",
    chomage: "non",
    conges: "12,5 par semestre",
    revisions: "oui",
    equipe: { physiciens: "8 en RT ; 2 en MN ; 2 en radio (Colmar)", dosimetristes: "6", techniciens: "2", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Radiologie aux Hôpitaux Civils de Colmar", url: "https://www.ch-colmar.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: `La majorité du stage se déroule au CLCC (Institut Strauss) à Strasbourg. Le plateau technique comprend 2 gamma-caméras (1 GE NM/CT 870 DR et 1 Siemens Symbia T, remplacé en décembre 2026 par une GC CZT grand champ GE Starguide GX), un TEP/CT Vision de chez SIEMENS, un TEP/IRM SIGNA de chez GE et 7 activimètres (5 CAPINTEC en enceinte blindée et 2 injecteurs). Le service délivre également des traitements par RIV au 177Lu mais n'a plus de filière SIRT depuis le divorce avec le CHU de Strasbourg. Néanmoins, il est toujours possible d'aller observer le geste au CHU. L'encadrement est réalisé par deux physiciens médicaux à temps plein. Dès le début du stage, ils vont vous expliquer le fonctionnement des machines pour que vous soyez autonomes le plus rapidement possible pour réaliser vos fiches. Si jamais vous avez besoin d'aide, l'encadrement peut être adapté pour vous aider à progresser ! Si vous êtes efficace sur les fiches et intéressé par la médecine nucléaire, il est également possible de prendre part aux activités de recherche du service pendant le stage. Il n'y a pas de contraintes sur les horaires de travail ni sur les poses de congés. Un bureau DQPRM est disponible et partagé avec les DQ2 (1 poste de travail/personne et la climatisation). Suite au divorce avec le CHU, l'activité dans le service a diminué donc les machines sont disponibles assez tôt pour l'instant (~15H pour les gamma caméras et ~16H pour les TEP).
Pour la majorité des fiches de radiologie (à l'exception des fiches scanner et de la fiche IRM), vous devrez aller aux hopitaux civils de Colmar, à 30 minutes de train de Strasbourg. L'abonnement de train est remboursé à hauteur de 75% (tout comme celui du tram d'ailleurs, pensez également à demander la tarification solidaire de la CTS si vous avez 26 ans+). Deux physiciennes à temps plein sont sur place pour vous encadrer. Ce stage dans un hôpital plus généraliste permet d'observer de nombreuses indications, ce qui est utile pour sa culture clinique. Vous avez notamment accès à une salle de radiologie interventionnelle dédiée aux tests pour les DQ. Colmar possède également un centre de médecine nucléaire tout neuf comportant 1 TEP/CT Omni Legend de chez GE et 2 gamma caméras NM/CT 870 DR.

Le service de radiothérapie de l'Institut Strauss (ex-ICANS, juste à côté du CHU de Hautepierre) présente un plateau technique hyper complet et une super ambiance.
L'équipe est bienveillante et l'intégration s'y fait naturellement, avec une excellente entente entre les physiciens, les médecins et les manips.
Vous allez pouvoir vous former sur un équipement varié et récent :
•Appareils Varian : 1 Ethos HyperSight pour l'adaptatif, 1 Halcyon HyperSight, 1 TrueBeam STX (avec Exactrac et Dyn'R) et 1 Clinac IX Silhouette (avec Vision RT), 1 projecteur de source Flexitron (HDR)
•Appareils de tomothérapie : 1 Radixact et 1 Tomo HD
•Techniques réalisées : 3D, IMRT, VMAT, stéréotaxie et TBI
•Logiciels et matériel : TPS Eclipse, Precision, Oncentra, R&V ARIA, cuve PTW BeamScan, ArtiScan
Le service tourne avec 8 physiciens à temps plein, 6 dosimétristes et 2 techniciens. Les physiciens sont vraiment disponibles et prennent toujours le temps de répondre à vos questions ou de vous accompagner. Pour les fiches, chaque physicien encadre une ou plusieurs fiches tout au long du S2 ou du S3, ce qui garantit un super suivi.
Vos missions cliniques en tant qu'étudiant sera la réalisation des contrôles qualité pré- traitement, des contrôles quotidiens et hebdomadaires en S2 et S3 sur l'ensemble des machines. Si vous avancez assez vite sur les fiches de planification de traitement, vous pourrez participer à l’activité clinique en dosimétrie.
L’ensemble des stages vous formera davantage à l’environnement Varian qu’à celui des Tomo. Ainsi vous utiliserez beaucoup plus le TrueBeam, le Clinac ainsi que le TPS Eclipse mais vous serez aussi formés sur l’ensemble des autres machines et environnement, bien entendu !
Le mot d'ordre ici est l'autonomie, mais vous ne serez jamais lâchés dans la nature sans soutien.
• Bureaux : le bureau est exclusivement réservé aux DQ (DQ1 + DQ2) mais il est un peu éloigné de la dosimétrie, n’hésitez pas à aller souvent en dosi même pour boire un café !
•Horaires : la flexibilité est de mise ! Vous devez faire à minima 7h par jour et être présent dans le service max à 11h pour assurer les contrôles quotidiens. Les physiciens ne sont pas regardants sur vos heures mais plutôt sur la qualité et l’ avancement de votre travail
•Mesures : l'organisation est très libre puisque les machines sont libérées tôt (vers 16h30/17h), avec la possibilité de rester toute la nuit en semaine si vous êtes dans le rush de vos manips.
•Congés : aucune galère pour poser vos jours, la seule règle (qui reste flexible) étant que les deux étudiants évitent de s'absenter en même temps.
•Cantine : possible de manger sur le site au tarif de 4,65 euros
•Logement : si vous n’êtes pas du coin, le tram A et D desserve le centre
La formation dispensée par l’Institut Strauss est de haute qualité et nous sommes ravis d’avoir fait notre DQPRM ici !`,
    avisAnciens: `En MN : 4 SPECT dont 2 Symbia (Siemens) et 2 GE / 2 TEP Siemens / 4 activimètres.
En radiologie : A effectuer au CH de Colmar (partenariat)
1 Physicien à plein temps en MN à l'ICANS
1 Physicienne à plein temps au CH Colmar
Equipe agréable, très bonne ambiance, bureau DQPRM dédié (partagé entre DQ1 et DQ2).
Partie MN
Service : 1 physicien à plein temps en MN, 4 SPECT (2 Siemens Symbia, 2 GE), 2 TEP-CT Siemens, 1 TEP-MR GE, très grand labo chaud + pièce dédiée à la physique avec un activimètre accessible tout le temps
Bureau commun entre les DQ1 et DQ2 dans le service
Très bonne équipe, bonne ambiance, physicien disponible et investi. Bonne intégration dès le début sur le fonctionnement des machines, la gestion des fiches, la présentation de l’ équipe et de toutes les choses à savoir. Autonomie appréciée pour les mesures mais le physicien reste dispo et à l’écoute si difficultés rencontrées. Pas de contraintes sur les horaires de travail ni sur la pose des congés
Partie RX
Soit mesures à réaliser à Colmar pendant 1 mois (frais de déplacement pris en charge) soit sur un autre site Strasbourgeois, discussion avec le centre en cours. Pour plus d’infos sur la partie radio à Colmar, contacté les DQ 22-24

Equipe se montrant disponible en RT. Il est cependant nécessaire de prendre des initiatives au niveau des fiches et des manips à faire. Physicien à plein temps en MN et dispo en fin d'après-midi si manips à faire.`,
    contacts: `Imagerie (23-25) : thymele.muller-stahn@orange.fr, c.ringuenoire@icans.eu`
  },
  "toulouse-oncopole": {
    responsables: { im: "Laure Vieillevigne", rth: "Laure Vieillevigne" },
    partenariats: { im: "CHU de Toulouse, CH de Carcassonne", rth: "" },
    site: "https://www.iuct-oncopole.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1780",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "oui",
    equipe: { physiciens: "9 en RT ; 2 en imagerie (Oncopole) + 3 (CHU) + 1 (Carcassonne)", dosimetristes: "6", techniciens: "", ingenieurs: "", autres: "2 APM" },
    ailleurs: [
      { texte: "6 semaines au CHU de Toulouse (Purpan, Rangueil)", url: "https://www.chu-toulouse.fr" },
      { texte: "5 jours de RX au CH de Carcassonne", url: "https://www.ch-carcassonne.fr" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: `Imagerie : fiches faites en majorité à l'Oncopole (CLCC), 6 semaines prévues pour la découverte de l'activité clinique non oncologique au CHU (Purpan et Rangueil, 3-4 fiches + projets et présentations aux équipes). 5 jours de formation en RX au CH de Carcassonne répartis sur les 6 mois (il est mieux si l'un des deux DQ a le permis pour emprunter la voiture du CLCC, le trajet Toulouse-Carcassonne étant long en transports en commun, encore mieux si l'un des deux a une voiture). Autonomie +++ au CLCC, plus d'encadrement au CHU. Deux physiciens en imagerie à temps plein à l'Oncopole, trois au CHU et un à Carcassonne. Un planning est prévu pour toute la durée du stage et permet de bien gérer le temps ; prévoir des jours ou semaines de rédaction car tout s'enchaîne vite. Être autonome, se rapprocher des physiciens pour être au courant des formations/maintenances ; ne pas hésiter à proposer des petits projets, ceci sera très bien reçu.

RT (le CLCC) : grosse équipe (9 physiciens, 6 dosimétristes, 2 APM, 10 radiothérapeutes) ; plateau important (2 Novalis TrueBeam STx miroirs, 2 Halcyon, 3 Tomo, 1 scanner Siemens) ; amplitude des traitements 7 h 30-20 h ; diversité des techniques (RC3D, VMAT, STIC/STEC, dose unique, HyperArc, Tomo, TBI, curie, MET directe). SIRT : Aria ; TPS : Eclipse, Precision ; AQ : Aquilab, VeriSoft, DoseSoft/SunCheck, FilmQA. Très bonne organisation, ambiance agréable, équipe disponible, pédagogue et à l'écoute, bureau DQ convivial ! Les astreintes sont formatrices +++.

Organisation S2 : très forte implication dans les CQ prétraitement (stéréo et Tomo) et les journées mensuelles de CQ machine ; mesures pour les fiches après les traitements ou en fin de journée de CQ ; 2 fois par semaine, suivi du quotidien du physicien de plateau (dès la fin du 2e mois) ; 2 semaines avec un dosimétriste (fin de semestre). S3 : détachement des CQ au profit de la dosi (RC3D, RA, stéréo sur dossiers rétrospectifs) ; responsabilité du téléphone de plateau 2 fois par semaine (supervisé, 7 h-13 h 30 ou 13 h 30-20 h) : très formateur, réponse aux problèmes de la clinique ; formation curie sur le semestre (pas de dossiers prospectifs) ; pas d'implication clinique en dosimétrie ; autonomie ++.`,
    avisAnciens: `Fiches faites en majorité à l'Oncopole (CLCC), 6 semaines de prévues pour la découverte de l'activité clinique non-oncologique au CHU avec 3 à 4 fiches de prévue et des projets (présentation aux équipes..) 5 jours de formations en RX au CH de Carcasonne réparties sur les 6 mois (il est mieux si l'un des deux DQ a le permis pour emprunter la voiture du CLCC car trajet Toulouse- CH Carcasonne long en transport en commun, encore mieux si l'un des deux a une voiture) Autonomie +++ au CLCC, plus d'encadrement au CHU Un planning est prévu pour toute la durée du stage qui se déroule en sa majorité à l'Oncopole mais aussi au CHU (Purpan et Rangueil) et au CH de carcassonne (une dizaine de jours répartis pendant les 6 mois le déplacement se fait avec une voiture de l'oncopole). Deux physiciens en imagerie en temps plein (Oncopole), trois physiciens au CHU et un à Carcassonne. Le planning permet de bien gérer le temps et d'avancer avec les fiches. Bien prévoir des jours ou des semaines de rédaction parce que tout s'enchaine très rapidement. Il faut de l'autonomie et savoir se rapprocher des physiciens pour être au courant des formations maintenances etc...
Ne pas hésiter à proposer des petits projets ceci sera très bien reçu.

LE CLCC :
- Grosse équipe : 9 physiciens, 6 dosimétristes, 2 APMs, 10 radiothérapeutes ;
- Plateau important : 2 Novalis TrueBeam STx (Varian) miroirs, 2 Halcyon (Varian), 3 Tomos (Accuray), 1 scanner (Siemens) ;
- Amplitude horaire des traitements : 7h30-20h ;
- Diversité des techniques : RC3D, VMAT, STIC/STEC, dose unique, HyperArc, tomo, TBI, curie, MET directe ;
- SIRT : Aria ;
- TPS : Eclipse, Precision;
- AQ : Aquilab, Verisoft, Dosisoft/Suncheck, FilmQA ;
- Très bonne organisation du service. Bonne ambiance de travail. Equipe vraiment agréable, disponible, pédagogue et à l'écoute. Bureau DQ convivial !
ORGANISATION GENERALE DES SEMESTRES 2 ET 3 EN RT :
S2 :
- Vous êtes très fortement impliqués +++ dans la réalisation des CQs pré-traitement (stéréos et tomo) et les journées mensuelles de CQ machine ;
- Mesures pour les fiches possibles après les traitements (horaire variable) ou à la fin d'une journée de CQs ;
- Vous suivez 2 fois par semaine le quotidien du physicien de plateau (~ dès la fin du 2e mois);
- Vous suivez pendant 2 semaines le quotidien d'un dosimétriste de l'équipe (~ fin de semestre).
S3 :
- Détachement des CQs de routine au profit de la dosi. Suivi de dosimétries puis entraînements autonomes aux techniques RC3D, RA et stéréo ;
- Vous avez la responsabilité 2 fois par semaine du téléphone de plateau (supervisé par un physicien) (7h-13h30 ou 13h30-20h). Réponse aux problèmes de la clinique et découverte routine clinique;
- Les astreintes sont formatrices +++ : vous êtes véritablement intégrés au coeur de la routine du physicien et apprenez à gérer tous les problèmes que rencontrent quotidiennement un service de RT !
- Impossibilité de faire des dosimétries prospectives (dossiers rétrospectifs uniquement pour se former)
- Formation Curie sur l'ensemble du semestre (pas de dossiers prospectifs non plus)
- Pas d'implication clinique des DQ sur la partie dosimétrie
- Autonomie ++

Autonome sur CQ/astreinte rapidement. Gros centre : 7/8 machines + curithérapie, environ 10 physiciens ETP, 45 manipulateurs, 6 dosimétristes, 2 techniciens. Bon encadrement.`,
    contacts: `Imagerie : nicolas.campisi@gmail.com (22-24), judeborne@gmail.com (22-24) ; RT : sayahfarzam@gmail.com (21-23), jedidisarahbcr@gmail.com, alexandre.blncht@gmail.com (22-24)
RT et imagerie (23-26) : gwenaelle.sidorski@gmail.com`
  },
  "tours-chru": {
    responsables: { im: "", rth: "Simon Jan" },
    partenariats: { im: "", rth: "" },
    site: "https://www.chu-tours.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1770",
    retraite: "oui",
    chomage: "non",
    conges: "25",
    revisions: "oui",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Partie radiologie réalisée à Orléans", id: "orleans" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: `Avoir une bonne autonomie. Partie « radiologie » réalisée à Orléans.`,
    avisAnciens: `Avoir une bonne autonomie. Partie "radiologie" réalisée à Orléans.`,
    contacts: ""
  },
  "valenciennes": {
    responsables: { im: "Francine Laurent-Daniel", rth: "" },
    partenariats: { im: "", rth: "" },
    site: "https://www.ch-valenciennes.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: "",
    avis: "",
    avisAnciens: "",
    contacts: ""
  },
  "villejuif-gr": {
    responsables: { im: "Aurélie Moussier-Lherm", rth: "Anne Beaudre" },
    partenariats: { im: "Hôpital Bicêtre (AP-HP), Hôpital Européen Georges-Pompidou", rth: "" },
    site: "https://www.gustaveroussy.fr",
    photos: [],
    statut: "Stagiaire",
    salaire: "1900",
    retraite: "oui",
    chomage: "non",
    conges: "25 (12,5 par semestre)",
    revisions: "oui",
    equipe: { physiciens: "13 en RT ; 1 en RX ; 2 en MN", dosimetristes: "8", techniciens: "", ingenieurs: "", autres: "5 chargés de CQ" },
    ailleurs: [
      { texte: "1 semaine de radiologie interventionnelle à la Pitié-Salpêtrière", id: "paris-salpetriere" },
      { texte: "1 semaine de MN à Créteil" }
    ],
    themes: [],
    sections: [],
    machinesListe: null,
    machines: `Disponibilité de l'équipement en Radio :Scanner - après 17h; SPECT - en général dispo en journée; SPECT/CT - après 18h en moyenne; PET - Après 20h;
RT :
Machines :
- 1 scanner dosimétrique : Siemens GoSim
- 1 IRM uniquement pour la plannification RT : Siemens
- 5 Versa, dont 2 avec Exactrac et table 6D --> Installation VisionRT 2025
- 2 Tomo
- 1 Novalis
- 1 Cybreknife
- 1 Papillon (RT basse énergie)
- Installation ZapX fin 2025
Curiethérapie : 6 chambres PDR (Gynéco, ORL, Pédia) + 1 bloc HDR (Grains protate, Gynéco)
TPS :
- Raystation (Versa + Novalis)
- Precision (Tomo + Cyberknife)
- Oncentra (Curie)
R&V : Mosaiq
Organisation :
S2 : répartition 2 semaines dosi et 2 semaines CQ (alternance étudiant)
- responsable CQ patient Novalis x3/semaine (lundi, mercredi et vendredi entre 12h et 13h)
- participation au traitement TBI + étalonnage des diodes au Novalis
- assister à >1 CQ mensuel et hebdo machine/semaine et >1 semestriele et annuel sur la durée du S2
- entrainement dosi 3D et rIMRT sur ancien patient mais validation sur un "vrai" dossier
S3 : répartition 2 semaines dosi et 2 semaines curietherapie (alternance étudiant)
- responsable CQ patient Novalis x3/semaine (lundi, mercredi et vendredi entre 12h et 13h)
- participation au traitement TBI + étalonnage des diodes au Novalis
- réalisation des CQ hebdomadaires des chambres PDR et du bloc HDR
- entraiement dosi VMAT (loc Prostate et ORL en prioroté) et stéréo sur anciens patients avec validation sur "vrai" dossier
- participation aux dosimétries de cureithérapie`,
    avis: `RX :
Encadrement : Une physicienne à temps plein (responsable de l'EAP en imagerie).
Equipements :
- 2 scanners diagnostics Siemens (SOMATOM FORCE : bi-tube; NAEOTOM ALPHA : comptage photonique)
+ 1 scanner en RT
- 2 IRMs diagnotics Siemens (1,5 T et 3 T) + prochainement une IRM en RT
- 3 mammographes GE (Pristina)
- 2 salles de radiologie conventionnelle (1 salle Philips, 1 nouvelle salle sera bientôt installée)
- 2 salles de radiologie interventionnelle pour l'angio et 5 arceaux de blocs mobiles
Nombreux fantômes disponibles (Catphan 600, MECT, Magphan, ect) et dispositif de mesure RaySafe à disposition (sauf pour la mammo)
Observations :
- 1 semaine en radiologie interventionnelle à la Pitié Salpêtriere.
- Observations programmées dans l'ensemble des services de radio.
MN :
Encadrement : Deux physiciens à temps plein (dont un fraichement diplômé en 2024).
Equipements :
- Labo chaud avec plusieurs activimètres + trasis UNIDOSE + 2 activimètres mobiles
- 2 TEP-CT Siemens (Vision 600)
- 2 SPECT (Discovery, GE et VERITON, Spectrum Dynamic)
- Traitements : radioembolisation, 177-Lu (prostate et TNE), 131-I, 223-Ra
Nombreux fantômes disponibles.
Observations :
- 1 semaine en MN à Créteil.
- Observations à la demande en scintigraphie et TEP
- Programmation d'une journée d'observation avec un manipulateur radio pour suivre les traitements au Lutécium
- Nous avons demandé à aller au bloc pour voir l'administration de microsphères d'90-Y
Organisation générale du stage :
- Signature d'une charte rédigé par l'encadrement (en plus de la convention de stage) le premier jour indiquant les modalités du stage.
- organisation alternée sous forme de 3 semaines MN puis 3 semaines RX.
- CQ mammo hebdomadaires et mensuels effectués en autonomie
- Fiches : Il est demandé de réserver les créneaux à l'avance et de préparer tous les fichiers excel de CQ à l'avance. Les machines sont généralement disponibles après 17 h.
- Vacances : Les deux stagiaires doivent partir en même temps, deux semaines imposées : 1 semaine fin mars + 1 semaine fin juin
Si vous avez des impératifs, prévenez vos futurs encadrants avant votre arrivée. Il est attendu par l'encadrement que les DQPRM rattrapent leur retard pendant leurs congés/week-end. L'encadrement peut-être délicat, communication parfois difficile.

Equipe de radiothérapie composée de 13 physiciens, 5 chargés de CQ et 8 dosimétristes. 2 physiciens responsables de l'organisation générale des DQ avec 1 réunion/mois pour suivre l'avancée des fiches.
Les fiches sont bien organisées et réparties entre tous les physiciens avec des responsables désignés.
L'équipe est sympathique et disponible lors qu'elle est sollicitée, il est nécéssaire que les étudiants soient autonomes, curieux et très actifs dans la routine clinique. Il est possibile d'assister aux staff scientifiques du service de RT le vendredi matin : présentations scientifiques des médecins sur pleins de thématiques liées à la radiothérapie et aux présentations (revues bibliographiques oncologiques) des internes le mercredi midi.
Les congés ne peuvent pas être pris en même temps que le co-dq.`,
    avisAnciens: `MN : TEP disponible à partir de 20h sauf un jour par semaine à 18h, spect/ct disponible à partir de 17h et spect seule disponible en journée. Le plateau de MN va changer en 2020 et surement les disponibilites egalement. RX : CT disponibles soirs à partir de 18h, radio et mammo en journée, RI les soirs uniquement. Beaucoup de temps en observation uniquement (sans pouvoir avancer les fiches) au début du semestre. Beaucoup de matériel disponible pour faire les cq. 2 physiciennes à temps plein, un nouveau physicien arrive courant septembre. Une chargée de cq à temps plein également en imagerie. Un peu de routine mais secondaire par rapport à l'observation et aux fiches.

Etre capable de bosser en autonomie.`,
    contacts: `Imagerie : amelie.tourais@gmail.com, nathan.benzazon@hotmail.fr ; RT : koudiaayoub34@gmail.com (S2, S3, S4), manon.guillou97.mg@gmail.com (S3)
Anciens : michel_atieh963@hotmail.com (2021, RT), julie.colnot58@gmail.com, ilhem.hsaini@gmail.com, orly.saturnin@gmail.com`
  }
};
