module.exports = {
  poll: {
    creation: "Création d'un sondage",
    create: "Créer le sondage",
    default: {
      title: "Sondage sans titre",
      description: "",
    },
    placeholder: {
      title: "Titre du sondage (requis)",
      description: "Description du sondage",
    },

    page: {
      x_on_y: 'Page {x} sur {y}',
      insert: {
        before: "Insérer une page avant",
        after: "Insérer une page après",
      },
      default: {
        title: "Page sans titre",
        description: "",
      },
      placeholder: {
        title: "Titre de la page (requis)",
        description: "Description de la page",
      },

      question: {
        x_on_y: "Question {x} sur {y}",
        type: "Type de la question",
        insert: {
          before: "Insérer une question avant",
          after: "Insérer une question après",
        },
        default: {
          title: "Question sans titre",
        },
        placeholder: {
          title: "Titre de la question (requis)",
        },

        proposition: {
          add: "Ajouter une proposition",
          variants: {
            types: {
              Checkbox: "Boutons à choix multiples",
              Radio: "Boutons à choix unique",
              LinearScale: "Échelle linéaire",
            },
            LinearScale: {
              to: 'à'
            }
          },
          default: {
            title: ''
          },
          placeholder: {
            proposition_x: "Proposition n°{x}"
          }
        }
      }
    },
  },
};