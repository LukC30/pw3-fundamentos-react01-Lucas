import logo from './logo.svg';
import './App.css';
import cavernas from './livros/cavernas_aco.jpg';

function App() {
  return (
    <div className="CardBook">
      <div>
        <h3>As cavernas de aco</h3>
        <p>Isaac Asimov</p>
        <img src={cavernas} alt="Capa do livro as cavernas de aco de Isaac Asimov" style={{ width: '300px' }}></img>
        <p className="descricao">
          As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais. A obra foi publicada, pela primeira vez, na revista Galaxy Science Fiction, e o sucesso foi tão grande que, um ano depois, se tornou livro. Na trama, Os Mundos Siderais, antigas colônias da Terra, possuem rígidas leis de imigração, e não aceitam mais terráqueos em seus planetas. Para agravar a situação, os robôs estão substituindo grande parte da mão de obra trabalhadora na Terra, levando os humanos a perderem seus empregos e privilégios de cidadãos.
        </p>
      </div>
    </div>

  );
}

export default App;
