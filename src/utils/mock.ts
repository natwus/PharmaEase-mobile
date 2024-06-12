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
    imagem: Dorflex,
  }
  
]
const Antibioticos = [
  {
    id: 1,
    nome: 'Amoxicilina (Amoxil)',
    description: 'AMOXIL GSK CAIXA 30 CÁPSULAS',
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

export { Analgesicos, Antibioticos }