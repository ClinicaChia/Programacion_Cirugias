import Image from 'next/image';
import Input from '../components/Input';


const servicios = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];

const imageCSS ={
  opacity: 0.05
}

export default function Home({options}) {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.servicio.value)

    if(e.target.cedula.value.length >= 4){
     
      if(servicios.indexOf(e.target.servicio.value) > -1){
 
      }
      else{
        alert('Seleccione un servicio valido')
      }

    }
    else{
      alert('cedula debe tener por lo menos 4 digitos')
    }
  }

  return (
    
    <div className="container">

      <div className='image-container'>
        <Image
                alt="Mountains"
                src="/Logo2.jpg"
                layout="fill"
                objectFit="cover"
                style={imageCSS}
              
              />
      </div>
    
      
      <h1 className="Titulo">Solicitud de Cirguia Clinica Chia</h1>
      <form className='form-index' onSubmit={handleSubmit}>

        <input className='campo' name='cedula' type="text" placeholder='Coloque aqui su cedula...'/>
        <Input fields={servicios}/>
        <button type='submit' className='btn-submit'>Consultar</button>

      </form>

      
     
    </div>
  );
}
