export const standard = defineScenario({
  order: {
    one: {
      data: {
        orderNumber: "String",
        paymentMethod: "String",
        status: "String",
        user: {
          create: { name: "String", email: "String9447368", address: "String" },
        },
      },
    },
    two: {
      data: {
        orderNumber: "String",
        paymentMethod: "String",
        status: "String",
        user: {
          create: { name: "String", email: "String644677", address: "String" },
        },
      },
    },
  },
});
