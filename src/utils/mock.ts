import Dipirona from "../assets/dipirona.png";
import Ibuprofeno from "../assets/ibuprofeno.png";
import Dorflex from "../assets/dorflex.png";

import Ciprofloxacino from "../assets/ciprofloxacino.png";
import Cefalexina from "../assets/Cefalexina.png";
import Cetoprofeno from "../assets/cetoprofeno.png";
import Diclofenaco from "../assets/diclofenaco.png";
import Naproxeno from "../assets/naproxeno.png"

const Analgesicos = [
  {
    id: 1,
    nome: "Dipirona",
    description: "Dipirona 500Mg 30 Comprimidos - Prati Donaduzzi - Genérico",
    Titulo:
      "--PARA QUE SERVE DIPIRONA MONOIDRATADA COMPRIMIDO PRATI-DONADUZZI--",
    descricao:
      "Este medicamento é indicado como analgésico (para dor) eantitérmico (para febre). Como o Dipirona Monoidratada Comprimido - Prati-Donaduzzi funciona? Este é um medicamento à base de dipirona, utilizado no tratamento da dor e febre. Tempo médio de início de ação 30 a 60 minutos após a administração e geralmentedura aproximadamente 4 horas.",
    Subtitulo:
      " --COMO USAR DIPIRONA MONOIDRATADA COMPRIMIDO PRATI-DONADUZZI--",
    Subtitulo2:
      " Você deve tomar os comprimidos com líquido (aproximadamente ½ a 1 copo), por via oral.",
    subtitulo3:
      "Posologia do Dipirona Monoidratada Comprimido - Prati-Donaduzzi",
    TextoD:
      "Dipirona monoidratada comprimidos 500 mg Adultos e adolescentesacima de 15 anos 1 a 2 comprimidos até 4 vezes ao dia. Dipirona monoidratada comprimidos 1 g Adultos e adolescentes acima de 15 anos ½ a 1 comprimido até 4 vezes ao dia. Se o efeito de uma única dose for insuficiente ou após o efeito analgésico ter diminuído, a dose pode ser repetida respeitando-se o modo de usar e a dose máxima diária, conforme descrito acima. O tratamento pode ser interrompido a qualquer instante sem provocar danos ao paciente,inerentes à retirada da medicação. Não há estudos dos efeitos deste medicamento administrado por vias não recomendadas. Portanto, por segurança e para garantir a eficácia deste medicamento, a administração deve ser somente por via oral.",
    imagem: Dipirona,
  },
  {
    id: 2,
    nome: "Ibuprofeno",
    description: "Ibupril 400mg 20 Cápsulas Moles",
    Titulo:
      "--Quais cuidados devo ter ao usar o Ibuprofeno Comprimido Neo Química--",
    descricao:
      "Este medicamento deve ser administrado com cautela a paciente com histórico de doenças gastrintestinais (estômago e intestino). Recomenda-se cuidado ao administrar ibuprofeno em pacientes com asma brônquica (ou história prévia), O uso deste tipo de anti-inflamatórios pode levar a deterioração da função renal (rins). A dose deve ser mantida tão baixa quanto possível e a função deve ser monitorada nesses pacientes. Este medicamento deve ser usado com cuidado em pacientes com histórico de problemas de coração ou pressão alta, pois foi relatado edema (inchaço) associado ao uso de ibuprofeno. Como outros anti-inflamatórios desta classe, ibuprofeno pode mascarar os sinais de infecção.",
    Subtitulo: "Efeitos renais (rins)",
    Texto:
      "Recomenda-se cautela ao iniciar o tratamento com ibuprofeno em pacientes com desidratação significativa, assim como os demais anti-inflamatórios desta classe. Os pacientes que apresentam maior risco para esta reação são aqueles com função renal alterada insuficiência cardíaca, disfunção hepática, pacientes em uso de diuréticos e idosos. Para pacientes idosos nenhum ajuste de dose é necessário a não ser que o paciente apresente diminuição da função renal ou hepática, sendo o ajuste de dose feito individualmente. Em todas as indicações, a dose seve ser ajustada individualmente e a menor dose deve ser administrada.",
    imagem: Ibuprofeno,
  },
  {
    id: 3,
    nome: "Dorflex",
    description: "Dorflex Analgésico - 36 Comprimidos",
    Titulo: "--Qual a composição do Dorflex--",
    descricao:
      "300 mg de dipirona monoidratada, 35 mg de citrato de orfenadrina (equivalente a 20,4 mg de orfenadrina base) e 50 mg de cafeína anidra. Excipientes: amido de milho, amidoglicolato de sódio, talco e estearato de magnésio.",
    Subtitulo:
      "--Superdose: o que acontece se tomar uma dose do Dorflex maior do que a recomendada--",
    Texto:
      "A orfenadrina é uma droga potencialmente tóxica e há relatos de mortes associadas à superdose (ingestão de 2 a 3 g de uma só vez). Efeitos tóxicos podem ocorrer, rapidamente em 2 horas, em intoxicação aguda, com convulsões, arritmias cardíacas e morte.",
    Subtitulo2:
      "Após superdose aguda com dipirona, foram registradas reações como:",
    Texto1:
      "Náuseas, vômito, dor abdominal, deficiência da função dos rins/insuficiência dos rins aguda (ex.: devido à nefrite intersticial) e, mais raramente, sintomas do sistema nervoso central (vertigem, sonolência, coma, convulsões) e queda da pressão sanguínea (algumas vezes progredindo para choque) bem como arritmias cardíacas (taquicardia). Após a administração de doses muito elevadas, a excreção de um metabólito inofensivo (ácido rubazônico) pode provocar coloração avermelhada na urina.",
    subtitulo3:
      "Em caso de uso de grande quantidade deste medicamento, procure rapidamente socorro médico e leve a embalagem ou bula do medicamento, se possível. Ligue para 0800 722 6001, se você precisar de mais orientações.",
    imagem: Dorflex,
  },
];

