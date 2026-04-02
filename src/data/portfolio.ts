import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
// Nuevas imágenes para Footwork Agency
import facundoDeCuadroMatchday from "@/assets/Matchday-Facundo-De-Cuadro1.jpg";
import facundoDeCuadroAscenso from "@/assets/ASCENSO---Facundo-De-Cuadro.png";
import igorLeonardiCampeon from "@/assets/Campeon-Torneo-Clausura-Igor-Leonardi.jpg";
import tomasRodriguezMatchday from "@/assets/Matchday-Tomas-Rodriguez.jpg";
// Matchdays para Futbolistas
import leoCostaVsBelgrano from "@/assets/Leo-Costa-vs-Belgrano.png";
import garciaVsJapon from "@/assets/Garcia-vs-Japón.png";
import deLeonVsOriental from "@/assets/De-León-vs-Oriental.png";
import deLeonVsAtenas from "@/assets/De-Leon-vs-Atenas_.png";
import daSilvaVsDanubio from "@/assets/Da-Silva-vs-Danubio.png";
import cheuquepalVsUniversitario from "@/assets/Cheuquepal-vs-Universitario 2.png";
import caballeroVsRiverPlate from "@/assets/Caballero-vs-RiverPlate.png";
import bonifaziVsUChile from "@/assets/BONIFAZI-VS-UCHILE.png";
// Matchdays para Claw Sports - Agentes & Agencias
import lucasJorgeVsDefSporting from "@/assets/Lucas-Jorge-vs-Def-Sporting.png";
import lucasJorgeVsJapon from "@/assets/Lucas-Jorge-vs-Japón.png";
import lucasJorgeVsMVD from "@/assets/Lucas-Jorge-vs-MVD.png";
import lucasJorgeVsWanderers from "@/assets/Lucas-Jorge-vs-Wanderers.png";
import lucasJorgeVsPortugal from "@/assets/UEFA-Friendship-Cup---Lucas-Jorge-vs-Portugal.png";
import lucasJorgeUEFA from "@/assets/UEFA-Friendship-Cup---Lucas-Jorge.png";
import lucasJorgeVsPenarol from "@/assets/LucasJorge-vs-Peñarol.png";
// Nuevos matchdays para Futbolistas
import carrizoVsOriental from "@/assets/Carrizo-vs-Oriental.png";
import carrizoVsRampla from "@/assets/Carrizo-vs-Rampla.png";
import daSilvaVsCorinthians from "@/assets/Da-Silva-vs-Corinthians.png";
import daSilvaVsAmerica from "@/assets/DaSilva-vs-America.png";
import garciaVsMaldonado from "@/assets/Garcia-vs-Maldonado.png";
import hernandezVsAlbion from "@/assets/Hernandez-vs-Albion.png";
import hernandezVsTacuarembo from "@/assets/Hernandez-vs-Tacuarembo.png";
import leoCostaVsIndependiente from "@/assets/Leo-Costa-vs-Independiente.png";
import reyVsFenix from "@/assets/Rey-vs-Fénix.png";
import rodriguezVsRiver from "@/assets/Rodriguez-vs-River.png";
import rodriguezVsMVD from "@/assets/Rodriguez-vsMVD.png";
import santosVsMCT from "@/assets/Santos-vs-MCT.png";
import sequeiraVsAlbion from "@/assets/Sequeira-vs-Alibon.png";
import alanizVsUnion from "@/assets/Alaniz-vs-Unión.png";
// Matchdays 2026 para Agustín Alaniz (Futbolistas)
import alanizVsGuarani19Feb from "@/assets/AlanizvsGuarani-49b1a7c5-ddd0-4b26-b34b-e67247287371.png";
import alanizVsBostonRiver29Mar from "@/assets/Alaniz-vs-Boston-River-9e0dbff9-5340-426c-9ac9-7b3b1a17e244.png";
import alanizVsAlbion22Mar from "@/assets/Alaniz-vs-Albion-a2be3364-67cf-4d78-903e-42663252a6a8.png";
import alanizVsGuarani26Feb from "@/assets/Alaniz-vs-Guarani-2cf90c17-cef8-47f3-80ac-40efa4ea4772.png";
// Matchdays 2026 para Agustín Fernández (Futbolistas)
import fernandezVsLiverpool from "@/assets/Fernandez-vs-Liverpool-d133d88c-030d-4968-9e93-ff37f279f78b.png";
import fernandezVsWanderers from "@/assets/Fernandez-vs-Wanderers-1baac29a-594d-4d20-b63b-d4c2092343a0.png";
// Matchdays Nuevo Fútbol Uruguay — Agentes & Agencias
import nfuWanderersDepMaldonado from "@/assets/Matchday-NFU-Wanderers-DepMaldonado.png";
import nfuMiramarPlazaColonia from "@/assets/Matchday-NFU-Miramar-PlazaColonia.png";
import nfuPaysanduMiramar from "@/assets/Matchday-NFU-Paysandu-Miramar.png";
import nfuBostonRiverAlbion from "@/assets/Matchday-NFU-BostonRiver-Albion.png";
import nfuProgresoAlbion from "@/assets/Matchday-NFU-Progreso-Albion.png";
import nfuCopiapoIquique from "@/assets/Matchday-NFU-Copiapo-Iquique.png";
import nfuPlazaColoniaRiverPlate from "@/assets/Matchday-NFU-PlazaColonia-RiverPlate.png";
import nfuDanubioProgreso from "@/assets/Matchday-NFU-Danubio-Progreso.png";
import nfuPaysanduColon from "@/assets/Matchday-NFU-Paysandu-Colon.png";
import nfuPenarolAlbion from "@/assets/Matchday-NFU-Penarol-Albion.png";
import nfuJuventudAlbion from "@/assets/Matchday-NFU-Juventud-Albion.png";
import nfuProgresoBostonRiver from "@/assets/Matchday-NFU-Progreso-BostonRiver.png";

