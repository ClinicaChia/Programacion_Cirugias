import React,{useState} from 'react';
import Image from 'next/image';

const imageCSS ={
    opacity: 0.05
  }
const textos = [
    'Cargar foto de de la cedula por ambos lados en pdf'
]

const Formulario = () => {

    const [index, setIndex] = useState(0)
    const [nombre, setNombre] = useState('')

    const handleFile = (e) => {
        console.log('archivos arrastrados')
        e.preventDefault()
        
        if(e.dataTransfer.items){
            console.log('items')
        }
    }


    return (
        <div className='container'>

            <div className='image-container'>
                    <Image
                            alt="Mountains"
                            src="/Logo2.jpg"
                            layout="fill"
                            objectFit="cover"
                            style={imageCSS}
                        
                        />
            </div>
            
            <div className='form-box'>
                <h1 className='Titulo'>{textos[index]}</h1>

                <div className='progress-bar' style={{"--p": "60%"}}></div>

                <section className='division'>
                    <label onDropCapture={handleFile} className='file-box'>
                        
                        <p>{nombre}</p>
                    </label>
                    
                </section>

            </div>



        </div>
    );
}

export default Formulario;
