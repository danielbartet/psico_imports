var express = require('express');
var router = express.Router();
const xlsxFile = require('read-excel-file/node');

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://root:CeEbsTjdHHQ7i2lK@cluster0.c4mte.mongodb.net/psico?retryWrites=true&w=majority";

const getPtos = async (rows, collection) => {
  let tipos = {}
  let result = []
  let tables = ['','L','F','K','1-Hs','2-D','3-Hy','4-Pd','5-Mf','6-Pa','7-Pt','8-Sc','9-Ma','0-Si','A-Anx','R','Es','MAC-R','Fb','TRIN','VRIN','O-H','Do','Re','Mt','GM','GF','PK','PS','MDS','APS','AAS','ANX','FRS','OBS','DEP','HEA','BIZ','ANG','CYN','ASP','TPA','LSE','SOD','FAM','WRK','TRT','D1','D2','D3','D4','D5','Hy1','Hy2','Hy3','Hy4','Hy5','Pd1','Pd2','Pd3','Pd4','Pd5','Pa1','Pa2','Pa3','Sc1','Sc2','Sc3','Sc4','Sc5','Sc6','Ma1','Ma2','Ma3','Ma4','Si1','Si2','Si3','F(p)']
  await rows.reduce(async (promise, el) => {
    let indexM = 1
    let indexF = 2
    await promise;
    if(el[0] != 'ptos brutos'){
        ptos = el[0]
        await tables.reduce(async (promise, element) => {
          console.log(element)
          console.log(indexM)
          console.log(indexF)
          await promise;
          tipos[element] = {
            m: el[indexM], 
            f: el[indexF] 
          }
          indexF += 2
          indexM += 2
        })
        let newListing = {
          punto: ptos,
          tipos
        }
        console.log('- ptos: '+ptos)
        const resultInsert = await collection.insertOne(newListing);
        result.push(newListing)
      }
  }, Promise.resolve())
  return result
}

