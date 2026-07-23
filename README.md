# Carte des centres EAP — DQPRM 2026

Carte interactive des centres, consultable par toute personne ayant le lien.
Les modifications faites depuis la page (fiches, places, positions, centres
activés/désactivés, créations, machines) sont **enregistrées automatiquement
dans une base partagée** : tout le monde voit la dernière version, sans aucun
fichier à télécharger ni remplacer.

Le dépôt contient :

| Fichier | Rôle |
|---|---|
| `index.html` | la page (carte, fiches, édition) |
| `config.js` | l'adresse et la clé publique de la base — **à compléter (étape 1)** |
| `supabase.sql` | le script qui crée la base — **à coller une fois (étape 1)** |
| `data.js` / `infos.js` | les données de départ : elles remplissent la base à la première ouverture, puis servent de secours si la base est injoignable |
| `README.md` | ce guide |

Installation complète : **~15 minutes**, deux comptes gratuits (Supabase et GitHub).

---

## Étape 1 — Créer la base partagée (Supabase, ~7 min)

1. Allez sur **https://supabase.com** → *Start your project* → créez un compte
   (adresse mail ou compte GitHub).
2. *New project* :
   - **Name** : `carte-eap` (libre) ;
   - **Database password** : choisissez-en un et gardez-le quelque part
     (il ne sert pas à la carte, seulement à l'administration) ;
   - **Region** : `Central EU (Frankfurt)` ou `West EU (Paris)` ;
   - *Create new project*, patientez ~1 minute.
3. Dans le menu de gauche : **SQL Editor** → *New query* →
   **collez tout le contenu du fichier `supabase.sql`** → bouton **Run**.
   Le message `Success. No rows returned` est normal.
4. Menu de gauche : **Project Settings** (roue dentée) → **Data API** :
   - copiez **Project URL** (forme `https://xxxxxxxx.supabase.co`) ;
   - copiez la **clé publique** du projet : elle s'appelle **`anon` `public`**
     (ou **publishable** dans les interfaces récentes). *Ne prenez jamais la
     clé `service_role` / secrète.*
5. Ouvrez `config.js` et collez les deux valeurs entre les guillemets :

   ```js
   var CONFIG_SUPABASE = {
     url: "https://xxxxxxxx.supabase.co",
     cle: "eyJhbGci... (ou sb_publishable_...)"
   };
   ```

> La clé publique est faite pour être visible dans une page web. Les droits
> réels sont fixés côté base par `supabase.sql` : lire et écrire, oui ;
> supprimer ou toucher au journal, non.

## Étape 2 — Mettre la page en ligne (GitHub Pages, ~7 min)

1. Créez un compte sur **https://github.com** si besoin.
2. En haut à droite : **+** → *New repository* :
   - **Repository name** : `carte-eap` ;
   - visibilité **Public** (nécessaire pour Pages en gratuit) ;
   - *Create repository*.
3. Sur la page du dépôt : **uploading an existing file** (ou *Add file →
   Upload files*) → glissez les **5 fichiers** : `index.html`, `config.js`
   (complété à l'étape 1), `data.js`, `infos.js`, `README.md` →
   bouton vert **Commit changes**.
4. **Settings** (onglet du dépôt) → menu **Pages** :
   - *Source* : `Deploy from a branch` ;
   - *Branch* : `main` et `/ (root)` → **Save**.
5. Après ~1 minute, l'adresse publique apparaît en haut de cette page
   Pages : `https://votre-pseudo.github.io/carte-eap/`.
   **C'est le lien à partager avec la promo.**

## Étape 3 — Vérifier que tout fonctionne

1. Ouvrez le lien : la carte s'affiche, **sans bandeau orange** en bas
   (bandeau = base non trouvée, voir Dépannage). À la toute première
   ouverture, la page remplit la base avec les données de départ,
   automatiquement.
2. Ouvrez un centre → *Modifier les infos* → changez un détail → *Valider*.
3. Ouvrez le même lien dans un autre navigateur (ou en navigation privée,
   ou sur votre téléphone) : la modification est là. C'est gagné.

## Étape 4 (recommandée) — Éviter la mise en pause automatique (~5 min)

Sur l'offre gratuite, Supabase met un projet **en pause après ~1 semaine sans
aucune requête**. Une carte consultée par vagues finira par tomber dessus.
La parade : une visite automatique quotidienne de la base — une requête
minuscule (lecture d'une ligne), qui compte comme de l'activité et maintient
le projet éveillé indéfiniment.

Le service **cron-job.org** (gratuit, dédié aux tâches planifiées) fait ça
très bien :

1. Créez un compte sur **https://cron-job.org** (adresse mail).
2. **Create cronjob** :
   - **Title** : `Réveil carte EAP` ;
   - **URL** : votre *Project URL* suivie du chemin de lecture, soit
     `https://xxxxxxxx.supabase.co/rest/v1/reglages?select=cle&limit=1`
     (remplacez `xxxxxxxx` comme dans `config.js`) ;
   - **Schedule** : `Every day` à l'heure de votre choix (une fois par jour
     suffit très largement).
3. Onglet **Advanced** → section **Headers**, ajoutez **deux** en-têtes
   (sans eux, Supabase refuse la requête) :
   - `apikey` → votre clé publique (la même que dans `config.js`) ;
   - `Authorization` → `Bearer ` suivi de cette même clé (avec l'espace
     après `Bearer`).
4. Laissez les **notifications d'échec** activées : si un jour la requête
   échoue, vous recevez un mail — c'est aussi une surveillance gratuite de
   la base.
5. **Create** / **Save**, puis lancez un test (bouton d'exécution immédiate
   dans le détail de la tâche) : le statut doit être **200 OK**.

C'est tout : la base reçoit une visite par jour, la pause n'arrive jamais.
La clé utilisée est la clé *publique*, déjà visible dans `config.js` — vous
ne confiez aucun secret à ce service.

> Pourquoi pas une tâche planifiée GitHub Actions, directement dans le
> dépôt ? Parce que GitHub **suspend les tâches planifiées après 60 jours
> sans nouveau commit** sur le dépôt : pour un projet qui ne bouge pas
> pendant des mois, cela ne ferait que déplacer le problème.

---

## Au quotidien

**Modifier** : tout se fait depuis la page (fiches, places, position des
points, rubrique « Gérer les centres » pour activer/désactiver/créer,
machines). Chaque validation est enregistrée pour tout le monde ;
les autres la voient à leur prochain chargement de la page.

**Éditions simultanées** : si deux personnes modifient *le même centre* en
même temps, la dernière validation gagne (le journal garde l'autre).
Deux centres différents ne se gênent jamais.

**Sauvegarde ponctuelle** : en bas de « Gérer les centres », deux petits
liens discrets `data.js` · `infos.js` téléchargent une copie complète de
l'état actuel. À faire de temps en temps, par précaution.

## Mettre à jour la carte (nouvelles fonctionnalités)

La page est un simple fichier : pour la faire évoluer, remplacez
`index.html` dans le dépôt :

1. Sur GitHub, ouvrez `index.html` → icône **crayon** (ou supprimez-le et
   re-uploadez le nouveau) → collez la nouvelle version → *Commit changes*.
2. Une minute plus tard, tout le monde a la nouvelle version au
   rechargement. **Les données ne bougent pas** : elles vivent dans la base,
   pas dans la page.

Si une évolution future demandait un changement de structure de la base,
elle arriverait avec un petit fichier SQL à coller une fois dans
*SQL Editor*, comme à l'étape 1.

## Restaurer un état précédent (journal)

Chaque écriture est archivée automatiquement dans la table `journal`.
Pour revenir en arrière sur un centre :

1. Supabase → **SQL Editor** → *New query*, puis pour voir l'historique
   (remplacez `lille-col` par l'identifiant du centre) :

   ```sql
   select id, quand, valeur->'data'->>'nom' as nom
   from public.journal
   where cible = 'centres' and cle = 'lille-col'
   order by quand desc;
   ```

2. Repérez la ligne à restaurer (colonne `id`, par exemple `123`), puis :

   ```sql
   update public.centres c
   set data = j.valeur->'data', infos = j.valeur->'infos'
   from public.journal j
   where j.id = 123 and c.id = j.cle;
   ```

3. Rechargez la carte : le centre est revenu à cet état (et cette
   restauration est elle-même journalisée).

L'identifiant d'un centre est visible dans l'adresse de sa ligne du
journal, ou dans **Table Editor → centres** (colonne `id`).

## Dépannage

- **Bandeau orange « Base non configurée »** : `config.js` est vide ou
  absent du dépôt → refaites l'étape 1.5 et re-uploadez `config.js`.
- **Bandeau orange « Base injoignable »** : vérifiez l'URL et la clé dans
  `config.js` (sans espace ni retour à la ligne) ; vérifiez que le projet
  Supabase est actif. Sur l'offre gratuite, un projet sans aucune requête
  pendant ~1 semaine est mis en pause ; il se relance en un clic depuis le
  tableau de bord Supabase (*Restore project*) — et **l'étape 4 ci-dessus
  empêche définitivement que cela arrive**.
- **« Enregistrement impossible »** au moment de valider : problème de
  connexion passager — revalidez la fiche un peu plus tard (vos saisies
  restent affichées tant que la page n'est pas rechargée).
- **Page blanche ou carte grise** : videz le cache (Ctrl+F5) ; vérifiez que
  les 5 fichiers sont bien à la racine du dépôt.
- **Quota** : l'offre gratuite Supabase (500 Mo, 5 Go de trafic/mois) est
  très largement suffisante pour cet usage.

## Qui peut modifier ?

Toute personne disposant du lien — c'est voulu (pas de comptes, la promo
édite librement). Les garde-fous : rien ne peut être *supprimé* avec la clé
publique (les centres se désactivent, ils ne s'effacent pas), et le journal
conserve chaque état pour restauration. Si un jour un contrôle d'accès
devient nécessaire, il pourra s'ajouter côté base sans changer la page.