export type CategoriaPortfolio =
  | "futbolistas"
  | "agentes";

export type FormatoImagen = "9:16" | "4:5";

export type PortfolioItem = {
  id: string;
  image: string;
  category: string;
  player: string;
  context: string;
  categorias: CategoriaPortfolio[];
  formato: FormatoImagen;
  /** Fecha u hora del partido según el diseño (ISO 8601). Solo usada para ordenar la sección Futbolistas. */
  fechaOrdenFutbolistas?: string;
  /** Fecha u hora del partido según el diseño (ISO 8601). Solo usada para ordenar la sección Agentes & Agencias (más reciente primero). */
  fechaOrdenAgentes?: string;
};

/** Borrador de item: admite `categorias` para forzar sección sin depender del índice */
type PortfolioItemDraft = Omit<PortfolioItem, "categorias"> & {
  categorias?: CategoriaPortfolio[];
};

/**
 * Función helper para normalizar categorías
 * Elimina duplicados y valida que las categorías sean válidas
 */
export function normalizarCategorias(
  categorias: CategoriaPortfolio[]
): CategoriaPortfolio[] {
  const categoriasValidas: CategoriaPortfolio[] = ["futbolistas", "agentes"];
  const categoriasNormalizadas = categorias.filter(cat => 
    categoriasValidas.includes(cat)
  );
  return [...new Set(categoriasNormalizadas)];
}

/**
 * Base de datos centralizada del portfolio
 * 
 * Para agregar nuevas imágenes:
 * 1. Importa la imagen al inicio del archivo
 * 2. Agrega un nuevo objeto al array `portfolioItems`
 * 3. Especifica las categorías en el array `categorias`
 *    - Puedes usar: "futbolistas", "agentes"
 * 4. Especifica el formato: "9:16" o "4:5"
 * 
 * Ejemplo de instrucciones de texto que puedes usar al agregar:
 * - "Estas imágenes van a Futbolistas y Todos" → categorias: ["futbolistas"]
 * - "Estos trabajos van a Agentes & Agencias y Todos" → categorias: ["agentes"]
 * - "Estas van a Futbolistas y Agentes" → categorias: ["futbolistas", "agentes"]
 */
