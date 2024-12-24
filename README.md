# Système de Gestion des Factures

## **Présentation du Projet**

Le **Système de Gestion des Factures** est une solution logicielle complète conçue pour simplifier le processus de facturation des entreprises. Il offre des fonctionnalités telles que la gestion des contacts, la création de factures, la collecte de paiements, la génération de rapports, et bien plus encore. Le système est développé en utilisant **PHP**, **MySQL**, **HTML**, **Tailwind CSS**, et **JavaScript**, en suivant l'architecture **Modèle-Vue-Contrôleur (MVC)** pour assurer une scalabilité et une maintenabilité optimales.

---

## **Fonctionnalités Principales**

1. **Gestion des Contacts**
   - Ajouter, mettre à jour et supprimer des contacts.
   - Afficher les profils des contacts avec images.
   - Catégoriser les contacts à l'aide de tags.

2. **Activité des Contacts**
   - Suivre les interactions avec les contacts (par exemple, emails, notes).

3. **Gestion des Factures**
   - Créer et gérer des factures.
   - Prise en charge des factures récurrentes.
   - Envoyer des rappels de paiement et des confirmations de paiement.

4. **Collecte de Paiements**
   - Intégration avec des passerelles de paiement (par exemple, Stripe, PayPal).
   - Suivi des paiements et génération de reçus.

5. **Rapports**
   - Générer des rapports pour les revenus, les dépenses et les transactions.
   - Plus de 8 outils de reporting personnalisables.

6. **Tableau de Bord**
   - Un tableau de bord attrayant pour des insights rapides sur l'activité commerciale.
   - Aperçu des indicateurs clés (par exemple, revenus totaux, factures en attente).

7. **Journaux d'Audit**
   - Suivre les actions des utilisateurs à des fins d'audit.

8. **Support Multi-Utilisateurs**
   - Prise en charge de plusieurs utilisateurs avec des rôles basés sur les permissions.

9. **Intégration Email**
   - Envoyer des emails directement depuis le portail en utilisant SMTP.
   - Modèles d'email personnalisables.

10. **Sauvegarde de la Base de Données**
    - Sauvegarde en un clic de la base de données pour la sécurité des données.

11. **Personnalisation**
    - Interface entièrement personnalisée sans mentions de "Powered By" ou de copyright.

12. **Optimisation des Performances**
    - Optimisé pour gérer des millions de transactions.

---

## **Technologies Utilisées**

- **Backend** : PHP
- **Base de Données** : MySQL
- **Frontend** : HTML, Tailwind CSS, JavaScript
- **Architecture** : Modèle-Vue-Contrôleur (MVC)
- **Passerelle de Paiement** : Stripe / PayPal
- **Email** : SMTP

---

## **Structure du Projet**

Le projet suit l'architecture **MVC** pour une séparation claire des responsabilités. Voici la structure du répertoire :

```text
invoice-management/
├── app/
│ ├── controllers/
│ │ ├── AuthController.php
│ │ ├── DashboardController.php
│ │ └── ...
│ ├── models/
│ │ ├── UserModel.php
│ │ ├── ContactModel.php
│ │ └── ...
│ ├── views/
│ │ ├── auth/
│ │ │ ├── login.php
│ │ │ ├── register.php
│ │ ├── dashboard/
│ │ │ ├── index.php
│ │ └── ...
│ ├── routes/
│ │ └── web.php
│ ├── core/
│ │ ├── Database.php
│ │ ├── Controller.php
│ │ └── Model.php
├── public/
│ ├── assets/
│ │ ├── css/
│ │ │ └── tailwind.css
│ │ ├── js/
│ │ │ └── main.js
│ │ └── images/
│ └── index.php
├── .env
├── composer.json
└── README.md
```
---

## **Architecture MVC**

### **1. Modèle (Model)**
Le **Modèle** représente les données et la logique métier. Il interagit avec la base de données et effectue des opérations CRUD (Create, Read, Update, Delete).

### **2. Vue (View)**
La **Vue** est responsable de l'interface utilisateur. Elle utilise **HTML** et **Tailwind CSS** pour la mise en page et le style.

### **3. Contrôleur (Controller)**
Le **Contrôleur** agit comme un intermédiaire entre le Modèle et la Vue. Il traite les requêtes de l'utilisateur, manipule les données via le Modèle, et renvoie la réponse à la Vue.

---

## **Installation et Configuration**

1. **Cloner le Projet**
   ```bash
   git clone https://github.com/silatchomclara07/y-note.git
   ```

2. **Installer les Dépendances**

    -   Assurez-vous que Composer est installé.

    -   Exécutez la commande suivante pour installer les dépendances :
```bash
composer install    
```


