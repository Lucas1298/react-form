export const inputs = [
  {
    id: 1,
    name: "tasa",
    type: "text",
    errorMessage:
      "Solo numeros",
    label: "Tasa",
    pattern: "^[0-9]+([.][0-9]+)?$",
    required: true,
  },
  {
    id: 2,
    name: "diasAdelantado",
    type: "text",
    errorMessage:
      "Solo numeros",
    label: "Dias Adelantado",
    pattern: "^[0-9]+([.][0-9]+)?$",
    required: true,
  },
  {
    id: 3,
    name: "impuestoBruto",
    type: "text",
    errorMessage:
      "Solo numeros",
    label: "Importe Bruto",
    pattern: "^[0-9]+([.][0-9]+)?$",
    required: true,
  },
  {
    id: 4,
    name: "porcentaje",
    type: "text",
    errorMessage:
      "Solo numeros",
    label: "Arancel",
    pattern: "^[0-9]+([.][0-9]+)?$",
    required: true,
  },
  {
    id: 5,
    name: "cf",
    type: "text",
    errorMessage:
      "Solo numeros",
    label: "CF",
    pattern: "^[0-9]+([.][0-9]+)?$",
    required: true,
  },
  {
    id: 6,
    name: "promo",
    type: "text",
    errorMessage:
      "Solo numeros",
    label: "Promo",
    pattern: "^[0-9]+([.][0-9]+)?$",
    required: true,
  }
];