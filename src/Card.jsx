//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({mascota}) {
  return (
    <div>
      <h4>{mascota.nombre}, su Mascota {mascota.animal} ha sido elegida correctamente.</h4>
    </div>
  );
}

export default Card;