// Items base del portfolio (sin normalizar)
const portfolioItemsBase: PortfolioItemDraft[] = [
  {
    id: "p1",
    image: portfolio1,
    category: "FÚTBOL · Matchday oficial",
    player: "Diego Cheuquepal",
    context: "Racing · vs Progreso · Torneo Clausura",
    formato: "9:16",
  },
  {
    id: "p2",
    image: portfolio2,
    category: "FÚTBOL · Matchday oficial",
    player: "Facundo Bonifazi",
    context: "Miramar Misiones · vs Cerro Largo · Torneo Clausura",
    formato: "9:16",
  },
  {
    id: "p3",
    image: portfolio3,
    category: "FÚTBOL · Matchday oficial",
    player: "Elías De León",
    context: "Cerrito · vs Deportivo Maldonado · Segunda División Profesional",
    formato: "9:16",
  },
  {
    id: "p4",
    image: portfolio4,
    category: "FÚTBOL · Matchday oficial",
    player: "Lucas Jorge",
    context: "Boston River · vs Progreso · Juveniles AUF · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p5",
    image: portfolio5,
    category: "FÚTBOL · Matchday oficial",
    player: "Agustín Alaniz",
    context: "Banfield · vs Racing · Liga Profesional Argentina",
    formato: "9:16",
  },
  {
    id: "p6",
    image: portfolio6,
    category: "FÚTBOL · Matchday oficial",
    player: "Facundo Balatti",
    context: "Danubio · vs Montevideo City Torque · Copa AUF",
    formato: "9:16",
  },
  {
    id: "p7",
    image: portfolio7,
    category: "FÚTBOL · Matchday oficial",
    player: "Mateo Caballero",
    context: "Montevideo City Torque · vs Defensor Sporting · Juveniles AUF",
    formato: "9:16",
  },
  {
    id: "p9",
    image: portfolio9,
    category: "FÚTBOL · Matchday oficial",
    player: "Nicolás Gentilio",
    context: "Peñarol · vs Progreso · Torneo Intermedio",
    formato: "9:16",
  },
  {
    id: "p10",
    image: portfolio10,
    category: "FÚTBOL · Matchday oficial",
    player: "Nahuel Da Silva",
    context: "Defensor Sporting · vs Montevideo City Torque · Copa AUF",
    formato: "9:16",
  },
  // Nuevos trabajos para Footwork Agency - Agentes & Agencias
  {
    id: "p11",
    image: facundoDeCuadroMatchday,
    category: "Matchday Oficial",
    player: "Facundo De Cuadro",
    context: "Segunda División · Fecha 16 · vs C.D.M. · Parque Palermo · Footwork Agency",
    formato: "9:16",
  },
  {
    id: "p12",
    image: facundoDeCuadroAscenso,
    category: "Logro",
    player: "Facundo De Cuadro",
    context: "Ascenso a Primera División · Footwork Agency",
    formato: "4:5",
  },
  {
    id: "p13",
    image: igorLeonardiCampeon,
    category: "Logro",
    player: "Igor Leonardi",
    context: "Campeón · Torneo Clausura Tercera División · Montevideo City · Footwork Agency",
    formato: "9:16",
  },
  {
    id: "p14",
    image: tomasRodriguezMatchday,
    category: "Matchday Oficial",
    player: "Tomás Rodríguez",
    context: "Juveniles B AUF · Fecha 13 · vs La Luz F.C. · Complejo Bauzá · Footwork Agency",
    formato: "9:16",
  },
  // Matchdays para Futbolistas - Matchday Oficial
  {
    id: "p15",
    image: leoCostaVsBelgrano,
    category: "Matchday Oficial",
    player: "Leonard Costa",
    context: "Ind. Rivadavia · vs Belgrano",
    formato: "9:16",
  },
  {
    id: "p16",
    image: garciaVsJapon,
    category: "Matchday Oficial",
    player: "Benjamín Garcia",
    context: "Uruguay · vs Japón",
    formato: "9:16",
  },
  {
    id: "p17",
    image: deLeonVsOriental,
    category: "Matchday Oficial",
    player: "Elías De León",
    context: "vs Oriental",
    formato: "9:16",
  },
  {
    id: "p19",
    image: deLeonVsAtenas,
    category: "Matchday Oficial",
    player: "Elías De León",
    context: "vs Atenas",
    formato: "9:16",
  },
  {
    id: "p21",
    image: daSilvaVsDanubio,
    category: "Matchday Oficial",
    player: "Nahuel Da Silva",
    context: "vs Danubio",
    formato: "9:16",
  },
  {
    id: "p22",
    image: cheuquepalVsUniversitario,
    category: "Matchday Oficial",
    player: "Diego Cheuquepal",
    context: "vs Universitario",
    formato: "9:16",
  },
  {
    id: "p23",
    image: caballeroVsRiverPlate,
    category: "Matchday Oficial",
    player: "Mateo Caballero",
    context: "vs River Plate",
    formato: "9:16",
  },
  {
    id: "p24",
    image: bonifaziVsUChile,
    category: "Matchday Oficial",
    player: "Facundo Bonifazi",
    context: "vs U. Católica Chile",
    formato: "9:16",
  },
  // Matchdays para Claw Sports - Agentes & Agencias
  {
    id: "p25",
    image: lucasJorgeVsDefSporting,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "vs Def. Sporting · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p26",
    image: lucasJorgeVsJapon,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "Uruguay · vs Japón · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p27",
    image: lucasJorgeVsMVD,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "vs MVD City Torque · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p28",
    image: lucasJorgeVsWanderers,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "vs Wanderers · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p29",
    image: lucasJorgeVsPortugal,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "UEFA Friendship Cup · Uruguay vs Portugal · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p30",
    image: lucasJorgeUEFA,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "UEFA Friendship Cup · Claw Sports",
    formato: "9:16",
  },
  {
    id: "p31",
    image: lucasJorgeVsPenarol,
    category: "Matchday Oficial",
    player: "Lucas Jorge",
    context: "vs Peñarol · Claw Sports",
    formato: "9:16",
  },
  // Nuevos matchdays para Futbolistas
  {
    id: "p32",
    image: carrizoVsOriental,
    category: "Matchday Oficial",
    player: "Mateo Carrizo",
    context: "La Luz vs Oriental",
    formato: "9:16",
  },
  {
    id: "p33",
    image: carrizoVsRampla,
    category: "Matchday Oficial",
    player: "Mateo Carrizo",
    context: "La Luz vs Rampla Juniors",
    formato: "9:16",
  },
  {
    id: "p34",
    image: daSilvaVsCorinthians,
    category: "Matchday Oficial",
    player: "Esteban Da Silva",
    context: "Racing vs Corinthians",
    formato: "9:16",
  },
  {
    id: "p35",
    image: daSilvaVsAmerica,
    category: "Matchday Oficial",
    player: "Esteban Da Silva",
    context: "Racing vs América",
    formato: "9:16",
  },
  {
    id: "p36",
    image: garciaVsMaldonado,
    category: "Matchday Oficial",
    player: "Benjamín Garcia",
    context: "Montevideo City Torquevs Maldonado",
    formato: "9:16",
  },
  {
    id: "p37",
    image: hernandezVsAlbion,
    category: "Matchday Oficial",
    player: "Alexander Hernandez",
    context: "Orientalvs Albion",
    formato: "9:16",
  },
  {
    id: "p38",
    image: hernandezVsTacuarembo,
    category: "Matchday Oficial",
    player: "Alexander Hernandez",
    context: "Oriental vs Tacuarembó",
    formato: "9:16",
  },
  {
    id: "p39",
    image: leoCostaVsIndependiente,
    category: "Matchday Oficial",
    player: "Leonard Costa",
    context: "Independiente Rivadaviavs Independiente",
    formato: "9:16",
  },
  {
    id: "p40",
    image: reyVsFenix,
    category: "Matchday Oficial",
    player: "Rodrigo Rey",
    context: "Oriental vs Fénix",
    formato: "9:16",
  },
  {
    id: "p41",
    image: rodriguezVsRiver,
    category: "Matchday Oficial",
    player: "Agustín Rodriguez",
    context: "Cerrito vs Uruguay Montevideo",
    formato: "9:16",
  },
  {
    id: "p42",
    image: rodriguezVsMVD,
    category: "Matchday Oficial",
    player: "Juan Rodriguez",
    context: "Wanderers vs MVD City Torque",
    formato: "9:16",
  },
  {
    id: "p43",
    image: santosVsMCT,
    category: "Matchday Oficial",
    player: "David Santos",
    context: "Progreso vs MVD City Torque",
    formato: "9:16",
  },
  {
    id: "p44",
    image: sequeiraVsAlbion,
    category: "Matchday Oficial",
    player: "Santiago Sequeira",
    context: "Central Españolvs Albion",
    formato: "9:16",
  },
  {
    id: "p45",
    image: alanizVsUnion,
    category: "Matchday Oficial",
    player: "Agustín Alaniz",
    context: "Banfield vs Unión · Liga Profesional Argentina",
    formato: "9:16",
  },
  // Matchdays Nuevo Fútbol Uruguay — Agencias y Representantes (fechaOrdenAgentes = fecha/hora del flyer)
  {
    id: "p46",
    image: nfuWanderersDepMaldonado,
    category: "Agencias y Representantes",
    player: "Wanderers vs Dep. Maldonado",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-28T20:00:00", // diseño “HOY // 20:00” (misma jornada que otros 28/03; hora posterior a 18:00)
  },
  {
    id: "p47",
    image: nfuMiramarPlazaColonia,
    category: "Agencias y Representantes",
    player: "Miramar Misiones vs Plaza Colonia",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-22T16:30:00",
  },
  {
    id: "p48",
    image: nfuPaysanduMiramar,
    category: "Agencias y Representantes",
    player: "Paysandú vs Miramar Misiones",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-27T18:30:00",
  },
  {
    id: "p49",
    image: nfuBostonRiverAlbion,
    category: "Agencias y Representantes",
    player: "Boston River vs Albion",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenAgentes: "2026-02-21T17:00:00",
  },
  {
    id: "p50",
    image: nfuProgresoAlbion,
    category: "Agencias y Representantes",
    player: "Progreso vs Albion",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-07T17:00:00",
  },
  {
    id: "p51",
    image: nfuCopiapoIquique,
    category: "Agencias y Representantes",
    player: "Copiapó vs Deportes Iquique",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-22T18:00:00",
  },
  {
    id: "p52",
    image: nfuPlazaColoniaRiverPlate,
    category: "Agencias y Representantes",
    player: "Plaza Colonia vs River Plate",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-28T18:00:00",
  },
  {
    id: "p53",
    image: nfuDanubioProgreso,
    category: "Agencias y Representantes",
    player: "Danubio vs Progreso",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-02-28T17:00:00",
  },
  {
    id: "p54",
    image: nfuPaysanduColon,
    category: "Agencias y Representantes",
    player: "Paysandú FC vs Colón",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-13T18:00:00",
  },
  {
    id: "p55",
    image: nfuPenarolAlbion,
    category: "Agencias y Representantes",
    player: "Peñarol vs Albion",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-14T20:30:00",
  },
  {
    id: "p56",
    image: nfuJuventudAlbion,
    category: "Agencias y Representantes",
    player: "Juventud vs Albion",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-22T10:00:00",
  },
  {
    id: "p57",
    image: nfuProgresoBostonRiver,
    category: "Agencias y Representantes",
    player: "Progreso vs Boston River",
    context: "Matchday para Nuevo Fútbol Uruguay",
    formato: "9:16",
    categorias: ["agentes"],
    fechaOrdenAgentes: "2026-03-22T16:00:00",
  },
  // Matchdays 2026 para Agustín Alaniz — Futbolistas
  {
    id: "p58",
    image: alanizVsBostonRiver29Mar,
    category: "Matchday Oficial",
    player: "Agustín Alaniz",
    context: "Juventud vs Boston River",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenFutbolistas: "2026-03-29T13:00:00",
  },
  {
    id: "p59",
    image: alanizVsAlbion22Mar,
    category: "Matchday Oficial",
    player: "Agustín Alaniz",
    context: "Juventud vs Albion",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenFutbolistas: "2026-03-22T10:00:00",
  },
  {
    id: "p60",
    image: alanizVsGuarani26Feb,
    category: "Matchday Oficial",
    player: "Agustín Alaniz",
    context: "Guaraní vs Juventud",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenFutbolistas: "2026-02-26T19:00:00",
  },
  {
    id: "p61",
    image: alanizVsGuarani19Feb,
    category: "Matchday Oficial",
    player: "Agustín Alaniz",
    context: "Juventud vs Guaraní",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenFutbolistas: "2026-02-19T19:00:00",
  },
  // Matchdays 2026 para Agustín Fernández — Futbolistas
  {
    id: "p62",
    image: fernandezVsLiverpool,
    category: "Matchday Oficial",
    player: "Agustín Fernández",
    context: "Liverpool vs Boston River · Juveniles AUF · Fecha 4",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenFutbolistas: "2026-03-27T09:30:00",
  },
  {
    id: "p63",
    image: fernandezVsWanderers,
    category: "Matchday Oficial",
    player: "Agustín Fernández",
    context: "Boston River vs Wanderers",
    formato: "9:16",
    categorias: ["futbolistas"],
    fechaOrdenFutbolistas: "2026-03-23T10:00:00",
  },
];