const Antibioticos = [
  {
    id: 1,
    nome: "Amoxicilina (Amoxil)",
    description: "AMOXIL GSK CAIXA 30 CÁPSULAS",
    Titulo: "--Amoxil, para o que é indicado e para o que serve?--",
    descricao:
      "Amoxil®, antibiótico eficaz contra grande variedade de bactérias, é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina. Entretanto, seu médico pode receitar este medicamento para outro uso. Se desejar mais informações, pergunte ao seu médico.",
    Subtitulo: " --Como o Amoxil funciona?--",
    Texto1:
      " Amoxil® contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. Amoxil® é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. Amoxil® atua destruindo as bactérias que causam essas infecções.",
    subtitulo3: "Quais as contraindicações do Amoxil?",
    Texto2:
      "Este medicamento não pode ser administrado nem ingerido por pessoas alérgicas à amoxicilina, a outros antibióticos penicilínicos ou antibióticos similares, chamados cefalosporinas. Se você já teve uma reação alérgica (como erupções da pele) ao tomar um antibiótico, deve conversar com seu médico antes de usar Amoxil®.",
    imagem: 'Amoxilina',
  },
  {
    id: 2,
    nome: "Ciprofloxacino (Cipro)",
    description:
      "Cloridrato de Ciprofloxacino 500mg Pharlab com 14 comprimidos Revestidos",
    Titulo:
      "--Cloridrato de Ciprofloxacino Pharlab, para o que é indicado e para o que serve?--",
    descricao:
      "Para o tratamento de infecções complicadas e não complicadas causadas por microrganismos sensíveis ao ciprofloxacino: Do trato respiratório: Muitos dos micro-organismos, p. ex. Klebsiella, Enterobacter, Proteus, E. coli, Pseudomonas, Haemophilus, Moraxella, Legionella e Staphylococcus reagem com muita sensibilidade ao cloridrato de ciprofloxacino. A maioria dos casos de pneumonia que não necessitam de tratamento hospitalar é causada por Streptococcus pneumoniae. Nesses casos, cloridrato de ciprofloxacino não é o medicamento de primeira escolha; Do ouvido médio (otite média) e dos seios paranasais (sinusite), especialmente se causadas por Pseudomonas ou Staphylococcus; Dos olhos; Dos rins e/ou do trato urinário eferente; Dos órgãos reprodutores, inclusive inflamação dos ovários e das tubas uterinas (anexite), gonorreia e infecções da próstata (prostatite); Da cavidade abdominal, p. ex. do estômago e intestino (trato gastrintestinal), do trato biliar e da membrana serosa que reveste internamente as paredes do abdome (peritônio); Da pele e de tecidos moles; Dos ossos e articulações. Infecção generalizada (septicemia). Infecções ou risco de infecção (profilaxia) em pacientes com sistema imunológico comprometido, por exemplo, pacientes em tratamento com medicamentos que inibem as defesas imunológicas naturais do organismo ou pacientes com número reduzido de glóbulos brancos do sangue. Eliminação seletiva de bactérias do intestino durante tratamento com medicamentos que inibem o sistema imunológico do organismo. Descontaminação intestinal seletiva em pacientes sob tratamento com imunossupressores. Cloridrato de ciprofloxacino não é eficaz contra Treponema pallidum (causador da sífilis).",
    Subtitulo: " --Como o Cloridrato de Ciprofloxacino Pharlab funciona?--",
    Texto1:
      " O ciprofloxacino, componente ativo deste medicamento, pertence ao grupo das fluoroquinolonas. As fluoroquinolonas bloqueiam determinadas enzimas de bactérias que têm um papel fundamental no metabolismo e na reprodução bacteriana, matando as bactérias causadoras da doença.",
    subtitulo3:
      "Quais as contraindicações do Cloridrato de Ciprofloxacino Pharlab?",
    Texto2:
      "Não use o cloridrato de ciprofloxacino nas seguintes situações: Alergia (hipersensibilidade) à substância ativa ciprofloxacino, aos medicamentos contendo outro derivado quinolônicoou a qualquer componente da fórmula. Sinais de alergia podem incluir coceira, vermelhidão na pele, dificuldade para respirar ou inchaço das mãos, garganta, boca ou pálpebra; Uso concomitante de tizanidina (um relaxante muscular), porque isso pode causar efeitos adversos como queda da pressão arterial e sonolência.",
    SubTitulo4: "Como usar o Cloridrato de Ciprofloxacino Pharlab?",
    Texto4:
      "Não altere a dose nem a duração do tratamento indicados por seu médico. Os comprimidos devem ser ingeridos inteiros, com líquido. Não é preciso tomar o comprimido junto com as refeições. Tomar os comprimidos com estômago vazio acelera a absorção. O cloridratro de ciprofloxacino não deve ser tomado com laticínios ou bebidas enriquecidas com minerais (por exemplo, leite, iogurte ou suco de laranja enriquecido com cálcio). No entanto, a absorção não é afetada significativamente por refeições que contenham cálcio. Se estiver tomando também medicamentos ou suplementos contendo minerais como o cálcio, magnésio, alumínio, assim como certos tipos de antiácidos usados para tratamento de indigestão, o cloridratro de ciprofloxacino deverá ser tomado de 1 a 2 horas antes ou pelo menos 4 horas depois desses produtos. Se o paciente não for capaz de engolir os comprimidos, recomenda-se iniciar o tratamento com ciprofloxacino injetável para terapia intravenosa.",
    imagem: Ciprofloxacino,
  },
  {
    id: 3,
    nome: "Cefalexina (Keflex)",
    description: "Keflex Cefalexina 500mg 8 drágeas",
    Titulo: "--Keflex, para o que é indicado e para o que serve?--",
    descricao:
      "Keflex® é indicado para o tratamento das seguintes infecções causadas por bactérias sensíveis à cefalexina:Sinusites (inflamação dos seios da face), infecções do trato respiratório, otite média (inflamação do ouvido médio), infecções da pele e tecidos moles, infecções ósseas, infecções do trato geniturinário e infecções dentárias.Nota: De acordo com a história do paciente e aspectos clínicos, o médico poderá indicar a realização de testes de sensibilidade à cefalexina e culturas apropriadas do microrganismo causador.",
    Subtitulo: " --Como o Keflex funciona?--",
    Texto1:
      " Keflex® é um antibiótico pertencente ao grupo das cefalosporinas. Apresenta ação bactericida, destruindo as bactérias causadoras do processo infeccioso. Tempo médio para o início da ação farmacológica Após a administração de Cefalexina em indivíduos normais, via oral, em jejum, a sua absorção é rápida e os níveis sanguíneos máximos são geralmente atingidos em 1 hora, apesar de o tempo necessário para atingir níveis máximos poder variar consideravelmente. Após doses de 250 mg, 500 mg e 1 g, níveis sanguíneos máximos médios de aproximadamente 9, 18 e 32 mcg/mL, respectivamente, foram obtidos em uma hora. Níveis mensuráveis estavam presentes por 6 horas após a administração.",
    subtitulo3: "Quais as contraindicações do Keflex?",
    Texto2:
      "Keflex® é contraindicado para pacientes alérgicos às cefalosporinas. Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica. Keflex® está classificado na categoria B de risco na gravidez. Exclusivo Gotas: Atenção: este produto contém o corante amarelo de tartrazina que pode causar reações de natureza alérgica, entre as quais asma brônquica, especialmente em pessoas alérgicas ao ácido acetilsalicílico. Exclusivo Gotas e Suspensão Oral: Atenção: este medicamento contém açúcar, portanto deve ser usado com cautela em portadores de diabetes.",
    SubTitulo4: "Como usar o Keflex?",
    Texto4:
      "Keflex® é apresentado na forma de drágeas. Deve ser administrado por via oral e independente das refeições. DosagemAdulto As doses para adultos variam de 1 a 4 g diárias, em doses divididas. A dose usual para adultos é de 250 mg a cada 6 horas. Para tratar faringites estreptocócicas, infecções da pele e estruturas da pele e cistites (inflamação da mucosa da bexiga) não complicadas em pacientes acima de 15 anos de idade, uma dose de 500 mg ou 1 g pode ser administrada a cada 12 horas. O tratamento de cistites deve ser de 7 a 14 dias. Para infecções do trato respiratório, causadas por S. pneumoniae e S. pyogenes, é necessário usar uma dose de 500 mg a cada 6 horas. Infecções mais graves ou causadas por microrganismos menos sensíveis requerem doses mais elevadas. Se houver necessidade de doses diárias de cefalexina acima de 4 g, o médico deve considerar o uso de uma cefalosporina injetável, em doses adequadas. Não há estudo de Keflex® administrado por vias não recomendadas. Portanto, para segurança e eficácia deste medicamento, a administração deve ser somente por via oral. Siga a orientação de seu médico, respeitando sempre os horários, as doses e a duração do tratamento. Não interrompa o tratamento sem o conhecimento de seu médico. Este medicamento não deve ser partido, aberto ou mastigado. Gotas Keflex® gotas 100 mg/mL é apresentado em frascos de vidro contendo pó para 15 ou 30 mL de suspensão. Deve ser administrado por via oral e independente das refeições. Não há estudo de Keflex® administrado por vias não recomendadas. Portanto, para segurança e eficácia deste medicamento, a administração deve ser somente por via oral.",
    imagem: Cefalexina,
  },
];

