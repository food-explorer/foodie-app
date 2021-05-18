export default {
  colors: {
    "brand": {
      "50": "#FCE8E9",
      "100": "#F7BFC2",
      "200": "#F2979A",
      "300": "#ED6E73",
      "400": "#E8454C",
      "500": "#E8454C",
      "600": "#B5171D",
      "700": "#881116",
      "800": "#5B0B0E",
      "900": "#2D0607"
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Heading: {
      variants: {
        "brand": {
          color: "brand.400",
        },
      }
    }
  },
}