// Portfolio items normalizados con sus categorías específicas
export const portfolioItems: PortfolioItem[] = portfolioItemsBase.map((item, index) => {
  const { categorias: categoriasExplicitas, ...rest } = item;

  // Los items p1-p3, p5-p10, p15-p24 son de futbolistas
  // Los items p4 (Claw Sports), p11-p14 (Footwork Agency) y p25-p31 (Lucas Jorge - Claw Sports) son de agentes
  // p4 = index 3, p11-p14 = index 9-12, p25-p31 = index 24-30
  // Items de Mateo Carrizo (p32-p33, index 31-32) y Esteban Da Silva (p34-p35, index 33-34) son SOLO futbolistas
  const esItemAgente = index === 3 || (index >= 9 && index < 13) || (index >= 24 && index < 31); // p4 (index 3), p11-p14 (index 9-12), p25-p31 (index 24-30)

  // Forzar que items de Mateo Carrizo y Esteban Da Silva sean SOLO futbolistas
  const esCarrizoODaSilva = item.player === "Mateo Carrizo" || item.player === "Esteban Da Silva";

  const categorias = categoriasExplicitas?.length
    ? normalizarCategorias(categoriasExplicitas)
    : normalizarCategorias(
        esCarrizoODaSilva ? ["futbolistas"] : (esItemAgente ? ["agentes"] : ["futbolistas"])
      );

  return {
    ...rest,
    categorias,
  };
});

