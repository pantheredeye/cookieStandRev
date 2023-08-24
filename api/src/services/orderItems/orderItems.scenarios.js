export const standard = defineScenario({
  orderItem: {
    one: {
      data: {
        quantity: 6183914,
        item: {
          create: {
            name: "String",
            description: "String",
            price: 2022318.488642183,
            quantity: 7787852,
          },
        },
        order: {
          create: {
            orderNumber: "String",
            paymentMethod: "String",
            status: "String",
            user: {
              create: {
                name: "String",
                email: "String924226",
                address: "String",
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        quantity: 7190492,
        item: {
          create: {
            name: "String",
            description: "String",
            price: 2874136.0359813273,
            quantity: 4256160,
          },
        },
        order: {
          create: {
            orderNumber: "String",
            paymentMethod: "String",
            status: "String",
            user: {
              create: {
                name: "String",
                email: "String3194906",
                address: "String",
              },
            },
          },
        },
      },
    },
  },
});
