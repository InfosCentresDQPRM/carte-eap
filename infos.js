// FICHES DÉTAILLÉES DES CENTRES (source : tableau « Infos centres » des promos)
// La clé de chaque bloc = l'id du centre dans data.js. Champ vide "" = non affiché, à compléter.
//   site : adresse du site web du centre
//   photos : liste d'images, adresses https://...
//   equipe : effectifs du service de physique médicale
//   ailleurs : parties de formation dans d'autres centres,
//     { texte: "...", id: "id-dun-centre-de-la-carte" } ou { texte: "...", url: "https://..." }
//   themes : ordre et titres des grands blocs de la fiche, [{ cle, titre }] — [] = ordre standard.
//     Clés standard : conditions, service, machines, avisRecents, avisPrecedents,
//     commentaires-anciennes-promos, contacts.
//     Une clé personnalisée crée un nouveau bloc (rempli par ses sections).
//   sections : cases de la fiche { theme: cle-du-bloc, titre, texte, pos, just, masque }
//     pos: "haut" = titre au-dessus du texte (sinon titre à gauche) ; just = texte justifié.
//     Mise en forme dans les textes : **gras**, *italique*, __souligné__.
//   machinesListe : machines du centre (noms de la liste MACHINES) — null = détection
//     automatique par mots-clés dans les textes
//   avisIm / avisRth : avis des promos récentes, par modalité ; avis : non triés
//   avisAncIm / avisAncRth : avis des promos précédentes, par modalité ; avisAnciens : non triés
//   machines, contacts : textes libres entre accents graves `...`
// CATEGORIES : classement des machines (parent = id d'une autre catégorie, ou null).
// MACHINES : liste des machines connues (filtre « Machine… » et fiches) ;
//   cat = id de la catégorie de rangement (absent = sans catégorie).
// Tout se modifie aussi depuis la carte : « Modifier les infos » sur une fiche,
// puis « Exporter infos.js » pour publier le fichier mis à jour.

const CATEGORIES = [];

const MACHINES = [
  { nom: "TrueBeam", alias: ["TrueBeam"] },
  { nom: "Halcyon", alias: ["Halcyon"] },
  { nom: "Curiethérapie HDR", alias: ["Curiethérapie HDR"] },
  { nom: "Curiethérapie LDR", alias: ["Curiethérapie LDR"] },
  { nom: "SPECT-CT", alias: ["SPECT-CT"] },
  { nom: "Caméra CZT", alias: ["Caméra CZT"] },
  { nom: "TEP", alias: ["TEP"] },
  { nom: "IRM", alias: ["IRM"] },
  { nom: "Scanner", alias: ["Scanner"] },
  { nom: "Mammographe", alias: ["Mammographe"] },
  { nom: "Ethos", alias: ["Ethos"] },
  { nom: "Gamma-caméra", alias: ["Gamma-caméra"] },
  { nom: "IntraBeam", alias: ["IntraBeam"] },
  { nom: "Clinac", alias: ["Clinac"] },
  { nom: "Tomothérapie", alias: ["Tomothérapie"] },
  { nom: "CyberKnife", alias: ["CyberKnife"] },
  { nom: "Protonthérapie", alias: ["Protonthérapie"] },
  { nom: "IRM-Linac", alias: ["IRM-Linac"] },
  { nom: "Versa", alias: ["Versa"] },
  { nom: "ZapX", alias: ["ZapX"] },
  { nom: "X-Strahl / Papillon", alias: ["X-Strahl / Papillon"] },
  { nom: "Curiethérapie PDR", alias: ["Curiethérapie PDR"] },
  { nom: "Radixact", alias: ["Radixact"] },
  { nom: "Synergy", alias: ["Synergy"] },
  { nom: "EOS", alias: ["EOS"] },
  { nom: "GammaKnife", alias: ["GammaKnife"] },
  { nom: "TEP-IRM", alias: ["TEP-IRM"] },
];