/**
 * Función para parsear instrucciones de texto y extraer categorías
 * 
 * Formato esperado:
 * - "Matchdays para Futbolistas — [tag opcional]"
 * - "Flyers para Agentes & Agencias — [tag opcional]"
 * - "Futbolistas — [tag opcional]"
 * - "Agentes & Agencias — [tag opcional]"
 * 
 * Reglas:
 * - "Matchdays para Futbolistas" → ["futbolistas"]
 * - "Flyers para Agentes & Agencias" → ["agentes"]
 * - "Futbolistas" → ["futbolistas"]
 * - "Agentes & Agencias" → ["agentes"]
 * - "Matchdays" solo → ["futbolistas"] (por defecto)
 * - "Todos" se agrega automáticamente siempre
 */
export const parsearCategoriasDesdeTexto = (
  texto: string
): CategoriaPortfolio[] => {
  const textoLower = texto.toLowerCase();
  const categorias: CategoriaPortfolio[] = [];

  // Detectar "para" que indica categoría principal
  if (textoLower.includes("para")) {
    // Formato: "Matchdays para Futbolistas" o "Flyers para Agentes"
    if (textoLower.includes("futbolista")) {
      categorias.push("futbolistas");
    }
    if (textoLower.includes("agente") || textoLower.includes("agencia")) {
      categorias.push("agentes");
    }
  } else {
    // Formato directo: "Futbolistas" o "Agentes & Agencias"
    if (textoLower.includes("futbolista")) {
      categorias.push("futbolistas");
    }
    if (textoLower.includes("agente") || textoLower.includes("agencia")) {
      categorias.push("agentes");
    }
    // Si solo dice "Matchdays" sin "para", asumir Futbolistas
    if (textoLower.includes("matchday") && categorias.length === 0) {
      categorias.push("futbolistas");
    }
  }

  return [...new Set(categorias)]; // Eliminar duplicados
};

