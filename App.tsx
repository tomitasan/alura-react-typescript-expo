// import Cadastro from './src/Cadastro';
import { NativeBaseProvider, StatusBar } from 'native-base'

import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      {/* Muda a cor do status bar, mas funciona somente no app do celular ou no emulador de Android */}
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}

