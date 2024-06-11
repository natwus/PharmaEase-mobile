import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './estilos/temas';
import Rotas from './rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.gray[600]} />
      <Rotas />
    </NativeBaseProvider>
  );
}