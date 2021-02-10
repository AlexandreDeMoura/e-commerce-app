# La Fourche - Test Technique Frontend V2

## Sujet

Le but de ce test technique est de tester ta capacité à t'adapter rapidement lors de l'intégration d'un outil externe disposant d'une documentation exhaustive, et ta capacité à construire un state dans une application React.

Tu vas donc devoir créer une page de recherche de produits en utilisant Algolia, ainsi qu'un panier ecommerce disposant de quelques règles métiers simples.

### Contexte

Ce repo contient une application Next.js préconfiguré, disposant de Typescript mais acceptant le JS, avec Algolia InstantSearch préconfiguré dans la page "/".

Développer en Typescript n'est pas obligatoire, mais constitue un plus (aucun type n'est défini dans le projet par défaut).

**Ce sujet a été écrit pour être fait en 2h, si tu finis avant, tant mieux pour toi, mais c'est comme un marathon, le plus important c'est d'arriver au bout. Et comme dans un marathon, il y a une durée limite : si tu arrives à 4h de travail, arrêtes et rends la copie. Cela ne veut pas dire que le test est raté, il y a forcément quelque chose à tirer de ce travail.**

### Page de recherche

La page de recherche doit être construite avec Algolia InstantSearch, elle doit être la page principale du site (accessible sur /).

La recherche est constituée d'un input de texte pour la recherche, ainsi que des résultats de la recherche. Les résultats de la recherche doivent se mettre à jour automatiquement au fur et à mesure que l'on tape dans l'input. **Pour ceux qui ne connaissent pas Algolia InstantSearch, pas de panique, tout ceci est natif dans l'outil.**

La recherche peut ne pas disposer de pagination, afficher les 20 résultats les plus pertinants sera considéré comme un exercice réussi.
S'il te reste du temps, ajouter une pagination constitue un plus.

Les produits doivent être présentés sous forme de Cards disposant au minimum des éléments suivants : 

- une image
- un nom
- un prix 
- un bouton "Ajouter au panier" ou "Supprimer du panier"

Les Cards doivent être présentées dans une grille, avec 4 éléments par ligne en Desktop, et 2 éléments par ligne en mobile.

Le style de la Card est libre et ne représente pas un critère déterminant dans l'évaluation du test, veille juste a faire quelque chose de lisible.

### Panier

L'application laisse la possibilité d'ajouter des produits à un panier ecommerce.

Le state du panier doit être accessible globalement dans l'application, l'utilisation de librairies de gestion du state est autorisée mais pas obligatoire : fait ce qu'il te plait.

Pour simplifier l'exercice, le panier ne dispose pas d'une gestion de quantités : un produit ne peut être qu'une seule fois dans le panier.

L'utilisateur peut ajouter un produit dans le panier grâce au bouton "Ajouter au panier" disponible sur les Cards produit. SI le produit est déjà dans le panier, le bouton "Ajouter au panier" est remplacé par un bouton "Supprimer du panier" qui a pour action de... supprimer le produit du panier !

Le panier doit être affiché dans une page à part : "/cart". Le panier doit être composé des éléments suivants :

- Le prix total
- La liste des produits, sous forme de liste, avec les informations suivantes pour chaque produit :
    - Le nom du produit
    - Le prix appliqué

Le style du panier est libre, une fois de plus, ce n'est pas un critère d'évaluation, à condition qu'il soit lisible.

### Prix remisés

Le panier peut influencer les prix affichés dans l'application suivant la règle suivante : si le montant total du panier hors remises est supérieur ou égal à 200$, alors tous les produits dont le prix hors remises est supérieur ou égal a 250$ se voient appliquer une remise de 50%.

Les prix remisés doivent être répercutés sur les Cards produit dans les résultats de la recherche, ainsi que dans le panier.

## Documentation

Pour t'aider dans cet exercice, voici des liens de documentations utiles concernant Next.js et Algolia InstantSearch.

Un conseil, reste proche de la documentation, tout ce qui est demandé (hors panier) est natif de Next et Algolia InstantSearch.

- [Next.js](https://nextjs.org/docs/getting-started)
- [Algolia InstantSearch](https://www.algolia.com/products/instantsearch/)
- [Algolia InstantSearch React](https://github.com/algolia/react-instantsearch)
