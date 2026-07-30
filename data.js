// CARTE DES CENTRES EAP — DQPRM 2026
// Ce fichier se modifie ici ou depuis la carte : « Modifier les infos » sur une fiche,
// rubrique « Gérer les centres » (activer/désactiver, créer, déplacer),
// puis « Exporter data.js » pour publier le fichier mis à jour.
// Désactiver un centre : actif: false. im = imagerie (RX/MN), rth = radiothérapie.
// Le reste (site, photos, équipe, avis, contacts...) est dans infos.js.

const CENTRES = [
  {
    id: "angers-ico",
    nom: "Angers (ICO)",
    etablissement: "Institut de Cancérologie de l'Ouest – site Paul Papin",
    ville: "Angers",
    lat: 47.48377, lng: -0.55517,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "avignon",
    nom: "Avignon",
    etablissement: "Institut du Cancer Avignon-Provence (Sainte-Catherine)",
    ville: "Avignon",
    lat: 43.92244, lng: 4.79959,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "bordeaux-bergonie",
    nom: "Bordeaux (Bergonié)",
    etablissement: "Institut Bergonié",
    ville: "Bordeaux",
    lat: 44.82371, lng: -0.57984,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "bordeaux-chu",
    nom: "Bordeaux (CHU)",
    etablissement: "CHU de Bordeaux – Groupe Pellegrin",
    ville: "Bordeaux",
    lat: 44.82782, lng: -0.60428,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "brest-chru",
    nom: "Brest (CHRU)",
    etablissement: "CHRU de Brest – Hôpital de la Cavale Blanche (ICI)",
    ville: "Brest",
    lat: 48.40146, lng: -4.52776,
    actif: true,
    places: { S1: { im: 2, rth: 2 }, S2: { im: 1, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "caen-baclesse",
    nom: "Caen (Baclesse)",
    etablissement: "Centre François Baclesse",
    ville: "Caen",
    lat: 49.20347, lng: -0.35450,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "chambery",
    nom: "Chambéry",
    etablissement: "CH Métropole Savoie",
    ville: "Chambéry",
    lat: 45.56361, lng: 5.91215,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "clermont-jean-perrin",
    nom: "Clermont-Ferrand (Jean Perrin)",
    etablissement: "Centre Jean Perrin",
    ville: "Clermont-Ferrand",
    lat: 45.75797, lng: 3.09233,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "dijon-cgfl",
    nom: "Dijon (CGFL)",
    etablissement: "Centre Georges-François Leclerc",
    ville: "Dijon",
    lat: 47.31985, lng: 5.06937,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "grenoble-chu",
    nom: "Grenoble (CHU)",
    etablissement: "CHU Grenoble Alpes – hôpital Michallon (La Tronche)",
    ville: "Grenoble",
    lat: 45.19897, lng: 5.74617,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "grenoble-icdh",
    nom: "Grenoble (ICDH)",
    etablissement: "Institut Daniel Hollard – Groupe Hospitalier Mutualiste de Grenoble",
    ville: "Grenoble",
    lat: 45.18155, lng: 5.70914,
    actif: true,
    places: { S1: { im: 0, rth: 1 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "lille-chu",
    nom: "Lille (CHU)",
    etablissement: "CHU de Lille – hôpital Claude Huriez",
    ville: "Lille",
    lat: 50.60711, lng: 3.03214,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "lille-col",
    nom: "Lille (COL)",
    etablissement: "Centre Oscar Lambret",
    ville: "Lille",
    lat: 50.61270, lng: 3.03099,
    actif: true,
    places: { S1: { im: 0, rth: 2 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "lyon-chu",
    nom: "Lyon (CHU)",
    etablissement: "Hospices Civils de Lyon – CH Lyon Sud (Pierre-Bénite)",
    ville: "Lyon",
    lat: 45.70210, lng: 4.80691,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "lyon-clb",
    nom: "Lyon (CLB)",
    etablissement: "Centre Léon Bérard",
    ville: "Lyon",
    lat: 45.74188, lng: 4.87756,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "marseille-ipc",
    nom: "Marseille (Paoli)",
    etablissement: "Institut Paoli-Calmettes",
    ville: "Marseille",
    lat: 43.26304, lng: 5.41085,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "marseille-timone",
    nom: "Marseille (Timone)",
    etablissement: "AP-HM – Hôpital de la Timone",
    ville: "Marseille",
    lat: 43.29044, lng: 5.40205,
    actif: true,
    places: { S1: { im: 2, rth: 2 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "martinique-chu",
    nom: "Martinique (CHU)",
    etablissement: "CHU de Martinique – Pierre Zobda-Quitman (La Meynard)",
    ville: "Fort-de-France",
    lat: 14.63324, lng: -61.03804,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "metz-chr",
    nom: "Metz",
    etablissement: "CHR Metz-Thionville – Hôpital de Mercy",
    ville: "Metz",
    lat: 49.08368, lng: 6.24273,
    actif: true,
    places: { S1: { im: 1, rth: 1 }, S2: { im: 1, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "montbeliard",
    nom: "Montbéliard",
    etablissement: "Hôpital Nord Franche-Comté (Trévenans)",
    ville: "Montbéliard",
    lat: 47.57652, lng: 6.87247,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "montpellier-icm",
    nom: "Montpellier (ICM)",
    etablissement: "Institut du Cancer de Montpellier (Val d'Aurelle)",
    ville: "Montpellier",
    lat: 43.64453, lng: 3.83873,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "mulhouse",
    nom: "Mulhouse",
    etablissement: "GHR Mulhouse Sud-Alsace – Hôpital Émile Muller",
    ville: "Mulhouse",
    lat: 47.72476, lng: 7.34364,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "nancy-chru",
    nom: "Nancy (CHRU)",
    etablissement: "CHRU de Nancy – Hôpitaux de Brabois (Vandœuvre-lès-Nancy)",
    ville: "Nancy",
    lat: 48.64776, lng: 6.14672,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "nancy-icl",
    nom: "Nancy (ICL)",
    etablissement: "Institut de Cancérologie de Lorraine – Alexis Vautrin (Vandœuvre-lès-Nancy)",
    ville: "Nancy",
    lat: 48.64833, lng: 6.14457,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "nantes-ico",
    nom: "Nantes (ICO)",
    etablissement: "Institut de Cancérologie de l'Ouest – site René Gauducheau (Saint-Herblain)",
    ville: "Nantes",
    lat: 47.23770, lng: -1.63725,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "nice-cal",
    nom: "Nice (CAL)",
    etablissement: "Centre Antoine Lacassagne",
    ville: "Nice",
    lat: 43.72452, lng: 7.28024,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "nice-chu",
    nom: "Nice (CHU)",
    etablissement: "CHU de Nice – hôpital Pasteur",
    ville: "Nice",
    lat: 43.72622, lng: 7.28026,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "nimes-chu",
    nom: "Nîmes (CHU)",
    etablissement: "CHU de Nîmes – Carémeau",
    ville: "Nîmes",
    lat: 43.82374, lng: 4.32211,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "orleans",
    nom: "Orléans",
    etablissement: "CHU d'Orléans – Nouvel Hôpital (La Source)",
    ville: "Orléans",
    lat: 47.83536, lng: 1.92015,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 2, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "paris",
    nom: "Bichat/Beaujon",
    etablissement: "Claude-Bernard AP-HP",
    ville: "Paris",
    lat: 48.89874, lng: 2.33161,
    actif: false,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "paris-2",
    nom: "Paris Tenon",
    etablissement: "Tenon AP-HP",
    ville: "Paris",
    lat: 48.86606, lng: 2.40169,
    actif: false,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "paris-curie",
    nom: "Paris (Curie)",
    etablissement: "Institut Curie – site Paris (rue d'Ulm)",
    ville: "Paris",
    lat: 48.84340, lng: 2.34463,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "paris-hegp",
    nom: "Paris (HEGP)",
    etablissement: "Hôpital Européen Georges-Pompidou (AP-HP)",
    ville: "Paris",
    lat: 48.83930, lng: 2.27537,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "paris-kremlin-bicetre",
    nom: "Paris (Kremlin-Bicêtre)",
    etablissement: "Hôpital Bicêtre (AP-HP)",
    ville: "Le Kremlin-Bicêtre",
    lat: 48.81033, lng: 2.35066,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "paris-saint-louis",
    nom: "Paris (Saint-Louis)",
    etablissement: "Hôpital Saint-Louis (AP-HP)",
    ville: "Paris",
    lat: 48.87341, lng: 2.36977,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "paris-salpetriere",
    nom: "Paris (Salpêtrière)",
    etablissement: "Hôpital Pitié-Salpêtrière (AP-HP)",
    ville: "Paris",
    lat: 48.83708, lng: 2.36504,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "poitiers-chu",
    nom: "Poitiers (CHU)",
    etablissement: "CHU de Poitiers – La Milétrie",
    ville: "Poitiers",
    lat: 46.55748, lng: 0.38491,
    actif: true,
    places: { S1: { im: 0, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "reims-godinot",
    nom: "Reims (Godinot)",
    etablissement: "Institut Godinot",
    ville: "Reims",
    lat: 49.22670, lng: 4.02416,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "rennes-cem",
    nom: "Rennes (Eugène Marquis)",
    etablissement: "Centre Eugène Marquis (Pontchaillou)",
    ville: "Rennes",
    lat: 48.11976, lng: -1.69565,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "rouen-chb",
    nom: "Rouen (Henri Becquerel)",
    etablissement: "Centre Henri Becquerel",
    ville: "Rouen",
    lat: 49.43956, lng: 1.10605,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 2, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "saint-cloud-curie",
    nom: "Saint-Cloud (Curie)",
    etablissement: "Institut Curie – site Saint-Cloud",
    ville: "Saint-Cloud",
    lat: 48.84523, lng: 2.21792,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "strasbourg-icans",
    nom: "Strasbourg",
    etablissement: "ICANS – Institut de cancérologie Strasbourg Europe (ex-Centre Paul Strauss)",
    ville: "Strasbourg",
    lat: 48.59373, lng: 7.70906,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "toulouse-oncopole",
    nom: "Toulouse (Claudius Regaud)",
    etablissement: "IUCT-Oncopole – Institut Claudius Regaud",
    ville: "Toulouse",
    lat: 43.55630, lng: 1.42650,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
  {
    id: "tours-chru",
    nom: "Tours (CHRU)",
    etablissement: "CHRU de Tours – Hôpital Bretonneau",
    ville: "Tours",
    lat: 47.38703, lng: 0.66990,
    actif: true,
    places: { S1: { im: 0, rth: 1 }, S2: { im: 0, rth: 1 }, S3: { im: 0, rth: 1 } }
  },
  {
    id: "valenciennes",
    nom: "Valenciennes",
    etablissement: "CH de Valenciennes",
    ville: "Valenciennes",
    lat: 50.36073, lng: 3.49897,
    actif: true,
    places: { S1: { im: 1, rth: 0 }, S2: { im: 0, rth: 0 }, S3: { im: 0, rth: 0 } }
  },
  {
    id: "villejuif-gr",
    nom: "Villejuif (Gustave Roussy)",
    etablissement: "Gustave Roussy",
    ville: "Villejuif",
    lat: 48.79415, lng: 2.34842,
    actif: true,
    places: { S1: { im: 2, rth: 0 }, S2: { im: 0, rth: 2 }, S3: { im: 0, rth: 2 } }
  },
];