/**
 * Extraer tag opcional del texto (después de "—")
 * Ejemplo: "Matchdays para Futbolistas — Liga Uruguaya" → "Liga Uruguaya"
 */
export const extraerTagDesdeTexto = (texto: string): string | undefined => {
  const partes = texto.split("—");
  if (partes.length > 1) {
    return partes[1].trim();
  }
  return undefined;
};

/**
 * Función para agregar nuevos items al portfolio
 * 
 * @param items - Array de nuevos items a agregar
 * @param instruccionesTexto - Instrucciones opcionales en texto sobre las categorías
 * @returns Array actualizado con los nuevos items
 */
export const agregarItemsAlPortfolio = (
  items: Omit<PortfolioItem, "id" | "categorias">[],
  instruccionesTexto?: string
): PortfolioItem[] => {
  const nuevasCategorias = instruccionesTexto
    ? parsearCategoriasDesdeTexto(instruccionesTexto)
    : [];

  const tagOpcional = instruccionesTexto
    ? extraerTagDesdeTexto(instruccionesTexto)
    : undefined;

  const nuevosItems: PortfolioItem[] = items.map((item, index) => {
    // Si hay un tag opcional y el item no tiene category personalizada, usar el tag
    const category = tagOpcional && !item.category
      ? tagOpcional
      : item.category;

    return {
      ...item,
      id: `p${Date.now()}-${index}`,
      category: category || item.category,
      categorias: normalizarCategorias(nuevasCategorias),
    };
  });

  return [...portfolioItems, ...nuevosItems];
};