const savePares = async (collection) => {
  const par1 = {
    par: [0,1],
    texto: 'No hay interpretación para este par'
  }
  const par2 = {
    par: [0,2],
    texto: 'No hay interpretación para este par'
  }
  const par3 = {
    par: [0,3],
    texto: 'No hay interpretación para este par'
  }
  const par4 = {
    par: [0,4],
    texto: 'No hay interpretación para este par'
  }
  const par5 = {
    par: [0,5],
    texto: 'No hay interpretación para este par'
  }
  const par6 = {
    par: [0,6],
    texto: 'No hay interpretación para este par'
  }
  const par7 = {
    par: [0,7],
    texto: 'No hay interpretación para este par'
  }
  const par8 = {
    par: [0,8],
    texto: 'No hay interpretación para este par'
  }
  const par9 = {
    par: [0,9],
    texto: 'No hay interpretación para este par'
  }
  const par10 = {
    par: [1,2],
    texto: '12/21 Los aspectos más destacables de este código son dolor e incomodidad somáticos. Los individuos cuyo perfil presenta este código manifiestan sentirse físicamente enfermos, aunque puede no haber ninguna evidencia de una base orgánica para sus síntomas. Suelen estar muy preocupados por su salud y sus funciones corporales, y es probable qua reaccionen exageradamente frente a cualquier mínima disfunción física. Pueden presentar múltiples quejas somáticas, o los síntomas pueden estar limitados a un sistema particular. Aunque pueden surgir dolores cabeza y problemas cardiacos, lo mas cuente es que sea el sistema digestivo el mencionado. Es común que presenten ulceras, especialmente en la parte superior de la vía gastrointestinal, y también pueden sufrir de anorexia, nauseas y vómitos. Las personas con este código suelen también quejarse de mareos, insomnio, debilidad, fatiga y cansancio. Tienden a reaccionar al estrés, incluyendo responsabilidades, con síntomas físicos suelen ser resistentes a las explicaciones psicológicas de sus síntomas. Estos individuos son generalmente ansiosos, tensos y nerviosos. Tienden a preocuparse por muchas cosas, y a ser inquietos e irritables. Aunque no es frecuente que presenten depresiones clínicas profundas, muchas veces manifiestan tener sentimientos de infelicidad o disforia preocupación y falta de iniciativa.'
  }
  const par11 = {
    par: [1,3],
    texto: '13/31 Este código es más común entre las mujeres y las personas de edad, que entre los hombres y las personas más jóvenes. Los pa¬cientes psiquiátricos con el código 13/31 sue¬len recibir diagnósticos de desorden somatoforme. Pueden estar presentes síntomas clásicos de conversión, particularmente si la es¬cala 2 esta considerablemente por debajo que las escalas 1 y 3 (este patrón es el llamado "triada neurótica" o patrón conversivo V). En general, estas personas no presentan ni an¬siedad ni depresión severas, aunque pueden manifestar sentir cierta tensión. Tampoco suelen presentar síntomas claramente psicóticos. El individuo con este código no suele estar marcadamente incapacitado para funcionar socialmente; lo más probable es que continúe con su vida cotidiana, pero en un nivel reducido de eficacia'+
    'Las quejas somáticas que presentan estas personas suelen incluir dolores de cabeza, dolor de pecho, de espalda, y falta de sensación o temblores en las extremidades. Es común que presenten desordenes en la alimentación, incluyendo anorexia, nauseas, vómitos y obesidad. Otras quejas físicas habituales incluyen debilidad, fatiga, mareos y perturbaciones del sueño. Los síntomas físicos se intensifican en momentos de estrés, y suele ser claro el beneficio secundario asociado con dichos síntomas.'+
    'Los individuos con este código suelen presentarse a si mismos como normales, responsables, y sin culpa. Hacen uso excesivo de la negación, proyección y racionalización, y culpan a otros por sus dificultades. Prefieren explicaciones médicas para sus síntomas, y carecen de "insight" con respecto a los factores psicológicos que subyacen a estos síntomas. Suelen manifestar una visión excesivamente optimista e idealizada de sus situaciones y del mundo en general, y no demuestran una adecuada preocupación por sus síntomas y problemas.'+
    'Estas personas suelen ser más bien inmaduras y egocéntricas. Son inseguras y tienen una gran necesidad de atención, afecto y comprensión. Son muy dependientes, pero se sienten incomodas con esta situación, lo que las lleva a sentirse conflictuadas. Aunque son socialmente extrovertidas, sus relaciones tienden a ser superficiales, no siendo capaces de involucrarse emocionalmente con otras personas. Suelen explotar sus vínculos sociales para tratar de colmar sus propias necesidades. Les falta capacidad para relacionarse con el sexo opuesto, y pueden tener escasos impulsos heterosexuales.'+
    'Las personas que presentan el código 13/31 suelen sentirse resentidas y hostiles hacia otras personas, particularmente hacia aquellos que son percibidos como no satisfaciendo sus necesidades de atención. La ma¬yor parte del tiempo se muestran muy controlados, y tienden a expresar sus sentimientos negativos en forma indirecta y pasiva, pero ocasionalmente "pierden los estribos" y se expresan con enojo, pero sin violencia. Pa¬ra estas personas es muy importante comportarse de manera socialmente aceptable. Necesitan convencer a los demás que son lógicos y razonables, y suelen ser convencionales y conformistas en sus actitudes y valores.'+
    'Estas personas son difíciles de motivar en psicoterapia tradicional, a causa de su resistencia a reconocer los factores psicológicos que subyacen a sus síntomas. Suelen evitar la discusión de los aspectos psicológicos que pueden estar relacionados con sus síntomas somáticos, y si los terapeutas insisten en hacerlo, es probable que den por terminada la terapia prematuramente. A veces es posible lograr que discutan sus problemas, siempre que no se sugiera ningún vinculo entre estos y sus problemas somáticos. En la terapia, esperan que los terapeutas les provean soluciones definitivas a sus problemas, y pueden dar por finalizado el tratamiento cuando esto no sucede. Estas personas tienden a ser sugestionables, y muchas veces aceptan intentar actividades aconsejadas por los terapeutas.'
  }
  const par12 = {
    par: [1,4],
    texto: '14/41 Este código no se encuentra con frecuencia en la práctica clínica, y es mucho más común entre los hombres que entre las mujeres. Las personas que presentan este código suelen manifestar síntomas somáticos severos, particularmente dolores de cabeza no específicos. A veces parecen indecisos y ansiosos. Aunque son socialmente extrovertidos, tienen dificultades para relacionarse con miembros del sexo opuesto. Pueden tener sentimientos de rebelión hacia su hogar y sus padres, pero no es probable que expresen directamente estos sentimientos. A veces presentan problemas asociados con el alcoholismo, perdida de trabajo y problemas familiares. En el ámbito laboral o académico, estas personas carecen de "empuje" y no tienen objetivos bien definidos. Suelen mostrarse insatisfechos y pesimistas en su visión de la vida y ser demandantes y quejosos. En sus relaciones interpersonales, pueden ser percibidos como maliciosos y arrogantes. Dado que generalmente niegan sus problemas psicológicos, suelen resistirse a la psicoterapia tradicional.'
  }
  const par13 = {
    par: [1,5],
    texto: 'No hay interpretación para este par'
  }
  const par14 = {
    par: [1,6],
    texto: 'No hay interpretación para este par'
  }
  const par15 = {
    par: [1,7],
    texto: 'No hay interpretación para este par'
  }
  const par16 = {
    par: [1,8],
    texto: '18/81 Las personas con este código alimentan muchos sentimientos de hostilidad y agresión, y no son capaces de expresarlos de una manera mesurada y adaptativa. A veces, inhiben esta expresión casi completamente, lo que resulta en sentimientos de estar "a punto de estallar"; otras veces, son excesivamente beligerantes e insultantes.'+
    'Los individuos que presentan este código se sienten socialmente inadecuados, especialmente con miembros del sexo opuesto. No tienen confianza en los demás, los mantienen distantes, y, en general, se sienten aislados y alienados. Es común que presenten una historia de frecuentes mudanzas y cambios de trabajo.'+
    'Los pacientes psiquiátricos con este código suelen ser diagnosticados, de acuerdo a un criterio estrictamente clínico, como esquizofrénicos, aunque a veces se los diagnostica como padeciendo desordenes de ansiedad y de personalidad esquizoide. Estas personas suelen sentirse infelices y deprimidas, y pue¬den presentar una afectividad limitada. Sue¬len presentar preocupaciones somáticas (incluyendo dolores de cabeza e insomnio), que por momentos son tan intensas que bordean el delirio. Estas personas pueden presentar pensamiento confuso, y se distraen muy fácilmente.'
  }
  const par17 = {
    par: [1,9],
    texto: '19/91 Las personas que presentan este código suelen estar experimentando un alto grado de malestar y perturbación. Tienden a ser muy ansiosas, tensas, e inquietas. Son comunes las quejas somáticas, incluyendo proble¬mas gastrointestinales, dolores de cabeza, y agotamiento. Estos sujetos suelen resistirse a aceptar explicaciones psicológicas de sus síntomas. Aunque en la superficie parecen ser conservadoras, socialmente extrovertidas, agresivas, y beligerantes, son básicamente personas pasivo dependiente que están tratando de negar estos aspectos de su per¬sonalidad.'+
    'Los individuos que presentan este código suelen ser ambiciosos. Tienen altas aspiraciones para si mismos, pero carecen de objetivos claros y definidos. Se sienten frustrados por su incapacidad para alcanzar un alto nivel de logros. Este código aparece a veces en individuos con lesión cerebral que tienen dificultades para aceptar sus limitaciones.'
  }
  const par18 = {
    par: [2,3],
    texto: '23/32 Aunque las personas con este código no suelen experimentar una ansiedad que los incapacite pueden, sin embargo, manifestar sentirse nerviosas, agitadas, tensas y preocupadas. También dicen sentirse tristes, infe¬lices y deprimidas. Es frecuente que presenten fatiga, agotamiento y debilidad. Suele fal¬tarles interés y compromiso con sus propias situaciones vitales, y les resulta difícil iniciar proyectos. Es posible que su actividad física este disminuida, y pueden aparecer quejas somáticas, generalmente gastrointestinales.'+
    'Estas personas son más bien pasivas, dóciles y dependientes. Están llenas de dudas sobre si mismas, y alimentan sentimientos de inadecuación, inseguridad, e inutilidad. Tienden a provocar actitudes de ayuda y apoyo en otras personas. Las personas con este código están muy interesadas en los logros, el status y el poder. Pueden parecer competitivas, trabajadoras y con "empuje", pero no suelen ubicarse en situaciones de competencia donde puedan llegar a experimentar fracasos. Buscan asumir responsabilidades, pero temen el estrés y la presión asociados con ellas. Muchas veces sienten que no reciben el adecuado reconocimiento a sus logros, y sue¬len sentirse heridas ante la menor crítica.'+
    'Estas personas son extremadamente controladas. Tienen dificultad para expresar sus sentimientos, y pueden sentirse "atoradas" gran parte del tiempo. Tienden a negar impulsos inaceptables, y cuando falla la negación se sienten ansiosas y culpables. Las personas que presentan el código 23/32 se sienten socialmente inadecuadas, y tienden a evitar las vinculaciones sociales. Se sienten especialmente incomodas con los miembros del sexo opuesto, y es frecuente que presenten desajustes sexuales, incluyendo frigidez e impotencia.'+
    'Este código es mucho mas frecuente entre las mujeres que entre los hombres. Más que indicar síntomas incapacitantes, sugiere un nivel disminuido de eficiencia por largos periodos. Los problemas suelen ser de larga data, y la persona que presenta este código ha aprendido a tolerar un importante nivel de infelicidad. Entre los pacientes psiquiátricos, el diagnostico mas frecuentemente asignado a personas con este código es el de desorden depresivo. Es muy raro que reciban un diagnostico de trastorno antisocial de la personalidad.'+
    'No es probable que respondan favorablemente a la terapia tradicional. No suelen ser introspectivos; les falta "insight" sobre su propio comportamiento, suelen resistirse a las formulaciones psicológicas de sus problemas, y llegan a tolerar un nivel muy alto de infelicidad antes de sentirse motivados a cambiar.'
  }
  const par19 = {
    par: [2,4],
    texto: '24/42 Es muy común que las personas con este código lleguen a la consulta con un profesional después de haber tenido problemas con sus familias o con la ley. Son impulsivas e incapaces de demorar la gratificación de sus impulsos. Tienen poco respeto por las normas sociales, y muchas veces se encuentran en conflicto con ellas. Presentan un compor¬tamiento tipo "acting out", que puede incluir abuso de alcohol, arrestos, perdida de trabajo, y discordias familiares asociadas con la bebida.'+
    'Estas personas suelen sentirse frustradas por su propia falta de logros, y se sienten resentidos ante las exigencias de otras personas. Frente al estrés, muchas veces reaccionan bebiendo excesivamente o consumiendo drogas. Después de periodos de "acting out", suelen expresar remordimiento y culpa por sus acciones. Pueden manifestar sentirse deprimidos, ansiosos, e inútiles, pero estos sentimientos no parecen sinceros. A pesar de su decisión de cambiar, suelen reincidir en el mismo tipo de comportamientos. De acuerdo a la literatura sobre este tema, cuando las escalas 2 y 4 están muy elevadas, es muy posible que se presenten pensamientos suicidas, e incluso intentos de quitarse la vida. Muchas veces, estos intentos están dirigidos a que otras personas se sientan culpables.'+
    'Cuando no están en problemas, estas personas pueden parecer enérgicas, sociables y extrovertidas. Suelen producir primeras impresiones favorables, pero su tendencia a manipular a los demás lleva a sentimientos de resentimiento en sus relaciones a largo plazo. Por debajo de una fachada exterior de personas competentes y capaces, estos individuos tienden a ser introvertidos, autoconcientes y pasivodependientes. Suelen alimentar sentimientos de inadecuación e insatisfacción consigo mismos, y se sienten incómodos en sus interacciones sociales, particularmente con el sexo opuesto. A veces parecen ser rígidos y excesivamente intelectualizados.'+
    'Aunque las personas que presentan el código 24/42 pueden expresar su necesidad de ayuda y el deseo de cambiar, el pronóstico para una psicoterapia tradicional no es favorable. Es probable que den por terminada la terapia prematuramente, cuando disminuye el estrés situacional, o cuando han logrado solucionar las dificultades del momento. Aun cuando continúen el tratamiento terapéutico, no es probable que mejoren mucho.'
  }
  const par20 = {
    par: [2,5],
    texto: 'No hay interpretación para este par'
  }
  const par21 = {
    par: [2,6],
    texto: 'This high point pair suggests the probability of an early stage of a psychosis in a client who may be'+
    'experiencing more severe emotional difficulties than the profile ordinarily would suggest. There is a reservoir of'+
    'anger and hostility present that is not entirely masked by the depressed feelings. Unlike most depressed individuals'+
    'who are unable to express their anger overtly, these clients usually are openly hostile, aggressive, and resentful'+
    'towards others. They adopt a chip-on-the-shoulder attitude in an attempt to reject others before they are rejected.'+
    'Also, they read malevolent meaning into neutral situations and jump to conclusions based on insufficient data.'+
    'Paranoid trends are rather pronounced, sometimes to the point where paranoid ideation is psychotic in nature.'
  }
  const par22 = {
    par: [2,7],
    texto: '27/72 Las personas con este código suelen ser ansiosas, nerviosas y tensas. Se preocupan excesivamente, y se sienten fácilmente amenazadas, ya sea por razones reales o imaginarias. Tienden a anticipar los problemas antes de que ocurran, y reaccionan excesivamente frente a cualquier situación de estrés. Es común que presenten síntomas somáticos, y vagas quejas de fatiga, cansancio y agotamiento. También pueden quejarse de insomnio, anorexia y molestias cardiacas. La depresión también es un aspecto importante de este código. Aunque estas personas pue¬den no manifestar sentirse especialmente tristes o infelices, suelen presentar síntomas de depresión clínica, como perdida de peso, o enlentecimiento motor y/o intelectual. Son extremadamente pesimistas con respecto al mundo en general, y especialmente sobre la posibilidad de superar sus problemas. Pasan mucho tiempo pensando acerca de esos problemas.'+
    'Las personas que presentan este código tienen una fuerte necesidad de obtener logros y ser reconocidas por ello. Tienen altas aspiraciones para si mismos, y se sienten culpables cuando no logran sus objetivos. Tien¬den a ser indecisos, y alimentan sentimientos de inadecuación, inseguridad e inferioridad. Suelen auto castigarse, culpándose a si mismas por todos los problemas que encuentran en sus situaciones vitales. Son generalmente rígidos, tanto en su modo de pensar como en su manera de solucionar los problemas. En sus actividades diarias suelen ser minuciosos y perfeccionistas. También pueden ser extremadamente religiosos y moralistas.'+
    'Estas personas tienden a ser más bien dóciles y pasivodependientes en sus relaciones con los demás. En realidad, muchas veces les resulta difícil ser apropiadamente asertivos. Tienen la capacidad para formar lazos emocionales profundos, y en momentos de estrés se vuelven excesivamente apegados y dependientes. No son agresivos ni beligerantes, y tienden a suscitar en los demás una conducta de apoyo y ayuda. Debido al intenso malestar que experimentan, están motivados para la psicoterapia. Tienden a permanecer en el tratamiento mas tiempo que la mayoría de los pacientes, y se puede esperar que progresen en forma lenta pero sostenida.'+
    'Los pacientes psiquiátricos con el código 27/72 suelen recibir un diagnostico de trastorno de ansiedad, depresivo u obsesivo compulsivo. Es muy raro que reciban un diagnostico de desorden antisocial de la personalidad.'
  }
  const par23 = {
    par: [2,8],
    texto: '28/82 Las personas que presentan este código suelen manifestar sentirse ansiosas, agitadas, tensas y nerviosas. Es característico que también manifiesten perturbaciones del sueño, incapacidad de concentrarse, pensamiento confuso y falta de memoria. Estas personas suelen ser ineficientes en el manejo de sus responsabilidades, y su pensamiento y forma de solucionar los problemas tienden a ser poco originales. Es probable que se presenten a si mismas como enfermas físicamente, con quejas somáticas que incluyen mareos, perdidas de conciencia, nauseas y vómitos. Se resisten a la interpretación psicológica de sus problemas, y son resistentes al cambio. Suelen subestimar la seriedad de sus problemas, y ser poco realistas acerca de sus propias capacidades.'+
    'Estos individuos son básicamente dependientes e ineficaces, y tienen problemas para ser asertivos. Gran parte del tiempo se sienten irritables y resentidos; temen perder el control y no se expresan directamente. Tratan de negar impulsos indeseados, y pueden ocurrir periodos de disociación cognitiva durante los cuales expresan emociones negativas. Estos periodos son seguidos por culpa y depresión. Estas personas son muy sensibles a las reacciones de los demás, y suelen sospechar de las motivaciones de los otros. Pueden tener una historia de haber sido heridos emocionalmente, y temen ser heridos aun más. Suelen evitar relaciones interpersonales estrechas, y mantienen una distancia emocional con otras personas. Esta falta de vinculación significativa con los demás aumenta sus sentimientos de desesperanza e inutilidad.'+
    'Si tanto las escalas 2 como la 8 están muy elevadas, este código sugiere una psicopatología seria. Los diagnósticos más comunes dados a pacientes psiquiátricos con este código son: desorden bipolar o esquizoafectivo. Estos individuos tienen sintomatología crónica e incapacitante. Se sienten llenos de culpa y parecen estar clínicamente deprimidos. Son comunes el aislamiento, el habla reducida y en voz baja, un flujo de pensamiento retardado, y crisis de llanto. Los pacientes psiquiátricos con este código pueden presentar pensamientos suicidas, y es posible que tengan un plan para llevarlos a la practica.'
  }
  const par24 = {
    par: [2,9],
    texto: '29/92 Este código suele corresponder a personas que son autocentradas y narcisistas, y piensan excesivamente en su propio valor. Aunque suelen expresar interés por obtener logros de alto nivel, muchas veces parece que se ubican de tal manera que el fracaso es inevitable. En las personas más jóvenes, este código podría estar sugiriendo una crisis de identidad caracterizada por falta de dirección personal y vocacional.'+
    'Estas personas manifiestan sentirse tensas y ansiosas, y son comunes las quejas somáticas, que muchas veces se centran en el tracto gastrointestinal superior. Aunque pueden no aparecer como clínicamente deprimidas en el momento en que son examinadas, sus historias típicamente sugieren periodos de depresión seria. En algunos casos pueden abusar del alcohol para escapar del estrés y la presión.'+
    'Este código se encuentra primariamente entre los individuos que niegan sentimientos subyacentes de inadecuación y baja autoestima, y se defienden de la depresión por medio de una actividad excesiva. Pueden alternar periodos de intensa actividad con otros de fatiga. Mientras que el diagnostico mas común que reciben los pacientes psiquiátricos que presentan este código es de desorden bipolar, a veces se lo encuentra en pacientes con daño cerebral que han perdido el control emocional, o que están tratando de enfrentar sus déficits a través de una actividad excesiva.'
  }
  const par25 = {
    par: [3,4],
    texto: '34/43 La característica más saliente de estas personas es el enojo crónico e intenso. Albergan impulsos hostiles y agresivos, pero son incapaces de expresar estos sentimientos negativos de manera apropiada. Si la escala 3 es más elevada que la escala 4, lo más probable es que expresen su enojo de manera pasiva e indirecta. Las personas en las que la escala 4 aparece mas alta que la escala 3 pueden parecer muy autocontrolados la mayor parte del tiempo, pero pueden ocurrir breves episodios de "acting out" agresivo. Los prisioneros con el código 43 tienen historias de crímenes y asaltos violentos. En algunos pocos casos, los individuos con el código 34/43 logran disociarse exitosamente de su comportamiento agresivo. Las personas que presentan este código carecen de "insight" acerca de los orígenes y consecuencias de su comportamiento. Tienden a ser extrapunitivos y a culpar a los demás por sus dificultades. Otras personas pueden definir su comportamiento como problemático, pero no es probable que ellos lo vean de esta manera.'+
    'Las personas con este código no suelen experimentar ansiedad y depresión incapacitante, pero suelen quejarse de dolores de cabeza, molestias gastrointestinales y otros problemas somáticos. Aunque a veces suelen mostrarse molestas o disgustadas, esta molestia no parece estar directamente relacionada con situaciones estresantes.'+
    'La mayoría de las dificultades de estas personas provienen de sentimientos profun¬dos y crónicos de hostilidad hacia miembros de su familia. Reclaman la atención y aprobación de los demás. Son muy sensibles al rechazo, y se vuelven hostiles cuando se los critica. Aunque exteriormente puedan parecer socialmente conformistas, íntimamente sue¬len ser rebeldes. Pueden presentar desajustes sexuales, y son comunes los problemas de pareja y la promiscuidad sexual. Son característicos de estos individuos los pensamientos e intentos suicidas; suelen seguir a episodios de abuso de alcohol y de comportamiento "acting out". Lo más probable es que reciban diagnósticos de trastornos de la personalidad, especialmente de personalidad pasivoagresiva.'
  }
  const par26 = {
    par: [3,5],
    texto: 'No hay interpretación para este par'
  }
  const par27 = {
    par: [3,6],
    texto: '36/63 Los sujetos que presentan esta combinación pueden expresar una ansiedad y tensión moderadas y también quejas somáticas. Estas incluyen dolores de cabeza y malestar gastrointestinal, entre otras, pero estos síntomas no suelen ser tan agudos como para provocar incapacidad. Muchas de sus dificultades pueden provenir de sentimientos crónicos de hostilidad hacia los miembros de la familia.'+
    'Suelen no expresar directamente sus sentimientos y muchas veces pueden no reconocerlos. Cuando se percatan de su hostilidad, tratan de justificarla en función de la conducta de los otros.'+
    'En general, las personas que presentan este código, son provocadores, poco colaboradores y les resulta difícil la intimidad con los otros.'+
    'Pueden expresar desconfianza y resentimiento respecto de los demás. También suele observarse una tendencia a centrarse en si mismos y actitudes narcisistas. Apelan a la negación en relación a sus serios problemas psicológicos y expresan una visión ingenua del mundo.'
  }
  const par28 = {
    par: [3,7],
    texto: 'No hay interpretación para este par'
  }
  const par29 = {
    par: [3,8],
    texto: '38/83 Esta combinación indica, con frecuencia, estar inmerso en un estado de confusión y extrema agitación psicológica. Suelen manifestar sentimientos de ansiedad, tensión y nervios. El estado presente de estos sujetos puede caracterizarse como de preocupación y miedo. Eventualmente, pueden presentar fobias.'+
    'Son comunes los sentimientos de depresión y desesperanza en estos individuos. También, la incapacidad para tomar decisiones, aun las más irrelevantes. Una amplia variedad de quejas somáticas suele acompañar esta configuración (malestar gástrico, genital, jaqueca, insomnio, difi-cultades musculares y articulares, vértigo, visión borrosa, dolores de pecho, etc.)'+
    'Las personas que presentan 83/38, suelen incurrir en discursos evasivos y ambiguos cuando hablan acerca de sus dificultades. Se caracterizan, en general, por su inmadurez, dependencia y necesidad de gran atención y afecto por parte de los demás. Expresan reacciones de autocastigo frente a la frustración. Suelen no comprometerse activamente en su situación vital. Son apáticos y pesimistas. Abordan sus problemas de modo estereotipado y poco original. Esta combinación, 38/83, puede sugerir, también, desordenes en el pensamiento. Personas que lo presentan expresan "no poder pensar claramente". Se observan, asimismo, problemas en la concentración y lagunas en la memoria. Presentan ideaciones poco convencionales y las asociaciones pueden ser bastante inconexas. Además, rumiaciones obsesivas. delirios y/o alucinaciones que se expresan abiertamente. También, pueden presentar un discurso incoherente. El diagnostico psiquiátrico mas común correspondiente a esta combinación es el de esquizofrenia, aunque, a veces, el diagnostico puede aludir a trastornos somatoformes.'+
    'Respecto de la psicoterapia, estos sujetos suelen beneficiarse cuando se establece un vínculo con el psicoterapeuta caracterizado por la contención y el soporte que este le brinda.'
  }
  const par30 = {
    par: [3,9],
    texto: 'No hay interpretación para este par'
  }
  const par31 = {
    par: [4,5],
    texto: '45/54 Las personas que presentan esta combinación suelen ser inmaduros y narcisistas. Son emocionalmente pasivos y contienen sus fuertes necesidades de dependencia. Tienen muchas dificultades en la aceptación de valores sociales, no son conformistas, desafiando a través de su vestimenta, su discurso y comportamiento aquellos valores.'+
    'En esta configuración la escala 5 indica que estos sujetos tienen un adecuado control y, en general, no presentan tendencias a la actuación, características de la elevación de la escala 4. Pero, la conjunción de la baja tolerancia a la frustración con intensos sentimientos de hostilidad y resentimiento, pueden llevar a periodos de "acting out" agresivos. Con posterioridad a estos "actings" los sujetos pueden experimentar, por breve tiempo, sentimientos de remordimiento y culpa. Sin embargo, no son capaces de inhibir ese tipo de episodios agresivos en el futuro.'+
    'El diagnostico psiquiátrico de este código suele ser el de desorden de personalidad pasivoagresivo.'+
    'Los sujetos en los que esta combinación se presenta, suelen experimentar dificultades respecto del rol sexual socialmente impuesto. Por ello muestran una actitud de rebelión ante los roles sexuales estereotipados. Pueden expresar, abiertamente, la posibilidad de relaciones homosexuales, particularmente si las escalas 4 y 5 están marcadamente elevadas. Los hombres que presentan esta configuración son extremadamente atentos respecto de las demandas de las mujeres.'
  }
  const par32 = {
    par: [4,6],
    texto: '46/64  Las personas con códigos 46/ 64 suelen ser inmaduras, narcisistas e indulgentes consigo mismas. Por lo general son pasivodependientes que demandan, excesivamente, atención y simpatía por parte de los demás. Pero, se resienten ante la mínima demanda de los otros. Las mujeres incluidas en este código se identifican totalmente con el rol femenino tradicional y son muy dependientes de los hombres. Tanto los hombres como las mu¬jeres se inhiben en situaciones sociales donde deben quedarse solos con otros. Su incomodidad aumenta si están entre personas del sexo opuesto. Son desconfiados de las motivaciones de los otros y evitan, en su mayoría, los compromisos emocionales profundos con los demás.'+
    'Comúnmente, la vida laboral es pobre y son frecuentes los problemas matrimoniales.'+
    'La hostilidad y el enojo reprimidos son característicos de estas personas. Pueden presentarse como seres irritables, malhumorados, aislados y resentidos. Especialmente respecto de las figuras relacionadas con la autoridad.'+
    'Tienden a negar sus problemas psicológicos. Suelen racionalizar y culpar a los demás, aceptando poco o nada de la responsabilidad acerca de sus propios comportamientos.'+
    'Sus autoevaluaciones suelen ser poco realistas y grandilocuentes. Como una de sus características es la negación de la propia problemática, no se observa disposición para tratamientos de tipo tradicional. Entre los pacientes psiquiátricos los diagnósticos asociados con este código pueden ser, o trastorno de la personalidad pasivoagresivo, o esquizofrenias de tipo paranoide.'+
    'Cuando la escala 6 se encuentra mas elevada que la escala 4, podría inferirse un desorden prepsicotico o psicótico. Los sujetos con este tipo de combinación pueden presentar quejas somáticas y emocionalidad indefinida. Expresan sentimientos de depresión y nervios y son indecisos e inseguros.'+
    'Los síntomas somáticos asociados, con mayor frecuencia, a este código, pueden ser: asma, hipertensión, fiebres altas, jaquecas y dolores cardiacos.'
  }
  const par33 = {
    par: [4,7],
    texto: '47/74 Las personas con esta configuración suelen alternar entre periodos de una evidente insensibilidad respecto de las consecuencias de sus acciones y una excesiva preocupación acerca de los efectos de las mismas.'+
    'Los episodios de "acting out", que pueden incluir abuso de alcohol, drogas y promiscuidad sexual, suelen ser seguidos por expresiones de sentimientos de culpa y autocondenacion que no inhiben la repetición de este tipo de hechos en el futuro'+
    'Suelen presentar, también, quejas somáticas vagas, incluyendo jaquecas y dolores estomacales. También dicen sentirse tensos, fatigados y exhaustos. Suelen ser un tanto dependientes e inseguros, y requieren en todo momento reaseguramiento constante de su propia valía.'
  }
  const par34 = {
    par: [4,8],
    texto: '48/84 Los sujetos con esta combinación parecen estar desubicados dentro de su ambiente. Son vistos por los demás como diferentes, peculiares y extraños. No son conformistas y tienen dificultades con las figuras de autoridad. En muchas ocasiones adhieren a posturas extremas en lo religioso o político.'+
    'Su comportamiento es errático e impredecible, presentando dificultades en el control de sus impulsos. Son sujetos irritables y resentidos. Pueden presentar conductas de "acting out" antisocial, que incluyen episodios de violencia que parecen ser poco planificados y sin un sentido aparente.'+
    'La prostitución, promiscuidad, desviación sexual son conductas que se presentan usualmente en sujetos con este tipo de perfil. Entre los violadores, este código es el que aparece con mayor frecuencia. El abuso de alcohol y drogas, especialmente alucinógenos, puede estar presente en los sujetos con esta combinación.'+
    'Las historias vitales de estos individuos indican un bajo nivel de desempeño y de logros, y dificultades en su adaptación general. Son sujetos que suelen generar situaciones en las que inevitablemente terminan fracasando y siendo rechazados. Suelen albergar sentimientos profundos de inseguridad, baja autoestima y necesidad exagerada de atención y afecto.'+
    'Pueden tener periodos durante los cuales presentan ideas obsesivas de suicidio. Son desconfiados y evitan establecer vínculos interpersonales demasiado cercanos, suelen tratar de manipular a los demás para que satisfagan sus necesidades.'+
    'A menudo son socialmente aislados y retraídos, careciendo de habilidades sociales.'+
    'El mundo suele ser vivido como hostil y amenazante por estos sujetos. Utilizan como mecanismo de defensa el aislamiento o la agresión. Racionalizan excesivamente, culpando a los demás por sus dificultades; frecuentemente no se responsabilizan por las consecuencias de su conducta.'+
    'Es común que estén preocupados por su masculinidad o feminidad, según el caso. Pueden obsesionarse con pensamientos sexuales, pero temen no poder desempeñarse adecuadamente en situaciones eróticas. Estos sujetos pueden llegar a cometer actos sexuales antisociales como un intento de mostrarse sexualmente adecuados.'+
    'Los pacientes psiquiátricos que presentan este perfil, suelen ser diagnosticados con esquizofrenia paranoide o con trastorno de personalidad antisocial, esquizoide o paranoide.'+
    'Si tanto la escala 4 como la 8 están muy elevadas y particularmente, la escala 8 se encuentra mucho mas elevada que la 4, aumenta la posibilidad de que estos sujetos presenten psicosis y sintomatología bizarra, incluyendo trastorno de pensamiento y suspicacia paranoide.'
  }
  const par35 = {
    par: [4,9],
    texto: '49/94 La característica más saliente de las personas que presentan esta configuración, es un marcado desprecio por los valores y las normas sociales. Suelen tener problemas con las autoridades a raíz de su comportamiento antisocial. Su conciencia moral esta poco desarrollada, y sus valores éticos son fluctuantes. Algunas de las dificultades en que suelen verse involucrados estos sujetos son: alcoholismo, agresiones, problemas de pareja, "acting out" sexual, y otros actos antisociales. Este es un código que suele presentarse frecuentemente en personas que abusan del al¬cohol y de otras sustancias psicoactivas.'+
    'Estas personas son, generalmente, narcisistas, egoístas y autoindulgentes. Son bastante impulsivas e incapaces de demorar la gratificación de sus impulsos. Su capacidad de juicio es pobre, y muchas veces actúan sin considerar las posibles consecuencias de sus actos. En general, no logran aprender de la experiencia. No se muestran dispuestos a aceptar la responsabilidad por su propio comportamiento, suelen racionalizar sus faltas y fracasos, y culpar a otras personas por sus dificultades. Tienen poca tolerancia a la frustración, y muchas veces dan la impresión de ser malhumorados, irritables, y cáusticos.'+
    'Albergan intensos sentimientos de ira y hostilidad, y estos sentimientos se expresan en ocasionales exabruptos emocionales.'+
    'Estas personas tienden a ser ambiciosas y enérgicas, y suelen ser inquietas y excesivamente activas. Buscan encontrarse en situaciones en las que experimenten estimulación emocional y excitación. En situaciones sociales tienden a ser desinhibidas, extrovertidas y conversadoras, y crean una primera impresión favorable. Sin embargo, dado que están muy centradas en si mismas, y que desconfían de los demás, sus relaciones suelen ser superficiales y poco gratificantes. Parecen ser incapaces de profundas vinculaciones emocionales, y mantienen a los demás a distancia. Por detrás de una fachada de autoconfianza y seguridad, las personas que presentan esta combinación suelen ser inmaduras, inseguras y dependientes, pese a que tratan de negar estos sentimientos. En general, reciben diagnósticos de trastorno antisocial de la personalidad, aunque a veces estos pacientes son diagnosticados como presentando un desorden bipolar.'
  }
  const par36 = {
    par: [5,6],
    texto: 'No hay interpretación para este par'
  }
  const par37 = {
    par: [5,7],
    texto: 'No hay interpretación para este par'
  }
  const par38 = {
    par: [5,8],
    texto: 'No hay interpretación para este par'
  }
  const par39 = {
    par: [5,9],
    texto: 'No hay interpretación para este par'
  }
  const par40 = {
    par: [6,7],
    texto: 'No hay interpretación para este par'
  }
  const par41 = {
    par: [6,8],
    texto: '68/86 Las personas que presentan este perfil albergan intensos sentimientos de inferioridad e inseguridad. Carecen de autoconfianza y autoestima, y se sienten culpables acerca de lo que perciben como fracasos. Es común que se aíslen de sus actividades cotidianas y que presenten un estado de apatía emocional. Pueden presentar ideas de suicidio. No sue¬len vincularse emocionalmente con otras personas, ya que sospechan y desconfían de los demás. Sus habilidades sociales son seriamente deficientes, y estando solos es como se sienten más cómodos. Suelen resentirse ante las demandas de los demás, quienes suelen percibirlos como malhumorados, irritables, poco amistosos y negativistas. En general, su forma de vida puede ser caracterizada como esquizoide.'+
    'Aunque algunas personas con esta combinación son diagnosticadas como presentando desorden de personalidad paranoide o esquizoide, entre los pacientes psiquiátricos esta configuración suele ser asociada con un diag¬nostico de esquizofrenia paranoide, especialmente si las escalas 6 y 8 están mucho mas elevadas que la escala 7. Estos individuos pueden manifestar un comportamiento claramente psicótico. Su pensamiento suele ser descripto como autístico, fragmentado, tangencial y circunstancial, y el contenido del pensamiento tiende a ser bizarro. Pueden presentar dificultades en la concentración y la atención, déficits de memoria y poca capacidad de juicio. A veces presentan delirios de persecución y/o de grandeza, y también alucinaciones. Pueden manifestar sentimientos de falta de realidad. Las personas con este código suelen estar preocupadas por temas abstractos y teóricos, excluyendo aspectos específicos y concretos de sus situaciones vitales. Pueden presentar afectividad insulsa, y el habla puede ser rápida e incoherente por momentos. Parecen carecer de defensas eficaces, y estas personas responden al estrés y la presión aislándose en la fantasía y en sueños diurnos. Muchas veces les resulta difícil diferenciar entre fantasía y realidad. Se debe considerar la posibilidad de una consulta psiquiátrica para determinar la necesidad de medicarlos.'
  }
  const par42 = {
    par: [6,9],
    texto: '69/96 Los individuos que presentan este perfil suelen ser bastante dependientes y tener gran necesidad de afecto. Se sienten vulnerables frente a amenazas reales o imaginarias, y manifiestan estar tensos y ansiosos gran parte del tiempo. Además, pueden presentar crisis de llanto y temblores. Las reacciones excesivas frente a la menor situación de estrés son características de estas personas. Una respuesta típica frente a un nivel severo de estrés es el aislarse en la fantasía. Estos individuos son incapaces de expresar sus emociones de manera adaptada y moderada, y pueden alternar entre un control excesivo, y explosiones emocionales poco controladas.'+
    'Los pacientes psiquiátricos que presentan este código suelen recibir, casi siempre, un diagnostico de esquizofrenia paranoide, y pueden mostrar signos de un trastorno del pensamiento. Suelen quejarse de dificultades para pensar y concentrarse, y el flujo de su pensamiento puede presentarse enlentecido. Suelen ser dados a la rumiación, a la ideación excesiva, y a pensamientos obsesivos. Pueden presentar delirios y alucinaciones, y su discurso puede parece irrelevante e incoherente. Parecen estar desorientados y perplejos, y pueden mostrar poca capacidad de juicio.'
  }
  const par43 = {
    par: [7,8],
    texto: '78/87 Estos individuos suelen experimentar profundo malestar y angustia. No dudan en admitir sus problemas psicológicos, y parecen carecer de defensas adecuadas como para mantener su sufrimiento en niveles relativamente moderados. Manifiestan sentirse deprimidos, preocupados, tensos, y nerviosos. En su primera consulta a un profesional, pueden aparecer confundidos y en estado de pánico. Muestran poca capacidad de juicio y no parecen poder aprender de la experiencia. Suelen tender a la introspección y son caracterizados como dados a la rumiación y a la ideación excesiva.'+
    'Las personas que presentan este código albergan sentimientos crónicos de inseguridad, inadecuación e inferioridad, y tienden a ser bastante indecisas. Por lo general, sus experiencias de socialización son menores que las de la mayoría de las personas, y carecen de aplomo y confianza en si mismos en situaciones sociales. Por este motivo, tratan de aislarse socialmente. Son personas pasivodependientes, incapaces de asumir un rol dominante en sus relaciones interpersonales. Les resulta especialmente difícil mantener relaciones heterosexuales maduras. Se sienten bastante inadecuados en el rol sexual tradicional, y su desempeño erótico puede ser más bien deficiente. Es posible que, en un intento de compensar estos déficits, tengan fantasías sexuales muy elaboradas.'+
    'Las personas que presentan esta combinación suelen recibir diagnósticos de esquizofrenia, o de trastornos depresivos, obsesivo compulsivos, o de personalidad. En gene¬ral, el trastorno de personalidad diagnosticado más comúnmente a estas personas es el esquizoide. Es importante tomar en cuenta la elevación relativa de las escalas 7 y 8, para diferenciar entre desordenes psicóticos y no psicóticos. Las posibilidad de un desorden psicótico aumenta a medida que la escala 8 se eleva más que la escala 7. Aun cuando pueda diagnosticarse a una persona como psicótica, pueden no estar presentes síntomas psicóticos muy evidentes.'
  }
  const par44 = {
    par: [7,9],
    texto: 'No hay interpretación para este par'
  }
  const par45 = {
    par: [8,9],
    texto: '89/98 Las personas que presentan esta combinación suelen ser muy egocéntricas e infantiles en sus expectativas con respecto a los demás. Reclaman mucha atención, y se vuelven hostiles y resentidas cuando sus demandas no son satisfechas. Como temen vincularse emocionalmente, evitan relaciones estrechas y tienden a ser aisladas y retraídas socialmente. Parecen sentirse especialmente incomodas en relaciones heterosexuales, y son comunes los desajustes sexuales.'+
    'Estas personas suelen ser caracterizadas también como hiperactivas y emocionalmente lábiles. Parecen estar agitadas y excitadas, y pueden llegar a hablar excesivamente en voz alta. Se juzgan a si mismas de manera poco realista, y causan en los demás la impresión de ser ostentosas, jactanciosas e inconstantes. Tienden a negar sus dificultades, y a ser vagos y evasivos cuando hablan de ellas. También pueden afirmar que no necesitan ayuda profesional.'+
    'Aunque estas personas suelen tener una gran necesidad de logros y pueden sentirse presionadas para lograrlos, en realidad su desempeño tiende a ser mediocre. Sus sentimientos de inferioridad e inadecuación, y su baja autoestima, hace que eviten las situacio¬nes competitivas u orientadas hacia el logro.'+
    'En el caso de que las escalas 8 y 9 estén muy elevadas, este código sugiere problemas psicológicos serios. Es común que estas personas reciban un diagnostico de esquizofrenia. Es posible que haya severas perturbaciones del pensamiento; estos individuos suelen estar confundidos, perplejos y desorientados, y manifiestan sentimientos de irrealidad. Les es difícil concentrarse y pensar, y no logran enfocar adecuadamente las situaciones. Su pensamiento puede llegar a parecer extraño, inusual y autista. Su discurso puede ser bizarro, y presentar asociaciones extrañas, neologismos y ecolalia. Pueden aparecer delirios y alucinaciones. Es frecuente encontrar este código entre los adolescentes que consumen drogas.'
  }

  const resultInsert = await collection.insertMany([par1,par2,par3,par4,par5,par6,par7,par8,par9,par10,par11,par12,par13,par14,par15,par16,par17,par18,par19,par20,par21,par22,par23,par24,par25,par26,par27,par28,par29,par30,par31,par32,par33,par34,par35,par36,par37,par38,par39,par40,par41,par42,par43,par44,par45]);
  console.log(resultInsert)
  return resultInsert
}

