import Dipirona from '../assets/dipirona.png';
import Ibuprofeno from '../assets/ibuprofeno.png';
import Dorflex from '../assets/dorflex.png';
import Amoxilina from '../assets/Amoxilina.png';
import Ciprofloxacino from '../assets/ciprofloxacino.png';
import Cefalexina from '../assets/Cefalexina.png';

const Analgesicos = [
  {
    id: 1,
    nome: 'Dipirona',
    description: 'Dipirona 500Mg 30 Comprimidos - Prati Donaduzzi - Genérico',
    Titulo:'--PARA QUE SERVE DIPIRONA MONOIDRATADA COMPRIMIDO PRATI-DONADUZZI--',
    descricao:'Este medicamento é indicado como analgésico (para dor) eantitérmico (para febre). Como o Dipirona Monoidratada Comprimido - Prati-Donaduzzi funciona? Este é um medicamento à base de dipirona, utilizado no tratamento da dor e febre. Tempo médio de início de ação 30 a 60 minutos após a administração e geralmentedura aproximadamente 4 horas.',
    Subtitulo:' --COMO USAR DIPIRONA MONOIDRATADA COMPRIMIDO PRATI-DONADUZZI--',
    Subtitulo2:' Você deve tomar os comprimidos com líquido (aproximadamente ½ a 1 copo), por via oral.',
    subtitulo3:'Posologia do Dipirona Monoidratada Comprimido - Prati-Donaduzzi',
    Texto:'Dipirona monoidratada comprimidos 500 mg Adultos e adolescentesacima de 15 anos 1 a 2 comprimidos até 4 vezes ao dia. Dipirona monoidratada comprimidos 1 g Adultos e adolescentes acima de 15 anos ½ a 1 comprimido até 4 vezes ao dia. Se o efeito de uma única dose for insuficiente ou após o efeito analgésico ter diminuído, a dose pode ser repetida respeitando-se o modo de usar e a dose máxima diária, conforme descrito acima. O tratamento pode ser interrompido a qualquer instante sem provocar danos ao paciente,inerentes à retirada da medicação. Não há estudos dos efeitos deste medicamento administrado por vias não recomendadas. Portanto, por segurança e para garantir a eficácia deste medicamento, a administração deve ser somente por via oral.',
    imagem: Dipirona,
  },
  {
    id: 2,
    nome: 'Ibuprofeno',
    description: 'Ibupril 400mg 20 Cápsulas Moles',
    imagem: Ibuprofeno,
  },
  {
    id: 3,
    nome: 'Dorflex',
    description: 'Dorflex Analgésico - 36 Comprimidos',
    Titulo:'--Qual a composição do Dorflex--',
    descricao: '300 mg de dipirona monoidratada, 35 mg de citrato de orfenadrina (equivalente a 20,4 mg de orfenadrina base) e 50 mg de cafeína anidra. Excipientes: amido de milho, amidoglicolato de sódio, talco e estearato de magnésio.',
    Subtitulo:'--Superdose: o que acontece se tomar uma dose do Dorflex maior do que a recomendada--',
    Texto:'A orfenadrina é uma droga potencialmente tóxica e há relatos de mortes associadas à superdose (ingestão de 2 a 3 g de uma só vez). Efeitos tóxicos podem ocorrer, rapidamente em 2 horas, em intoxicação aguda, com convulsões, arritmias cardíacas e morte.',
    imagem: Dorflex,
  }
];

const Antibioticos = [
  {
    id: 1,
    nome: 'Amoxicilina (Amoxil)',
    description: 'AMOXIL GSK CAIXA 30 CÁPSULAS',
    Titulo:'--Amoxil, para o que é indicado e para o que serve?--',
    descricao:'Amoxil®, antibiótico eficaz contra grande variedade de bactérias, é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina. Entretanto, seu médico pode receitar este medicamento para outro uso. Se desejar mais informações, pergunte ao seu médico.',
    Subtitulo:' --Como o Amoxil funciona?--',
    Texto1:' Amoxil® contém uma penicilina chamada amoxicilina como ingrediente ativo. A amoxicilina pertence ao grupo dos antibióticos penicilânicos. Amoxil® é usado no tratamento de uma gama de infecções causadas por bactérias, que podem manifestar-se nos pulmões (pneumonia e bronquite), nas amígdalas (amigdalite), nos seios da face (sinusite), no trato urinário e genital, na pele e nas mucosas. Amoxil® atua destruindo as bactérias que causam essas infecções.',
    subtitulo3:'Quais as contraindicações do Amoxil?',
    Texto2:'Este medicamento não pode ser administrado nem ingerido por pessoas alérgicas à amoxicilina, a outros antibióticos penicilínicos ou antibióticos similares, chamados cefalosporinas. Se você já teve uma reação alérgica (como erupções da pele) ao tomar um antibiótico, deve conversar com seu médico antes de usar Amoxil®.',
    imagem: Amoxilina,
  },
  {
    id: 2,
    nome: 'Ciprofloxacino (Cipro)',
    description: 'Cloridrato de Ciprofloxacino 500mg Pharlab com 14 comprimidos Revestidos',
    imagem: Ciprofloxacino,
  },
  {
    id: 3,
    nome: 'Cefalexina (Keflex)',
    description: 'Keflex Cefalexina 500mg 8 drágeas',
    imagem: Cefalexina,
  }
];

export { Analgesicos, Antibioticos };