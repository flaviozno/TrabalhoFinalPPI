const { Products } = require("../models/index");

const productsData = {
  produtos_paineis_solar: [
    {
      name: "Painel Solar Residencial 300W",
      imgURL:
        "https://www.galaxcommerce.com.br/sistema/upload/1671/produtos/painel-solar-fotovoltaico-60w-resun_2022-07-14_08-16-16_0_273.png",
      price: 899.99,
      description:
        "Este painel solar monocristalino de 300W é perfeito para alimentar sistemas de energia solar residenciais. Possui alta eficiência de conversão e é durável, garantindo uma produção confiável de energia limpa para sua casa.",
      stars: 1,
      amount: 100,
    },
    {
      name: "Painel Solar Portátil 50W",
      imgURL:
        "https://www.galaxcommerce.com.br/sistema/upload/1671/produtos/painel-solar-fotovoltaico-60w-resun_2022-07-14_08-16-16_0_273.png",
      price: 199.99,
      description:
        "O painel solar portátil de 50W é ideal para atividades ao ar livre, como camping e viagens. Sua flexibilidade o torna fácil de transportar e configurar em qualquer lugar, proporcionando uma fonte de energia conveniente e ecológica.",
      stars: 5,
      amount: 100,
    },
    {
      name: "Painel Solar Comercial 500W",
      imgURL:
        "https://www.galaxcommerce.com.br/sistema/upload/1671/produtos/painel-solar-fotovoltaico-60w-resun_2022-07-14_08-16-16_0_273.png",
      price: 1499.99,
      description:
        "Este painel solar policristalino de 500W é projetado para atender às necessidades de energia de negócios e instalações comerciais. Sua construção robusta e eficiência superior o tornam uma escolha excelente para sistemas de grande escala.",
      stars: 4,
      amount: 100,
    },
    {
      name: "Painel Solar Flexível 150W",
      imgURL:
        "https://www.galaxcommerce.com.br/sistema/upload/1671/produtos/painel-solar-fotovoltaico-60w-resun_2022-07-14_08-16-16_0_273.png",
      price: 499.99,
      description:
        "Este painel solar flexível de 150W é altamente adaptável e pode ser instalado em superfícies curvas, como telhados de RVs e barcos. Sua versatilidade o torna uma opção popular para aplicações móveis.",
      stars: 2,
      amount: 100,
    },
    {
      name: "Painel Solar de Alta Eficiência 400W",
      imgURL:
        "https://www.galaxcommerce.com.br/sistema/upload/1671/produtos/painel-solar-fotovoltaico-60w-resun_2022-07-14_08-16-16_0_273.png",
      price: 1299.99,
      description:
        "Este painel solar monocristalino de alta eficiência de 400W é ideal para maximizar a produção de energia em espaços limitados. Sua tecnologia avançada garante uma excelente taxa de conversão de energia solar.",
      stars: 4,
      amount: 100,
    },
  ],
};

async function seed() {
  try {
    await Products.sync({ force: true });
    await Products.bulkCreate(productsData.produtos_paineis_solar);
    console.log("Seeder executado com sucesso!");
  } catch (error) {
    console.error("Erro ao executar o seeder:", error);
  } finally {
    process.exit();
  }
}

seed();
