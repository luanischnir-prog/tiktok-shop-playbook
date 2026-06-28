import type { TopicSlug, EntryType } from "@/lib/topics";

export type Entry = {
  id: string;
  topic: TopicSlug;
  type: EntryType;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

const entries: Entry[] = [
  // ─── AFFILIATES ───────────────────────────────────────────────
  {
    id: "aff-1",
    topic: "affiliates",
    type: "note",
    title: "Creator & Affiliate Outreach Playbook",
    body: `Cuando los mensajes de outreach estén aprobados para campañas OC (Organic Creator) y TC (Targeted Creator), iniciá el outreach en paralelo con el build de la campaña — no esperes.

WORKFLOW:
• Pull creator emails desde Reacher.
• Email a los creadores directo para abrir la relación y pedir rates.
• Trabajar desde la lista manual de creadores (nombres + emails ya compilados).
• Target: 50 creadores con flat fees confirmados, sourced por el equipo de affiliates.
• Manejar la relación off-platform via email personal una vez que se hace el primer contacto.

POSICIONAMIENTO PARA LANZAMIENTOS MULTI-CANAL:
Cuando una marca lanza en TTS Y retailers simultáneamente, framear el outreach como un lanzamiento "big splash" — los creadores están entrando de primero. Es un hook más fuerte que uno TTS-only.

PREGUNTAS CLAVE ANTES DEL OUTREACH:
• ¿Hay algún arquetipo de creador específico que quiere la marca?
• ¿Hay marcas competidoras para minar creadores overlap?
• ¿Cuál es la postura de budget: flat fees vs. commission-only?

TOOLING: Buildá una lookalike list en Reacher basada en creadores que ya performan en la categoría. No arrancar en frío.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "aff-2",
    topic: "affiliates",
    type: "data",
    title: "Comisiones: Benchmarks y Estrategia",
    body: `La comisión está determinada por 3 factores:
1. Benchmarks de categoría de TikTok (competitive landscape).
2. Estructura de márgenes de la marca.
3. Madurez y awareness de la marca.

PUNTO DE PARTIDA ESTÁNDAR: 15% es el baseline más común y competitivo.

AJUSTES:
• Marcas nuevas o desconocidas pueden necesitar aumentar la comisión para atraer creadores.
• Marcas de alto costo o bajo margen pueden necesitar reducirla (ej. 10%) por los costos del producto y envío. Crowd Cow opera con márgenes ajustados y tiene poca flexibilidad.

FLAT FEES — cuándo usarlos:
Históricamente no han performado bien por 3 razones:
1. La compensación puede no ser competitiva.
2. La feature es relativamente nueva y no ha funcionado como se esperaba in-platform.
3. Los DMs de TikTok no son ideales para negociar colaboraciones basadas en pago.
Las negociaciones de flat fee requieren comunicación detallada mejor manejada off-platform.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "aff-3",
    topic: "affiliates",
    type: "note",
    title: "Aggressive Sampling Strategy",
    body: `DOS PATRONES A CONOCER:

FRONT-LOADING vs. CONSISTENCIA:
Mandar un gran volumen de samples en poco tiempo (el enfoque ChapStick) crea un spike pero no es sostenible. Los riesgos incluyen creative fatigue, caída de performance luego del surge, y sin pipeline de contenido nuevo una vez que se agotan los samples. El sampling gradual y consistente soporta crecimiento sostenido y continuous content refresh.

SAMPLING COMO INPUT:
Las ventas trackean el sampling muy de cerca. Cuando el sampling baja, las ventas bajan. El sampling es un input, no una campaña one-time.

REGLA MENTAL:
Pará de intentar escalar con contenido limitado. Abrí el sampling fuerte. Poné plata de ads real detrás del contenido de creadores. Aceptá ROI feo al principio. Empujá a suficiente volumen de videos para que el sistema haga compounding.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "aff-4",
    topic: "affiliates",
    type: "note",
    title: "Partner Collab — Ecosistema de Creadores",
    body: `Partner Collab es la capa de relationship management de TikTok Shop para ayudar a las marcas a construir partnerships más fuertes y organizados más allá del mass affiliate outreach tradicional.

Soporta: gestión de relaciones con creadores, colaboraciones repetidas, organización de campañas, coordinación de gifting, y retención de afiliados a largo plazo.

POR QUÉ IMPORTA:
El crecimiento sostenible en TikTok Shop viene de:
• Partnerships repetidos con creadores
• Ongoing content velocity
• Diversificación de content hooks
• Familiaridad del creador con el producto

El objetivo no es solo creator acquisition — es creator retention y repeat posting behavior.

MEJORES CASOS DE USO: mid-tier creators, niche community creators, repeat converters, lifestyle/wellness/DIY creators, y creadores ya familiarizados con la marca. Especialmente efectivo para gifting/PR, Hero SKU launches, campañas estacionales, y nurturing a largo plazo.

ERRORES COMUNES A EVITAR: over-scripting, comunicación transaccional, automatización excesiva del outreach, y priorizar cantidad sobre calidad del creador. Los creadores performan mejor cuando se sienten valorados, tienen propiedad creativa, y desarrollan familiaridad genuina con la marca.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "aff-5",
    topic: "affiliates",
    type: "note",
    title: "Whitelisting (Creator Ad Authorization)",
    body: `QUÉ ES:
Whitelisting es cuando un creador le da permiso a una marca para correr ads a través de la cuenta TikTok del creador. El ad aparece como si viniera del creador, no de la marca.

En TikTok Shop se hace a través de: Spark Ads, Ad codes, o Creator authorization permissions.

EJEMPLO:
Un creador postea un video reseñando tu producto.
En lugar de repostearlo en la página de la marca, ponés ad spend detrás del POST del creador y lo corrés como Spark Ad.
Los usuarios ven: "@creatorname recomienda esto" en lugar de "Sponsored by Brand".

POR QUÉ LAS MARCAS LO USAN:
• Mayor confianza y mejor CTR
• Mejores conversion rates
• Ads que se ven nativos
• Social proof ya integrado

ESTRUCTURA DE PAGO TÍPICA: flat fee, usage rights fee, porcentaje del spend, o comisión híbrida.

CONTEXTO TTS: Es uno de los levers de scaling más grandes para Hero SKUs, affiliate scaling, GMV Max support, y paid social amplification.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "aff-6",
    topic: "affiliates",
    type: "data",
    title: "Creator Metrics que Realmente Importan",
    body: `La mayoría de las marcas trackean: creator count y creator outreach. Ese es el foco equivocado.

MEJORES MÉTRICAS:
• Active creators/week → mide salud del ecosistema
• Creator retention → escalabilidad a largo plazo
• Avg posts/creator → calidad de la relación
• Revenue per creator → eficiencia
• Scale creators identified → calidad del pipeline

SAMPLE → CONTENT POSTED RATE (una de las más subestimadas):
Fórmula: Posted Rate = Content Posted ÷ Samples Delivered

Benchmarks:
• <15% → Pobre
• 20–30% → Promedio
• 35–50% → Fuerte
• 50%+ → Operación de afiliados de élite

PERO ESO NO ES SUFICIENTE — la métrica REAL es Sample → Converting Content Rate:
Ejemplo: 1,000 samples enviados → 300 posts (30% posted rate) → 40 videos rentables (4% hit rate) → 8 videos scale-worthy (0.8% scale rate). Así piensan los operadores serios de TTS.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // ─── ADS ──────────────────────────────────────────────────────
  {
    id: "ads-1",
    topic: "ads",
    type: "data",
    title: "ROI Benchmarks y GMV Max",
    body: `EL "BUEN" ROI depende de la madurez de la marca, el historial de performance y la etapa de la campaña.

BENCHMARKS GENERALES:
• 3.5+ ROI: Excepcional (raro)
• 2.0 ROI: Baseline saludable
• 2.7–3.0 ROI: Performance fuerte y consistente

EJEMPLOS:
• RoC consistently por encima de 2.0–2.5 = fuerte
• Pro Compression con 0.19 ROI puede ser aceptable en early learning phase
• Dr. Brandt fluctuando entre 1.0–1.4 ROI por meses = performance challenges continuos

En última instancia: spend + ROI = purchases. Si las compras escalan rentablemente, la campaña está on track.

GMV MAX vs. CAMPAÑAS ORGÁNICAS:
El indicador primario es el spend. Si una campaña no está gastando, los ROI targets no se están alcanzando, o el budget queda sin gastar, GMV Max puede activarse para forzar la entrega. Si bajar el ROI target todavía no genera spend, GMV Max se convierte en herramienta para drivear tráfico y volumen. GMV Max es principalmente una estrategia de activación de spend, no un lift mágico de ROI.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ads-2",
    topic: "ads",
    type: "note",
    title: "Cuándo Excluir un Video de GMV Max",
    body: `DOS RAZONES PARA EXCLUIR:
1. Preferencia de marca — la marca no quiere presupuesto en ese creativo.
2. Ineficiencia de performance — el video está absorbiendo spend diario significativo pero entregando ROI bajo.

Cuando un video recibe heavy spend y underperforma, arrastra el ROI general de la campaña. En el caso Morphe, el video excluido era el segundo más alto en spend pero tenía el ROI más bajo. Sacarlo permitió que el budget se redistribuyera a los creativos más fuertes.

CUANDO SABÉS QUE UN VIDEO NO VA A ESCALAR:
Una vez que un video ha acumulado suficiente spend (ej. $300+) con compras mínimas, el performance se vuelve predecible. Si el spend aumenta, las compras se quedan flat y el ROI bajo — el creativo no va a escalar. Seguí adelante.

POR QUÉ BOOSTING BAJA EL ROI GENERAL:
Boosting opera fuera de los settings de ROI protection. Cuando boosteas un video le estás diciendo al sistema: "gastá $X en este video independientemente del performance." A diferencia de las campañas GMV Max, el boosting no pausa ni ajusta en base a ROI targets. Los boosts que underperforman siguen gastando y bajan el ROI de la campaña.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ads-3",
    topic: "ads",
    type: "script",
    title: "Diagnóstico de Caídas de GMV — Checklist",
    body: `Cuando el GMV cae, checkear en este orden:

1. CALENDARIO PROMOCIONAL: ¿Hubo un descuento la semana pasada que terminó?
2. PERFORMANCE DE ADS: ¿El ROI cayó significativamente? (ej. de 1.5 a 0.6)
3. ESTADO DEL PRODUCTO: ¿Out of stock? ¿Listing violations? ¿SKU desactivado?
4. SHOP O PRODUCT SCORE: Si el score baja de 3.5, TikTok puede reducir la visibilidad.

TABLA DE DIAGNÓSTICO RÁPIDO (Last 7 days vs. previous 7 days):
• Impressions ↓ → Problema de tráfico
• Product Clicks ↓ → Problema de creativo u oferta
• CTR ↓ → Problema de posicionamiento del producto
• Add-to-Cart Rate ↓ → Problema de precio/valor
• Conversion Rate ↓ → Problema de confianza u oferta
• AOV ↓ → Problema de bundle/upsell
• Affiliate Orders ↓ → Problema de actividad de creadores
• LIVE GMV ↓ → Problema de performance de LIVE

La primera métrica que bajó es usualmente donde empezó el problema.

DIAGNÓSTICO DE FUENTES DE TRÁFICO (en Seller Center):
¿Desapareció una fuente de tráfico? Ejemplo: Affiliates $12k → $4k, Organic $3k → $3.2k, LIVE $2k → $2.1k. El problema no es el producto — es el volumen de afiliados.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ads-4",
    topic: "ads",
    type: "note",
    title: "Daily Reporting y Cómo se Desarrolla la Estrategia de Ads",
    body: `DAILY REPORTING:
Pullá datos del Ads Manager usando day view para analizar resultados diarios exactos. Para cada campaña trackear:
• Si está hitting el ROI target.
• Si está gastando su budget diario completo.

Si una campaña gasta su presupuesto completo pero el ROI baja porque los videos boosteados underperforman, eso apunta a ineficiencias creativas específicas. El daily reporting asegura transparencia en spend vs. ROI y surfacea caídas de performance temprano.

CÓMO SE DESARROLLA LA ESTRATEGIA:
La intuición de ads viene del pattern recognition a través de múltiples marcas. Observar: ROI target adjustments, GMV Max vs. manual delivery, boosting vs. organic scaling, y performance shifts después de cambios estructurales. Si varias marcas underperforman en GMV Max pero mejoran cuando se switchea off y se ajustan los ROI targets, ese patrón informa la estrategia futura. Testear en marcas, monitorear cross-account trends, identificar señales repetibles.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // ─── METRICS & REPORTING ──────────────────────────────────────
  {
    id: "met-1",
    topic: "metrics",
    type: "data",
    title: "Vocabulario Core de TikTok Shop",
    body: `PERFORMANCE METRICS:
• ROAS: Revenue generado por cada dólar gastado en publicidad.
• GMV (Gross Merchandise Value): Valor total de productos vendidos en un período.
• CTR (Click Through Rate): % de personas que hacen click en un link al ver un ad o post.
• CVR (Conversion Rate): % de visitantes que completan una compra.
• EMV (Earned Media Value): Valor estimado de la exposición orgánica a través de contenido de influencers.
• CAC (Customer Acquisition Cost): Costo para adquirir un nuevo cliente.
• MER (Marketing Efficiency Ratio): Total Revenue ÷ Total Ad Spend. Más útil que ROAS para conversaciones ejecutivas.

SALES TERMS:
• Organic Sales: Ventas no generadas por afiliados.
• Affiliate Sales: Ventas generadas por afiliados.
• MAPS: Marketing spend como % del total de ventas.
• CAPS: Comisión de afiliados como % del total de ventas.

CONTENT & CREATOR:
• OC Campaign: Campaña de contenido orgánico (sin amplificación paga).
• TC Campaign: Campaña que targeta creadores específicos con criterios definidos.
• Whitelisting: La marca corre ads usando el contenido del creador desde la cuenta del creador.

PROMOTION TERMS:
• Evergreen Shop Discount: Descuento permanente siempre disponible.
• Funded Coupons: Cupones donde TikTok Shop absorbe parte del descuento.
• Mark Up to Mark Down: ANTI-PATRÓN. Inflar el precio para mostrar un descuento mayor. Daña la confianza.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "met-2",
    topic: "metrics",
    type: "note",
    title: "Framework de Performance Management — GMV como Output",
    body: `PRINCIPIO CORE: El GMV es un output, no un input.

Al analizar performance de marca, focalizarse menos en el GMV en sí y más en las actividades que lo drivan.

FÓRMULA:
• Inputs: Videos de afiliados, samples, campañas, seller posts, horas de LIVE, ad spend
• Outputs: GMV, órdenes, nuevos clientes, conversion rate

BREAK DOWN GMV POR FUENTE — nunca revisar el GMV total solo. Separar en:
• Affiliate GMV
• Organic Video GMV
• LIVE GMV
• Shop Tab
• Ads

THE FOUR FUNDAMENTALS AUDIT:
1. MERCHANDISING: ¿Tu Hero SKU dejó de convertir? ¿Los competidores bajaron precios? ¿Faltan bundles?
2. AFFILIATES: ¿Cuántos creadores postearon esta semana? ¿Cuántos samples se enviaron? ¿Cuántos generaron ventas?
3. CONTENT: ¿El volumen de videos subió o bajó? ¿Se testearon nuevos hooks? ¿El creativo ganador se sigue reposteando?
4. ADS: ¿Se redujo el spend? ¿Se ajustaron los targets de ROAS? ¿Se cambió GMV Max? ¿Se pausaron los Spark Ads?`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "met-3",
    topic: "metrics",
    type: "data",
    title: "Las Métricas Más Importantes de TTS — Tier 1",
    body: `TIER 1 — REVENUE ENGINE METRICS (máxima prioridad):
• GMV → Output core del negocio
• Contribution Margin → Si el crecimiento es rentable
• AOV → Determina la escalabilidad
• Creator Content Volume → Combustible para el algoritmo
• Posted Rate (Samples → Content) → Eficiencia del sistema de afiliados
• CPA / CAC → Eficiencia de adquisición paga
• LIVE GMV/hora → Eficiencia del LIVE
• Repeat Purchase Rate → Salud de la marca
• CTR en Product Clicks → Product-market fit
• Conversion Rate → Fortaleza de landing/producto

MÉTRICAS SOBREVALUADAS (evitar como North Star):
• Followers — poco predictivo
• Views — puede ser insignificante sin conversión
• Likes — mayormente vanity
• CPM alone — context-dependent
• Total Samples Sent — peligroso si no está atado a contenido que convierte

EL FUNNEL REAL DE TTS:
Content Velocity → Product CTR → PDP Conversion Rate → AOV → Contribution Margin → Scalability

TikTok Shop NO es Amazon, Meta ni Shopify. Se comporta más como "algorithmic entertainment commerce" — el contenido, el volumen de creadores, la confianza y el watch behavior importan más que las métricas de ecommerce tradicional.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "met-4",
    topic: "metrics",
    type: "data",
    title: "AOV por Categoría y Framework Traffic/Hero/VIP SKU",
    body: `FRAMEWORK TRAFFIC / HERO / VIP SKU:
• Traffic SKU ($5–$25): Trae compradores.
• Hero SKU ($30–$45+): Driver principal de revenue.
• VIP SKU ($45+): Eleva el AOV.

Una cuenta saludable suele ver el AOV subir porque los compradores de Traffic upgradan a Hero, y los Hero suman VIP bundles.

HEALTHY TTS AOV RANGES POR CATEGORÍA:
• Candy/snacks: $25–45
• Beauty: $35–60
• Supplements: $40–70
• Apparel: $50–90

Si el AOV es bajo: los ads se vuelven difíciles, los economics del afiliado se debilitan, y el contribution margin colapsa.

HERO SKU CRITERIA:
• Típicamente en el rango $20–$35
• Impulse-buy friendly
• Frecuentemente descontado
• Fuerte volumen de creadores

Los high-ticket items ($50+) son difíciles a menos que haya fuerte brand recognition o descuentos agresivos.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "met-5",
    topic: "metrics",
    type: "data",
    title: "SPS, ISRR y OHC — Governance Scoring",
    body: `SHOP PERFORMANCE SCORE (SPS) — LA MÉTRICA MASTER:
SPS corre en escala de 5 puntos. Los sub-scores más importantes: Product Satisfaction y Fulfillment.

Critical Thresholds:
• 3.5+: Saludable. Visibilidad completa.
• Menos de 3.5: TikTok puede reducir la visibilidad del listing.
• 3.0: Zona de advertencia. Una mala reseña puede bajarte a menos de 2.9.
• Menos de 2.9: Perdés acceso al affiliate marketing — el motor de crecimiento.

POR QUÉ SPS ES FRÁGIL: Un solo review negativo puede bajar el SPS a 3.0 de un día para el otro. El score no degrada gradualmente — puede step-drop en un solo data point. Por eso el volumen de reseñas positivas actúa como seguro.

ISRR (Invalid Seller Rejection Rate):
Mide la precisión de tus decisiones en disputas post-venta.
• Threshold: 30% en ventana rolling de 4 semanas.
• Aplica a: refund-only, return & refund, replacement/reshipment, y exchange requests.
• NO aplica a cancelaciones de órdenes ni refunds mandados por plataforma.
• Podés apelar decisiones individuales dentro de los 30 días calendario con evidencia.

OHC (Order Handling Capacity):
Permite controlar cuántas órdenes se pueden manejar diariamente. Si se excede la capacidad, TikTok extiende automáticamente el Estimated Delivery Time (EDT). Protege el fulfillment durante picos de órdenes virales.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // ─── CONTENT & TRENDS ─────────────────────────────────────────
  {
    id: "con-1",
    topic: "content",
    type: "note",
    title: "Upper vs. Lower Funnel Content en TikTok",
    body: `UPPER FUNNEL (TOFU) — Awareness:
Contenido hecho para personas que NUNCA escucharon de vos. No está intentando vender — está intentando parar el scroll y crear awareness.

Cómo se ve:
• Audio trending + storytelling relatable
• Contenido educativo o entretenido que feature el producto
• Contenido de lifestyle broad donde el producto es parte de la escena, no la estrella
• Challenges, trends, humor — cualquier cosa que genere shares y reach

El objetivo son las vistas y el descubrimiento, no los clicks. Estás sembrando.

LOWER FUNNEL (BOFU) — Decision:
Contenido para personas que YA TE CONOCEN o están activamente considerando comprar.

Cómo se ve:
• "Llevo 30 días usándolo, acá está lo que pasó" — resultados
• Demos directas del producto con CTA fuerte ("Link en bio", "Shop now")
• UGC que funciona como social proof
• Callouts de precio, valor o bundle ("3 por $30, comprá a través del link")
• Responder comentarios como "¿funciona de verdad?" — señala confianza

POR QUÉ IMPORTA ESTA DISTINCIÓN:
El error común es hacer contenido lower funnel (heavy sell, price callouts, "buy now") y pushearlo a audiencias frías — floppea porque esa gente no está lista.

RATIO DE INICIO RECOMENDADO: 70% upper / 30% lower. Si estás corriendo paid, podés pesar más el lower funnel porque controlás quién lo ve.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "con-2",
    topic: "content",
    type: "note",
    title: "La Regla de los 1,000 Videos (Case Study Apparel)",
    body: `Una marca de apparel fue de estancada a $750K en un solo mes siguiendo este playbook de 8 pasos.

EL INSIGHT CORE: A bajo volumen de videos, el performance es ruidoso e impredecible. Alrededor de ~1,000 videos en el mercado, la densidad de datos se vuelve significativa, el sistema se estabiliza, y el ROI hace compounding.

EL PLAYBOOK:
1. Reconocer la constraint de sampling. 250 creadores por mes no es suficiente.
2. Reframear alrededor de la velocidad. Cambiar la pregunta de "¿cómo crecemos eficientemente?" a "¿qué nos lleva a $1M/mes en tres meses?"
3. Desbloquear el sampling agresivo. Ir a unlimited sampling con criterios.
4. Aceptar un hit temporal de eficiencia. ROI del mes 1 cayó a ~1x. Elegir velocidad sobre eficiencia.
5. Escalar los paid media detrás del contenido de creadores. $30K a $150K.
6. Concentrar el assortment. Demasiados SKUs diluyen la señal.
7. Empujar hacia 1,000 videos en el mercado. Ese es el threshold.
8. Trabajar el ROI de vuelta hacia arriba. De 1x a 2x. Con 2x ROI y 1,000 videos: $750K ese mes.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "con-3",
    topic: "content",
    type: "note",
    title: "TikTok LIVE Shopping Framework — 3 Pilares",
    body: `El GMV crece cuando combinás buen Assortment + buen Content para llegar a más personas. Los tres pilares están sobre una base de Empowerment.

PILAR 1 — BUENOS PRODUCTOS (Assortment):
• Spotlight en hero products — tus ganadores probados merecen la atención.
• Lanzar productos nuevos y especiales — la exclusividad y frescura drivan urgencia.

PILAR 2 — CONTENIDO DE CALIDAD:
• Pre-heat short videos: contenido short-form que warms up la audiencia antes del LIVE.
• Setup visualmente atractivo: iluminación, fondo, staging del producto. La calidad es una señal de confianza.
• Hosts con fuertes habilidades de interacción: el host ES el show.

PILAR 3 — PROMOTION EFECTIVA:
• Campaigns: promociones y eventos a nivel plataforma.
• Live Ads: amplificación paga apuntada directamente al livestream.
• CRM messages: retargeting y re-engagement de la audiencia existente.

MÉTRICAS LIVE A REVIEWAR DESPUÉS DE CADA STREAM:
• Low ERR → Thumbnail/title débil
• Low Watch Time → Host o hook débil
• Low CTR → Productos incorrectos pinneados
• High CTR + Low Conversion → Problema de precio u oferta

GMV/hora es la métrica más importante del LIVE. TikTok explícitamente enfatiza: watch duration, CTR, ERR, y livestream duration.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "con-4",
    topic: "content",
    type: "data",
    title: "Virtual Bundles — Estrategia para Subir AOV",
    body: `QUÉ SON:
Los Virtual Bundles son un grupo de productos existentes vendidos juntos como un único paquete, pero los ítems no están físicamente empaquetados juntos en el warehouse.

BENEFICIOS:
• Aumentar el AOV: motivar a los compradores a comprar productos adicionales que quizás no habían considerado.
• Aumentar la satisfacción del cliente: comprar productos complementarios convenientemente.
• Limpiar inventario viejo: hacer productos de movimiento lento más atractivos bundleándolos con populares.

CÓMO ENCAJA EN LA ESTRATEGIA:
Assortment concentrado compoundea más rápido porque el esfuerzo de creadores y ads no se fragmenta en demasiados SKUs. Los virtual bundles son la versión TTS-native de esta concentración — dejan al comprador percibir mayor valor sin multiplicar el catalog complexity.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "con-5",
    topic: "content",
    type: "note",
    title: "Content Volume como Estrategia — No Perfección",
    body: `TikTok Shop es un Volume Platform. El algoritmo premia testing constante, diversidad de creadores, y velocidad creativa.

Una marca posteando 300 creator videos/mes generalmente le gana a 30 videos "perfectos".

LOS 3 ERRORES MÁS COMUNES DE LAS MARCAS:
1. Resistencia al pricing y promociones — subestiman cuán price-sensitive son los consumidores de TikTok.
2. Under-investment — mandan pocos samples, evitan el ad spend, y esperan resultados inmediatos. TikTok típicamente requiere 3 meses para ver affiliate traction + 3–6 meses de ads para ver escala real.
3. Tratar TTS solo como un canal de GMV — en lugar de verlo como canal de customer acquisition. El CAC en otras plataformas puede ser $100–$200 por comprador nuevo. En TikTok, la awareness se genera al costo del seeding + ad support estratégico.

REGLA MENTAL: El crecimiento está directamente atado a los inputs. El éxito sostenido requiere flujo continuo de contenido, sampling consistente, reinversión inteligente en ads, y ajuste basado en señales de performance.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // ─── OPERATIONS & LOGISTICS ───────────────────────────────────
  {
    id: "ops-1",
    topic: "operations",
    type: "note",
    title: "Brand Authorization & Qualification — Los 4 Caminos",
    body: `Si vendés productos de marca en TikTok Shop, la autorización no es opcional. Sin ella, los listings se sacan sin aviso.

LOS 4 CAMINOS:
1. TRADEMARK OWNER: Sos dueño de la marca. Presentar certificado de trademark (ej. USPTO).
2. FIRST-LEVEL AUTHORIZED RESELLER: Permiso directo del brand owner. Letter of Authorization con nombre exacto de empresa, período de validez y firma con cargo.
3. SECOND-LEVEL AUTHORIZED RESELLER: Permiso de un distribuidor. Necesitás DOS cartas: una del brand owner al distribuidor, y una del distribuidor a vos. Cada detalle debe coincidir exactamente con tu perfil de seller.
4. CO-BRANDING O LICENSING: Para colaboraciones. Los documentos deben incluir prueba del derecho a autorizar.

CAUSAS COMUNES DE RECHAZO:
• Los detalles no coinciden con tu seller profile.
• Las authorization letters están incompletas o vencidas.
• Falta la cadena de autorización para second-level resellers.
• Documentos poco claros o en formato incorrecto.

Si seguís siendo rechazado: no reenvíes los mismos archivos. Arreglá los documentos, verificá tu rol, y alineá todo antes de aplicar de nuevo.

CATEGORY QUAL PARA SUPPLEMENTS Y FOOD: Manejar internamente, no delegarla a la marca. Cuando envíes, mandar 5 fotos del producto desde múltiples ángulos.

PIXEL SETUP: Configurar el pixel con cada nueva marca durante el onboarding. Backfilliar datos de atribución después del hecho es mucho más difícil que capturarlos desde el día uno.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ops-2",
    topic: "operations",
    type: "script",
    title: "Plan de Crecimiento 30/60/90 Días + SKM Tiers",
    body: `CADA MARCA QUE ONBOARDEAMOS pasa por un plan estructurado de 30/60/90 días.

PRE-KICKOFF:
Objetivo: Registrar exitosamente la marca y asegurar que el equipo interno entiende las operaciones de TikTok Shop.

PRIMEROS 30 DÍAS:
Objetivo: Construir awareness inicial, lanzar el programa de affiliate influencers, y comenzar a testear hooks creativos.
Focus: outreach a creadores, primeros videos de afiliados, initial product seeding.

PRIMEROS 60 DÍAS:
Objetivo: Identificar top-performing creators, construir crecimiento consistente de ventas, y empezar a generar traction viral.
Focus: escalar creadores ganadores, mejorar hooks, fortalecer relaciones con afiliados.

PRIMEROS 90 DÍAS:
Objetivo: Establecer la marca como líder en TikTok Shop y crear velocidad de ventas sostenible.
Focus: escalar contenido, expandir red de creadores, lanzar soporte de paid media.

SKM (STRATEGIC KEY MERCHANT) TIERS:
SKM son los sellers más importantes y de alta prioridad. Reciben soporte de crecimiento focalizado y primer acceso a recursos de tráfico, creadores y campañas.

• A1: Official brand shops.
• A2: Authorized brand distributors/retailers.
• B1: High-GMV DTC merchants.

Conocer el tier informa cuánto soporte de plataforma esperar y qué unlocks (campañas, tráfico, acceso a account manager) están disponibles.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ops-3",
    topic: "operations",
    type: "script",
    title: "SPS Recovery — El Play de las 20 Órdenes",
    body: `Cuando el SPS baja hacia 3.0, abordar Product Satisfaction y Fulfillment en paralelo.

RECOVERY PLAY 1 — PRODUCT SATISFACTION:
Pushear al menos 20 órdenes de test a través de la tienda usando diferentes cuentas de customer y diferentes métodos de pago. Luego dejar reseñas honestas y bien escritas en cada una. El volumen inunda el rating pool con señal positiva.

Esto es una táctica de estabilización, no una estrategia a largo plazo. El fix estructural es la satisfacción real del cliente.

RECOVERY PLAY 2 — FULFILLMENT:
Los dips vienen de: inventory sync issues (especialmente Discovery kits), late shipping, o tracking updates faltantes. Fix: confirmar sync, enviar cada orden a tiempo sin excepciones, mantener tracking actualizado.

FRAMEWORK DE DECISIÓN:
• SPS 3.0–3.1 con todo fuerte: Recovery orgánica en 1–2 semanas. Correlo si llega un review negativo.
• SPS 3.0–3.1 con fulfillment O review rate débil: Correlo ahora. La recovery orgánica no va a pasar sola.
• En exactamente 3.0: Correlo de inmediato. Un mal review = menos de 2.9 = sin afiliados.
• Ya en 2.9 o menos: Correlo inmediata y agresivamente. Cada día cuesta revenue de afiliados.

POR QUÉ EL VOLUMEN ES SEGURO: Un mal review contra 5 reviews te hunde. Contra 30 reviews apenas se mueve la aguja.

NOTA: Los 20 test orders + reviews requieren coordinación entre múltiples cuentas. Buildá un SOP de antemano para no improvisar bajo presión.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ops-4",
    topic: "operations",
    type: "note",
    title: "Q&A Operacional — Situaciones Reales con Creadores",
    body: `REPORTES DE PRODUCTO DEFECTUOSO:
Si es un caso aislado: reconocé el problema, pedí disculpas al creador, y monitoreá patrones.
Si se repite (múltiples reportes en una semana): escalar a la marca inmediatamente con: número de creadores afectados, defecto específico, timing y frecuencia.

FREE SAMPLE REPLACEMENTS:
Los creadores no pueden pedir reembolsos por samples gratuitos. Las plataformas restringen reenviar otro sample dentro de 30 días.
Regla: NO prometas reemplazos a menos que la marca apruebe off-platform.
Respuesta estándar: reconocer el problema → explicar que no podés reenviar → remover el requisito de posteo.

VIDEO DEL CREADOR YA NO ELEGIBLE PARA COMISIÓN:
1. Verificar si el listing fue desactivado por una violación.
2. Confirmar que la campaña no terminó.
3. Revisar open collaboration settings: comisión activa, sin requisitos ocultos, creador no removido.
Si el video debería ser elegible pero la comisión muestra cero, es un issue técnico que necesita revisión inmediata.

RE-ENGAGING CREADORES DESPUÉS DE ISSUES DE STOCK:
1. Ir al tab de Orders en Seller Center.
2. Filtrar por free samples del producto en las últimas 2–3 semanas.
3. Exportar la lista (incluyendo creator handles).
4. DM Secuencia:
   Msg 1: "Gran noticia — el producto está de vuelta en stock! Ahora es el momento perfecto para postear."
   Msg 2: "Solo un recordatorio de que el producto está live de nuevo. Nos encantaría ver tu video!"`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ops-5",
    topic: "operations",
    type: "note",
    title: "Pricing & Promociones — Estrategia y Anti-Patrones",
    body: `El pricing es el lever más poderoso en TikTok Shop y el más peligroso de mal usar.

CÓMO SABER SI UN DESCUENTO ES BUENO:
1. Estudiar el P&L de la marca: COGS, gross margin, y operating expenses.
2. Benchmarkar contra competidores del mismo tamaño — no los gigantes de la categoría.

SMART PROMOTION LEVERS:
• Funded Coupons de TTS: La plataforma absorbe parte del costo. Usarlos siempre que estén disponibles.
• TTS Exclusive Bundle: Manera legítima de ofrecer un mejor precio, solo disponible en TTS.
• ANTI-PATRÓN: Mark Up to Mark Down — inflar el precio para mostrar un descuento mayor. Daña la confianza.

GUIDELINES:
• 15–20% de descuento es atractivo sin ser demasiado agresivo.
• Evitar promociones largas o constantes a menos que sea parte de la estrategia core.

QUÉ PASA CON DESCUENTOS DEMASIADO AGRESIVOS:
• Los consumidores anclan al precio más bajo.
• Retirar las promociones causa caídas sharp de performance.
Dr. Brandt lo vivió: una vez reducidos los descuentos, el performance cayó porque los compradores habían ajustado sus expectativas.

EJEMPLOS POR MARCA:
• Renegade Products: Puede descontar agresivamente (controla manufacturing y fulfillment).
• Morphe: Márgenes bajos — pushing discounts no es necesario.
• ChapStick: Ya affordable (~$15). Descontar adicional no es necesario.
• Dr. Brandt: Necesitaba descuentos porque un primer de $50 es difícil de mover orgánicamente.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "ops-6",
    topic: "operations",
    type: "note",
    title: "Principios Recurrentes del Playbook",
    body: `3 PRINCIPIOS QUE APARECEN EN CADA CAPÍTULO:

1. PARALLEL EXECUTION BEATS SEQUENTIAL:
Outreach, pixel setup, qualification y campaign builds deben arrancar en el onboarding en lugar de esperar uno al otro. Las marcas que se mueven más rápido corren múltiples workstreams en paralelo desde el día uno.

2. BENCHMARKAR CONTRA MARCAS DE TAMAÑO SIMILAR, NO LÍDERES DE CATEGORÍA:
Aplica en pricing, qualification levels (L3+ comparisons), ROI expectations, y comisiones. Los peers realistas dan data útil. Los gigantes dan vanity targets.

3. LEER ANTES DE RECOMENDAR:
Examinar la feature específica en contexto antes de dar un sí/no. Los defaults son peligrosos en TTS porque la respuesta correcta depende del impacto en el SPS, límites de órdenes, y postura actual de métricas. Aplica igual a ad strategy, pricing, y creator outreach.

REGLA FINAL:
El crecimiento es input-driven. El score governance es non-negotiable. Y cada decisión de marca es un tradeoff entre velocidad, eficiencia y brand perception. Usar este playbook como referencia, no como receta.`,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
];

export function getEntriesByTopic(topic: string): Entry[] {
  return entries.filter((e) => e.topic === topic);
}

export function getAllEntries(): Entry[] {
  return entries;
}

export function getEntryById(id: string): Entry | undefined {
  return entries.find((e) => e.id === id);
}

export function getCountsByTopic(): Record<string, number> {
  return entries.reduce(
    (acc, e) => ({ ...acc, [e.topic]: (acc[e.topic] ?? 0) + 1 }),
    {} as Record<string, number>
  );
}
