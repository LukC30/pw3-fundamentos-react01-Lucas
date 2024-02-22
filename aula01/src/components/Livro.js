import cavernas from '../livros/cavernas_aco.jpg';

function Livro({titulo, autor, imagem, descricao}){
    return(
    <div className='cardBook'>
        <h3>{titulo}</h3> 
        <p>
            {autor}
        </p>
        <img src={imagem} alt="Capa do livro as cavernas de aco de Isaac Asimov" style={{ width: '300px' }}></img>
        <p className="descricao">
            {descricao}
        </p>
    </div>
    );
}

export default Livro;