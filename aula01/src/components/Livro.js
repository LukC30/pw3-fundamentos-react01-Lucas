

function Livro({ dadosJSON }) {
    return (
        <>
            {   
                dadosJSON.map((livro) => (
                <div className='cardBook'>
                    <h3>{livro.titulo}</h3>
                    <p>
                        {livro.autor}
                    </p>
                    <img src={livro.imagem} alt="Capa do livro as cavernas de aco de Isaac Asimov" style={{ width: '150px' }}></img>
                    <p className="descricao">
                        {livro.descricao}
                    </p>
                </div>
            ))
            }
        </>
    );
};

export default Livro;    