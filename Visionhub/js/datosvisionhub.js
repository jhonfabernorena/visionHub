const emprendedores = [
    {
        empresa: 1,
        dueño: "Sara Ramires",
        nombreDelNegocio: "La Belleza del Estilo",
        tipoNegocio: "Venta de Ropa",
        descripcion: "Tienda de moda que ofrece las últimas tendencias y estilos para mujeres, hombres y niños. Encuentra prendas de alta calidad y accesorios a la moda.",
        contacto: 3233645063,
        imagen: "ropa.png"
    },
    {
        empresa: 2,
        dueño: "Carlos Rodríguez",
        nombreDelNegocio: "TechGadgets",
        tipoNegocio: "Venta de Electrónicos",
        descripcion: "Tienda especializada en la venta de los últimos gadgets y dispositivos electrónicos. Encuentra desde smartphones y laptops hasta accesorios innovadores.",
        contacto: 5551234567,
        imagen: "electronica.jpg"
    },
    {
        empresa: 3,
        dueño: "Ana García",
        nombreDelNegocio: "GreenEats",
        tipoNegocio: "Restaurante Vegetariano",
        descripcion: "Restaurante que ofrece deliciosas opciones vegetarianas y veganas. Comprometidos con la alimentación saludable y sostenible.",
        contacto: 9998765432,
        imagen: "restaurante.jpeg"
    },
    {
        empresa: 4,
        dueño: "Javier López",
        nombreDelNegocio: "SportFit",
        tipoNegocio: "Venta de Artículos Deportivos",
        descripcion: "Tienda especializada en artículos deportivos para atletas de todos los niveles. Encuentra ropa, calzado y equipos de las mejores marcas.",
        contacto: 7776543210,
        imagen: "deportes.jpeg"
    },
    {
        empresa: 5,
        dueño: "Luisa Martínez",
        nombreDelNegocio: "ArtExpress",
        tipoNegocio: "Galería de Arte",
        descripcion: "Galería que exhibe y vende obras de artistas locales e internacionales. Explora una variedad de estilos artísticos y encuentra la pieza perfecta para tu colección.",
        contacto: 8882345678,
        imagen: "arte.jpeg"
    },
    {
        empresa: 6,
        dueño: "Martín Sánchez",
        nombreDelNegocio: "Café Aromático",
        tipoNegocio: "Cafetería",
        descripcion: "Cafetería acogedora que ofrece una amplia variedad de cafés, tés y repostería deliciosa. El lugar perfecto para disfrutar de un momento de relajación.",
        contacto: 3338765432,
        imagen: "cafeteria.jpeg"
    },
    {
        empresa: 7,
        dueño: "Laura Hernández",
        nombreDelNegocio: "Book Haven",
        tipoNegocio: "Librería",
        descripcion: "Librería que ofrece una extensa colección de libros para todos los amantes de la lectura. Encuentra desde bestsellers hasta joyas literarias desconocidas.",
        contacto: 6669876543,
        imagen: "libreria.jpeg"
    },
    {
        empresa: 8,
        dueño: "Alejandro Castro",
        nombreDelNegocio: "TechSolutions",
        tipoNegocio: "Servicios de Tecnología",
        descripcion: "Empresa especializada en servicios tecnológicos, desde desarrollo de software hasta consultoría en infraestructura. Impulsamos la transformación digital de tu negocio.",
        contacto: 4447654321,
        imagen: "servicio.jpeg"
    },
    {
        empresa: 9,
        dueño: "María Rodríguez",
        nombreDelNegocio: "HealthyBites",
        tipoNegocio: "Restaurante Saludable",
        descripcion: "Restaurante que ofrece opciones saludables y deliciosas para aquellos que buscan mantener un estilo de vida balanceado. Variedad de platos nutritivos y sabrosos.",
        contacto: 5555678901,
        imagen: "restaurante.jpeg"
    },
    {
        empresa: 10,
        dueño: "Ricardo Gómez",
        nombreDelNegocio: "GadgetHub",
        tipoNegocio: "Tienda de Accesorios Electrónicos",
        descripcion: "Tienda especializada en accesorios innovadores para dispositivos electrónicos. Encuentra fundas, cargadores, y gadgets únicos para mejorar tu experiencia tecnológica.",
        contacto: 3212345678,
        imagen: "accesorios_electronicos.png"
    },
    {
        empresa: 11,
        dueño: "Isabel Morales",
        nombreDelNegocio: "GreenThumb",
        tipoNegocio: "Vivero y Jardinería",
        descripcion: "Vivero que ofrece una amplia variedad de plantas, flores y suministros de jardinería. Ayudamos a crear espacios verdes y hermosos.",
        contacto: 9876543210,
        imagen: "vivero_jardineria.jpeg"
    },
    {
        empresa: 12,
        dueño: "Diego Pérez",
        nombreDelNegocio: "FitFuel",
        tipoNegocio: "Venta de Suplementos Nutricionales",
        descripcion: "Tienda especializada en suplementos y productos nutricionales para deportistas y personas interesadas en mantener una dieta equilibrada. Calidad garantizada.",
        contacto: 1112223333,
        imagen: "suplementos_nutricionales.jpg"
    },
    {
        empresa: 13,
        dueño: "Lucía Mendoza",
        nombreDelNegocio: "FashionFusion",
        tipoNegocio: "Boutique de Moda Exclusiva",
        descripcion: "Boutique que ofrece prendas exclusivas y de alta moda para clientes con gustos refinados. Encuentra piezas únicas que destacarán en cualquier ocasión.",
        contacto: 4445556666,
        imagen: "boutique_exclusiva.jpeg"
    },
    {
        empresa: 14,
        dueño: "Roberto Torres",
        nombreDelNegocio: "TechInnovate",
        tipoNegocio: "Desarrollo de Aplicaciones",
        descripcion: "Empresa dedicada al desarrollo de aplicaciones móviles y web. Transformamos ideas en soluciones digitales innovadoras.",
        contacto: 9998887777,
        imagen: "desarrollo_aplicaciones.jpeg"
    },
    {
        empresa: 15,
        dueño: "Carolina Vargas",
        nombreDelNegocio: "FreshMarket",
        tipoNegocio: "Mercado Orgánico",
        descripcion: "Mercado que ofrece productos orgánicos y de origen local. Comprometidos con la sostenibilidad y la alimentación saludable.",
        contacto: 3332221111,
        imagen: "mercado_organico.jpg"
    },
    {
        empresa: 16,
        dueño: "Fernando Navarro",
        nombreDelNegocio: "AdventureGear",
        tipoNegocio: "Equipamiento para Deportes de Aventura",
        descripcion: "Tienda especializada en equipamiento y accesorios para deportes de aventura. Prepara tu próxima expedición con los mejores productos.",
        contacto: 6665554444,
        imagen: "aventura_deportiva.jpeg"
    },
    {
        empresa: 17,
        dueño: "Elena Castillo",
        nombreDelNegocio: "ArtisanCrafts",
        tipoNegocio: "Artesanías Hechas a Mano",
        descripcion: "Tienda que ofrece artesanías únicas y hechas a mano. Cada pieza cuenta una historia y refleja la creatividad de nuestros artesanos.",
        contacto: 7778889999,
        imagen: "artesanias_hechas_a_mano.jpg"
    },
    {
        empresa: 18,
        dueño: "Jorge Ramírez",
        nombreDelNegocio: "DigitalStudio",
        tipoNegocio: "Estudio de Diseño Gráfico",
        descripcion: "Estudio especializado en diseño gráfico y branding. Creamos identidades visuales impactantes y atractivas para empresas de todos los tamaños.",
        contacto: 2223334444,
        imagen: "estudio_diseno.jpg"
    },
    {
        empresa: 19,
        dueño: "Silvia Soto",
        nombreDelNegocio: "SweetTreats",
        tipoNegocio: "Pastelería Creativa",
        descripcion: "Pastelería que ofrece deliciosos postres y pasteles creativos para celebrar ocasiones especiales. Endulza tu vida con nuestras creaciones.",
        contacto: 9994443333,
        imagen: "pasteleria_creativa.jpeg"
    },
    {
        empresa: 20,
        dueño: "Héctor Flores",
        nombreDelNegocio: "TechSupport",
        tipoNegocio: "Soporte Técnico",
        descripcion: "Empresa de soporte técnico especializada en resolver problemas informáticos y brindar asesoría tecnológica. Garantizamos soluciones rápidas y efectivas.",
        contacto: 1119998888,
        imagen: "soporte_tecnico.jpg"
    },
    {
        empresa: 21,
        dueño: "Patricia Morales",
        nombreDelNegocio: "HomeDeco",
        tipoNegocio: "Decoración del Hogar",
        descripcion: "Tienda especializada en artículos de decoración para el hogar. Encuentra muebles, accesorios y objetos decorativos para crear espacios acogedores.",
        contacto: 5556667777,
        imagen: "decoracion_hogar.jpg"
    },
    {
        empresa: 22,
        dueño: "Miguel Ángel González",
        nombreDelNegocio: "TravelExplorer",
        tipoNegocio: "Agencia de Viajes",
        descripcion: "Agencia de viajes que ofrece experiencias únicas y destinos emocionantes. Planifica tu próxima aventura con nosotros.",
        contacto: 9876543210,
        imagen: "agencia_viajes.jpeg"
    },
    {
        empresa: 23,
        dueño: "Carmen García",
        nombreDelNegocio: "PetParadise",
        tipoNegocio: "Tienda de Productos para Mascotas",
        descripcion: "Tienda con una amplia variedad de productos para mascotas. Desde alimentos hasta juguetes, todo lo que necesitas para consentir a tu mascota.",
        contacto: 1112223333,
        imagen: "productos_mascotas.jpg"
    },
    {
        empresa: 24,
        dueño: "Pablo Vargas",
        nombreDelNegocio: "SoundScape",
        tipoNegocio: "Tienda de Equipos de Audio",
        descripcion: "Tienda especializada en equipos de audio de alta calidad. Encuentra auriculares, altavoces y accesorios para disfrutar de tu música favorita.",
        contacto: 9998887777,
        imagen: "equipos_audio.jpg"
    },
    {
        empresa: 25,
        dueño: "Valeria Sánchez",
        nombreDelNegocio: "FashionKids",
        tipoNegocio: "Ropa Infantil",
        descripcion: "Tienda de moda infantil con las últimas tendencias y estilos para niños. Descubre ropa cómoda y a la moda para los más pequeños.",
        contacto: 7778889999,
        imagen: "ropa_infantil.jpeg"
    },
    {
        empresa: 26,
        dueño: "Javier Mendoza",
        nombreDelNegocio: "TechRecycle",
        tipoNegocio: "Reciclaje de Electrónicos",
        descripcion: "Empresa dedicada al reciclaje responsable de dispositivos electrónicos. Contribuimos a la preservación del medio ambiente.",
        contacto: 3334445555,
        imagen: "reciclaje_electronicos.jpg"
    },
    {
        empresa: 27,
        dueño: "Lorena Torres",
        nombreDelNegocio: "FloralDesign",
        tipoNegocio: "Diseño Floral",
        descripcion: "Servicio de diseño floral para eventos y ocasiones especiales. Crea ambientes elegantes y románticos con arreglos florales únicos.",
        contacto: 6665554444,
        imagen: "diseno_floral.jpeg"
    },
    {
        empresa: 28,
        dueño: "Gabriel Jiménez",
        nombreDelNegocio: "GameHaven",
        tipoNegocio: "Tienda de Videojuegos",
        descripcion: "Tienda especializada en videojuegos para todas las plataformas. Encuentra los últimos lanzamientos y clásicos favoritos.",
        contacto: 2223334444,
        imagen: "tienda_videojuegos.jpg"
    },
    {
        empresa: 29,
        dueño: "Mariana Soto",
        nombreDelNegocio: "SustainableStyle",
        tipoNegocio: "Moda Sostenible",
        descripcion: "Tienda de moda comprometida con la sostenibilidad. Encuentra prendas de calidad con un enfoque ético y ecológico.",
        contacto: 9991112222,
        imagen: "moda_sostenible.jpeg"
    },
    {
        empresa: 30,
        dueño: "Raúl Torres",
        nombreDelNegocio: "FitFusion",
        tipoNegocio: "Gimnasio y Clases Fitness",
        descripcion: "Gimnasio que ofrece una variedad de clases fitness y programas de entrenamiento personalizado. Alcanza tus metas de forma saludable y divertida.",
        contacto: 8887776666,
        imagen: "gimnasio_fitness.jpg"
    },
    {
        empresa: 31,
        dueño: "Natalia Cruz",
        nombreDelNegocio: "TechLearn",
        tipoNegocio: "Cursos de Tecnología",
        descripcion: "Plataforma educativa que ofrece cursos de tecnología y programación. Aprende nuevas habilidades y potencia tu carrera.",
        contacto: 4443332222,
        imagen: "cursos_tecnologia.jpg"
    },
    {
        empresa: 32,
        dueño: "Federico Díaz",
        nombreDelNegocio: "OutdoorAdventures",
        tipoNegocio: "Excursiones y Actividades al Aire Libre",
        descripcion: "Empresa que organiza excursiones y actividades al aire libre. Descubre la naturaleza y vive aventuras emocionantes.",
        contacto: 1112223333,
        imagen: "aventuras_al_aire_libre.jpeg"
    },
    {
        empresa: 33,
        dueño: "Vanessa Flores",
        nombreDelNegocio: "BeautyGlow",
        tipoNegocio: "Estudio de Belleza",
        descripcion: "Estudio de belleza que ofrece servicios de maquillaje, peinado y tratamientos faciales. Resalta tu belleza natural con nuestros profesionales.",
        contacto: 9994445555,
        imagen: "estudio_belleza.jpg"
    },
    {
        empresa: 34,
        dueño: "Pedro Márquez",
        nombreDelNegocio: "AutoCare",
        tipoNegocio: "Cuidado de Automóviles",
        descripcion: "Servicio completo de cuidado y mantenimiento de automóviles. Mantén tu vehículo en óptimas condiciones con nuestros expertos.",
        contacto: 7778889999,
        imagen: "cuidado_automoviles.jpg"
    },
    {
        empresa: 35,
        dueño: "Adriana Gutiérrez",
        nombreDelNegocio: "NatureVibes",
        tipoNegocio: "Tienda de Productos Naturales",
        descripcion: "Tienda que ofrece productos naturales y orgánicos. Priorizamos tu bienestar y el cuidado del medio ambiente.",
        contacto: 6667778888,
        imagen: "productos_naturales.jpg"
    },
    {
        empresa: 36,
        dueño: "Hugo Ramírez",
        nombreDelNegocio: "TechRepair",
        tipoNegocio: "Reparación de Dispositivos Electrónicos",
        descripcion: "Servicio de reparación de dispositivos electrónicos. Devolvemos la funcionalidad a tus gadgets favoritos.",
        contacto: 3334445555,
        imagen: "reparacion_electronica.jpeg"
    },
    {
        empresa: 37,
        dueño: "Rosa Martínez",
        nombreDelNegocio: "ArtCafe",
        tipoNegocio: "Café y Galería de Arte",
        descripcion: "Café que fusiona el placer del café con la apreciación del arte. Disfruta de bebidas deliciosas mientras exploras exposiciones artísticas.",
        contacto: 8887776666,
        imagen: "cafe_galeria_arte.jpg"
    },
    {
        empresa: 38,
        dueño: "Alejandra Castro",
        nombreDelNegocio: "EcoLiving",
        tipoNegocio: "Productos Ecológicos para el Hogar",
        descripcion: "Tienda que ofrece productos ecológicos y sostenibles para el hogar. Cuida el planeta mientras disfrutas de artículos de calidad.",
        contacto: 1112223333,
        imagen: "productos_ecologicos.jpg"
    },
    {
        empresa: 39,
        dueño: "Martina Sánchez",
        nombreDelNegocio: "BikeAdventures",
        tipoNegocio: "Tienda de Bicicletas y Accesorios",
        descripcion: "Tienda especializada en bicicletas, accesorios y servicios para amantes del ciclismo. Explora nuevas rutas con la mejor equipación.",
        contacto: 9998887777,
        imagen: "tienda_bicicletas.jpg"
    },
    {
        empresa: 40,
        dueño: "Rodrigo Torres",
        nombreDelNegocio: "InnoTech",
        tipoNegocio: "Innovación y Desarrollo Tecnológico",
        descripcion: "Empresa dedicada a la investigación, desarrollo e implementación de soluciones tecnológicas avanzadas. Impulsamos la innovación en todas las industrias.",
        contacto: 4445556666,
        imagen: "innovacion_tecnologica.jpeg"
    } ,
    {
        empresa: 41,
        dueño: "Ana Ramírez",
        nombreDelNegocio: "YogaVibes",
        tipoNegocio: "Estudio de Yoga",
        descripcion: "Estudio de yoga que ofrece clases para todos los niveles. Encuentra paz y equilibrio a través de prácticas de yoga y meditación.",
        contacto: 5554443333,
        imagen: "yoga_estudio.jpg"
    },
    {
        empresa: 42,
        dueño: "José Rodríguez",
        nombreDelNegocio: "CulinaryCraft",
        tipoNegocio: "Escuela de Cocina",
        descripcion: "Escuela de cocina que ofrece cursos para aficionados y profesionales. Aprende técnicas culinarias y descubre el arte de la gastronomía.",
        contacto: 9876543210,
        imagen: "escuela_cocina.jpg"
    },
    {
        empresa: 43,
        dueño: "Alicia Mendoza",
        nombreDelNegocio: "PetVet",
        tipoNegocio: "Clínica Veterinaria",
        descripcion: "Clínica veterinaria que ofrece servicios de atención médica y cuidado para mascotas. Nuestro equipo de profesionales está comprometido con la salud animal.",
        contacto: 1112223333,
        imagen: "clinica_veterinaria.jpeg"
    },
    {
        empresa: 44,
        dueño: "Carlos Soto",
        nombreDelNegocio: "GamerHaven",
        tipoNegocio: "Centro de Juegos y Entretenimiento",
        descripcion: "Centro de juegos con la última tecnología en consolas y PC gaming. Disfruta de competiciones, torneos y experiencias inmersivas.",
        contacto: 9998887777,
        imagen: "centro_juegos.jpeg"
    },
    {
        empresa: 45,
        dueño: "Gabriela Torres",
        nombreDelNegocio: "FashionFix",
        tipoNegocio: "Ropa de Moda Sostenible",
        descripcion: "Tienda que ofrece moda sostenible y ética. Descubre prendas elegantes con un enfoque en la responsabilidad ambiental.",
        contacto: 7778889999,
        imagen: "moda_sostenible.jpg"
    },
    {
        empresa: 46,
        dueño: "Jorge Márquez",
        nombreDelNegocio: "TechLab",
        tipoNegocio: "Laboratorio de Investigación Tecnológica",
        descripcion: "Laboratorio dedicado a la investigación y desarrollo tecnológico. Colaboramos con empresas e instituciones para impulsar la innovación.",
        contacto: 3334445555,
        imagen: "laboratorio_tecnologico.jpg"
    },
    {
        empresa: 47,
        dueño: "Laura Vargas",
        nombreDelNegocio: "TeaTime",
        tipoNegocio: "Tienda de Tés Especializados",
        descripcion: "Tienda que ofrece una amplia variedad de tés de alta calidad. Descubre sabores únicos y disfruta de momentos relajantes.",
        contacto: 6665554444,
        imagen: "tienda_tes.jpeg"
    },
    {
        empresa: 48,
        dueño: "Ricardo Sánchez",
        nombreDelNegocio: "DigitalMarketingPro",
        tipoNegocio: "Agencia de Marketing Digital",
        descripcion: "Agencia especializada en estrategias de marketing digital. Potenciamos la presencia online y el crecimiento de empresas en el mundo digital.",
        contacto: 2223334444,
        imagen: "marketing_digital.jpg"
    },
    {
        empresa: 49,
        dueño: "Catalina Gómez",
        nombreDelNegocio: "CutePaws",
        tipoNegocio: "Tienda de Productos para Mascotas",
        descripcion: "Tienda especializada en productos adorables para mascotas. Encuentra juguetes, accesorios y ropa para consentir a tu amigo peludo.",
        contacto: 9991112222,
        imagen: "productos_mascotas_cute.jpg"
    },
    {
        empresa: 50,
        dueño: "Manuel Díaz",
        nombreDelNegocio: "TechTalk",
        tipoNegocio: "Conferencias y Eventos Tecnológicos",
        descripcion: "Plataforma que organiza conferencias y eventos sobre las últimas tendencias tecnológicas. Conectamos a profesionales y entusiastas del mundo digital.",
        contacto: 4443332222,
        imagen: "conferencias_tecnologicas.jpg"
    }
    


]