/**
 * Orden para Agentes & Agencias: más reciente primero (fecha/hora del diseño).
 * Items sin `fechaOrdenAgentes` quedan al final, ordenados por `id`.
 */
function ordenarAgentesPorFechaReciente(items: PortfolioItem[]): PortfolioItem[] {
  return [...items].sort((a, b) => {
    const fa = a.fechaOrdenAgentes;
    const fb = b.fechaOrdenAgentes;
    if (fa && fb) return fb.localeCompare(fa);
    if (fa && !fb) return -1;
    if (!fa && fb) return 1;
    return a.id.localeCompare(b.id);
  });
}

/**
 * Orden para Futbolistas: más reciente primero (fecha/hora del flyer).
 * Items sin `fechaOrdenFutbolistas` quedan al final.
 */
function ordenarFutbolistasPorFechaReciente(items: PortfolioItem[]): PortfolioItem[] {
  return [...items].sort((a, b) => {
    const fa = a.fechaOrdenFutbolistas;
    const fb = b.fechaOrdenFutbolistas;
    if (fa && fb) return fb.localeCompare(fa);
    if (fa && !fb) return -1;
    if (!fa && fb) return 1;
    return a.id.localeCompare(b.id);
  });
}

/**
 * Obtener items filtrados por categoría
 */
export const obtenerItemsPorCategoria = (
  categoria: CategoriaPortfolio
): PortfolioItem[] => {
  const items = portfolioItems.filter((item) => item.categorias.includes(categoria));
  if (categoria === "agentes") {
    return ordenarAgentesPorFechaReciente(items);
  }
  if (categoria === "futbolistas") {
    return ordenarFutbolistasPorFechaReciente(items);
  }
  return items;
};

/**
 * Configuración de categorías para la UI
 */
export const categoriasConfig: Record<
  CategoriaPortfolio,
  { label: string; descripcion: string; ctaLabel: string }
> = {
  futbolistas: {
    label: "Futbolistas",
    descripcion:
      "Diseños creados para futbolistas profesionales de Uruguay, Mercosur y España. Matchdays, post-partidos y contenido personalizado.",
    ctaLabel: "Quiero mi diseño",
  },
  agentes: {
    label: "Agentes & Agencias",
    descripcion:
      "Diseños que potencian el trabajo de representantes y agencias, ayudando a posicionar a sus jugadores con una imagen sólida, seria y profesional.",
    ctaLabel: "Potenciemos tus jugadores",
  },
};