const INFOS = {
  "angers-ico": {
    responsables: { im: "Camille Guillerminet", rth: "Maxime Bremaud" },
    site: "https://www.institut-cancerologie-ouest.com",
    photos: ["https://www.institut-cancerologie-ouest.com/themes/custom/ico_theme/assets/dist/images/img_menu_mobile.png"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Imagerie en partie au CHU d'Angers : MN dans ses locaux, RX principalement (sauf mammographie et IRM)", url: "https://www.chu-angers.fr" },
      { texte: "Quelques jours de MN à l'ICO Nantes, prévus et pris en charge", id: "nantes-ico" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1930` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `plus besoin` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `8 en RT (ICO), 2 en MN (1 CHU + 1 ICO)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `7` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `4` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie (ICO) : 2 TrueBeam, dont 1 en configuration Novalis STx dédié à la stéréotaxie, et 3 Halcyon.
Curiethérapie : HDR utéro-vaginale, bas débit de dose prostate, interstitielle, flap, chéloïdes.

MN — CHU : 1 SPECT-CT Symbia Intevo, 1 caméra CZT dédiée cardio (les promos précédentes citaient aussi 1 SPECT GE) ; changement actuel du parc : installation d'1 SPECT GE 870 et d'1 GE StarGuide.
MN — ICO : 1 SPECT-CT Symbia Intevo Bold (CT 16 coupes).
MN — partagés CHU/ICO : 1 TEP Philips Vereos (numérique), 1 TEP Siemens Biograph Vision 600.
Thérapie MN : iode, Lutathera, Lu-PSMA (ICO) ; radioembolisation à l'Y-90 (SIR-Spheres et TheraSphere) au CHU.

RX : parc très étendu, beaucoup d'appareils et d'interventions réalisées.

Logiciels et CQ (RT) : ARIA ; Eclipse avec RapidPlan, Acuros pour VMAT, AAA pour RC3D ; Elements pour l'intracrânien ; MIM pour recalage élastique et ré-irradiation ; matériel IBA, Sun Nuclear et Artiscan pour les CQ.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : ~16 h ou 18 h 30 (en fonction des équipes de manip et des machines) + créneaux CQ ; temps dédié aux CQ machines fait en journée ; accès aux machines pour les mesures assez variable entre les machines et les périodes (ça peut aller de 15 h à 19 h 30).

Caméras MN : après 16 h 50 (promos précédentes : vers 16 h 30 – 17 h pour les SPECT, 18 h pour les TEP).
IRM : 19 h / 20 h.
TEP : 18 h.

RX : mammo assez dispo (au moins ½ journée par semaine), avec tout le matériel nécessaire au CQ externe (donc possible de faire quasi tous les tests sans le contrôleur). Scanner et RX conventionnelle relativement disponibles (au moins ½ journée, voire plus, quasiment toutes les semaines). Pour l'interventionnel, arceaux mobiles très dispo en journée, mais c'est un peu plus compliqué pour les salles fixes (planning très variable).` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN
Les personnes : équipe de manip et radiopharmacien très sympas, côté ICO et CHU. Médecins jeunes et répondant aux questions.

Locaux : problème de place et de bureau, travail sur PC portable CHU et PC portable ICO (possibilité d'avoir la place dans le bureau de la physicienne ICO certains jours : lumière, double écran et réseau +++), sinon « bureau » (table) dans le bureau des internes, qui sont très sympas (en cours de réaménagement, alors peut-être), mais pas de fenêtre. Parking du personnel côté ICO, arrêt de tram proche du CHU, sinon possibilité de mettre un vélo.

Déroulement : suivi des manips dans un planning. Possibilité d'alterner RX et MN. Ne pas hésiter à demander pour faire des CQ. Physicien et physiciennes sont à l'écoute et répondent aux questions. Traitement et analyse des images en autonomie, pas spécialement de logiciel dédié (perso : ImageJ, Python et syngo.via).

RX
Voir commentaire des promos précédentes (avis plus tard). Vous pouvez cependant rencontrer des difficultés avec une des physiciennes (avis perso). Pour plus d'infos, n'hésitez pas à venir nous en parler, ça sera sûrement plus simple.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Le centre tourne globalement sans l'aide des DQ, donc il y a moins de pression sur les CQ ou les dosimétries (sauf l'été pour le S3, où l'on vient en soutien pour les dosis). Rythme plutôt serein pour les fiches. Beaucoup de mises en place ou de mises à jour techniques actuellement (multimétas, adaptatif, stéréo), il y a toujours des projets en cours. Centre bien développé au niveau de la curiethérapie. Stéréotaxie bien approfondie malgré une machine unique dédiée.

Bureau stagiaire proche des physiciens et de la dosimétrie. Équipe très sympa et formatrice, on répondra toujours à vos questions. Curiosité appréciée. Cependant, léger manque d'intégration dans les projets (ex. : les DQ ne sont pas dans la liste de mail de la physique, ou ne sont pas invités dans les réunions), ce qui peut rendre parfois difficile la découverte de projets ou de mises en place techniques.

Pose de congés assez libre. Possibilité d'aller à des congrès (SFPM, congrès régionaux, etc.) sans poser de congé, mais pas remboursé. Possibilité de participer à l'EPU d'Angers sur l'IA (je recommande).

Facile d'accéder au centre (tram, parking, vélo). Ville très agréable avec des endroits animés (concerts, activités de plein air, visites, boutiques, balades, etc.) mais aussi avec plein d'endroits calmes. Peut être tendu pour trouver un logement (beaucoup de logements mais ils partent vite). Assez proche de la mer et de Paris (1-2 h en train et en voiture).` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN
Dans l'ensemble, les équipes de MN sont très sympas et les médecins assez accessibles pour répondre aux questions. Les physiciens sont très disponibles pour des questions, pour faire des manips avec eux au besoin. Pas de bureau attitré au CHU, donc obligé de squatter les bureaux vides (il y en a très peu, hélas !).` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Équipe très sympa et diversité de machines.
Autonomie importante, mais un physicien sera toujours dispo pour répondre aux questions.
Moins de CQ au S3, au profit de la dosimétrie (RC3D, VMAT, stéréo), bien aidé par les dosimétristes !` },
      { theme: "commentaires-anciennes-promos", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Médecine nucléaire : très dispo et présente pour les TPs` },
      { theme: "commentaires-anciennes-promos", titre: "Radiothérapie", pos: "haut", just: true, texte: `Radiothérapie : en autonomie, mais des physiciens sont toujours dispo pour des questions` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `andrea.crochet@icloud.com (IM, RT, promo 2024-2026)

adelegabillaud@gmail.com (promo 2023-2025)

theo.letersec@gmail.com (promo 2023-2025)

val.giordano@orange.fr (promo 2022-2024)

mathilde-levardon@hotmail.fr (promo 2021-2023)` }
    ],
    machinesListe: ["TrueBeam", "Halcyon", "Curiethérapie HDR", "Curiethérapie LDR", "SPECT-CT", "Caméra CZT", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "avignon": {
    responsables: { im: "", rth: "Véronique Bodez" },
    site: "https://www.icap84.org",
    photos: ["https://www.unicancer.fr/wp-content/uploads/2021/10/Avignon_ICAP_210521-%C2%A9Sylvie-Villeger-HD-45.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1900+` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : plateau 100 % Varian, avec 4 TrueBeam dont 2 STx, 2 Halcyon et 1 Ethos.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Équipe très sympa. J'ai beaucoup aimé mon DQ ici, je recommande le centre.

Sinon, pour la ville en elle-même, plus mitigé : compliqué de trouver un logement (et si possible, prenez avec la clim) et c'est le bordel sur la route (ça doit être la proximité avec Marseille qui veut ça). Mais bon, au final, c'est quand même super, j'ai beaucoup appris !` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: ["TrueBeam", "Halcyon", "Ethos"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "bordeaux-bergonie": {
    responsables: { im: "", rth: "Jean-Pierre Taupiac" },
    site: "https://www.bergonie.fr",
    photos: ["https://upload.wikimedia.org/wikipedia/commons/1/17/Institut_Bergoni%C3%A9_-_cours_de_l%27Argonne.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1700` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `théoriquement non` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `MN et RX : pas de physicien à plein temps` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `MN : plateau technique réduit (1 gamma-caméra et 1 TEP).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Disponibilité après 19 h 30, sauf les jours de CQ mensuel.
TOP réalisé par les manips DQA entre 13 h et 14 h, tous les jours.
MN : gamma-caméra disponible à partir de 15 h le mardi, et TEP à 19 h 30.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "Radiothérapie", pos: "haut", just: true, texte: `Formation bonne en radiothérapie, bon encadrement, physicien disponible pour les questions.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `corentin.desport@gmail.com` }
    ],
    machinesListe: ["TEP", "Gamma-caméra"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "bordeaux-chu": {
    responsables: { im: "Marie Eresue", rth: "" },
    site: "https://www.chu-bordeaux.fr",
    photos: ["https://www.chu-bordeaux.fr/media/image/112/chu_bordeauxpellegrin-1453716862.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1914` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Disponibilité apres 19h30` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `fanny.solinhac@gmail.com` }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "brest-chru": {
    responsables: { im: "Mathieu Pavoine", rth: "Gaelle Goasduff, Emmanuelle Martin" },
    site: "https://www.chu-brest.fr",
    photos: ["https://www.chu-brest.fr/sites/default/files/styles/social_networks/public/2023-02/visuel_ici_brest.jpg?itok=iJpPQAEu"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1928` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non (trimestres travaillés non comptés, gros point noir malgré de nombreuses sollicitations aux RH)` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `Y a plus besoin` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `MN : 2 à temps plein (sur le Finistère nord). RT : 5,5 à temps plein (dont 0,5 recherche)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `3` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `1 technicienne` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RTE — 3 accélérateurs : 2 TrueBeam Novalis STx miroir (MLC HD) et 1 Ethos (les promos précédentes citaient 2 TrueBeam Novalis STx dédiés stéréo et 1 TrueBeam « standard » permettant de faire les grands champs). 1 scanner Siemens SOMATOM. Stéréotaxie, VMAT.
Curiethérapie : 1 projecteur de source HDR pour la curiethérapie utéro-vaginale ; 3 curiethérapies de prostate par semaine au bloc. Radiothérapie intra-opératoire régulière au bloc (IntraBeam).
TPS : Eclipse (les promos précédentes citaient Pinnacle) ; SIRT : ARIA. Matériel de CQ : Octavius 4D, Aquilab.

MN : 4 gamma-caméras — 2 Siemens ProSpecta toutes neuves et 2 Siemens Intevo. 3 TEP : 2 Siemens Vision et 1 Siemens Vision Quadra (unique en Europe !). Un labo avec activimètre est dédié aux physiciens. (Les promos précédentes citaient à Morvan : 2 SPECT Symbia et Intevo, 2 TEP Biograph dernière génération.)

RX : au même étage, 1 IRM GE et des équipements de radio conventionnelle. Dans l'année 2025, installation d'un scanner à comptage photonique. Un 2ᵉ service d'imagerie est présent dans l'hôpital (radio conventionnelle, scanners…).

Logiciels (imagerie) : syngo.via, MIM, PACS, DACS, QATrack pour les CQ…` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : grosse activité en MN — TEP ~17 h 30, scinti 16 h 30 – 17 h (avis récent : gamma-caméras, fin des traitements vers 16 h – 16 h 30 ; TEP, fin des traitements vers 17 h). Accès aux machines et au labo chaud très facile.

RX : RX et TDM dispo ; NRI plus compliqué. RX conventionnelle très facilement accessible en stage. Accès aux blocs pour l'interventionnel lors des contrôles trimestriels ou initiaux.

Promos précédentes — RX : scanner (sur les TEP/SPECT ou à la Cavale Blanche) et conventionnel assez accessibles ; interventionnel à la Cavale Blanche : compliqué d'y accéder, vous n'aurez pas forcément les deux semaines nécessaires.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Service de médecine nucléaire flambant neuf, au 3ᵉ étage ! Quasi 100 % du stage se déroule à présent à l'ICI (Institut de Cancérologie et d'Imagerie), à l'hôpital de la Cavale Blanche. La ligne 1 du réseau de bus dessert 2 arrêts à l'hôpital depuis le centre-ville. Gros chantier en cours pour l'arrivée du tram à l'hôpital (ligne B) vers 2026.

Bureau des DQPRM très proche de ceux des physiciens. Très bonne équipe, ambiance conviviale. Manips sympas et accessibles.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Service neuf. Bureau sympa mais très à l'écart de la physique.

Les physiciens sont sympas mais ont vraiment très peu de temps pour encadrer les DQPRM (service débordé) : autonomie ++++++. Très bonne formation en CQ avec la technicienne, mais très très peu formé en dosimétrie. Le DQ va au bloc de curiethérapie de prostate une fois sur deux.` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN : l'essentiel se passe à Morvan (95 % du stage). Bon suivi, et possibilité de participer à des projets de recherche (s'il y en a).

Bureau DQ : petit open space, à côté de celui des physiciens, d'où une facilité de communication. Équipe très sympathique. Les mains dans le cambouis dès la première semaine. Soyez demandeurs pour aller observer et pour les CQ RX. Hôpital de centre-ville.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Très bon service, équipe sympa.

Le DQ est très vite intégré à la routine CQ machine et CQ patient (ça se calme un peu plus en 2ᵉ année), les physiciens et la technicienne sont très dispo dès qu'il y a des questions ou pour l'encadrement. Le DQ va au bloc de curiethérapie de prostate une semaine sur deux.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `caroffpc@gmail.com (IM, promo 2024-2026)

paul.gillet.pro@gmail.com (IM, promo 2023-2025)

delpierre.pauline@gmail.com (IM, promo 2023-2025)

loreena.quintin@hotmail.fr (IM, RT, promo 2023-2025)

bakondiabaloaffoh@gmail.com (RT, promo 2023-2025)

erwancossker@gmail.com (promo 2022-2024)

clemence.robert98@gmail.com (promo 2022-2024)

mathieu.pavoine@gmail.com (PM)` }
    ],
    machinesListe: ["TrueBeam", "Ethos", "Curiethérapie HDR", "SPECT-CT", "TEP", "IRM", "Scanner", "IntraBeam"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "caen-baclesse": {
    responsables: { im: "Cyril Jaudet, Alain Batalla", rth: "Philippe Berejny" },
    site: "https://www.baclesse.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4DNpprOaktexgNFb7h_eGR5KQTYi0svvhf47H7jUCneot6y1zc28Ics&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1870` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 2 Clinac, 2 Halcyon, 2 tomothérapies, 1 CyberKnife. Curiethérapie HDR et LDR (I-125). IntraBeam + protonthérapie.

Imagerie (promos précédentes) — avis récent : parc identique, dont l'ajout d'un scanner dans l'optique de remplacer à terme le Big Bore pour l'été 2024.
Mammographie : 2 mammographes — GE Pristina (angio + tomosynthèse), GE Essential.
Radio conventionnelle : 1 mobile Stephanix, 1 table Stephanix, 1 suspension.
Scanners (imagerie + RT) : 3 — Philips Incisive, Siemens Confidence RT, Philips Big Bore (RT, mais changement courant 2023).
Radio interventionnelle : 4 amplis de bloc, 1 salle interventionnelle (Philips Allura).
MN : 3 gamma-caméras (Siemens Intevo Bold, Siemens Symbia T2, GE Brivo), 1 TEP Philips Vereos.
IRM : 2 — Siemens Vida (3 T) et Siemens Aera (1,5 T).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : gamma-caméra disponible 1 h (12 h 30 – 13 h 30) et vers 17 h en temps normal. TEP dispo vers 17 h, ou le matin avant le début des acquisitions à 9 h.
RX : scanner dispo vers 16 h 30 ; RX conventionnelle : pas de planning prédéfini.
IRM : CQ fait durant la pause méridienne des manips.

RT : créneau dédié aux CQ périodiques chaque semaine, sur une voire deux machines.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Bureaux adjacents avec ceux des encadrants, juste au-dessus des services d'imagerie et de MN : le contact est facile. Équipe médicale agréable et avec qui il est facile de discuter (manips, médecins, radiopharmaciens).

Attention, 1 an de travaux d'aménagement de l'été 2024 à l'été 2025 entre le CHU et Baclesse va rendre l'accès en voiture compliqué, mais le tram passe à proximité, ainsi que quelques lignes de bus.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `1 tuteur qui gère la partie radiologie-IRM et 1 tuteur qui gère la partie médecine nucléaire : ils sont tous les deux géniaux. Professionnels, pédagogues et très compétents !` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Participation et réalisation des CQ (périodiques, patients, etc.). Autonomie recommandée.

Les DQ sont plus ou moins libres de faire ce qu'ils souhaitent (possibilité d'approfondir les fiches sur la base du volontariat, mais l'inverse est aussi possible ; peu d'obligations de participation active au service, toujours sur la base du volontariat). Les physiciens sont plus ou moins disponibles pour répondre aux questions ou pour aller faire des mesures.` },
      { theme: "commentaires-anciennes-promos", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `promo 2022-2024 : 1er étudiant dq en imagerie à Caen` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `alexis.doudard5@gmail.com (IM)

m.rayer@baclesse.unicancer.fr (DQ1)

thelie.alexis@gmail.com (DQ2)` }
    ],
    machinesListe: ["Clinac", "Halcyon", "Tomothérapie", "CyberKnife", "Curiethérapie HDR", "Curiethérapie LDR", "IntraBeam", "Protonthérapie", "SPECT-CT", "Gamma-caméra", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "chambery": {
    responsables: { im: "", rth: "Magali Romanet" },
    site: "https://www.ch-metropole-savoie.fr",
    photos: ["https://www.ch-metropole-savoie.fr/uploads/Image/19/57613_638_Vue-aerienne-hopital-Chambery.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "CHU Grenoble Alpes" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "clermont-jean-perrin": {
    responsables: { im: "Véronique Dedieu", rth: "Véronique Dedieu" },
    site: "https://www.cjp.fr",
    photos: ["https://www.unicancer.fr/wp-content/uploads/2021/10/24.-Clermont-Ferrand_Centre-Jean-PERRIN-1024x679.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Radiologie interventionnelle au CHU Gabriel Montpied", url: "https://www.chu-clermontferrand.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1912,65 + 100 % frais de transport` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `plus besoin, mais possibilité de réviser la synthèse pendant le temps libre (DQ2)` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `MN : 2` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 4 accélérateurs Varian (2 Novalis et 2 Clinac). Scanner dédié RT dans le service de radiothérapie (CQ mensuel fait par les DQ1).
R&V sur ARIA ; dosimétrie sur Eclipse. CQ pré-traitement : Delta4, Lucy, PDIP.

MN (centre Jean Perrin) : 2 caméras hybrides SPECT-CT « Symbia » et « Intevo » (bientôt 3, remplacement de la gamma-caméra « Axis »), 1 caméra dédiée cardio (D-SPECT), 2 TEP (Discovery 710 et Discovery MI DR) et une radiopharmacie (CQ mensuel activimètre par les DQ1).

RX — à CJP : 1 scanner diagnostic et interventionnel dans le service de radiologie, 1 IRM, 2 salles de radiologie (dont 1 avec de l'interventionnel → GPR) où le CQ trimestriel et annuel de l'ampli de brillance est réalisé. Service de sénologie disposant de 4 mammographes Hologic et d'un appareil de macrobiopsie.

RX — au CHU : service de radiologie interventionnelle situé au CHU Gabriel Montpied (en face du centre), divisé en 3 parties différentes (cardio, neurovasculaire et vasculaire).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : 4 accélérateurs, libres à partir de 18 h – 19 h (en fonction des patients et de l'affluence).

MN : machines disponibles en fin d'après-midi en fonction des programmes (16 h 30 – 17 h).` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN (3 premiers mois de stage) : le stage concerne uniquement le service de MN du centre Jean Perrin.

RX : malheureusement, pas grand-chose à dire. Nous devions réaliser 3 mois au sein du service de radiologie de CJP et du CHU, mais le Covid-19 en a décidé autrement.

Les DQ sont tous dans un bureau situé au sein du service de physique : communication facile.

Conseil : n'hésitez pas à aller demander à faire des manips aux physiciens ;)` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Information DQ2 :
Participation et réalisation des CQ mensuels, semestriels et annuels.
Réalisation de perm en binôme avec un physicien.
Réalisation de CQ pré-traitement.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Bonne ambiance et bon encadrement` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `aurelie-pauthe@orange.fr (DQ1)

auappavou.richard@gmail.com (DQ1)` }
    ],
    machinesListe: ["Clinac", "SPECT-CT", "TrueBeam", "Gamma-caméra", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "dijon-cgfl": {
    responsables: { im: "Jean-Marc Vrigneaud", rth: "Leone Aubignac" },
    site: "https://www.cgfl.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLv7am0MKB7dCb_V_4B7TufyL897BWkHlUK7RgoayFw&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1900 + 75 % frais de transport` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 9
Imagerie : 2 (1 en MN à 100 %, 1 partagé 50/50 entre MN et RX)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `4` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie :
- 1 scanner Siemens
- 1 TrueBeam Novalis avec ExacTrac
- 1 TrueBeam STx
- 2 Halcyon
- 1 IRM-Linac (MRIdian) — pas d'IRM dans le centre
- SGRT : VisionRT sur toutes les machines + MapRT sur le scanner
- Cuve PTW Beamscan
- Nombreux fantômes disponibles pour les contrôles
- Qualiformed pour l'analyse des images

MN : 1 TEP Quadra Siemens (grand champ), 1 TEP Vision, 2 gamma-caméras miroir Siemens, 1 D-SPECT (dédiée cardiaque).
Promos précédentes : 2 gamma-caméras GE NM/CT Discovery 870 et NM/CT Discovery 670 ; 2 TEP-CT numériques GE Discovery MI 4 ring et Siemens Biograph ; SPECT-CT cardiaque D-SPECT Spectrum Dynamics.

Traitements en MN : radioembolisation à l'yttrium 90, iode 131, Xofigo, Lutathera, Lu-177-PSMA.
Promos précédentes : radioembolisation à l'Y-90 et à l'Ho-166, RIV à Lutathera et Lu-PSMA (parfois Xofigo), irathérapie (I-131).

Radiologie : 2 arceaux de bloc (GE, Siemens), salle interventionnelle dédiée Artis Zee ceiling Siemens + scanner interventionnel, 2 mammographes, 1 scanner (Siemens), 1 mobile de radio et 1 salle conventionnelle Nova (Fuji).
Promos précédentes : 2 scanners GE Optima 540 (sera bientôt remplacé par un Siemens) et Siemens SOMATOM Edge (scanner interventionnel) ; 2 mammographes Hologic 3Dimension ; 2 arceaux de bloc Siemens CIOS Select FD et arceau GE avec ampli de brillance ; 1 table télécommandée Siemens Luminos dRF ; arceau salle dédiée Siemens Artis Zee ceiling.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : au mieux après 17 h/18 h, en général 19 h/20 h.
TOP : allumage machine le matin. DQA : midi/soir. Jeudi après-midi : CQ machine.

MN : gamma-caméra dispo 16 h 30, labo 16 h et TEP après 17 h 30.

RX : scanner et mammo dispo à partir de 17 h/18 h. Salle interventionnelle dédiée : dispo 1 après-midi par semaine (sauf urgences), sinon à partir de 17 h.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Centre situé à 2 min à pied de l'arrêt de tram CHU.

Encadrants très présents, toujours disponibles pour répondre aux questions. Très bien encadré en médecine nucléaire, avec l'encadrant référent présent pour les contrôles même le soir. Plus d'autonomie à avoir sur les machines en radiologie, mais vous ne serez jamais complètement livré à vous-même : vous aurez toujours des pistes ou des réponses à vos questions. Si vous n'êtes qu'un seul DQPRM, il reste aussi avec vous au début pour que vous ne soyez pas complètement seul.

Très bonne ambiance dans l'équipe, tout le monde mange ensemble (DQ, physiciens, doctorant, ingénieur de recherche). Pas d'horaires tant que le travail est fait, flexibilité pour poser des jours de congé.

Bureau en MN partagé avec les doctorants et les stagiaires de M2, avec une station MIM. Possibilité de suivre les traitements et la clinique.

Pour les fiches, possibilité de rendre des fiches écrites, des diapos, des Excel…

Le self est très bon !` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Observations :
- Encadrement moyen.
- Les CQ machine sont à faire avec un physicien et un dosimétriste.
- Plusieurs mini-projets à faire avec les fiches (tâches que les physiciens ne veulent pas réaliser).
- Grosse flexibilité pour poser des jours de congé (bof depuis 2026).
- Bureau partagé avec des stagiaires (les physiciens ne se mélangent pas aux étudiants).

Remarque DQ promo 2024-2026 :
Pour notre année, il n'y a pas eu de problème.
- Pour la dosi, physicien très disponible.
- Aucun problème pour poser les jours de congé de notre côté.
- Assez d'ordinateurs pour faire des dosis à 2 DQ durant la journée, donc pas obligés d'attendre le soir pour en faire.
- Les physiciens ne vous laissent pas utiliser les machines lorsqu'il n'y a plus personne dans le service (donc pas de mesure durant la nuit).
- Pour notre année, concernant les CQ patient, on s'occupait seulement de ceux de l'IRM-Linac (environ 6 h par semaine de notre temps).
- Pour le semestre 3, surtout en fin de semestre, on est un peu plus incorporés dans la routine clinique (import scan, dosi classique ou stéréo).
- 1 fois par semaine, 1 DQ est chargé de faire le TOP du matin.
- Bureau situé dans les mêmes locaux que la salle dosi et le bureau des physiciens (on a trouvé la plupart des physiciens et dosimétristes assez disponibles).
- Par contre, sur certaines situations, on pouvait se sentir parfois mis à l'écart (Secret Santa, repas du nouvel an, pot de départ d'un physicien faits sans nous) et on pouvait sentir la tension et les remarques entre certains membres des équipes. De façon générale, il y a quand même plutôt une bonne ambiance.` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Une ambiance très conviviale dans l'équipe.

Les encadrants sont présents la quasi-totalité du temps. La partie radiologie nécessite un peu plus d'autonomie pour les manips, mais physicien toujours disponible pour les questions et les réflexions.

Centre très bien équipé en termes de machines, avec beaucoup de choses à voir côté traitements en MN.

Pas d'IRM dans le centre, donc la fiche IRM est effectuée sur l'IRM-Linac du centre avec l'équipe de RT… ça peut être très enrichissant.

Les DQ sont logés dans le bureau des jeunes physiciens (service de médecine nucléaire) avec les doctorants et les stagiaires M2. Cette salle dispose d'une station MIM utilisée pour la planification des traitements en radioembolisation, donc très facile pour s'impliquer dans la routine avec les physiciens et les médecins.

Toutes les fiches sont faites sous forme de rapports écrits : ça prend donc un temps de rédaction, mais c'est un plus pour la synthèse.

Le self est incroyable !!

Pour poser des congés, c'est très simple et l'équipe est très flexible.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `theo.letersec@gmail.com (IM)

valentine.david85@gmail.com (IM)

jedidisarahbcr@gmail.com (DQ1, promo 2021-2024)

sayahfarzam@gmail.com (DQ1, promo 2021-2024)` }
    ],
    machinesListe: ["TrueBeam", "Halcyon", "IRM-Linac", "SPECT-CT", "Caméra CZT", "TEP", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "grenoble-chu": {
    responsables: { im: "Ghislaine Reboulet", rth: "Manon Jaumot" },
    site: "https://www.chu-grenoble.fr",
    photos: ["https://www.chu-grenoble.fr/sites/default/files/content/site/visuels/Nos-hopitaux.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "CH Métropole Savoie" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1850` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `théoriquement non` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 3 physiciennes (1 en MN, 1 en interventionnelle, 1 à 20 % MN et 80 % conventionnelle)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 2 Halcyon, 2 tomothérapies, 1 CyberKnife.

MN : 2 Siemens Symbia Intevo, 1 GE Infinia, 1 caméra CZT pour la scintigraphie myocardique, 1 TEP Siemens Biograph Horizon.

Radio : Siemens Luminos, Primax Calypso. Les scanners vont être changés en 2025 (évolution de scanners Canon), et potentielle mise à disposition du scanner de RT Siemens SOMATOM go.Sim pour la partie optimisation.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `~19 h/20 h selon les machines.

MN :
- Gamma-caméras Siemens Symbia Intevo (×2) : 17 h 30
- Gamma-caméra GE Infinia : 15 h 30
- TEP : 20 h
Les horaires peuvent être larges, notamment le matin sur les activimètres et le soir pour la TEP.

RX :
- Conventionnelle : 15 h 30
- Scanner : après 20 h (possibilité d'utiliser le scanner de RT vers 16 h, à voir avec les physiciens médicaux de RT)

RT : à l'été 2026, Halcyon et tomo fonctionnent en miroir, avec une machine de chaque dispo le matin et l'après-midi. Possible que ce ne soit plus le cas, avec notamment tous les Halcyon fonctionnant le matin, avec l'arrivée de nouveaux manips à l'automne.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Organisation : 3 mois en MN puis 3 mois en radio, avec changement d'encadrement entre les deux. Important de prendre l'initiative d'aller voir les examens avec les médecins et les manips.

Horaires libres et choix de l'ordre des manips à voir avec les physiciens, mais assez libre et autonome également.

MN : corrections des fiches à la fin des trois mois uniquement, autonomie complète à la fin du stage, mais encadrement pour les premières manips et la prise en main de chaque appareil.

Radio : les CQI sont sous-traités, il est intéressant d'aller les voir si ça tombe dans la bonne période.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Bien bosser en autonomie, ne pas hésiter à venir poser ses questions et à demander régulièrement un suivi des fiches. Bonne équipe avec une bonne entente.

À savoir : renouvellement complet du service prévu pour 2024, avec construction de nouveaux bunkers (3 à 5)… Physiciens potentiellement très pris par cette activité et la routine.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Etre capable de bosser en autonomie.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `marine.deleu@outlook.com` }
    ],
    machinesListe: ["Halcyon", "Tomothérapie", "CyberKnife", "SPECT-CT", "Gamma-caméra", "Caméra CZT", "TEP", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "grenoble-icdh": {
    responsables: { im: "", rth: "Christophe Mazzara" },
    site: "https://www.ghm-grenoble.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Partenariat avec CLB", id: "lyon-clb" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "lille-chu": {
    responsables: { im: "Jean-Baptiste Maurice", rth: "" },
    site: "https://www.chu-lille.fr",
    photos: ["https://www.chu-lille.fr/wp-content/uploads/2019/03/huriez5-451x370.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1860` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `non` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `3-4` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: `1` },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `MN : 5 TEMP, 2 TEP, 1 D-SPECT.

IRM : 2 cliniques (1,5 T et 3 T), 1 recherche.

RX : 1 mammographe.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : 17 h (TEP : 17 h/18 h).

CT : difficile.

RX et interventionnel : selon dispo (certaines salles, certains jours).

Mammographe : selon dispo.

IRM : selon dispo.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Avantages : très flexible pour poser des congés, horaires libres tant que le travail avance bien et qu'aucune mesure n'est prévue. Équipe sympathique et accessible en cas de questions, pas mal d'autonomie sauf les premières mesures (rassurant lorsqu'on ne connaît pas les machines au début).

Inconvénients : bureau éloigné des différents services ; partie clinique pas forcément prévue d'office dans l'emploi du temps, elle se fait plutôt en autonomie et à la demande aux encadrants.

Dans l'ensemble, le stage s'est bien déroulé !

Conseil : n'hésitez pas à demander pour aller voir de la clinique :)` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Physicien très accessible, qui accompagne tout au long du stage ; manque d'autonomie qui peut être pesant. L'ambiance est bonne.

Ne pas hésiter à sortir du bureau pour se faire connaître des équipes qui ne sont pas à proximité.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `nagy.antho@gmail.com (promo 2023-2026)

reibel.claire@caramail.fr (promo 2023-2026)

marine.deleu@outlook.com (promo 2019-2021)

severine.lannoy@outlook.fr

thelie.alexis@gmail.com (promo 2021-2023)

vincent.beaudoux2@gmail.com (promo 2021-2023)` }
    ],
    machinesListe: ["Gamma-caméra", "Caméra CZT", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "lille-col": {
    responsables: { im: "", rth: "Erwann Rault" },
    site: "https://www.centreoscarlambret.fr",
    photos: ["https://www.unicancer.fr/wp-content/uploads/2021/10/Photo-Entree-Centre-Oscar-Lambret-1-1024x768.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `env. 2100` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `11` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `3` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 1 tomothérapie, 2 Radixact, 2 Halcyon, 1 CyberKnife, 1 IRM-Linac et 1 TrueBeam (et 1 X-Strahl).
Curiethérapie HDR.
TPS : Oncentra (curiethérapie), RayStation, Precision et Eclipse (si l'envie vous prend).

Anciennes promos : 1 tomothérapie, 2 Radixact, 2 Halcyon, 2 CyberKnife, 1 Clinac, prochainement 1 IRM-Linac et 1 TrueBeam ; curiethérapie HDR. TPS : RayStation, Precision (Accuray), Oncentra (RC3D et curiethérapie).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : 16 h 30 (une machine sur deux). Bonne disponibilité machine (16 h).
MN : 16 h.
RX : 17 h.

Anciennes promos : machines disponibles à partir de 16 h 30, 18 h au plus tard.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Bonne organisation du service, grosse équipe, physiciens très accessibles en cas de questions mais autonomie +. Bonne ambiance d'équipe (pauses cafés incroyables, sorties au bar, karaoké, restaurants, foot si vous proposez !). Les locaux sont partagés entre les physiciens et les stagiaires, ce qui permet une bonne communication.

Parc impressionnant.

Implication en routine clinique (réalisation des CQ, dosimétrie, les différents projets mis en place). Forte implication en curie (lundi et mercredi après-midi) : en S3/S4, ce sont les DQ qui font toutes les dosis curie. Pas de PSQA inutile. Les CQ du TrueBeam et de l'Halcyon sont en partie gérés par les DQ.` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `AUTONOMIE+++, physiciens accessibles en cas de questions.

Parc impressionnant.

Bonne immersion en routine clinique.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `thomasopsommer@yahoo.com (promo 2022-2025)

nagy.antho@gmail.com (promo 2023-2026)

reibel.claire@caramail.fr (promo 2023-2026)

simon.martin.phy@outlook.fr

vincent.beaudoux2@gmail.com (promo 2021-2023)` }
    ],
    machinesListe: ["Tomothérapie", "Radixact", "Halcyon", "CyberKnife", "TrueBeam", "IRM-Linac", "X-Strahl / Papillon", "Curiethérapie HDR"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "lyon-chu": {
    responsables: { im: "", rth: "Amandine Beneux" },
    site: "https://www.chu-lyon.fr",
    photos: ["https://static.blog4ever.com/2012/11/718939/big_artfichier_718939_1992972_201304160706535.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1650` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui en RT, quelques semaines avant les examens` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RX : les mesures se font dans un service d'urgence, donc les horaires sont (très) variables. À noter qu'une machine est quasiment tout le temps disponible (RX conventionnelle).

MN : les machines sont disponibles à 17 h au plus tard, le plus souvent 16 h. Un activimètre est à contrôler le matin à 6 h 30 (mensuellement).

RT : TOP le matin par les techniciens et dosimétristes (6 h 30 pour y assister). Les machines sont disponibles après les traitements pour les DQA et les fiches de compétences. Pour les CQ mensuels et annuels, la machine est réservée toute la journée (possible d'en profiter pour quelques fiches également).` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "lyon-clb": {
    responsables: { im: "Jean-Noël Badel", rth: "Pauline Dupuis" },
    site: "https://www.centreleonberard.fr",
    photos: ["https://www.centreleonberard.fr/sites/default/files/2024-11/copie1_1.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "1 jour d'observation aux HCL (Hospices Civils de Lyon)", id: "lyon-chu" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1915` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `MN : 1 à temps plein (peu disponible), 1 à 50 %

RX : 1 physicienne à mi-temps` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 6 machines, dont 1 linac Elekta. 1 scanner de RT. CQ patients en VMAT, tomothérapie et CyberKnife.

MN : 2 TEP (dont une TEP United Imaging Healthcare unique en Europe), 3 SPECT, 3 activimètres.

Promos précédentes — MN : 2 TEP, 3 SPECT, 3 activimètres.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Scanner de RT : à partir de 17 h.
SPECT-CT : à partir de 16 h – 16 h 30.
TEP : 17 h 30 – 18 h.

En RT : un linac Elekta dispo à partir de 16 h 30, les 5 autres machines à partir de 19 h 30 – 20 h.

Plages CQ machines : 3 h par semaine par machine pour les CQ réglementaires, + une journée de maintenance par mois par machine.
CQ patients (VMAT, tomo, CyberKnife) : plages dédiées en journée ou en fin de journée.
CQ machine : aide physiciens / DQPRM. CQ patients : dosimétristes / DQPRM.
TOP réalisé par les manips à 7 h 30.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Médecine nucléaire : autonomie +++. Bureaux isolés.
Concernant l'encadrement : quelques réunions pour présenter les fiches, mais sinon très peu de suivi et d'apport de la part des physiciens.
Bonne ambiance générale au sein du centre et accès facile au travail réalisé par les DQ des années précédentes.

Radiologie : la physicienne est très organisée et impliquée, elle met en place un planning pour le déroulement du stage.
Beaucoup de CQ internes réalisés par des entreprises sous-traitantes.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Médecine nucléaire : autonomie +++.

Radiologie : la physicienne est très organisée.
Beaucoup de CQ internes réalisés par des entreprises sous-traitantes.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `AUTONOMIE AUTONOMIE AUTONOMIE. Physiciens disponibles en cas de questions.

Accessibilité à tout sans difficulté particulière.

Être capable de prendre des initiatives pour les manips + fiches.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `daireraymond.nicolas@gmail.com (promo 2024-2026)

nicolas.andre.pro15@gmail.com (promo 2024-2026)

geffroy.maiwenn@gmail.com

hug.rousseau8@gmail.com` }
    ],
    machinesListe: ["Versa", "Tomothérapie", "CyberKnife", "SPECT-CT", "TEP", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "marseille-ipc": {
    responsables: { im: "Pierre Fau", rth: "Pierre Fau" },
    site: "https://www.institutpaolicalmettes.fr",
    photos: ["https://www.institutpaolicalmettes.fr/wp-content/uploads/2020/05/IPC-B.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "AP-HM – Hôpital de la Timone" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `2466` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `13 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `8, dont 4 en RT à plein temps, 2 partagés RT + IM et 2 partagés RT + MN` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 4 accélérateurs, 3 Elekta et 1 IRM-Linac MRIdian.

TPS : RayStation et ViewRay.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Disponibilité des machines pour les DQ sur les jours de CQ et de maintenance.

TOP et CQ quotidiens et hebdomadaires faits par les manips.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Les physiciens sont disponibles pour les questions et sympathiques.

Beaucoup d'autonomie est attendue tout au long du stage.

Les fiches font l'objet d'oraux à présenter devant les physiciens pour validation.` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Les DQPRM sont autonomes et peuvent poser des questions aux physiciens quand ils en ont besoin.

Toutes les fiches sont à présenter à l'équipe de physiciens, pour s'assurer qu'il n'y a pas d'erreurs dans l'apprentissage.

On réalise les fiches, mais également plusieurs autres tâches de physiciens, ce qui rend le stage beaucoup plus intéressant.

On peut faire des présentations à des congrès si on le souhaite.

On n'a pas de jours de congés pour la synthèse, mais on a le temps que l'on veut (un mois ou plus) pour réviser à l'institut.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `charpevan@gmail.com

violettesgr@outlook.fr

adam.renard@yahoo.com` }
    ],
    machinesListe: ["Synergy", "Versa", "IRM-Linac"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "marseille-timone": {
    responsables: { im: "Bardia Farman", rth: "Stéphanie Raucoules" },
    site: "https://www.ap-hm.fr",
    photos: ["https://fr.ap-hm.fr/sites/default/files/entree_urgences_timone2_2w.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Institut Paoli Calmettes", id: "marseille-paoli" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1954` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui (dernière semaine avant les exams, uniquement révision)` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 3 Versa, dont un inutilisé par manque de manips.

MN (promo 2024-2026) : 2 gamma-caméras + 1 CZT + 2 TEP + 6 activimètres.

Imagerie (promo 2024-2026) : 5 IRM (hors IRM du CEMEREM), 5 scanners, 1 scanner interventionnel, grande quantité de salles de radiologie et de radiologie interventionnelle.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : une gamma-caméra utilisée pour les fiches et les CQ, dispo souvent à 14 h 30. TEP vers 16 h 30.

RT : un des trois Versa étant inutilisé par manque de manips, une machine est dispo tout le temps pour les mesures. DQA faits par les dosimétristes le soir, TOP fait par les dosimétristes le matin.

RX : créneau pris par le physicien pour les manips des fiches.

Promo 2024-2026 — MN : gamma-caméras et TEP disponibles au plus tard à 17 h (souvent vers 16 h). Temps machine disponible pendant les vacances très important.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `1 mois d'observation au début du stage.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Très bon encadrement dans les 3 domaines. Très bonne ambiance.

À l'arrivée au centre, 2 semaines d'observation dans chaque domaine, ce qui est un plus pour les révisions des exams.

Renouvellement des machines prévu sur les 5 prochaines années.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `cloe.roquigny@gmail.com (IM, promo 2024-2026)

emma.charlot1510@gmail.com (RT, promo 2024-2026)

lacroix-fanny@hotmail.fr

pfletschinger.estelle@outlook.com

brahim.mehadji@outlook.fr` }
    ],
    machinesListe: ["Versa", "Gamma-caméra", "Caméra CZT", "TEP", "IRM", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "martinique-chu": {
    responsables: { im: "Axel Govindoorazoo", rth: "" },
    site: "https://www.chu-martinique.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnJy9AfdBCBrmFNdIYoKq6ax1KBqGWDeay_rUoyB3Yx-JD9lqKkZE6aw&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "metz-chr": {
    responsables: { im: "Paul Retif", rth: "Paul Retif" },
    site: "https://www.chr-metz-thionville.fr",
    photos: ["https://chr-metz-thionville.fr/wp-content/uploads/2025/05/00B7255-scaled.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "CHU-Nancy" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `7 : 1 à temps plein en MN, 5 à temps plein en RT et 1 partagé RT/RX` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 2 TrueBeam STx, 1 Radixact, 1 tomothérapie, curiethérapie.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : pour les mesures des fiches, les gamma-caméras sont disponibles vers 16 h et les TEP vers 18 h ; des créneaux sont généralement bloqués pour les CQ réglementaires.

RX : les machines sont dispos vers 17 h.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Équipe jeune, sympa et dynamique. Très bonne ambiance et très bon encadrement dans les 3 domaines (les physiciens sont toujours disponibles pour répondre à vos questions).

Les horaires sont libres tant que le travail est fait !

En radiothérapie : participation à la routine clinique — réalisation des CQ machines, des dosimétries, des DQA, curiethérapie…` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `amale.kh@hotmail.com` }
    ],
    machinesListe: ["TrueBeam", "Radixact", "Tomothérapie", "Curiethérapie HDR", "Gamma-caméra", "TEP"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "montbeliard": {
    responsables: { im: "", rth: "Jean-Michel Rouvier" },
    site: "https://www.hnfc.fr",
    photos: ["https://upload.wikimedia.org/wikipedia/commons/d/d0/2023-08_-_H%C3%B4pital_Nord-Franche-Comt%C3%A9_-_Tr%C3%A9venans_-_115.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Une semaine de MN à la Timone (Marseille)", id: "marseille-timone" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `2400` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `oui` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `sûrement` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 1 physicienne à temps plein à l'HNFC
RT : équipe de 4` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Imagerie : les machines sont disponibles de façon ponctuelle.

MN et scanner : disponibilité après 17 h 30.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Attention, l'HNFC pour le stage d'imagerie n'est pas à Montbéliard mais à Trévenans (90).

L'hôpital se situe à Trévenans, à 15 min de Belfort. C'est préférable de chercher un logement à Belfort plutôt qu'à Montbéliard.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Équipe très sympathique. Autonomie, initiative et communication importantes à avoir.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `achag.ilyas21@gmail.com

manyani39@gmail.com` }
    ],
    machinesListe: ["Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "montpellier-icm": {
    responsables: { im: "Lore Santoro", rth: "Norbert Ailleres" },
    site: "https://www.icm.unicancer.fr",
    photos: ["https://www.icm.unicancer.fr/sites/default/files/styles/hero_large/public/resources/headers/IMkjuG_7391.jpg?itok=FdtvxcJl"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Les 3 premiers mois de formation (RX) au CHU de Montpellier, facilement accessible en tram (arrêt CHU Lapeyronie) : équipements répartis entre les 3 pôles Lapeyronie, Arnaud de Villeneuve et Gui de Chauliac", url: "https://www.chu-montpellier.fr" },
      { texte: "Traitements à l'Y-90 à Gui de Chauliac, avec une autre physicienne : réalisation de dosimétries sur place, présence au bloc lors des injections", url: "https://www.chu-montpellier.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1915` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `oui` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `théoriquement non, mais possible` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 7 en clinique
MN : 1 physicienne à temps plein
RX (au CHU de Montpellier) : 1 physicien à 80 %` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `6` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `2
RX (au CHU de Montpellier) : 2 techniciens, qui présentent tous les CQ` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 4 TrueBeam (dont 2 STx), 2 Ethos, 1 IRM-Linac (ViewRay).
Curiethérapie : 3 chambres PDR et un bunker HDR (Elekta).

MN (ICM) : 1 labo chaud, 2 gamma-caméras (1 analogique et 1 numérique, GE), 1 TEP.
Traitements au 177-Lu et au 131-I dans le centre.

RX (CHU de Montpellier) : 3 scanners Siemens, 1 mammographe, 1 EOS, plusieurs salles de radiologie conventionnelle et interventionnelle Siemens, 1 salle hybride, 1 bi-plan, 1 IRM.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : 2 gamma-caméras GE (1 analogique, 1 numérique) libres à partir de 16 h 30, et TEP-Scan libre à partir de 17 h / 17 h 30. Labo disponible à partir de 14 h.

RX : salle de RX conventionnelle disponible à partir de 17 h 15 / 17 h 30 (ou RX pédiatrie aux urgences dispo en journée, parfois), salle fixe interventionnelle disponible après 16 h / 17 h, salle fixe interventionnelle en pédiatrie disponible dès 13 h, arceaux facilement accessibles en journée, scanners disponibles vers 17 h, mammo libre 1 jour par semaine et disponible tous les soirs à partir de 17 h / 18 h.

RT : machines miroirs, donc toujours une machine de dispo le matin et/ou l'après-midi, dès 14 h pour les CQ, les mesures à la cuve, etc.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `RX
Bureau personnel pour les stagiaires.
Stage guidé : les contrôles sont montrés aux étudiants, qui doivent ensuite les reproduire en autonomie. Autonomie sur l'organisation des fiches. Entretien individuel avec le physicien après chaque fiche pour vérifier les acquis et poser nos questions si besoin.
Possibilité de faire de l'observation à la demande de l'étudiant : nous avons observé des infiltrations, la réalisation d'examens scanner standard, d'examens de radiologie interventionnelle (TOGD, coronarographie, angiographie du cerveau), mammographie. Horaires libres.

MN
De début avril à fin juin à l'ICM de Montpellier.
Autonomie dans l'organisation des fiches, protocoles détaillés du centre pour tous les contrôles qualité fournis aux étudiants. Présentation de la bonne utilisation des sources radioactives, puis réalisation des mesures en autonomie. Une semaine d'observation à l'arrivée dans le centre. Horaires libres.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Très bonne équipe avec une bonne ambiance. Les physiciens sont très occupés mais prennent le temps de répondre aux questions (les dosimétristes également) ; en revanche, il faut être autonome.

Dès notre arrivée en S2, on nous laisse la main sur les machines pour les CQ (point très positif !) et on participe aux CQ en routine. On nous implique dans les tâches de la routine clinique : reprise étalonnage, EQUAL ESTRO, CQ curie, étalonnage des diodes pour l'ICT… Aucune pression sur le rendu des fiches tant qu'elles sont réalisées et rendues avant la fin du semestre.

Tâches attribuées aux DQ : RIOP (CQ + traitement), avec en moyenne 3 RIOP (max 5) par semaine ; CQ scanner.

Seul inconvénient : le bureau est petit (3 postes) et on le partage avec les étudiants en master. Par moments, il faut alterner et s'arranger pour trouver un PC ailleurs (ce qui est faisable). En revanche, le bureau est bien placé : à proximité du bureau des techniciens, des machines, de la dosimétrie, etc. Le self est moyen et assez cher (malgré la remise de 30 %).` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Équipe très sympathique et à l'écoute. Autonomie importante.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `maunet.mathis@gmail.com (promo 2023-2026)

nirmah.omarjee@gmail.com (promo 2023-2026)

elisa.hironde@sfr.fr (IM, promo 2024-2026)

emma.charlot1510@gmail.com (IM, promo 2024-2026)

trauchessecdorian@gmail.com (IM, RT)

galliano.geoffrey@gmail.com (IM, RT)` }
    ],
    machinesListe: ["TrueBeam", "Ethos", "IRM-Linac", "Curiethérapie PDR", "Curiethérapie HDR", "Gamma-caméra", "TEP", "IRM", "Scanner", "Mammographe", "EOS"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "mulhouse": {
    responsables: { im: "Rui Guerra", rth: "" },
    site: "https://www.ghrmsa.fr",
    photos: ["https://www.ghrmsa.fr/fileadmin/batiments/Emile_Muller/2013-08-00-Batiments_du_Moenschberg.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Fiche RIV à réaliser en collaboration avec Strasbourg, à l'ICANS (frais de déplacement pris en charge les jours concernés, 50 minutes de train, horaires flexibles)", id: "strasbourg-icans" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1900` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `à vérifier` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `à vérifier` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `à voir, mais sûrement oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 2 à plein temps` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Imagerie — très grand parc : 1 TEP-CT, 1 gamma-caméra, 3 activimètres, 10 arceaux, 4 salles fixes interventionnelles, 3 scanners, 10 salles RX conventionnelles, 1 EOS, 5 mobiles, 1 mammo, 3 IRM.
Utilisation du DACS en routine.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : à partir de 17 h au plus tard (gamma et TEP), labo à partir de 15 h.

RX : machines très disponibles dans la journée (salle de pédiatrie peu utilisée, mammo seulement certains jours dans la semaine, scanner de RT facilement disponible, arceaux et salles facilement dispos pour un créneau de mesure = pas de nocturne à envisager :D).` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Bureau dédié aux deux étudiants DQ dans le service d'imagerie (bureaux des physiciens en RT).

Très bonne équipe, bonne ambiance, physiciens dédiés en imagerie donc très dispo, bonne connaissance des compétences à acquérir et très bon encadrement et accompagnement sur la réalisation des CQ et des mesures. Très bonne pédagogie, et communication avec l'équipe très facile.

Pas de contraintes sur les horaires de travail ni sur les congés.

Possibilité d'obtenir un logement avec le centre hospitalier sur site (loyer réduit) : renseignements à voir directement avec les encadrants après le choix de stage.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `ringuenoire.clement@gmail.com (IM, promo 2023-2025)

thymele.muller-stahn@orange.fr (IM, promo 2023-2025)` }
    ],
    machinesListe: ["TEP", "Gamma-caméra", "Scanner", "EOS", "Mammographe", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "nancy-chru": {
    responsables: { im: "Fleur Saunier", rth: "" },
    site: "https://www.chru-nancy.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXd_c-yG2BDur2R-8tcqits5JTIp6i56SOIX4IiBdlA&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Équipements et contrôles répartis entre les deux sites du CHRU : Nancy centre et Brabois (la fiche IRM est faite à Brabois)", url: "https://www.chu-nancy.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1913,64 (CHRU)` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `plus besoin` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `MN : 2 (dont 1 à temps partiel)
RX : 3 (dont 1 à temps partiel)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `MN : 3 gamma-caméras Symbia T (Siemens), 1 D-SPECT (cœur), 1 Veriton, 3 TEP Vereos (Philips).
Avis récent — 2 labos chauds (1 thérapie + 1 traitement) avec plusieurs activimètres, 1 TEP-CT Siemens, 3 TEP-CT Vereos (Philips), 2 SPECT Symbia T, 2 SPECT Veriton. Traitements : 90-Y, 177-Lu (prostate et TNE), I-131. Nombreux fantômes disponibles.

RX : les équipements sont répartis entre le CHU Nancy centre et le CHU Brabois. Plusieurs scanners diagnostiques, plusieurs salles de radiologie conventionnelle et interventionnelle. Nombreux fantômes disponibles.

Promos précédentes — MN : 3 TEP, 5 gamma-caméras.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `La plupart des appareils d'imagerie sont disponibles autour de 16 h, sauf les scanners (compter 17 h 30 au plus tôt).

Promos précédentes
RT : le soir après les traitements, ~18 h – 18 h 30 (Clinac).
RX : en journée quand il n'y a pas de patient, s'organiser avec les manips.
MN : depuis la réforme, 3 mois à temps plein. Possibilité de faire des manips en journée si les machines sont dispos (mais cela reste rare). 3 TEP : le soir après 18 h 30. 5 gamma-caméras : +/- 17 h. Labo chaud (activimètre) disponible toute la journée (s'arranger avec les pharmaciens). Console de dosimétrie (pour la thérapie) dispo toute la journée également, en salle de réunion.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN
Travail en autonomie.
Observations à la demande en scintigraphie, TEP et en traitement.
On partage le bureau avec l'équipe de recherche de Nancyclotep.

RX
L'observation en clinique est possible, mais à la demande.
L'observation en IRM est aussi possible, mais à la demande.

Organisation générale
Pour la MN, c'est à vous de faire votre planning et de présenter ou d'envoyer vos fiches.
Pour la RX, il y a un planning pour la réalisation des fiches, avec les jours de congés des physiciens (faire très attention aux congés pour la signature de vos fiches).` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `rachaussin@gmail.com

jacquemin.manon01@gmail.com` }
    ],
    machinesListe: ["SPECT-CT", "Caméra CZT", "TEP", "Scanner", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "nancy-icl": {
    responsables: { im: "", rth: "Karine Gerard" },
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
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: null,
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "nantes-ico": {
    responsables: { im: "", rth: "Alexandre Moignier" },
    site: "https://www.institut-cancerologie-ouest.com",
    photos: ["https://www.institut-cancerologie-ouest.com/themes/custom/ico_theme/assets/dist/images/img_menu_mobile.png"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Imagerie au CHU de Nantes : la moitié à l'Hôtel-Dieu (Nantes centre) et la moitié à Laennec (Saint-Herblain) ; seule la mammographie est faite à l'ICO", url: "https://www.chu-nantes.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1917` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `plus besoin` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 8
MN : 2` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `8` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `3` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: `4 biomédicaux` },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 1 Clinac avec 5 énergies d'électrons (ICT, bain d'électrons), 1 Novalis TrueBeam (stéréo, gating), 2 Radixact, 2 Halcyon équipés SGRT VisionRT, HDR.

MN (ICO) : 2 TEP Siemens, 1 gamma-caméra Discovery et 1 gamma-caméra Intevo.
Promos précédentes : 2 TEP et 2 SPECT.

Imagerie (CHU de Nantes) : beaucoup de machines — arceaux, bi-tube, 4 IRM, 4 scanners, O-arm, dentaire…` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Machines disponibles vers 17 h.

Promos précédentes — MN : les machines ne sont disponibles qu'après 17 h 30 pour le SPECT (voire plus tard) et 18 h 30 pour la TEP.

Promos précédentes — RT : plage de traitement de 8 h à 20 h. Les mesures se font majoritairement au Clinac (dispo à partir de 15 h 30 – 16 h), plus d'accélérateur disponible la journée. Un physicien est là en cas de besoin si mesure après les plages de traitement.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN
Toute la médecine nucléaire est à faire dans le service de MN. Tout est fait sur Python, pas d'utilisation des logiciels constructeurs.
Tout le service est sympa — comme partout, il y a des gens avec qui le courant ne passe pas. Les 2 physiciens et les médecins sont sympas et disponibles pour répondre aux questions. Vous serez formés sur les machines, notamment la réalisation des CQ, puis vous serez livrés à vous-même.
Médecine nucléaire à l'ICO (Saint-Herblain), encadrée par Ludovic Ferrer et Nicolas Varmenot. Autonomie ++, ambiance très sympathique, inclusion dans la clinique.

Imagerie
Pour la mammographie, la physicienne est trop sympa.
Pour le reste de l'imagerie, c'est une autre histoire : vous serez très très bien formés, mais il y a une tonne de choses à faire. Autonomie ++++.
Au CHU : autonomie +, rythme +++.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `DQ1 : dosimétrie 3D (1 semaine par DQ), CQ périodiques — très impliqué dans les CQ.

DQ2 : très bonne ambiance, très impliqué en routine clinique, voire dans les projets si vous le souhaitez. Dosi : VMAT dès le début du S3, tomo, IMRT et stéréo à la fin du S3. Physiciens dispos pour les questions ; des points très réguliers avec les physiciennes responsables des DQ.

PS : pour la dosimétrie, vous aurez un référent en dosi qui vous forme tout au long de la formation (dosimétristes très sympas).

Inclusion dans la clinique ++. Équipe très sympa et disponible, autonomie +.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: ["Clinac", "TrueBeam", "Radixact", "Halcyon", "Curiethérapie HDR", "SPECT-CT", "Gamma-caméra", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "nice-cal": {
    responsables: { im: "Malick Koulibaly", rth: "Mathieu Gautier" },
    site: "https://www.centreantoinelacassagne.org",
    photos: ["https://www.centreantoinelacassagne.org/wp-content/uploads/2025/12/slide.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Formation RT sur 2 sites : principalement sur le 1er ; 1 semaine sur le 2ᵉ site au S2 pour la fiche CQ, et environ 1 mois au S3 pour les fiches photons petits champs et planification en stéréotaxie" },
      { texte: "Pas de salle de radiologie interventionnelle dédiée : visite prévue à Monaco si possible" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1954` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 2 à temps plein (1 en charge de la MN, 1 sur la partie RX) ; un 3ᵉ physicien tout juste diplômé a été recruté` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT — 1er site :
- 1 Clinac 21EX en fin de service
- 1 Halcyon v4
- 1 TomoHD Legacy
- 1 TrueBeam Hypersight nouvellement installé
- 1 projecteur de source Flexitron
- 1 Papillon 50
- 1 Papillon+ au bloc
- 1 scanner de planification Discovery RT Gen 3 (GE)

RT — 2ᵉ site :
- 1 CyberKnife
- Protonthérapie basse et haute énergie
- 1 scanner

TPS : RayStation. SIRT : Mosaiq.

MN :
- 3 gamma-caméras (1 Siemens Intevo Bold, 1 Siemens Symbia T2, 1 GE Discovery NM/CT 670)
- 2 TEP Siemens Biograph Vision 600

RX :
- 2 mammographes Hologic Selenia Dimensions
- 1 salle de radiologie conventionnelle avec table Luminos
- 1 arceau mobile Ziehm Solo FD (pas de salle interventionnelle dédiée)
- 1 scanner spectral iQon Philips
- 1 IRM 1,5 T GE

Promos précédentes — MN : 3 gamma-caméras, 1 TEP (préparation de l'accueil d'un 2ᵉ), radiopharmacie, un local pour les déchets radioactifs et la préparation des fantômes. (Une promo antérieure citait 2 gamma-caméras — bientôt 3 —, 1 TEP, une radiopharmacie et un local physique pour préparer les fantômes et toutes les sources.)
Promos précédentes — RX : nouvelle table de radio Luminos, arceau de bloc (pas de salle de radiologie interventionnelle dédiée, mais en projet), 2 mammographes, 1 IRM, 1 scanner GE.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : plusieurs journées bloquées pour les CQ sur SPECT ; pour les CQ TEP, le matin jusqu'à 8 h ou le soir après 18 h (parfois plus tôt). Un activimètre réservé pour les physiciens, toujours disponible.

RX : disponibilité des machines le matin avant 8 h ou le soir après 17 h 30 (exception en RX conventionnelle, où des créneaux peuvent être trouvés en journée selon l'activité).

RT : plage de traitement maximale 8 h – 19 h (dans notre cas, nous avons pu avoir régulièrement des moments où les traitements se finissaient vers 16 h – 17 h pour le Clinac).

Promos précédentes — MN : 1 gamma-caméra réservée pour les CQ tous les jeudis matin (donc pas besoin de rester tard pour ça) ; des journées ou demi-journées sont bloquées pour la réalisation des CQ.
Promos précédentes — RX : l'arceau de bloc est dispo toute la journée du mercredi, la table Luminos est assez dispo l'après-midi, et le scanner n'est pas du tout dispo en journée (les mesures sont réalisées le soir ou tôt le matin).` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Le stage est divisé en deux : généralement les 3 premiers mois en MN, puis les trois mois suivants en radiologie (les congés doivent donc être répartis de façon égale entre les deux périodes).

Remarques :
- Horaire minimum attendu : 8 h 30 – 17 h 30 (dans les faits, vous ferez souvent plus).
- Autonomie demandée en radiologie, beaucoup moins en médecine nucléaire.
- Physicien en MN très pédagogue et investi : il prendra le temps, avant chaque fiche, de revoir ce qui est demandé et les attendus, et vous donnera même un cours selon les fiches.
- Un planning est mis en place par les deux physiciens pour l'organisation des fiches (très utile).
- Les machines sont présentées avant chaque fiche ; les CQ se font en autonomie, mais l'encadrant n'est jamais loin en cas de problème.
- Exigence par rapport aux fiches très élevée.
- Sinon, service très accueillant : vous partagerez un bureau avec un manipulateur/référent informatique.

N'hésitez pas à profiter des avantages CSE (chèques-vacances, bons de Noël, remboursements de frais de vacances, etc.).` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Tâches cliniques attribuées aux DQ : double calcul d'UM, CQ patient (1 à 2 par semaine), CQ hebdomadaire (1 toutes les 1 à 2 semaines) et mensuel (dans notre cas, tous ceux du Clinac) ; une fois les fiches de planification validées → planification de traitement sur patients. Les tâches de routine clinique se font après habilitation (= évaluation) par un physicien.

Une fiche peut avoir plusieurs évaluations (à l'oral, au tableau pour certaines) en plus du rendu final.
Il est demandé aux étudiants que la rédaction des fiches se fasse à la maison (en dehors du temps de travail), uniquement pour les fiches avec un compte rendu (on n'a pas trop obéi à la règle et c'était ok).
Si vous avez une question à poser sur une fiche, il faut faire très attention à la poser au(x) physicien(s) responsable(s) de la fiche.
La fiche optionnelle basse énergie est traitée en S3, pas d'autres fiches optionnelles.

La fiche de CQ et les mesures pour les fiches photons et électrons se sont faites sur le Clinac et le TrueBeam dans notre cas (probablement uniquement TrueBeam pour les prochains étudiants).

Pas de problème pour la pose de congés.
Bureau en open space dans la salle de dosimétrie, avec les tech-dosi et les physiciens.

Gros point négatif : la cantine :(` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `La partie MN et la partie radio sont séparées temporellement : la première partie du semestre (janvier / mi-avril) est dédiée à la MN, la seconde à la radio.

En MN : encadrement au top, formation à manipuler les sources radioactives (on ne vous laissera pas seul avec), de l'exigence mais de la réciprocité dans le travail. Communication facile. Importance de passer du temps dans le service (et ils sont tous sympas) ; vous ferez également des fiches liées aux acquisitions de chaque zone du corps, bien pratique pour la synthèse.
Autre promo : un physicien dédié MN à plein temps, très bon encadrement et suivi pédagogique ; important de participer à la vie du service (service sympa) ; importance accordée à la rédaction des fiches.

En radio : bonne disponibilité, beaucoup de temps passé sur la correction des fiches, une certaine part d'autonomie nécessaire. La fiche IRM n'est pas traitée.
Il y a aussi un physicien dédié, dont l'encadrement est également top : il effectue les manips devant vous, puis vous laisse gérer en autonomie. Il propose et laisse une grande marge de manœuvre pour approfondir les sujets et proposer des projets annexes supplémentaires. Il est aussi fortement recommandé de passer du temps dans le service : utilité +++ pour la synthèse.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `roxane.brunel@hotmail.fr (IM, RT, promo 2024-2026)

sylviedeoliveiraduarte@gmail.com

jonathan-page@live.com (IM, promo 2021-2024)

charlotte.gontier@hotmail.com (DQ2)

marionboulanger@live.fr (DQ2)

matduncanj@gmail.com (DQ1)` }
    ],
    machinesListe: ["Clinac", "Halcyon", "TrueBeam", "Tomothérapie", "CyberKnife", "Protonthérapie", "Curiethérapie HDR", "X-Strahl / Papillon", "SPECT-CT", "TEP", "Mammographe", "Scanner", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "nice-chu": {
    responsables: { im: "", rth: "" },
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
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: null,
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "nimes-chu": {
    responsables: { im: "Corinne Barrau, Joël Greffier", rth: "Karine Taillade, Maxime Michaud" },
    site: "https://www.chu-nimes.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3dSVniZMUtehBg2hEv-kRFRxCsm_ufRqCv7-HRsjwA&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "ICM val d’Aurelle" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1941` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 2
MN : 2 physiciennes
Promo 2024-2026 : 4 physiciens à présent (2 jeunes physiciens embauchés)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 1 Clinac 2100D non utilisé en clinique (utilisé seulement par les DQ), plus les autres linacs.

MN : 1 gamma-caméra numérique et 1 gamma-caméra analogique.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `En permanence : un Clinac 2100D non utilisé en clinique, donc disponible pour les DQ ; sinon, les autres linacs sont dispos avant 7 h 30 et après 19 h.

MN : machines dispos à partir de 17 h (parfois 16 h sur la gamma-caméra).

RX : si les machines ne sont pas dispos, possibilité de faire les manips le samedi (par conséquent, le lundi qui suit est libéré).

Promo 2024-2026 : mesures dépendantes du temps libre machine (si vous avez de la chance comme nous : salle interventionnelle Coro B libre tous les matins).` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `L'encadrement en imagerie est excellent, voire étouffant selon vos relations avec les 2 physiciens. Malgré les délais serrés du stage en imagerie, ils essaieront de vous impliquer dans la clinique et de vous faire observer des actes et techniques rares : il faut vraiment en profiter. Mention spéciale pour la fiche scanner, qui va occuper vos jours et vos nuits pendant plusieurs semaines.

En MN, l'encadrement est plus relâché et vous serez laissé en autonomie. Si vous voulez aller au-delà de vos fiches, ce sera à vous de faire les démarches. Il faudra être particulièrement vigilant à ce que cet encadrement moins serré ne soit pas un motif pour accumuler du retard dans vos fiches (expérience perso).

Commentaire Lisa DQ 24/26 (merci de ne pas supprimer) : stage en cours, partie imagerie réalisée.
- Planning : très serré, ce qui rend le stage fatigant (c'est le cas pour tous les centres).
- Gestes pratiqués : venant de formation manip, les gestes pratiqués sont couramment pratiqués dans tous les centres ; vous avez la possibilité d'aller voir tous les gestes souhaités.
- Intégration dans la routine clinique la dernière semaine de stage.
- La fiche scanner est bien encadrée et, avec de la rigueur, réalisée dans le temps imparti imposé par la deadline physicien.
- Vous êtes en totale autonomie pour vous organiser avec les manips, le temps machine et le matériel.
- Le relationnel avec les physiciens dépend de votre tempérament : en effet, avec un encadrement poussé, cela peut être étouffant. Si vous sentez un mal-être ou un problème sur une fiche, n'hésitez surtout pas à en parler avec eux : cela fait avancer les choses et vous serez plus efficace (pas de panique).
- Horaires : peuvent être flexibles, mais doivent rester dans la limite du raisonnable.
- Bureau des DQ : situé en face du CH, à la fac de médecine → inconvénient, car à l'écart de l'équipe et de la routine.
- À retenir : soyez rigoureux et suivez les instructions de mise en forme à la lettre (physicien pointilleux ++++++).
- À noter, l'importance de votre binôme co-DQ ! Une belle coopération est toujours utile et appréciable, afin de réaliser votre stage dans les meilleures conditions possibles.
- Privilégiez l'esprit d'équipe plutôt que l'esprit de compétition : vous avancerez plus vite et plus efficacement ensemble ;)` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `En RT : un planning de fiches est mis en place par les physiciens, avec des deadlines. Implication rapide en routine clinique (première dosi sur un vrai patient en février).

Horaires en RT : 2 jours de garde par semaine (7 h 30 – 15 h ou 12 h – 19 h 30) ; les 3 autres jours (9 h – 17 h) sont dispos pour les révisions et les fiches.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `gracchus.bottin@hotmail.fr

lisachazottes34@gmail.com (promo 2024-2026)

mathildebigot4@gmail.com` }
    ],
    machinesListe: ["Clinac", "Gamma-caméra", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "orleans": {
    responsables: { im: "Gilles Le Rouzic", rth: "Nicolas Tang" },
    site: "https://www.chu-orleans.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-htexDYF_nUFDrMMnbgwJGwmD3PsyfxwyFzN8pWxvgQ&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1870` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `possible tout en continuant la routine` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `MN : 2
RX : 1
RT : 5` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `3` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie : 2 accélérateurs Synergy (Elekta), 1 TrueBeam STx (Varian) et 1 tomothérapie.

MN : 3 gamma-caméras, dont une CZT, et 2 TEP (Vereos et Siemens).

Anciennes promos — changement à venir : remplacement d'une gamma-caméra en MN (été 2020).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : TOP faits le matin par les MERM. Les DQA sont faits par deux équipes, une à 12 h pour le Novalis et à 13 h pour la tomo. CQ machines faits le mercredi (ou en 2 demi-journées) par le technicien. Machines disponibles après les traitements, l'heure dépend de la machine et des jours.

MN : machines disponibles vers 17 h.

RX : mesures faites en journée, sauf pour le scanner, qui est plutôt disponible vers 17 h 30.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `MN : tuteur qui accompagne ++. Il apprécie la programmation Python et fait un point théorique sur les fiches avant de les commencer.

Radiologie : autonomie attendue +++.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `RX : très bonne ambiance dans le service et physicien disponible.

MN : très bonne ambiance aussi, physicien disponible également, formation très complète en MN.

Globalement, les deux physiciens sont très présents ; prise d'initiatives et autonomie appréciées. Super ambiance générale dans le service, avec tous les membres de l'équipe (médecins nucléaires, radiopharmaciens ou manips).` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Avis DQ2 :
Radiologie : bon suivi et très bonne ambiance.
MN : bon suivi et très bonne ambiance (autonomie et prise d'initiative appréciées).
Radiothérapie : bon suivi régulier et très bonne ambiance (autonomie et prise d'initiative appréciées). Participation à la routine clinique (CQ patient, CQ machine, dosimétrie et curiethérapie).

Dans les 3 domaines, les physiciens sont disponibles et impliqués dans notre formation.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `clarisse.lecomte23@gmail.com (IM, RT, promo 2024-2026)

karim.ada@outlook.fr (DQ1)

estelle.guyard0@gmail.com

paris.arthur29@gmail.com

hb.sallem@gmail.com

marjorie.grandvillain@laposte.net

coline.gautheron@gmail.com (DQ2, promo 2018-2020)` }
    ],
    machinesListe: ["Synergy", "TrueBeam", "Tomothérapie", "Gamma-caméra", "Caméra CZT", "TEP", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "paris-curie": {
    responsables: { im: "Romaric Dal", rth: "Imène Birba-Iarkani" },
    site: "https://curie.fr",
    photos: ["https://curie.fr/_ipx/fit_cover&f_webp&q_80&s_650x415/https://cdn.curie.fr/media/paragraph_header/paris.png"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Observation d'actes de radiologie interventionnelle à l'HEGP pendant 2 semaines", id: "paris-hegp" },
      { texte: "Observation de la RIV (gélules d'iode et Lutathera) à l'Institut Curie Saint-Cloud, environ 5 jours répartis pendant le stage", id: "saint-cloud-curie" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1925 (1887,5 + 50 % frais de transport)` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 2 — 1 physicien à 20 % imagerie et 80 % RT, en charge des appareils de RX, amplis de bloc, appareils mobiles et mammographie ; 1 physicien à 100 % imagerie, responsable des DQPRM et en charge de l'IRM, de la partie MN et des scanners présents sur site
RT : 10 sur site

Une seule équipe de physiciens regroupant les physiciens d'imagerie et de RT.` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `7` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `5` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `MN : 1 SPECT avec 99mTc, 1 TEP avec 18F (Siemens).

Radio :
- 2 salles de radio (Philips), 5 appareils mobiles
- 3 mammographes (1 GE et 2 Hologic)
- 1 scanner interventionnel (Siemens), 3 amplis de bloc (Ziehm)
- 1 scanner de diagnostic (Somatom Pro Pulse, Siemens)
- 1 IRM de diagnostic (Siemens)
- 1 scanner dosimétrique (Siemens) → installation d'une IRM dosimétrique ?

RT : 5 accélérateurs Varian et 1 Xstrahl pour les traitements cutanés. Curiethérapie gynéco + prostate + oculaire (PDR, LDR). ARIA 18 en novembre 2025.
Promos précédentes : environnement Varian — 3 Clinac, 1 TrueBeam et 2 Halcyon ; 2 scanners de RT (Toshiba et Siemens) ; R&V ARIA et TPS Eclipse.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Imagerie : disponibilité des machines vers ~17 h, après les patients. MN (SPECT et TEP) disponibles après 17 h.

RT : TOP faits par les manips le matin. Accélérateurs disponibles (pour les DQA, les mesures, etc.) le soir après les traitements, vers 19 h, ou en journée lorsqu'il y a moins de manips ou une PMI.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Équipe dynamique et disponible. Bonne ambiance générale dans le service.

Autonomie dans la réalisation et l'organisation des fiches. Responsable du stage très sympathique, disponible et présent pour répondre à toutes les questions. Toutes les mesures de MN sont réalisées avec le physicien ; seules les acquisitions et les CQ radio (appareils de radio, mammographie et amplis de bloc) sont faits en autonomie. Stage très bien encadré, avec un responsable qui s'adapte aux étudiants.

Pas de contraintes pour poser les vacances.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Une équipe de jeunes physiciens et de physiciens avec plus d'expérience. Très bon relationnel avec toute l'équipe et intégration rapide. Le planning tourne entre le plateau technique, la dosimétrie, les projets et le back-up. Tout le monde est présent pour répondre à vos questions (même s'il faut parfois insister). L'ambiance entre les étudiants et l'équipe est très cool et professionnelle.

Le petit plus de Curie Paris, ce sont vraiment les manips radio, qui sont tops et qui vont vous expliquer beaucoup de choses sur la RT et le parcours patient pendant vos observations. L'équipe de dosimétrie est super expérimentée également.

À savoir que Curie est le spécialiste du sein et qu'ils font de la stéréo sur TrueBeam. Beaucoup de localisations sont réalisées, et pas mal de pédiatrie également.

Au-delà de ça, le cadre est vraiment top, les équipes bienveillantes et les congés bien respectés. Beaucoup de conférences sont proposées chaque semaine sur des thèmes autour du cancer (physique, biologie, médecine…).` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Planning des fiches défini dès le début du semestre, en réunion avec un ou deux physiciens référents pour chaque fiche.

La première fiche introductive est réalisée en allant en observation les 2-3 premières semaines sur les différents postes, en suivant le parcours patient : consultation d'annonce, scanner de RT, dosimétrie, etc.

La validation des fiches se fait en présentations orales réalisées devant les physiciens référents et ceux de l'équipe qui veulent y assister.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `MN : planning de fiches établi au début de l'année.

Une garde du soir par semaine (une garde en plus une fois par mois) jusqu'à 20 h. En dehors de ces gardes, horaires libres.

Implication en routine clinique ++, aussi bien avec les techniciens (CQ hebdo, mensuels, analyses DQA…) qu'avec les dosimétristes.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `manon.guillou97.mg@gmail.com (IM)

charles-bapaume@hotmail.fr (RT, promo 2023-2025)

nathan.benzazon@hotmail.fr (RT, promo 2023-2025)

michel_atieh963@hotmail.com (IM, promo 2021)

dirandannesophie@gmail.com (promo 2020)

antoinegobert@yahoo.com (promo 2020)

arthur.darricau@hotmail.fr (promo 2019)

hiron.quentin@gmail.com (IM, promo 2019)` }
    ],
    machinesListe: ["Clinac", "TrueBeam", "Halcyon", "X-Strahl / Papillon", "Curiethérapie PDR", "Curiethérapie LDR", "Gamma-caméra", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "paris-hegp": {
    responsables: { im: "Claire Van Ngoc Ty", rth: "Stephane Dupont" },
    site: "https://hopital-georgespompidou.aphp.fr",
    photos: ["https://www.aphp.fr/sites/default/files/styles/paragraph_media/public/migrate-files/IMG_3981.JPG.webp?itok=9Eb1pEX0"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `CDD` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1958 + 75 % frais de transport` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `oui` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 1 TrueBeam STx avec ExacTrac (stéréo), 2 TrueBeam avec AlignRT, 1 CyberKnife.

Curiethérapie : 1 projecteur de source (Ir-192) + curie prostate (grains d'iode).

TPS : Eclipse et Precision (CK).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Traitements de 8 h à 15 h 30, puis machines disponibles pour les CQ ou les mesures du DQ :)` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Accessibilité : métro 8 terminus Balard, T3a Balard, RER C Pont du Garigliano.

Horaires flexibles (vous pouvez venir quand vous voulez tant que vous faites votre quota horaire, logique).

Bonne équipe, légèrement en sous-effectif, mais bonne ambiance. Savoir être autonome et ne pas hésiter à poser des questions, surtout si vous arrivez en S2. Très bonne expérience de mon côté.

Beaucoup de routine clinique (dosimétrie, curie, CQ).

Aucune difficulté rencontrée pour poser des congés.` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `ambrabm@gmail.com (promo 2023-2025)` }
    ],
    machinesListe: ["TrueBeam", "CyberKnife", "Curiethérapie HDR", "Curiethérapie LDR"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "paris-kremlin-bicetre": {
    responsables: { im: "Michel Atieh", rth: "" },
    site: "https://hopital-bicetre.aphp.fr",
    photos: [],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "St-Cloud-Institut Curie" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "paris-saint-louis": {
    responsables: { im: "Antoine Martineau", rth: "" },
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
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: null,
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "paris-salpetriere": {
    responsables: { im: "", rth: "Michel Chea" },
    site: "https://pitiesalpetriere.aphp.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk96hmoG6qOAV8gza5ekXSnJmucdK56CfxCwE7uyYWDA&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Hôpital St Louis, GHU St Louis" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `CDD` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1750 + 75 % frais de transport` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `oui` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `11 (RT)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `2` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Machines de RT et radiochirurgie :
- 1 TrueBeam avec ExacTrac (stéréo intra et extra) → sera remplacé par un Edge en 2026
- 1 Halcyon avec surfacique VisionRT (installation en 2025)
- 1 tomothérapie Radixact
- 1 IRM-Linac MRIdian
- 1 GammaKnife

Curiethérapie : 2 chambres PDR + 1 bloc HDR.

TPS : Eclipse (TrueBeam et Halcyon), Precision (tomo), ViewRay (MRIdian), Oncentra (curie).

Autre matériel : cuve SunScan 3D (Sun Nuclear, arrivée fin 2024), Delta4 (ScandiDos), Octavius (PTW), etc.

Anciennes promos : 1 linac, 1 TB STx, 1 GammaKnife, 1 tomo, CT, IRM-Linac, curiethérapie HDR/PDR.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Plages horaires dédiées pour les CQ.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Équipe sympathique et bienveillante. Le service présente un parc très varié et intéressant pour se former ! Les fiches sont bien encadrées : pour chacune d'entre elles, un physicien est désigné responsable.

Il est demandé aux DQPRM de participer aux TOP (1 à 2 par semaine en général), au CQ hebdomadaire des chambres de curiethérapie PDR, et de se greffer aux CQ machines (particulièrement durant le S2, comme cette partie fait l'objet d'une fiche).

Remarques :
- Il est demandé de déposer vos congés en décalé avec votre co-DQ.
- Accès via M5 ou M6, + parc Vélib dans l'enceinte de la Pitié-Salpêtrière.` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Être capable de bosser en autonomie, physiciens en radiothérapie disponibles ++, plateau technique intéressant.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `thymele.muller-stahn@orange.fr (RT, promo 2023-2025)

amelie.tourais@gmail.com (RT, promo 2023-2025)

parsampaio.gui@gmail.com (promo 2020-2022)

lanouars104@gmail.com (promo 2021-2023)

tkayosra@yahoo.fr (promo 2021-2023)` }
    ],
    machinesListe: ["TrueBeam", "Halcyon", "Radixact", "IRM-Linac", "GammaKnife", "Curiethérapie PDR", "Curiethérapie HDR", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "poitiers-chu": {
    responsables: { im: "", rth: "Alexandre Garcia" },
    site: "https://www.chu-poitiers.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWny81NtXy7cLFPquNLE_nuCBxaDozU_tiW2u-axRiuw&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 5,5
MN et RX : 1,5` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `2` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 4 accélérateurs Elekta + 1 CyberKnife.

TPS : RayStation.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Créneaux d'1 h le midi sur les machines ; le soir, machines dispos vers 17 h 30.

TOP faits par les manips. DQA 4 soirs par semaine, à se répartir entre les DQ.

En MN et TEP, machines dispos tôt l'après-midi.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Très bon encadrement en imagerie et en radiothérapie, l'équipe est jeune et disponible. Le suivi des fiches est régulier, avec un planning bien établi.

Nos horaires sont libres, tant que le travail est fait !

Pour l'imagerie, accès au secteur radiologie conventionnelle et interventionnelle aisé pour la réalisation des fiches, projets et CQ.

Très bonne ambiance entre toute l'équipe de physique (dosimétristes, médecins, manips, techniciens…) !` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `blinannelise@gmail.com

kilien.parent@gmail.com` }
    ],
    machinesListe: ["CyberKnife", "TEP"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "reims-godinot": {
    responsables: { im: "Christopher Hoog", rth: "Sofiane Guendouzen" },
    site: "https://www.institutgodinot.fr",
    photos: ["https://www.unicancer.fr/wp-content/uploads/2021/10/IMG_4553-1024x768.jpeg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Environ 4 fiches (sur ~16) se font au CHU de Reims, situé juste à côté : radiologie conventionnelle possible à l'Institut ou au CHU, interventionnelle uniquement au CHU", url: "https://www.chu-reims.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1899` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `oui` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `5 à temps complet et 2 à temps partiel (1 jour et 2 jours par semaine) ; 1 physicien en imagerie à Godinot et 1 à temps partiel au CHU` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `3` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `2 maintenance RT + 1 radioprotection/MN` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 2 accélérateurs Elekta + 1 tomothérapie + 1 linac sur le site de Soissons.
TPS : Monaco.

MN : 3 gamma-caméras et 2 TEP.

Imagerie — à l'Institut Godinot : 2 scanners, une table radio, 2 mammographes, une IRM et des appareils mobiles.
Imagerie — au CHU : 3 scanners, 2 IRM, 15 tables radio, 5 salles interventionnelles, 25 appareils mobiles (radiologie conventionnelle + amplis de brillance).

Promos précédentes : acquisition d'une nouvelle tomo, dont l'installation était censée commencer en septembre 2021.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : tous les matins, TOP. DQA : créneaux de 30 min par machine, midi et soir (qui vont être éliminés). Pour les manipulations nécessitant un temps conséquent sur machines (cuves…) : jours de maintenance (fin de maintenance à 17 h) ou samedis (récupérables en jour de repos).

MN : 3 gamma-caméras et 2 TEP dispos tous les jours après 17 h – 18 h.

Anciennes promos — MN : les CQ réglementaires sont généralement effectués le mercredi soir. RX : présence du physicien au CHU les lundi, mercredi et vendredi.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Le stage se déroule principalement au CLCC Godinot, pour ~12 fiches.

Horaires 9 h – 17 h pour le CLCC et 8 h – 16 h pour le CHU, à moduler en fonction du travail et des mesures, qui finissent tard le soir de temps à autre. Un nouveau CHU est en cours de construction, donc je pense que les prochains étudiants effectueront les mesures dans de toutes nouvelles salles interventionnelles.

Une bonne autonomie est un plus au CLCC, car certaines mesures se font sans supervision. Par contre, les tuteurs (CLCC et CHU) sont compétents et pédagogues.

Pour les transports, j'ai personnellement utilisé le bus et parfois le tram. Pour la voiture, je ne sais pas trop…

(bien réviser ses cours d'imagerie, car le tuteur du CLCC aime bien faire des quizz sur nos connaissances haha)

DQ 24-26 : pour notre part, les horaires sont flexibles, on fait notre propre planning (si certains jours il faut finir plus tôt, etc.).
Excellente ambiance de travail, étudiants dans l'open space. Nous n'avons pas beaucoup connu le CHU, car la physicienne est en congé maternité, mais notre tuteur de Godinot (C. Hoog) est un excellent encadrant et est très pédagogue.
PS : il organise des quizz tous les premiers mercredis du mois dans un bar du centre de Reims, vous serez les bienvenus :)
Possibilité de garer la voiture sur le parking personnel, mais il y a un manque de place à partir de 9 h 30.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Travail en autonomie complète, même pour la cuve et autre. Les physiciens sont toujours là pour répondre aux questions, mais pas de suivi, pas de points sur les fiches, et intégration compliquée dans certaines tâches (peu d'informations communiquées au DQ).` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Équipe chaleureuse, jeune, dynamique et disponible.

Emploi du temps libre : programme en fonction de vos besoins, avec un point possible avec les physiciens.
Horaires au choix (TOP : 6 h – 13 h / journée : 8 h – 16 h ou 9 h – 17 h / soir : 13-14 h – 20-21 h / modulable en fonction des besoins).

En radiothérapie : implication rapide en routine clinique (réalisation des CQ, notamment l'ESTRO et en cas de sous-effectif, recherche clinique si désirée, réalisation des dosimétries, des dossiers patients, des DQA, curiethérapie…).

Le service nous aide à répondre aux questions pour les annales des examens, y compris par mail.

CAPACITÉ À TRAVAILLER EN AUTONOMIE RECOMMANDÉE.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `c.paris199.cp@gmail.com (IM, promo 2024-2026)

lea2000.8598@gmail.com (IM, promo 2024-2026)

morgane.beucherie@gmail.com (promo 2023-2025)

senemarie89@gmail.com (promo 2023-2025)

estebanjimenezec@gmail.com

severine.lannoy@outlook.fr` }
    ],
    machinesListe: ["Tomothérapie", "Gamma-caméra", "TEP", "Scanner", "Mammographe", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "rennes-cem": {
    responsables: { im: "Sophie Laffont", rth: "Nolwenn Delaby" },
    site: "https://www.centre-eugene-marquis.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqmrR120StN7e7aL0DczJXbeMaSXTc4ZRNR-ZdiIWAg&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "1 semaine d'observation d'examens au CHU de Brest (partie radiologie)", id: "brest-chru" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1871 + 75 % frais de transport (ou indemnités kilométriques vélo)` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `11` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `6` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `2 mesures physiques
3 biomédicaux` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 1 CyberKnife, 1 Versa, 2 Halcyon, 1 IRM-Linac Elekta Unity, 1 scanner Confidence (Siemens), curiethérapie HDR (projecteur + TPS Elekta).
TPS : RayStation ; Monaco pour l'IRM-Linac ; Precision pour le CyberKnife.

RX : 1 scanner AS64 (Siemens), 1 table de radiologie conventionnelle Luminos (Siemens), 2 mammographes (Hologic), 1 table de radiologie interventionnelle Artis Zee (Siemens), 1 IRM partagée avec le CHU (Siemens).
Remarque : l'IRM-Linac Unity peut également servir à l'acquisition d'images durant le stage d'imagerie.

MN : 1 gamma-caméra CZT (GE), 2 gamma-caméras TEMP/TDM (GE et Siemens), 2 TEP/TDM (Siemens et GE).` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Le stage se déroule dans un CLCC. Pour la partie MN, il y a beaucoup d'examens différents. Les imageurs sont tout aussi divers. C'est plaisant de travailler en MN. Pour la partie radiologie, cela se passe également au centre. Le stage est donc plus focalisé sur la MN que sur la radiologie.

Il faut être très investi pour que le stage se passe bien, en étant ponctuel et en n'ayant pas peur de compter ses heures (8 h – 18 h tous les jours). Si la personne paraît ne pas s'investir dans le stage, il est possible que les tuteurs aient un a priori négatif. Je vais partager une anecdote pour clarifier ce que je veux dire. À la toute fin du stage, on nous a reproché de ne pas avoir vu beaucoup d'examens radiologiques. Nous avions dit qu'aucun physicien ne nous avait dit ou guidé pour nous faire voir davantage d'examens. On nous a répondu que l'on était autonomes pour aller les voir tout seuls et que l'on aurait pu aller leur demander de voir plus d'examens. Cela démontre qu'il faut faire preuve d'autonomie et ne pas hésiter à parler ou à aller vers les tuteurs en cas de problème. À part cela, le stage s'est bien déroulé. Ce n'était pas le cas pour un étudiant d'imagerie en 2024.

En résumé : ne pas hésiter à dialoguer et à aller vers les tuteurs en cas de questionnement. Je suis d'accord que certains nous font ressentir un peu de « crainte ». Cela peut être dans la manière de parler, ou alors le fait que parfois certains sont tellement occupés qu'ils ne peuvent pas décrocher leur téléphone lorsqu'on les appelle pour juste poser une question. Mais en réalité, c'est beaucoup mieux d'aller vers eux (pour voir plus d'examens, faire plus de mesures, faire plus de CQ, etc.). C'est ce qu'ils attendent de la part des étudiants.

Le self est juste en face du centre. On y mange bien (mais je ne suis pas difficile niveau nourriture), avec un prix moyen entre 4 et 5 € le repas. Le CEM n'aura pas de place de parking pour garer votre voiture : soit vous vous garez à côté (à quelques centaines de mètres du centre), soit vous prenez les transports en commun, soit vous arrivez à vélo ou à pied. Le CEM rembourse les frais de transport en commun à hauteur de 75 %. Pour les congés, ce n'est pas possible de les poser en même temps que son co-DQ.

Concernant le cadre de vie en général : la ville de Rennes est une grande ville comme n'importe quelle autre. Ni plus agréable, ni plus horrible. Le ciel est gris et pluvieux aussi souvent qu'à Paris, mais moins souvent qu'à Brest (sources : https://www.cartesfrance.fr/geographie/cartes-france-climat/carte-ensoleillement.html ; https://meteofrance.com/actualites-et-dossiers/magazine/ou-pleut-il-le-plus-en-france-hexagonale ; consulté le 21/09/2025). Je m'y sens bien, mais la seule fois où j'ai vécu en dehors de la Bretagne, c'était à Palaiseau (l'horreur) pour les cours à l'INSTN.

En conclusion, le stage à Rennes c'est bien, mais ce témoignage est à prendre avec du recul (comme tout témoignage, finalement). Je ne saurais en aucun cas être tenu responsable de votre mal-être personnel et/ou professionnel à Rennes durant votre semestre d'imagerie. Cordialement. Léo [écrit le 05/05/2026]` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `La RT, c'est le point fort du CEM. Le centre est vraiment gâté et peut se vanter de posséder de l'Elekta, du Varian, un CyberKnife dédié à la stéréotaxie intra et extra-crânienne, ainsi qu'un IRM-Linac de 1,5 T pour des traitements de radiothérapie adaptative.

L'équipe de physique est expérimentée et encadre bien les étudiants. Dès le début du stage de S2, les étudiants DQPRM sont répartis alternativement en une semaine de dosimétrie, puis une semaine de CQ. Cet enchaînement continue (en gros) jusqu'à la fin du stage. Je tiens à préciser que, comme pour le stage d'imagerie, il faut se montrer sérieux et investi professionnellement.

Durant les semaines de dosimétrie, on fait d'abord de l'observation. On regarde les physiciens et les dosimétristes faire des plans de traitement, puis des sorties de dossier. Dès que l'on se sent à l'aise pour un traitement en particulier, on commence à faire des dosimétries tout seul. Cela peut être sur des dossiers observés avec le personnel, ou alors sur un tout nouveau dossier. L'objectif est de savoir se débrouiller pour faire des plans de traitement à la fin du stage de S2. Bien sûr, ce sont des traitements « simples » (pas de cumul de dose, de fusion d'images, de stéréotaxie, etc. durant le 1er semestre de radiothérapie). Néanmoins, cela est très formateur de faire des dosimétries sur de nouveaux dossiers et non sur des dossiers déjà traités. On a le sentiment de faire partie de l'équipe de physiciens. D'ailleurs, l'équipe est à l'écoute si l'on a le moindre souci lors d'une dosimétrie.

Durant les semaines de CQ, on s'occupe des CQ patients qui ont été tirés aux accélérateurs. On regarde que le gamma index passe pour chaque patient. On s'occupe également de certains CQ quotidiens et hebdomadaires, du suivi dans le temps des imageurs surfaciques et des contrôles « end to end » sur les accélérateurs, par exemple.

Enfin, de temps en temps, on effectue la maintenance d'un accélérateur avec des membres de l'équipe de physiciens. Même s'il y a beaucoup d'investissement en routine clinique, on a tout le temps de faire les fiches pour l'INSTN.

Pour plus d'informations sur le CEM et la vie à Rennes en général, regarder le commentaire du semestre d'imagerie. Je suis très content de faire mon stage de RT au CEM, car j'ai le sentiment d'être très bien formé. Je pense qu'il s'agit d'un des meilleurs centres de France pour la formation des étudiants en radiothérapie. C'est pourquoi je recommande très fortement et sans hésiter le centre Eugène Marquis de Rennes pour vos 2 semestres de RT. Cordialement. Léo [écrit le 05/05/2025]` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `- Important d'être autonome et de savoir s'adapter facilement.
- Partie imagerie : grande autonomie demandée, CQ à faire seul avec procédure.
- Partie médecine nucléaire : encadrement ++, mais validation globale des fiches à la fin du stage.
- Ne pas avoir peur de faire des heures, mais cela dépend des étudiants (45 h/semaine minimum).
- Intégration rapide dans les tâches cliniques dès les premières semaines (50 % clinique / 50 % fiches).
- Bonne intégration à l'équipe de manips, techniciens et physiciens.
- Bureau étudiant avec DQ1/DQ2/M2, ce qui permet une entraide.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `- Beaucoup de clinique demandé.
- Savoir accepter la critique (forte exigence).
- DQ impliqués dans les maintenances accélérateur (soirée tardive, en général fin à 20 h 30).
- Mini-projets de recherche durant l'année, en plus du projet de 2ᵉ année.
- De nombreux points fiches avec les physiciens avant validation.
- Horaires en semaine CQ : 8 h 30 / 17 h 30 – 18 h.
- Apprentissage sur les techniques complexes type stéréo début DQ2.
- Responsabilité de l'astreinte possible en 2ᵉ année.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Bureau au sous-sol, pas de lumière naturelle. Bonne ambiance, car étudiants tous ensemble (master 2, master 1, DQ…). Repas entre stagiaires.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `jambou.le.bozec.leo@gmail.com (IM, RT, promo 2024-2026) — « Je suis vraiment super gentil donc si vous avez des questions, j'y répondrai avec plaisir »

lemaire.lucien@outlook.fr (DQ1, promo 2022-2025)` }
    ],
    machinesListe: ["CyberKnife", "Versa", "Halcyon", "IRM-Linac", "Curiethérapie HDR", "SPECT-CT", "Caméra CZT", "TEP", "Scanner", "Mammographe", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "rouen-chb": {
    responsables: { im: "Sebastien Hapdey", rth: "Sylvie Derreumaux, David Gensanne" },
    site: "https://www.becquerel.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoVOj5ipdCWO6hDERx-_vbmdTX77uTIy6Q5JczSvvhA&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "2 fiches de radiologie interventionnelle à Caen (l'ensemble des autres fiches sont réalisées au CHB)" },
      { texte: "En 3ᵉ semestre, les fiches curiethérapie sont faites au CFB à Caen", id: "caen-baclesse" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1950` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `Imagerie : 2 à temps plein
RT : 8` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `7` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT : 2 TrueBeam Novalis, 1 Halcyon (installation juillet 2021) + 2ᵉ Halcyon (2022) + 3ᵉ Halcyon Ethos (2025).
Promos précédentes : 2 TrueBeam STx + 3 Halcyon ; installation Ethos sur Halcyon, projet d'installation d'un ZapX et aussi d'une 6ᵉ machine.

MN : 2 caméras Anger (Symbia) + 1 caméra CZT (Spectrum Dynamics) et 2 TEP.
Labo chaud : 1 enceinte basse énergie + 1 haute énergie + 1 Ga.

Radiologie : 2 mammographes + 1 scanner GE + 1 salle radio et un mobile + 1 arceau de bloc + 1 salle IRM.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RT : TOP sur portal et chambre tous les matins, fait par les techniciens. CQ réalisés tous les matins, avec un créneau de 7 h à 9 h – 10 h. Pour les manipulations, très rarement le soir, mais créneau à réserver en avance pour le samedi matin.
Promos précédentes : les machines finissent les traitements vers 19 h. En cas de besoin des machines pour des mesures, possible de venir le samedi (le jour est récupérable).

MN : les caméras entre 16 h 30 et 17 h ; TEP pas avant 18 h 30.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Pas de planning particulier : c'est à l'étudiant de s'organiser selon la disponibilité des machines et des physiciens.

Les 2 physiciens sont présents à tout moment pour une éventuelle aide. Autonomie ++++++++++++++.

Équipe très très sympa. Bureau partagé avec les physiciens.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `C'est un centre en plein développement.

Généralement, le travail avec les physiciens et l'équipe en service est assez agréable. Ils sont bienveillants et disponibles en cas de besoin.

Au niveau de l'organisation du stage, ça demande plus d'autonomie pour l'organisation des fiches, et il faut vraiment solliciter les gens en cas de besoin.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `pannier.mathilde@orange.fr (promo 2020-2022)

assia.benhamla46@gmail.com (promo 2022-2025)

manyani39@gmail.com (RT, promo 2022-2025)` }
    ],
    machinesListe: ["TrueBeam", "Halcyon", "Ethos", "Gamma-caméra", "Caméra CZT", "TEP", "Scanner", "Mammographe", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "saint-cloud-curie": {
    responsables: { im: "Bénédicte Lonkuta", rth: "Clement Chevillard" },
    site: "https://curie.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYn9SYQBc9jr4N8MHdS2827cQd0LLcWvrYES9vGnkAw&s"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Prévoir 10 jours dans un autre hôpital pour la partie RX interventionnelle (conventions avec Lariboisière gérées par l'établissement)", url: "https://hopital-lariboisiere.aphp.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `2 en RX/MN` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `1 en imagerie` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Imagerie : 1 scanner GE, 1 table radio Primax, 1 mobile, 3 mammographes/tomosynthèse GE, 1 IRM GE.

MN : 1 gamma-caméra, 1 TEP Philips Vereos.

Promos précédentes : à prévoir, le remplacement d'un des mammographes et l'agrandissement du service de MN.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Promos précédentes : disponibilité des machines globalement à partir de 17 h – 17 h 30, et une des deux gamma-caméras disponible certaines journées.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Im: prévoir de faire 10 jours dans un autre hôpital pour la partie Rx interventionnelle (conventions avec Lariboisière gérées par l'établissement). Deux physiciens en RX/MN et un technicien en imagerie en cours de formation sur les CQ. Disponibilité des machines globalement à partir de 17h-17h30, et une des deux gamma caméra disponible certaines journées. A prévoir : le remplacement d'un des mammographes, l'agrandissement du service de MN.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `tanguyferran@gmail.com` }
    ],
    machinesListe: ["Scanner", "Mammographe", "IRM", "Gamma-caméra", "TEP"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "strasbourg-icans": {
    responsables: { im: "Julien Salvadori", rth: "Nicolas Dehaynin" },
    site: "https://www.icans.eu",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGxaGtc5E3ukjU3aGco4G4hTMzHZq6XIaj9bP3RYI4Q&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "La majorité des fiches de radiologie (sauf les fiches scanner et IRM) se font aux Hôpitaux civils de Colmar, à 30 minutes de train de Strasbourg. L'abonnement de train est remboursé à hauteur de 75 %. Salle de radiologie interventionnelle dédiée aux tests pour les DQ, et centre de médecine nucléaire tout neuf (1 TEP/CT Omni Legend GE et 2 gamma-caméras NM/CT 870 DR).", url: "https://www.ch-colmar.fr" },
      { texte: "Plus de filière SIRT depuis le divorce avec le CHU de Strasbourg, mais il est toujours possible d'aller observer le geste au CHU", url: "https://www.chru-strasbourg.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1856 + 75 % frais de transport` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `non` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 8 à temps plein
MN : 2 à temps plein
RX (aux Hôpitaux civils de Colmar) : 2 physiciennes à temps plein` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `6` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: `2` },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT — appareils Varian : 1 Ethos HyperSight pour l'adaptatif, 1 Halcyon HyperSight, 1 TrueBeam STx (avec ExacTrac et Dyn'R) et 1 Clinac iX Silhouette (avec VisionRT), 1 projecteur de source Flexitron (HDR).
RT — appareils de tomothérapie : 1 Radixact et 1 Tomo HD.
Techniques réalisées : 3D, IMRT, VMAT, stéréotaxie et TBI.
Logiciels et matériel : TPS Eclipse, Precision, Oncentra ; R&V ARIA ; cuve PTW BeamScan ; ArtiScan.

MN (Institut Strauss) : 2 gamma-caméras (1 GE NM/CT 870 DR et 1 Siemens Symbia T, remplacée en décembre 2026 par une gamma-caméra CZT grand champ GE StarGuide GX), 1 TEP/CT Vision (Siemens), 1 TEP/IRM SIGNA (GE) et 7 activimètres (5 Capintec en enceinte blindée et 2 injecteurs).
Le service délivre également des traitements par RIV au 177-Lu.

Promos précédentes — MN : 4 SPECT dont 2 Symbia (Siemens) et 2 GE, 2 TEP Siemens, 1 TEP-IRM GE, 4 activimètres, très grand labo chaud + pièce dédiée à la physique avec un activimètre accessible tout le temps.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `MN : suite au divorce avec le CHU, l'activité dans le service a diminué, donc les machines sont disponibles assez tôt pour l'instant (~15 h pour les gamma-caméras et ~16 h pour les TEP).

RT : les machines sont libérées tôt (vers 16 h 30 / 17 h), avec la possibilité de rester toute la nuit en semaine si vous êtes dans le rush de vos manips.

Anciennes promos : physicien à plein temps en MN et dispo en fin d'après-midi si manips à faire.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `La majorité du stage se déroule au CLCC (Institut Strauss) à Strasbourg.

L'encadrement est réalisé par deux physiciens médicaux à temps plein. Dès le début du stage, ils vont vous expliquer le fonctionnement des machines pour que vous soyez autonomes le plus rapidement possible pour réaliser vos fiches. Si jamais vous avez besoin d'aide, l'encadrement peut être adapté pour vous aider à progresser ! Si vous êtes efficace sur les fiches et intéressé par la médecine nucléaire, il est également possible de prendre part aux activités de recherche du service pendant le stage.

Il n'y a pas de contraintes sur les horaires de travail ni sur les poses de congés. Un bureau DQPRM est disponible et partagé avec les DQ2 (1 poste de travail par personne et la climatisation).

À Colmar : pensez à demander la tarification solidaire de la CTS si vous avez 26 ans et plus (le tram est également remboursé à 75 %). Ce stage dans un hôpital plus généraliste permet d'observer de nombreuses indications, ce qui est utile pour sa culture clinique.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Le service de radiothérapie de l'Institut Strauss (ex-ICANS, juste à côté du CHU de Hautepierre) présente un plateau technique hyper complet et une super ambiance. L'équipe est bienveillante et l'intégration s'y fait naturellement, avec une excellente entente entre les physiciens, les médecins et les manips.

Les physiciens sont vraiment disponibles et prennent toujours le temps de répondre à vos questions ou de vous accompagner. Pour les fiches, chaque physicien encadre une ou plusieurs fiches tout au long du S2 ou du S3, ce qui garantit un super suivi.

Vos missions cliniques en tant qu'étudiant seront la réalisation des contrôles qualité pré-traitement, des contrôles quotidiens et hebdomadaires en S2 et S3, sur l'ensemble des machines. Si vous avancez assez vite sur les fiches de planification de traitement, vous pourrez participer à l'activité clinique en dosimétrie.

L'ensemble des stages vous formera davantage à l'environnement Varian qu'à celui des Tomo. Ainsi, vous utiliserez beaucoup plus le TrueBeam, le Clinac ainsi que le TPS Eclipse, mais vous serez aussi formés sur l'ensemble des autres machines et environnements, bien entendu !

Le mot d'ordre ici est l'autonomie, mais vous ne serez jamais lâchés dans la nature sans soutien.

- Bureaux : le bureau est exclusivement réservé aux DQ (DQ1 + DQ2), mais il est un peu éloigné de la dosimétrie — n'hésitez pas à aller souvent en dosi, même pour boire un café !
- Horaires : la flexibilité est de mise ! Vous devez faire au minimum 7 h par jour et être présent dans le service au plus tard à 11 h pour assurer les contrôles quotidiens. Les physiciens ne sont pas regardants sur vos heures, mais plutôt sur la qualité et l'avancement de votre travail.
- Congés : aucune galère pour poser vos jours, la seule règle (qui reste flexible) étant que les deux étudiants évitent de s'absenter en même temps.
- Cantine : possible de manger sur le site, au tarif de 4,65 €.
- Logement : si vous n'êtes pas du coin, les trams A et D desservent le centre.

La formation dispensée par l'Institut Strauss est de haute qualité et nous sommes ravis d'avoir fait notre DQPRM ici !` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Équipe agréable, très bonne ambiance, bureau DQPRM dédié (partagé entre DQ1 et DQ2).

Partie MN
Très bonne équipe, bonne ambiance, physicien disponible et investi. Bonne intégration dès le début sur le fonctionnement des machines, la gestion des fiches, la présentation de l'équipe et de toutes les choses à savoir. Autonomie appréciée pour les mesures, mais le physicien reste dispo et à l'écoute si difficultés rencontrées. Pas de contraintes sur les horaires de travail ni sur la pose des congés.

Partie RX
Pour plus d'infos sur la partie radio à Colmar, contacter les DQ 22-24.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Équipe se montrant disponible en RT. Il est cependant nécessaire de prendre des initiatives au niveau des fiches et des manips à faire.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `thymele.muller-stahn@orange.fr (IM, promo 2023-2025)

c.ringuenoire@icans.eu (IM, promo 2023-2025)` }
    ],
    machinesListe: ["Ethos", "Halcyon", "TrueBeam", "Clinac", "Radixact", "Tomothérapie", "Curiethérapie HDR", "SPECT-CT", "TEP", "TEP-IRM", "Scanner", "IRM"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "toulouse-oncopole": {
    responsables: { im: "Laure Vieillevigne", rth: "Laure Vieillevigne" },
    site: "https://www.iuct-oncopole.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAly8QY0dh2NrGaUS6SsmAbOq4is9ZWhM2AgAXKDtPFg&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "6 semaines prévues pour la découverte de l'activité clinique non oncologique au CHU (Purpan et Rangueil), avec 3 à 4 fiches prévues et des projets (présentation aux équipes…)", url: "https://www.chu-toulouse.fr" },
      { texte: "5 jours de formation en RX au CH de Carcassonne, répartis sur les 6 mois (une dizaine de jours selon une autre promo). Il est mieux qu'un des deux DQ ait le permis pour emprunter la voiture du CLCC, car le trajet Toulouse – CH Carcassonne est long en transport en commun (encore mieux si l'un des deux a une voiture)", url: "https://www.ch-carcassonne.fr" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1780` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 9
Imagerie : 2 à temps plein (Oncopole), 3 au CHU et 1 à Carcassonne` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `6` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: `2 APM
10 radiothérapeutes
45 manipulateurs` },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `RT (CLCC) : 2 Novalis TrueBeam STx (Varian) miroirs, 2 Halcyon (Varian), 3 tomothérapies (Accuray), 1 scanner (Siemens).

Diversité des techniques : RC3D, VMAT, STIC/STEC, dose unique, HyperArc, tomo, TBI, curie, MET directe.

SIRT : ARIA. TPS : Eclipse, Precision. AQ : Aquilab, Verisoft, Dosisoft/SunCheck, FilmQA.

Anciennes promos : gros centre, 7/8 machines + curiethérapie.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `Amplitude horaire des traitements : 7 h 30 – 20 h.

Mesures pour les fiches possibles après les traitements (horaire variable) ou à la fin d'une journée de CQ.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Fiches faites en majorité à l'Oncopole (CLCC).

Autonomie +++ au CLCC, plus d'encadrement au CHU.

Un planning est prévu pour toute la durée du stage. Il permet de bien gérer le temps et d'avancer avec les fiches. Bien prévoir des jours ou des semaines de rédaction, parce que tout s'enchaîne très rapidement.

Il faut de l'autonomie et savoir se rapprocher des physiciens pour être au courant des formations, maintenances, etc. Ne pas hésiter à proposer des petits projets : ce sera très bien reçu.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `Très bonne organisation du service. Bonne ambiance de travail. Équipe vraiment agréable, disponible, pédagogue et à l'écoute. Bureau DQ convivial !

ORGANISATION GÉNÉRALE DES SEMESTRES 2 ET 3 EN RT

S2 :
- Vous êtes très fortement impliqués +++ dans la réalisation des CQ pré-traitement (stéréos et tomo) et les journées mensuelles de CQ machine.
- Vous suivez 2 fois par semaine le quotidien du physicien de plateau (~ dès la fin du 2ᵉ mois).
- Vous suivez pendant 2 semaines le quotidien d'un dosimétriste de l'équipe (~ fin de semestre).

S3 :
- Détachement des CQ de routine au profit de la dosi. Suivi de dosimétries, puis entraînements autonomes aux techniques RC3D, RA et stéréo.
- Vous avez la responsabilité 2 fois par semaine du téléphone de plateau, supervisé par un physicien (7 h – 13 h 30 ou 13 h 30 – 20 h) : réponse aux problèmes de la clinique et découverte de la routine clinique.
- Les astreintes sont formatrices +++ : vous êtes véritablement intégrés au cœur de la routine du physicien et apprenez à gérer tous les problèmes que rencontre quotidiennement un service de RT !
- Impossibilité de faire des dosimétries prospectives (dossiers rétrospectifs uniquement, pour se former).
- Formation curie sur l'ensemble du semestre (pas de dossiers prospectifs non plus).
- Pas d'implication clinique des DQ sur la partie dosimétrie.
- Autonomie ++.` },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Autonome sur CQ et astreinte rapidement. Bon encadrement.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `nicolas.campisi@gmail.com (IM, promo 2022-2024)

judeborne@gmail.com (IM, promo 2022-2024)

sayahfarzam@gmail.com (RT, promo 2021-2023)

jedidisarahbcr@gmail.com (RT, promo 2021-2023)

alexandre.blncht@gmail.com (RT, promo 2022-2024)

gwenaelle.sidorski@gmail.com (IM, RT, promo 2023-2026)` }
    ],
    machinesListe: ["TrueBeam", "Halcyon", "Tomothérapie", "Scanner"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "tours-chru": {
    responsables: { im: "", rth: "Simon Jan" },
    site: "https://www.chu-tours.fr",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKnMCSxLzFttjzJftloEfJq7Pi3mGCcZiDAyPKbUcAg&s=10"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "Partie radiologie réalisée à Orléans", id: "orleans" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1770` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Avoir une bonne autonomie.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: [],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "valenciennes": {
    responsables: { im: "Francine Laurent-Daniel", rth: "" },
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
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: "" },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: "" },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: "" },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: "" },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: "" },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: "" },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: "" },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: "" },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: "" },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: "" },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: "" },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: "" },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: "" }
    ],
    machinesListe: null,
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  },
  "villejuif-gr": {
    responsables: { im: "Aurélie Moussier-Lherm", rth: "Anne Beaudre" },
    site: "https://www.gustaveroussy.fr",
    photos: ["https://www.gustaveroussy.fr/sites/all/themes/gustave_roussy/videohome/homevid-fallback.jpg"],
    statut: "",
    salaire: "",
    retraite: "",
    chomage: "",
    conges: "",
    revisions: "",
    equipe: { physiciens: "", dosimetristes: "", techniciens: "", ingenieurs: "", autres: "" },
    ailleurs: [
      { texte: "1 semaine de radiologie interventionnelle à la Pitié-Salpêtrière", id: "paris-salpetriere" },
      { texte: "1 semaine de MN à Créteil" }
    ],
    themes: [
      { cle: "conditions", titre: "Conditions" },
      { cle: "service", titre: "Service de physique médicale" },
      { cle: "machines", titre: "Machines et disponibilités" },
      { cle: "avisRecents", titre: "Avis des promos récentes" },
      { cle: "avisPrecedents", titre: "Avis des promos précédentes" },
      { cle: "commentaires-anciennes-promos", titre: "Commentaires (anciennes promos)" },
      { cle: "contacts", titre: "Contacts étudiants" }
    ],
    sections: [
      { theme: "conditions", cle: "statut", titre: "Statut", texte: `Stagiaire` },
      { theme: "conditions", cle: "salaire", titre: "Salaire (net)", texte: `1900` },
      { theme: "conditions", cle: "retraite", titre: "Cotisation retraite", texte: `oui` },
      { theme: "conditions", cle: "chomage", titre: "Cotisation chômage", texte: `non` },
      { theme: "conditions", cle: "conges", titre: "Congés", texte: `12,5 jours par semestre` },
      { theme: "conditions", cle: "revisions", titre: "Révisions sur place", texte: `oui` },
      { theme: "service", cle: "equipe.physiciens", titre: "Physiciens", texte: `RT : 13
Imagerie : 1 physicienne à temps plein en RX (responsable de l'EAP en imagerie), 2 physiciens à temps plein en MN (dont un fraîchement diplômé en 2024)` },
      { theme: "service", cle: "equipe.dosimetristes", titre: "Dosimétristes", texte: `8` },
      { theme: "service", cle: "equipe.techniciens", titre: "Techniciens", texte: "" },
      { theme: "service", cle: "equipe.ingenieurs", titre: "Ingénieurs", texte: "" },
      { theme: "service", cle: "equipe.autres", titre: "Autres", texte: `5 chargés de CQ` },
      { theme: "machines", cle: "machinesListe", type: "machines", titre: "Machines", pos: "haut", texte: "" },
      { theme: "machines", titre: "Détails", pos: "haut", just: true, texte: `Radiothérapie :
- 1 scanner dosimétrique : Siemens go.Sim
- 1 IRM uniquement pour la planification RT : Siemens
- 5 Versa, dont 2 avec ExacTrac et table 6D → installation VisionRT 2025
- 2 tomothérapies
- 1 Novalis
- 1 CyberKnife
- 1 Papillon (RT basse énergie)
- Installation ZapX fin 2025

Curiethérapie : 6 chambres PDR (gynéco, ORL, pédia) + 1 bloc HDR (grains prostate, gynéco).

TPS : RayStation (Versa + Novalis), Precision (tomo + CyberKnife), Oncentra (curie).
R&V : Mosaiq.

RX :
- 2 scanners diagnostics Siemens (SOMATOM Force : bi-tube ; NAEOTOM Alpha : comptage photonique) + 1 scanner en RT
- 2 IRM diagnostiques Siemens (1,5 T et 3 T) + prochainement une IRM en RT
- 3 mammographes GE (Pristina)
- 2 salles de radiologie conventionnelle (1 salle Philips, 1 nouvelle salle sera bientôt installée)
- 2 salles de radiologie interventionnelle pour l'angio et 5 arceaux de blocs mobiles
Nombreux fantômes disponibles (Catphan 600, MECT, Magphan, etc.) et dispositif de mesure RaySafe à disposition (sauf pour la mammo).

MN :
- Labo chaud avec plusieurs activimètres + Trasis UNIDOSE + 2 activimètres mobiles
- 2 TEP-CT Siemens (Vision 600)
- 2 SPECT (Discovery, GE et VERITON, Spectrum Dynamics)
- Traitements : radioembolisation, 177-Lu (prostate et TNE), 131-I, 223-Ra
Nombreux fantômes disponibles.` },
      { theme: "machines", cle: "machines", titre: "Disponibilité", pos: "haut", just: true, texte: `RX : scanner après 17 h ; SPECT en général dispo en journée ; SPECT-CT après 18 h en moyenne ; TEP après 20 h.
Les machines sont généralement disponibles après 17 h.

Promos précédentes — MN : TEP disponible à partir de 20 h, sauf un jour par semaine à 18 h ; SPECT-CT disponible à partir de 17 h ; SPECT seule disponible en journée. Le plateau de MN va changer en 2020, et sûrement les disponibilités également.
Promos précédentes — RX : CT disponibles les soirs à partir de 18 h ; RX et mammo en journée ; RI les soirs uniquement.` },
      { theme: "avisRecents", cle: "avisIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `RX
Observations programmées dans l'ensemble des services de radio.

MN
Observations à la demande en scintigraphie et TEP.
Programmation d'une journée d'observation avec un manipulateur radio pour suivre les traitements au Lutécium.
Nous avons demandé à aller au bloc pour voir l'administration de microsphères d'Y-90.

Organisation générale du stage :
- Signature d'une charte rédigée par l'encadrement (en plus de la convention de stage) le premier jour, indiquant les modalités du stage.
- Organisation alternée sous forme de 3 semaines MN puis 3 semaines RX.
- CQ mammo hebdomadaires et mensuels effectués en autonomie.
- Fiches : il est demandé de réserver les créneaux à l'avance et de préparer tous les fichiers Excel de CQ à l'avance.
- Vacances : les deux stagiaires doivent partir en même temps, deux semaines imposées : 1 semaine fin mars + 1 semaine fin juin. Si vous avez des impératifs, prévenez vos futurs encadrants avant votre arrivée. Il est attendu par l'encadrement que les DQPRM rattrapent leur retard pendant leurs congés et week-ends.

L'encadrement peut être délicat, communication parfois difficile.` },
      { theme: "avisRecents", cle: "avisRth", titre: "Radiothérapie", pos: "haut", just: true, texte: `2 physiciens responsables de l'organisation générale des DQ, avec 1 réunion par mois pour suivre l'avancée des fiches. Les fiches sont bien organisées et réparties entre tous les physiciens, avec des responsables désignés.

L'équipe est sympathique et disponible lorsqu'elle est sollicitée ; il est nécessaire que les étudiants soient autonomes, curieux et très actifs dans la routine clinique.

Il est possible d'assister aux staffs scientifiques du service de RT le vendredi matin (présentations scientifiques des médecins sur plein de thématiques liées à la radiothérapie) et aux présentations des internes le mercredi midi (revues bibliographiques oncologiques).

Les congés ne peuvent pas être pris en même temps que le co-DQ.

Organisation
S2 : répartition 2 semaines dosi et 2 semaines CQ (alternance étudiant)
- responsable CQ patient Novalis ×3/semaine (lundi, mercredi et vendredi, entre 12 h et 13 h)
- participation au traitement TBI + étalonnage des diodes au Novalis
- assister à > 1 CQ mensuel et hebdo machine par semaine, et > 1 semestriel et annuel sur la durée du S2
- entraînement dosi 3D et rIMRT sur ancien patient, mais validation sur un « vrai » dossier

S3 : répartition 2 semaines dosi et 2 semaines curiethérapie (alternance étudiant)
- responsable CQ patient Novalis ×3/semaine (lundi, mercredi et vendredi, entre 12 h et 13 h)
- participation au traitement TBI + étalonnage des diodes au Novalis
- réalisation des CQ hebdomadaires des chambres PDR et du bloc HDR
- entraînement dosi VMAT (localisations prostate et ORL en priorité) et stéréo sur anciens patients, avec validation sur « vrai » dossier
- participation aux dosimétries de curiethérapie` },
      { theme: "avisPrecedents", cle: "avisAncIm", titre: "Imagerie (RX / MN)", pos: "haut", just: true, texte: `Beaucoup de temps en observation uniquement (sans pouvoir avancer les fiches) au début du semestre. Beaucoup de matériel disponible pour faire les CQ.

Un peu de routine, mais secondaire par rapport à l'observation et aux fiches.` },
      { theme: "avisPrecedents", cle: "avisAncRth", titre: "Radiothérapie", pos: "haut", just: true, texte: "" },
      { theme: "commentaires-anciennes-promos", titre: "", pos: "haut", just: true, texte: `Etre capable de bosser en autonomie.` },
      { theme: "contacts", cle: "contacts", titre: "", pos: "haut", texte: `amelie.tourais@gmail.com (IM)

nathan.benzazon@hotmail.fr (IM)

koudiaayoub34@gmail.com (RT, S2, S3, S4)

manon.guillou97.mg@gmail.com (RT, S3)

michel_atieh963@hotmail.com (RT, promo 2021)

julie.colnot58@gmail.com (DQ2)

ilhem.hsaini@gmail.com

orly.saturnin@gmail.com` }
    ],
    machinesListe: ["Versa", "Tomothérapie", "TrueBeam", "CyberKnife", "ZapX", "X-Strahl / Papillon", "Curiethérapie PDR", "Curiethérapie HDR", "SPECT-CT", "TEP", "IRM", "Scanner", "Mammographe"],
    machines: "",
    avisIm: "",
    avisRth: "",
    avis: "",
    avisAncIm: "",
    avisAncRth: "",
    avisAnciens: "",
    contacts: ""
  }
};
