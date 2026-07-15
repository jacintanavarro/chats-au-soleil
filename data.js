const destinations = [
  // 01 — IBIZA (most expensive)
  {
    number: "01",
    place: "Ibiza",
    country: "España",
    layout: "single",
    properties: [
      {
        name: "Canbibi",
        location: "Es Cubells, Ibiza",
        image: "https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/2759/Villa_in_Ibiza_014-1769459466674.jpg?tr=w-1080",
        url: "https://boutique-homes.com/property/canbibi?checkInDate=2026-08-24&checkOutDate=2026-08-30&adults=6",
        dates: "24–30 agosto 2026 (6 noches)",
        capacity: "5 habitaciones, 5 baños · hasta 10 huéspedes",
        description: "Villa construida desde cero por sus dueños en el 'triángulo dorado' de Ibiza. Seis niveles, piscina en la azotea con chiringuito propio, gimnasio exterior y vistas a la bahía.",
        priceTotal: "23.485 €",
        pricePerNight: "3.492 €/noche antes de tasas",
        pricePerPerson: "3.914 €/persona",
        status: "available",
        statusLabel: "Disponible"
      }
    ]
  },
  // 02 — CERDEÑA
  {
    number: "02",
    place: "Cerdeña",
    country: "Italia",
    layout: "stack",
    properties: [
      {
        name: "Catamarán Lagoon 46",
        location: "Marina di Cugnana, Cerdeña",
        image: "https://static.theglobesailor.com/1842x600/filters:quality(60)/filters:no_upscale()/bsboat/lagoon-46-952d34cf-15c3-44d0-822a-3ece0eb55952.jpg",
        url: "https://www.globesailor.es/alquiler-barco-57584-1630.html?from=2026-08-22&to=2026-08-29",
        dates: "22–29 agosto 2026 (7 noches)",
        capacity: "3 cabinas dobles · 6 plazas · con patrón",
        description: "Catamarán de 2022 con patrón incluido, saliendo de la Costa Esmeralda. Aire acondicionado, desalinizadora, generador. Comfort Package y patrón son obligatorios.",
        priceTotal: "16.250 € (base)",
        pricePerNight: null,
        pricePerPerson: "2.708 €+/persona",
        status: "warning",
        statusLabel: "Faltan comida, combustible y amarres"
      },
      {
        name: "Villa Sara",
        location: "Lotzorai, Cerdeña",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-13028870/original/71b9bc62-1f20-4280-98aa-27d1c1d4e649.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/13028870",
        dates: "23–29 agosto 2026",
        capacity: "4 habitaciones · hasta 13 huéspedes",
        description: "Piscina climatizada de agua salada dividida en dos áreas, zona de hidromasaje cubierta, futbolín y ping-pong. Valorada 4.87/5 en 101 reseñas.",
        priceTotal: null,
        pricePerNight: null,
        pricePerPerson: null,
        status: "unavailable",
        statusLabel: "Fechas no disponibles"
      }
    ]
  },
  // 03 — CINQUE TERRE / LIGURIA
  {
    number: "03",
    place: "Cinque Terre",
    country: "Liguria, Italia",
    layout: "single",
    properties: [
      {
        name: "Italian Riviera Escape",
        location: "Monterosso al Mare, Liguria",
        image: "https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/692/vacation_rentals_monterosso_italy_014-1738269499344.jpg?tr=w-1080",
        url: "https://boutique-homes.com/property/italian-riviera-escape?checkInDate=2026-08-24&checkOutDate=2026-08-30&adults=6",
        dates: "24–30 agosto 2026 (6 noches)",
        capacity: "5 habitaciones, 6 baños · hasta 10 huéspedes",
        description: "Antiguo monasterio benedictino del siglo XIII restaurado, con bodega de vinos abovedada, jardines y vistas panorámicas al Mediterráneo sobre Cinque Terre.",
        priceTotal: "14.469 €",
        pricePerNight: "1.900 €/noche antes de tasas",
        pricePerPerson: "2.412 €/persona",
        status: "available",
        statusLabel: "Disponible"
      }
    ]
  },
  // 04 — ARLES / PROVENZA
  {
    number: "04",
    place: "Arles",
    country: "Provenza, Francia",
    layout: "stack",
    properties: [
      {
        name: "Casa Ideale — Villa Bank",
        location: "Arles, Provenza",
        image: "https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/4406/casa-ideale-villa-bank_villa_arles-france_exterior-1778557532408.jpg?tr=w-1080",
        url: "https://boutique-homes.com/property/casa-ideale-villa-bank?checkInDate=2026-08-24&checkOutDate=2026-08-30&adults=6",
        dates: "Temporada may–oct 2026, semanas sáb–sáb en jul/ago",
        capacity: "5 habitaciones, 5 baños · hasta 10 huéspedes",
        description: "Villa de 1973 del arquitecto Émile Sala, catalogada por el Ministerio de Cultura francés. Diseño de Pierre Chapo y Jean Prouvé, colección fotográfica de Carla Sozzani, media pensión con chef privado incluida.",
        priceTotal: null,
        pricePerNight: null,
        pricePerPerson: null,
        status: "on-request",
        statusLabel: "Solo a consultar"
      },
      {
        name: "Mas Céleste",
        location: "Plaine de la Crau, Arles",
        image: "https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/4431/mas-celeste_farmhouse_arles-france_interior-space-1781389689561.jpg?tr=w-1080",
        url: "https://boutique-homes.com/property/mas-celeste?checkInDate=2026-08-24&checkOutDate=2026-08-30&adults=6",
        dates: "24–30 agosto 2026 (6 noches)",
        capacity: "3 suites · hasta 6 huéspedes (capacidad exacta)",
        description: "Masía de 1847 restaurada durante tres años y medio, con piedra de Fontvieille, butacas Verner Panton y piscina salada climatizada en un jardín de 2.500 m². A 10 minutos de Arles.",
        priceTotal: "8.594 €",
        pricePerNight: "1.240 €/noche antes de tasas",
        pricePerPerson: "1.432 €/persona",
        status: "available",
        statusLabel: "Disponible"
      }
    ]
  },
  // 05 — BIARRITZ
  {
    number: "05",
    place: "Biarritz",
    country: "Francia",
    layout: "stack",
    properties: [
      {
        name: "Casa MAÏTÉ",
        location: "Centro de Biarritz",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-907166648795379468/original/3872f56d-f534-4856-9dd2-c10b37e4468a.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/907166648795379468",
        dates: "24–30 agosto 2026 (6 noches)",
        capacity: "5 habitaciones, 4,5 baños · hasta 9 huéspedes",
        description: "Antiguo establo del siglo XIX transformado en casa adosada de 270 m² en tres niveles, con garaje privado, chef privado opcional y servicio de mixólogo.",
        priceTotal: "7.124 €",
        pricePerNight: null,
        pricePerPerson: "1.187 €/persona",
        status: "available",
        statusLabel: "Disponible"
      },
      {
        name: "Alma",
        location: "Frente a la Côte des Basques, Biarritz",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1267156629748995935/original/899bc332-c200-4af3-ae55-3a4bd6f95319.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/1267156629748995935",
        dates: "24–30 agosto 2026 (6 noches)",
        capacity: "3 habitaciones · hasta 6 huéspedes (capacidad exacta)",
        description: "Apartamento renovado en un antiguo edificio de lujo, terraza con vistas al mar, garaje privado. Valorado 4.89/5.",
        priceTotal: "5.449 €",
        pricePerNight: null,
        pricePerPerson: "908 €/persona",
        rating: "4.89",
        status: "available",
        statusLabel: "Disponible"
      },
      {
        name: "Casa centro Biarritz",
        location: "A 300 m de la Grande Plage, Biarritz",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1445615605419995729/original/52d0e7ee-638f-4408-8495-fb3561147f34.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/1445615605419995729",
        dates: "24–30 agosto 2026 (6 noches)",
        capacity: "4 habitaciones · hasta 6 huéspedes (capacidad exacta)",
        description: "Casa de 170 m² al fondo de un callejón tranquilo, aire acondicionado, garaje cerrado, terraza exterior. Anfitrión Patrick, valorado 4.8/5.",
        priceTotal: "3.926 €",
        pricePerNight: null,
        pricePerPerson: "654 €/persona",
        rating: "4.8",
        status: "available",
        statusLabel: "Disponible"
      },
      {
        name: "Bonita casa de 3 dormitorios — Zona de Beaurivage",
        location: "Bibi Beaurivage, Biarritz",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-620624723275013780/original/7d2146eb-648e-44c1-b5ea-ecb83cf06770.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/620624723275013780?adults=6&check_in=2026-08-08&check_out=2026-08-16",
        dates: "8–16 agosto 2026 (8 noches)",
        capacity: "3 habitaciones, 2 baños · hasta 6 huéspedes (capacidad exacta)",
        description: "Casa adosada renovada y decorada con buen gusto en el barrio de Bibi Beaurivage, a 10 minutos a pie de la playa de la Côte des Basques. Salón con cocina abierta a la terraza, suite principal en planta baja. Valorada 4.67/5 en 12 reseñas.",
        priceTotal: "5.297 €",
        pricePerNight: "662 €/noche antes de tasas",
        pricePerPerson: "883 €/persona",
        rating: "4.67",
        status: "available",
        statusLabel: "Disponible"
      },
      {
        name: "Apartamento céntrico con terraza y piscina",
        location: "Centro de Biarritz",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-7392005/original/d619a170-0f31-42e1-9f8c-2a27e8b4869e.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/7392005?adults=6&check_in=2026-08-08&check_out=2026-08-16",
        dates: "8–16 agosto 2026 (8 noches)",
        capacity: "3 habitaciones, 1 baño · hasta 6 huéspedes (capacidad exacta)",
        description: "Apartamento moderno a 2 minutos a pie del centro de Biarritz, con terraza de 20 m² con jacuzzi y barbacoa, chimenea y piscina descubierta privada climatizada. Mesa de billar y ping-pong. Valorado 4.56/5 en 18 reseñas.",
        priceTotal: "4.153 €",
        pricePerNight: "519 €/noche antes de tasas",
        pricePerPerson: "692 €/persona",
        rating: "4.56",
        status: "available",
        statusLabel: "Disponible"
      }
    ]
  },
  // 06 — SICILIA
  {
    number: "06",
    place: "Noto",
    country: "Sicilia, Italia",
    layout: "single",
    properties: [
      {
        name: "Casa de campo de lujo con piscina",
        location: "Noto, Siracusa, Sicilia",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-635861488114960607/original/d5a0bdbd-569f-48f9-a324-720580a5b859.jpeg?im_w=720",
        url: "https://www.airbnb.es/rooms/1125807592523239988",
        dates: "23–30 agosto 2026 (7 noches — no 6)",
        capacity: "4 habitaciones · hasta 8 huéspedes",
        description: "Finca de 15 hectáreas con almendros, olivos y cítricos, a 15 minutos en coche del mar. Piscina inmersa en un antiguo bosque de cítricos. 'Uno de los favoritos de los viajeros', 4.93/5 en 15 reseñas.",
        priceTotal: "5.169 €",
        pricePerNight: null,
        pricePerPerson: "862 €/persona",
        rating: "4.93",
        status: "available",
        statusLabel: "Disponible · 7 noches"
      }
    ]
  },
  // 07 — MALLORCA
  {
    number: "07",
    place: "Sóller",
    country: "Mallorca, España",
    layout: "single",
    properties: [
      {
        name: "Ingeborg",
        location: "Sóller, Mallorca",
        image: "https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/3704/Ingeborg_villa_Soller_Mallorca_Spain_interior_exterior-pool-1743788428479.jpg?tr=w-1080",
        url: "https://boutique-homes.com/property/ingeborg?checkInDate=2026-08-24&checkOutDate=2026-08-30&adults=6",
        dates: "A consultar",
        capacity: "6 habitaciones, 6 baños · hasta 10 huéspedes",
        description: "Casa señorial del siglo XVI restaurada en un pueblo de piedra bajo la Tramuntana. Servicio de hotel boutique privado: chef incluido, sauna de infrarrojos, bicicletas y acceso al club de tenis de Sóller.",
        priceTotal: null,
        pricePerNight: null,
        pricePerPerson: null,
        status: "on-request",
        statusLabel: "Solo a consultar"
      }
    ]
  },
  // 08 — DORDOGNE (cheapest, but date-restricted)
  {
    number: "08",
    place: "Dordogne",
    country: "Francia",
    layout: "single",
    properties: [
      {
        name: "La Maison aux Volets Bleus",
        location: "Saint-Martin-de-Gurson, Dordogne",
        image: "https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/602/modern_vacation_rentals_dordogne_france_006_new.jpg?tr=w-1080",
        url: "https://boutique-homes.com/property/la-maison-aux-volets-bleus?checkInDate=2026-08-24&checkOutDate=2026-08-30&adults=6",
        dates: "24–30 agosto 2026 (6 noches, estimado)",
        capacity: "4 habitaciones, 3 baños · hasta 12 huéspedes",
        description: "Antigua farmacia del pueblo del siglo XIX, con fachada de piedra y contraventanas azules provenzales, gran piscina climatizada y jacuzzi. La más asequible de las ocho, pero en verano solo se alquila de sábado a sábado.",
        priceTotal: "≈3.240 € (estimado)",
        pricePerNight: "540 €/noche antes de tasas",
        pricePerPerson: "≈540 €/persona",
        status: "warning",
        statusLabel: "Solo sáb–sáb en verano"
      }
    ]
  }
];