const saveEscalas = async (collection) => {
  const scal1 = {
    index: 'L',
    nombre: 'Escala L (Sinceridad)',
    descripcion: 'Esta escala fue construida originalmente para detectar un intento deliberado y poco elaborado, por parte del sujeto, de presentarse bajo una luz favorable.Estos están relacionados con debilidades y fallas menores, que la mayor parte de la gente estaría dispuesta a admitir',
    escalas: [
      {
        menor: 69,
        mayor: 9999,
        texto: 'Evitan responder con franqueza a los ítem a fin de crear una impresión favorable de sí mismas.'+
        ' Se muestran defensivas, utilizando frecuentemente mecanismos de negación represión.'+
        ' Pueden presentar estados de confusión.'+
        ' Suelen manifestar poca, o ninguna percepción de sus propias motivaciones.'+
        ' Muestran tener poca conciencia de le consecuencias que su comportamiento puede tener para otras personas.'+
        ' Tienden a sobreestimarse.'+
        ' Suelen ser convencionales y socialmente conformistas.'+
        ' Su pensamiento es poco original y carece de flexibilidad para resolver situacione problemáticas.'+
        ' Son rígidas y moralistas.'+
        ' Tienen poca tolerancia al estrés y a las presiones ambientales.'
      },
      {
        menor: 0,
        mayor: 50,
        texto: 'Tienden a responder con sinceridad a los ítems del inventario.'+
        ' Tienen suficiente confianza en sí mismo como para admitir pequeñas fallas y de bilidades.'+
        ' En algunos casos pueden mostrarse ex cesivamente autocríticos, exagerando problemas y características negativas.'+
        ' Son personas perceptivas y sensibles en su relaciones interpersonales.'+
        ' Son percibidos como personas fuertes, serenas y espontáneas.'+
        ' Tienden a ser autónomos e independientes'+
        ' Tienen capacidad de liderazgo.'+
        ' La capacidad para comunicar sus ideas es buena.'+
        ' En algunos casos pueden ser descriptas como personas sarcásticas y cínicas.'
      }
    ]
  }
  const scal2 = {
    index: 'F',
    nombre: 'Escala F (Validez)',
    descripcion: 'Los ítems que conforman esta escala evalúan características tan diversas como el pensamiento paranoide, actitudes y comportamiento antisocial, hostilidad y mala salud física. menos del 10 % de los sujetos respondió en la dirección indicada en la clave de corrección. Por lo tanto, un puntaje elevado en este escala indica que se ha respondido en forma atípica, marcando una exagerada cantidad de síntomas. En caso de que el sujeto no presente serias perturbaciones, podría pensarse en un intento del individuo por aparecer como una persona inadecuada, incompetente o mentalmente enferma.',
    escalas: [
      {
        menor: 0,
        mayor: 50,
        texto: 'Sujetos que han respondido de acuerdo a como lo hacen la mayoría de las personas.'+
        ' • Es probable que no presenten ninguna psicopatología importante.'+
        ' • Pueden ser sujetos convencionales y de pocos intereses.'+
        ' • Pueden haber fingido, para presentar una imagen positiva de sí mismos.'
      },
      {
        menor: 49,
        mayor: 65,
        texto: 'Probablemente se trate de sujetos que han respondido en la dirección esperada a ítems de un área problemática en particular.'+
        ' Pueden manifestar un funcionamiento adecuado en la mayoría de las situaciones vitales que se le presentan.'
      },
      {
        menor: 64,
        mayor: 80,
        texto: '• El sujeto puede tener opiniones sociales, políticas o religiosas extremas.'+
        ' • Puede manifestar desórdenes psicóticos y neuróticos severos.'+
        ' • Sin llegar a presentar un cuadro psico-patológico severo, pueden ser descriptos como personas:'+
        ' • con estados de ánimo depresivo'+
        ' • inquietas'+
        ' • insatisfechas'+
        ' • inestables'+
        ' • poco convencionales, complejas'+
        ' • obstinadas'+
        ' • oportunistas'
      },
      {
        menor: 99,
        mayor: 9999,
        texto: 'El sujeto puede haber respondido al azar.'+
        ' Puede haber respondido "verdadero" a todos los ítems o "falso" a todos los ítems.'+
        ' El sujeto puede querer aparentar mayor enfermedad de la que en realidad le afecta.'+
        ' En pacientes severamente perturbados puede implicar:'+
        ' delirios'+
        ' alucinaciones visuales o auditivas'+
        ' tendencia al aislamiento'+
        ' dificultades en la comunicación'+
        ' poca capacidad de juicio'+
        ' déficit de atención'+
        ' organicidad'
      }
    ]
  }
  const scal3 = {
    index: 'K',
    nombre: 'Escala K (factor corrector)',
    descripcion: 'Los puntajes en esta escala se consideran asociados con una actitud defensiva frente a la evaluación. Esta escala se desarrolló como un modo más sutil y efectivo de detectar los intentos de los sujetos de presentarse bajo una luz más favorable, negando síntomas psico-patológicos. Se ha observado que las personas de mayor nivel educativo y socio-económico tienden a obtener puntajes altos. A veces, puntajes moderadamente elevados de esta escala, pueden reflejar fuerza del yo y recursos psicológicos.',
    escalas: [
      {
        menor: 0,
        mayor: 40,
        texto: 'Individuos que:'+
        ' • Hayan respondido "Verdadero" a la mayoría de los ítems.'+
        ' • Intenten dar una imagen desfavorable de sí mismos.'+
        ' • Presenten una aguda confusión de origen orgánico o psicótico.'+
        ' • Estén exagerando sus problemas como modo de pedir ayuda.'+
        ' • Se sientan insatisfechos y sean críticos acerca de sí mismos y de los demás.'+
        ' • Tienen dificultades para enfrentar los problemas de la vida cotidiana.'+
        ' • Presentan poca comprensión y percepción de sus propias motivaciones y comportamientos.'+
        ' • Son conformistas respecto de las normas sociales.'+
        ' • Suelen ser excesivamente sumisos frente a la autoridad.'+
        ' • Tienden a ser abúlicos.'+
        ' • Son inhibidos, introvertidos y superficiales.'+
        ' • Carecen de habilidad para las relaciones sociales, en las que se manifiestan como toscos y ásperos.'+
        ' • Pueden ser cínicos, cáusticos, escépticos y desconfiados.'+
        ' • Suelen dudar acerca de las verdaderas motivaciones de los demás.'
      },
      {
        menor: 40,
        mayor: 71,
        texto: 'Personas que:'+
        ' • Al responder a los ítems pudieron mantener un equilibrio adecuado entre una autoevaluación positiva y vina actitud autocrítica.'+
        ' • Presentan una adecuada adaptación y ajuste psicológico.'+
        ' • Manifiestan pocos indicadores de perturbación emocional.'+
        ' • Son independientes y autónomos.'+
        ' • Son capaces de enfrentar los problemas de la vida cotidiana.'+
        ' • Poseen una amplia gama de intereses.'+
        ' • Suelen ser ingeniosos, emprendedores y versátiles.'+
        ' • Son lúcidos y tienden a enfocar los problemas de modo racional y ordenado.'+
        ' • Tienen aptitud para las relaciones sociales.'+
        ' • Son entusiastas y comunicativos.'+
        ' • Tienden a tomar un rol dominante en sus relaciones.'
      },
      {
        menor: 70,
        mayor: 9999,
        texto: 'T>=71 corresponde a personas que:'+
        ' • Hayan respondido "Falso" a la mayoría de los ítems.'+
        ' • Intenten dar una imagen favorable.'+
        ' • Estén tratando de dar una impresión de adecuación, control y eficacia.'+
        ' • Puedan ser tímidas e inhibidas.'+
        ' • Presenten dificultades para involucrarse emocionalmente con otras personas.'+
        ' • Puedan ser intolerantes respecto de actitudes y creencias poco convencionales.'+
        ' • Pueden presentar una percepción y com¬prensión de sí mismas disminuida.'+
        ' • Tienden a no presentar comportamientos abiertamente transgresores.'+
        ' • Si el puntaje elevado en esta escala se acompaña de puntajes elevados en las esca¬las clínicas, puede tratarse de personas se¬veramente perturbadas, pero que tienen poca conciencia de ello.'+
        ' • Si no presentan tales perturbaciones, puede tratarse de personas con una excepcional fuerza del yo, entre otras características positivas'
      }
    ]
  }
  const scal4 = {
    index: 'Fb',
    nombre: 'Escala Fb',
    descripcion: 'Esta escala se elaboró como un complemento de la escala F, ya que la distribución de los ítems de ésta no abarca la totalidad del Inventario. Tanto la escala F como la Fb poseen las mismas características, pero ésta última distribuye sus ítems a partir del 281. Si se desea obtener un perfil en base a las escalas clínicas clásicas es suficiente con considerar sólo la escala F. En cambio, si el objeto es trabajar con escalas suplementarias, es necesario utilizar también la escala Fb, ya que los ítems de esas escalas están ubicados hacia el final del Inventario.'+
    ' Si se obtiene un puntaje normal en la escala F, pero uno elevado en la escala Fb, entonces puede presumirse que el sujeto, por distracción o cansancio, respondió en forma azarosa a la última parte de la prueba.',
    escalas: []
  }
  const scal5 = {
    index: 'VRIN',
    nombre: 'Escala VRIN (Variable Response Inconsistency)',
    descripcion: 'Esta escala provee información sobre la tendencia del sujeto a responder a los ítems de manera inconsistente. Está integrada por 67 pares de ítems que tienen un contenido similar u opuesto. Un puntaje elevado en esta escala podría deberse a alguna de las siguientes razones: '+
    ' • el sujeto respondió en forma azarosa, sea de-liberadamente o por un estado de confusión (tanto orgánica como psicótica).'+
    ' • el sujeto se halla severamente perturbado.'+
    ' • pretendió aparecer más perturbado de lo que realmente está.',
    escalas: []
  }
  const scal6 = {
    index: 'TRIN',
    nombre: 'Escala TRIN (True Response Inconsistency)',
    descripcion: 'Esta escala trata de identificar a los sujetos que responden inconsistemente porque tienden a:'+
    ' • responder "Verdadero" en forma indiscriminada (aquiescencia)'+
    ' • responder "Falso" en forma indiscriminada (no aquiescencia)'+
    ' En ambos casos el perfil obtenido puede ser inválido, lo cual imposibilita su interpretación.'+
    ' Esta escala está compuesta por 23 pares de ítems de contenido opuesto. Si un sujeto responde a ambos "Verdadero" o a ambos "Falso", indica un modo inconsistente de responder.',
    escalas: []
  }
  const resultInsert = await collection.insertMany([scal1, scal2, scal3, scal4, scal5, scal6]);
  console.log(resultInsert)
  return resultInsert
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
  await client.connect();
  const database = client.db('psico');

  const collection = database.collection('escalas');
  total = await saveEscalas(collection)
  res.json({ status: 200, total})
  
  //SAVE PARES
  /*const collection = database.collection('pares');
  total = await savePares(collection)
  res.json({ status: 200, total});*/

  //VER RESULTADO
  //const collection = database.collection('baremo');
  /*const resultPto = await collection.findOne({punto: 0}).then(items => {
    res.json({ status: 200, items});
  })*/
  
  //GUARDA BAREMO
  /*const collection = database.collection('baremo');
  await xlsxFile('./baremo.xlsx').then(async (rows) => {
      total = await getPtos(rows, collection)
      res.json({ status: 200, total});
  })*/
});

module.exports = router;