const AntiInflamatorios = [
  {
    id: 1,
    nome: "Cetoprofeno",
    description:"Cetoprofeno 100mg 20 comprimidos Medley Genérico",
    Titulo:"--Cetoprofeno, para o que é indicado e para o que serve--",
    descricao:"O cetoprofeno é um medicamento anti-inflamatório, analgésico e antitérmico, sendo indicado para o tratamento de inflamações e dores decorrentes de processos reumáticos (doenças que podem afetar músculos, articulações e esqueleto), traumatismos (lesão interna ou externa resultante de um agente externo) e de dores em geral.",
    Subtitulo:"--Como devo usar o cetoprofeno--",
    Texto1:"Os comprimidos devem ser ingeridos sem mastigar, com quantidade suficiente de líquido (aproximadamente ½ a 1 copo), de preferência durante ou logo após as refeições. A dose usual é de 200 mg por dia, dividida em 2 doses. Assim que se atingir o efeito terapêutico desejado, o tratamento deve ser mantido com a menor dose eficaz possível. Em casos severos ou se uma resposta satisfatória não pode ser obtida com doses menores, pode-se aumentar a posologia, desde que não se ultrapasse o máximo de 300 mg por dia. Populações especiais Crianças A segurança e eficácia do uso de cetoprofeno comprimidos em crianças ainda não foram estabelecidas. Pacientes com insuficiência dos rins e idosos É aconselhável reduzir a dose inicial e manter estes pacientes com a menor dose eficaz. Um ajuste posológico individual deve ser considerado pelo seu médico, somente após ter apurado boa tolerância individual (vide “O que devo saber antes de usar este medicamento? - Advertências e Precauções”). Pacientes com insuficiência do fígado Estes pacientes devem ser cuidadosamente monitorados e deve-se manter a menor dose eficaz diária (vide “O que devo saber antes de usar este medicamento? - Advertências e Precauções”). Não há estudos dos efeitos de cetoprofeno comprimido administrado por vias não recomendadas. Portanto, por segurança e para garantir a eficácia deste medicamento, a administração deve ser somente por via oral conforme recomendado pelo médico.",
    imagem: Cetoprofeno,
  },
  {
    id: 2,
    nome: `Diclofenaco`,
    description: `Cetoprofeno - Medley 100mg caixa com 20 comprimidos`,
    Titulo: "--Para que serve o cetoprofeno--",
    descricao: `O cetoprofeno é um medicamento anti-inflamatório, analgésico e antitérmico, sendo indicado para o tratamento de inflamações e dores decorrentes de processos reumáticos (doenças que podem afetar músculos, articulações e esqueleto), traumatismos (lesão interna ou externa resultante de um agente externo) e de dores em geral.`,
    Subtitulo: `--Como devo usar o cetoprofeno--`,
    Texto1: `Os comprimidos devem ser ingeridos sem mastigar, com quantidade suficiente de líquido (aproximadamente ½ a 1 copo), de preferência durante ou logo após as refeições. A dose usual é de 200 mg por dia, dividida em 2 doses. Assim que se atingir o efeito terapêutico desejado, o tratamento deve ser mantido com a menor dose eficaz possível. Em casos severos ou se uma resposta satisfatória não pode ser obtida com doses menores, pode-se aumentar a posologia, desde que não se ultrapasse o máximo de 300 mg por dia. Populações especiais Crianças A segurança e eficácia do uso de cetoprofeno comprimidos em crianças ainda não foram estabelecidas. Pacientes com insuficiência dos rins e idosos É aconselhável reduzir a dose inicial e manter estes pacientes com a menor dose eficaz. Um ajuste posológico individual deve ser considerado pelo seu médico, somente após ter apurado boa tolerância individual (vide “O que devo saber antes de usar este medicamento? - Advertências e Precauções”). Pacientes com insuficiência do fígado Estes pacientes devem ser cuidadosamente monitorados e deve-se manter a menor dose eficaz diária (vide “O que devo saber antes de usar este medicamento? - Advertências e Precauções”). Não há estudos dos efeitos de cetoprofeno comprimido administrado por vias não recomendadas. Portanto, por segurança e para garantir a eficácia deste medicamento, a administração deve ser somente por via oral conforme recomendado pelo médico.`,
    imagem: Diclofenaco,
  },
  {
    id: 3,
    nome: 'Naproxeno',
    description:`Naproxeno Sódico 550mg 10 comprimidos Neo Química Genérico`,
    Titulo:`--Para que serve o naproxeno sódico 550mg--`,
    descricao:`Este medicamento é indicado para: dores agudas causadas por inflamação como por exemplo, dor de garganta; dor e febre em adultos, como por exemplo dor de dente, dor abdominal e pélvica, dor de cabeça, sintomas de gripe e resfriado; dores musculares e articulares, como por exemplo torcicolo, bursite, tendinite, dor nas costas, dor nas pernas, cotovelo do tenista, dor reumática; dor após traumas: entorses, distensões, contusões, lesões leves decorrentes de prática esportiva. `,
    Subtitulo:`--Como usar o naproxeno sódico 550mg--`,
    Texto1:`Dosagem Comprimidos revestidos de 550mg: tomar 1 comprimido 1 vez por dia ou a critério médico. A dose diária (24 horas) de 550mg não deve ser excedida, salvo prescrição médica. Crianças menores de 12 anos não devem tomar este produto, salvo sob orientação médica. Devem ser consideradas doses mais baixas nos idosos, em pacientes com grave insuficiência hepática, renal e/ou cardíaca. Como usar Este medicamento deve ser administrado em jejum ou com as refeições. O comprimido deve ser ingerido com um pouco de líquido, sem mastigar. A absorção pode ser retardada com alimentos. Duração do tratamento Este medicamento deve ser utilizado na dose recomendada pelo menor tempo necessário para controlar os sintomas. Não é recomendado o uso de naproxeno por mais de 10 dias consecutivos, a não ser sob orientação médica. Se a dor ou a febre persistirem ou se os sintomas mudarem, o médico deverá ser consultado. `,
    imagem: Naproxeno,
  }
];

export { Analgesicos, Antibioticos, AntiInflamatorios };
