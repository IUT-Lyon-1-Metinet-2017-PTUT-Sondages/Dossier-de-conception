module.exports = {
  poll: {
    creation: "Poll creation",
    create: "Create the poll",
    default: {
      title: "Poll without title",
      description: "",
    },
    placeholder: {
      title: "Poll's title (required)",
      description: "Poll's description",
    },

    page: {
      x_on_y: 'Page {x} on {y}',
      insert: {
        before: "Insert a page before",
        after: "Insert a page after",
      },
      default: {
        title: "Page without title",
        description: "",
      },
      placeholder: {
        title: "Page's title (required)",
        description: "Page's description",
      },

      question: {
        x_on_y: "Question {x} on {y}",
        type: "Question's type",
        insert: {
          before: "Insert a question before",
          after: "Insert a question after",
        },
        default: {
          title: "Question without title",
        },
        placeholder: {
          title: "Question's title (required)",
        },

        proposition: {
          add: "Add a proposition",
          variants: {
            types: {
              Checkbox: "Multiple choice buttons",
              Radio: "Unique choice buttons",
              LinearScale: "Linear scale",
            },
            LinearScale: {
              to: 'to'
            }
          },
          default: {
            title: ''
          },
          placeholder: {
            proposition_x: "Proposition #{x}"
          }
        }
      }
    },
  },
};