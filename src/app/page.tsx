import Alerta from '~/components/atoms/Alert';
import Parrafo from '~/components/atoms/Parrafo';
import Textfile from '~/components/Texfile';

export default function Home() {
  return (
    <div>
      <Parrafo type="h1">hola q hace amigos de yutu</Parrafo>
      <Parrafo type="h2">hola q hace amigos de yutu</Parrafo>
      <Parrafo type="body1">hola q hace amigos de yutu</Parrafo>
      <Parrafo type="body1">hola q hace amigos de yutu</Parrafo>
      <Alerta type="filled" color="warning">
        hola
      </Alerta>
      <Alerta type="standard" color="warning">
        hola
      </Alerta>
      <Alerta type="outlined" color="warning">
        hola
      </Alerta>
      <Textfile tipo="filled"> texfile</Textfile>
      <Textfile tipo="outlined"> texfile</Textfile>
      <Textfile tipo="standard"> texfile</Textfile>
    </div>
  );
}
