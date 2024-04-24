import './Mdl.css';

const Mdl = () => (
    <div className="container">
        <details className="materia">
            <summary>Modelagem de Dados</summary>

            <p>Assunto que aborda o entendimento da modelagem de bancos de dados, assim como a sua aplicação em diferentes formas de modelagem e
                a maneira que são representadas as características do mundo real em um recorte abstraído.
            </p>

            <details>
                <summary>Principais Tópicos</summary>
                <p>
                    <ul>
                        <li>MER e DER</li>
                        <li>Entidades Fortes e Fracas</li>
                        <li>Atributos</li>
                        <li>Chaves (PK e FK)</li>
                        <li>Relacionamento e Cardinalidade</li>
                        <li>Entidades Associativas</li>
                    </ul>
                </p>
            </details>


            <p>
                <h4>Modelagem Entidade Relacionamento - MER</h4>
            </p>
            <p>
                O MER serve como uma forma de interpretar o mundo de forma reduzida. Através de objetos que são representados por Entidades,
                e as interações entre elas, que são chamadas de relacionamento. Além disso essa abstração deve seguir as regras de negócio informadas
                pelo cliente.
            </p>

            <p>
                <h4>Diagrama Entidade Relacionamento - DER</h4>
            </p>
            <p>
                O DER é uma maneira visual de representarmos as características identificadas e transforma-las para uma visualização mais paupável
                para quem visualiza. O diagrama possui diferentes níveis de abstração, podendo ser conceitual, lógico ou físico.
            </p>

            <details>
                <summary>Exemplos</summary>

                <br />
                <p><h5>Exemplo de Modelagem Conceitual</h5></p>
                <p><img src="https://cdn1.gnarususercontent.com.br/1/1774033/8cfb443d-0e50-4895-b595-a9045de8a71a.png" alt="" /></p>

                <br />
                <p><h5>Exemplo de Modelagem Lógica</h5></p>
                <p><img src="https://cdn1.gnarususercontent.com.br/1/1225280/aa6c7c92-f40c-4717-b8c9-ab88c083a9b3.png" alt="" /></p>

                <br />
                <p><h5>Exemplo de Modelagem Física</h5></p>
                <p><img className='imagem' src="https://cdn1.gnarususercontent.com.br/1/1800652/ed5300a8-be07-4d48-8723-5e3e19d2cd6a.png" alt="" /></p>
            </details>

            <p>
                <h4>
                    Entidades
                </h4>
            </p>
            <p>
                Entidades são abstrações de objetos do mundo real representados em modelagem. No modelo de Banco de Dados elas são representadas por
                tabelas, e também podem ser representadas por objetos no modelo Orientado a Objetos. Cada entidade possui seus próprios atributos (uma entidade
                <i> Pessoa</i>, por exemplo, possui atributos como Nome, CPF, Telefone e Data de Nascimento) e também se relaciona com outras entidades. Em um
                sistema de livraria, por exemplo, podem existir diversas tabelas como <i>Livro</i>, <i>Autor</i>, <i>Editora</i>, <i>Cliente</i> entre outros.
            </p>

            <details>
                <summary>Atributos</summary>

                <p>
                    Artibutos são as características que cada entidade carrega. Uma maneira de classifica-las com base em suas informações. Existem
                    formas de representar e diferenciar atributos quando falamos de Modelagem de Dados.
                </p>


                <h5>Atributos Simples</h5>
                <p>São os atributos mais comuns existentes. São indivisíveis e representam um valor único, como <i>CPF</i>, <i>Nome</i>,
                    <i>Preço</i>, <i>Data de Fabricação</i>.</p>

                <h5>Atributos Compostos</h5>
                <p>Atributos que dependem de um conjunto de outros "sub atributos", ou que podem ser divididos em atributos menores. Como ocorre com <i>endereço</i> que é composto por <i>CEP</i>, <i>Rua</i>, <i>Número</i>, <i>Complemento</i></p>

                <h5>Atributos Multivalorados</h5>
                <p>
                    São atributos que podem conter mais de um valores para serem preenchidos. Exemplos comuns são <i>telefone</i> ou <i>email</i>.
                </p>

                <h5>Atributos Derivados</h5>
                <p>
                    São aqueles que podem ser representados com base em outros atributos já definidos. Geralmente são atributos que possuem um tipo de cálculo ou manipulação para serem aplicados. Como um atributo <i>Idade</i> pode variar de um outro atributo já definido <i>"Data de Nascimento"</i>.
                </p>

                <details>
                    <summary>Chaves</summary>

                    <p>
                        Chaves Primárias
                    </p>

                    <p>
                        Chaves Estrangeiras
                    </p>

                </details>

            </details>

            <div className='obs'>
                <p>Existem dois tipos de entidades na modelagem de dados. As <b>Entidades Fortes</b> e <b>Entidades Fracas</b>.</p>
                <h5>Entidades Fortes</h5>
                <p></p>
                <h5>Entidades Fracas</h5>
            </div>

            <details>
                <summary>Relacionamentos e Cardinalidade</summary>

                <p>
                    Os Relacionamentos são associacões entre entidades, que geralmente são caracterizados por verbos
                </p>

                <div className='obs'>
                    <p>
                        Os Relacionamentos Identificadores são aqueles que
                    </p>
                    <p>
                        Os Relacionamentos Não Identificadores são aqueles que
                    </p>
                </div>

                <details>
                    <summary>Entidades Associativas</summary>
                </details>

            </details>

        </details>

    </div>
);

export default Mdl;