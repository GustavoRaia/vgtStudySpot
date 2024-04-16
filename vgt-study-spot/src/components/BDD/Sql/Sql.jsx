import './Sql.css';

const Sql = () => (
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




























        <details className="materia">
            <summary>SQL</summary>
            <p>Structured Query Language - Linguagem criada para manipular dados em bancos de dados relacionais.</p>
            <p>
                <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>SQL Server</li>
                    <li>Oracle Database </li>
                    <li>SQLite</li>
                </ul>
            </p>

            <details>
                <summary>Sublinguagens</summary>

                <details>
                    <summary>DDL</summary>
                    <p>
                        <h4>Data Definition Language</h4>
                    </p>
                    <p>Se refere à estrutura dos dados no banco, ao esqueleto das tabelas como um todo.</p>
                    <details>
                        <summary>Comandos e Atributos</summary>
                        <br />
                        <div className="div-comandos">
                            <span>CREATE</span>
                            <span>ALTER</span>
                            <span>DROP</span>
                            <span>PRIMARY KEY</span>
                            <span>FOREIGN KEY</span>
                            <span>AUTO_INCREMENT</span>
                            <span>DEFAULT</span>
                            <span>NULL</span>
                            <span>NOT NULL</span>
                        </div>
                    </details>
                    <details>
                        <summary>Exemplos</summary>
                        <br />
                        <div className="div-exemplos">
                            <p className="comentario">-- Adicionando um comentário</p>
                            <p>CREATE TABLE cliente ( <br />
                                &nbsp;&nbsp;id INT UNIQUE NOT NULL, <br />
                                &nbsp;&nbsp;telefone VARCHAR(255) NOT NULL, <br />
                                &nbsp;&nbsp;nome VARCHAR(255) NOT NULL, <br />
                                &nbsp;&nbsp;endereco VARCHAR(255) NULL, <br />
                                &nbsp;&nbsp;ponto_referencia VARCHAR(255) NULL, <br />
                                &nbsp;&nbsp;nascimento DATE NULL, <br />
                                &nbsp;&nbsp;CONSTRAINT pk_cliente PRIMARY KEY (id) <br />
                                );
                            </p>
                        </div>

                        <table>
                            <tr>
                                <th colSpan={6}>cliente</th>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>telefone</td>
                                <td>nome</td>
                                <td>endereco</td>
                                <td>ponto_referencia</td>
                                <td>nascimento</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>McDonald's</td>
                                <td>Tocha 1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>null</td>
                                <td>Tocha 1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>Casa do Puterrier</td>
                                <td>Tocha 1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>Tocha 1</td>
                                <td>null</td>
                                <td>Tocha 1</td>
                            </tr>

                        </table>

                        <div className="div-exemplos">
                            <p classNameName='comentario'>-- Criação de Tabela</p>
                            <p classNameName='comentario'>-- Utilização de DEFAULT (valor pré definido caso não preenchido pelo usuário)</p>
                            <p classNameName='comentario'>-- Utilização de funções definidas</p>
                            <p>CREATE TABLE IF NOT EXISTS pedido ( <br />
                                &nbsp;&nbsp;id INT NOT NULL, <br />
                                &nbsp;&nbsp;telefone_cliente VARCHAR(255) NOT NULL, <br />
                                &nbsp;&nbsp;id_entregador INT NOT NULL, <br />
                                &nbsp;&nbsp;status VARCHAR(255) NULL, <br />
                                &nbsp;&nbsp;taxa_entrega VARCHAR(255) NULL, <br />
                                &nbsp;&nbsp;data DATETIME NOT NULL DEFAULT CURDATE(), <br />

                                <p classNameName='comentario'>&nbsp;&nbsp;-- Criação da Primary Key e das Foreign Keys</p>
                                &nbsp;&nbsp;CONSTRAINT PK_Pedido PRIMARY KEY (id), <br />
                                &nbsp;&nbsp;CONSTRAINT FK_Pedido_Entregador FOREIGN KEY (id_entregador) REFERENCES entregador(id) ON DELETE CASCADE, <br />
                                &nbsp;&nbsp;CONSTRAINT FK_Pedido_Cliente FOREIGN KEY (telefone_cliente) REFERENCES cliente(telefone)ON DELETE CASCADE <br />
                                );</p>
                        </div>
                    </details>
                </details>

                <details>
                    <summary>DML</summary>
                    <p>
                        <h4>Data Manipulation Language</h4>
                    </p>
                    <p>Responsável pelos dados que estão ou serão armazenados na tabela. Se refere aos valores em si.
                    </p>
                    <details>
                        <summary>Comandos</summary>
                        <br />
                        <div className="div-comandos">
                            <span>INSERT</span>
                            <span>UPDATE</span>
                            <span>DELETE</span>
                            <span>START TRANSACTION</span>
                            <span>COMMIT</span>
                            <span>ROLLBACK</span>
                        </div>
                    </details>
                    <details>
                        <summary>Exemplos</summary>
                        <br />
                        <div className="div-exemplos">
                            <p className="comentario">-- Adicionando um comentário</p>
                        </div>
                        <div className="div-exemplos">
                            <p classNameName='comentario'>-- Criação de Tabela</p>
                            <p classNameName='comentario'>-- Utilização de DEFAULT (valor pré definido caso não preenchido pelo usuário)</p>
                            <p classNameName='comentario'>-- Utilização de funções definidas</p>
                        </div>
                    </details>
                    <details>
                        <summary>Triggers</summary>
                        <p>Triggers são funções no SQL disparados automaticamente antes ou depois de uma ação DML ser lançada (INSERT, UPDATE ou DELETE). Um trigger ,
                            ou "gatilho" está sempre relacionado a uma tabela e aos comportamentos que ocorrem sobre ela.
                        </p>
                        <details>
                            <summary>Exemplos</summary>
                            <br />
                            <div className="div-exemplos">
                                <p classNameName='comentario'>-- Criação de Trigger antes do INSERT de um novo dado</p>
                                <p classNameName='comentario'>-- Utilização de função de tempo</p>
                                <p>
                                    DELIMITER// <br /><br />
                                    CREATE TRIGGER TG_CLIENTES_IDADE_INSERT BEFORE INSERT ON CLIENTES <br />
                                    FOR EACH ROW <br />
                                    BEGIN <br />
                                    &nbsp;&nbsp;SET NEW.IDADE = timestampdiff(YEAR, NEW.DATA_NASCIMENTO, NOW()); <br />
                                    END//
                                </p>
                            </div>
                            <div className="div-exemplos">
                                <p classNameName='comentario'>-- Criação de Trigger após o insert de um dado no banco</p>
                                <p classNameName='comentario'>-- Exclui o valor guardado e insere um novo recalculado</p>
                                <p classNameName='comentario'>-- Ocorre após o insert de um valor na tabela de ITENS_NOTAS</p>
                                <p>
                                    DELIMITER// <br /><br />
                                    CREATE TRIGGER TG_CALCULA_FATURAMENTO_INSERT AFTER INSERT ON ITENS_NOTAS <br /><br />
                                    FOR EACH ROW <br />
                                    BEGIN <br />
                                    &nbsp;&nbsp;DELETE FROM TAB_FATURAMENTO; <br />
                                    &nbsp;&nbsp;INSERT INTO TAB_FATURAMENTO <br />
                                    &nbsp;&nbsp;SELECT A.DATA_VENDA, SUM(B.QUANTIDADE * B.PRECO) AS TOTAL_VENDA FROM NOTAS A <br />
                                    &nbsp;&nbsp;INNER JOIN ITENS_NOTAS B <br />
                                    &nbsp;&nbsp;ON A.NUMERO = B.NUMERO; <br /><br />
                                    END//
                                </p>
                            </div>
                            <div className="div-exemplos">
                                <p className="comentario">-- PUTERRIER DA MALÁSIA</p>
                                <p>
                                    DELIMITER// <br /><br />
                                    CREATE TRIGGER TG_CALCULA_FATURAMENTO_DELETE AFTER DELETE ON ITENS_NOTAS <br /><br />
                                    FOR EACH ROW <br />
                                    BEGIN <br />
                                    &nbsp;&nbsp;DELETE FROM TAB_FATURAMENTO; <br />
                                    &nbsp;&nbsp;INSERT INTO TAB_FATURAMENTO <br />
                                    &nbsp;&nbsp;SELECT A.DATA_VENDA, <br />
                                    &nbsp;&nbsp;SUM(B.QUANTIDADE * B.PRECO) AS TOTAL_VENDA <br />
                                    &nbsp;&nbsp;FROM NOTAS A INNER JOIN ITENS_NOTAS B <br />
                                    &nbsp;&nbsp;ON A.NUMERO = B.NUMERO <br />
                                    &nbsp;&nbsp;GROUP BY A.DATA_VENDA; <br /><br />
                                    END//
                                </p>
                            </div>
                            <div className="div-exemplos">
                                <p className="comentario">-- Adicionando um comentário</p>
                            </div>
                        </details>
                    </details>
                </details>

                <details>
                    <summary>DQL</summary>
                    <p>
                        <h4>Data Query Language</h4>
                    </p>
                    <p>Responsável pelas leituras e consultas de dados no banco. As consultas podem incluir filtros, ordenação, agrupamento e junção de dados de várias tabelas.</p>
                    <details>
                        <summary>Comandos</summary>
                        <br />
                        <div className="div-comandos">
                            <span>SELECT</span>
                            <span>FROM</span>
                            <span>WHERE</span>
                            <span>AND</span>
                            <span>OR</span>
                            <span>INNER JOIN</span>
                            <span>LEFT JOIN</span>
                            <span>RIGHT JOIN</span>
                            <span>CROSS JOIN</span>
                            <span>GROUP BY</span>
                            <span>ORDER BY</span>
                            <span>LIMIT</span>
                            <span>OFFSET</span>
                            <span>HAVING</span>
                        </div>
                        <ul>
                            <li>SELECT - Seleciona uma coluna de uma tabela</li>
                            <li>FROM - Especifica o nome da tabela</li>
                            <li>WHERE - Condição a ser cumprida</li>
                            <li>LIMIT - Limita a quantidade de linhas a serem retornadas</li>
                            <li>OFFSET - Pula uma quantidade definida de linhas retornadas</li>
                            <li>SELECT</li>
                            <li>SELECT</li>
                        </ul>
                    </details>

                    <details>
                        <summary>Exemplos</summary>
                        <br />
                        <div className='obs'>
                            <p>Para os exemplos, será utilizada a base de dados <b>sakila</b>, que já vem instalada no MySQL Workbench.</p>
                            <p>Em alguns casos, será utilizada a cláusula <span>LIMIT</span>, já que algumas consultas retornam uma grande quantidade de linhas.</p>
                        </div>
                        <br />
                        <div className="div-exemplos">
                            <p className="comentario">-- SELECT básico</p>
                            <p className="comentario">-- O "*" seleciona e retorna todas as colunas da tabela</p>
                            <p>SELECT * FROM language;</p>
                        </div>
                        <p><b>Tabela Retornada:</b></p>
                        <p>
                            <table>
                                <tr>
                                    <th colSpan={3}>language</th>
                                </tr>
                                <tr>
                                    <td>language_id</td>
                                    <td>name</td>
                                    <td>last_update</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>English</td>
                                    <td>2006-02-15 05:02:19</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Italian</td>
                                    <td>2006-02-15 05:02:19</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Japanese</td>
                                    <td>2006-02-15 05:02:19</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mandarin</td>
                                    <td>2006-02-15 05:02:19</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>French</td>
                                    <td>2006-02-15 05:02:19</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>German</td>
                                    <td>2006-02-15 05:02:19</td>
                                </tr>

                            </table>
                        </p>

                        <div className="div-exemplos">
                            <p className="comentario">-- SELECT com DISTINCT</p>
                            <p className="comentario">-- O DISTINCT seleciona a primeira ocorrência de um valor na tabela, sem repetição</p>
                            <p className='comentario'>-- Gostariamos de listar todos os valores possíveis de aluguel de um filme</p>
                            <p>SELECT DISTINCT rental_rate FROM film;</p>
                        </div>
                        <p><b>Tabela Retornada:</b></p>
                        <p>
                            <table>
                                <tr>
                                    <th colSpan={1}>film</th>
                                </tr>
                                <tr>
                                    <td>rental_rate</td>
                                </tr>

                                <tr>
                                    <td>0.99</td>
                                </tr>
                                <tr>
                                    <td>4.99</td>
                                </tr>
                                <tr>
                                    <td>2.99</td>
                                </tr>

                            </table>
                        </p>

                        <div className='obs'>
                            Perceba que só existem 3 valores possíveis para o valor de aluguel de um filme.
                        </div>

                        <div className="div-exemplos">
                            <p className="comentario">-- SELECT com condição de seleção (WHERE)</p>
                            <p className="comentario">-- Utilização de Subquery</p>
                            <p>SELECT * FROM  <br />
                                WHERE codigo_produto NOT IN (SELECT codigo_produto FROM itens_de_venda);</p>
                        </div>

                        <div className="div-exemplos">
                            <p className="comentario">-- SELECT utilizando CASE</p>
                            <p>SELECT cidade, estado, <br />
                                &nbsp;&nbsp;CASE <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;WHEN estado LIKE 'RJ' THEN 'Rio de Janeiro' <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;WHEN estado LIKE 'PA' THEN 'Pará' <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;WHEN estado LIKE 'CE' THEN 'Ceará' <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;ELSE 'Outro' <br />
                                &nbsp;&nbsp;END AS estado_texto <br />
                                FROM fornecedores;</p>
                        </div>
                    </details>
                </details>

                <details>
                    <summary>DCL</summary>
                    <p>
                        <h4>Data Control Language</h4>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quod officiis dolor et dolores
                        nobis ipsam numquam expedita voluptas, tempore in minus aliquam consequatur officia fuga cumque
                        temporibus animi? Nam.</p>
                    <details>
                        <summary>Comandos</summary>
                        <br />
                        <div className="div-comandos">
                            <span>GRANT</span>
                            <span>REVOKE</span>
                            <span>DENY</span>
                        </div>
                    </details>
                </details>
            </details>

            <details>
                <summary>Tipos de Dados</summary>
            </details>

            <details>
                <summary>Procedures</summary>

                <details>
                    <summary>Comandos</summary>
                    <br />
                    <div className="div-comandos">
                        <span>SELECT</span>
                        <span>FROM</span>
                    </div>

                </details>

                <details>
                    <summary>Exemplos</summary>
                    <br />
                    <div className="div-exemplos">
                        <p className="comentario">-- Adicionando um comentário</p>
                        <p>CREATE PROCEDURE <code>Limite_creditos()</code>
                            BEGIN <br />
                            DECLARE LIMITECREDITO FLOAT; <br />
                            DECLARE LIMITECREDITOACUM FLOAT; <br />
                            DECLARE fim_do_cursor INT; <br /><br />
                            DECLARE c CURSOR FOR SELECT LIMITE_DE_CREDITO FROM Tabela_de_Clientes; <br />
                            DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1; <br /><br />
                            SET fim_do_cursor = 0; <br />
                            SET LIMITECREDITOACUM = 0; <br />
                            SET LIMITECREDITO = 0; <br /><br />
                            OPEN c; <br />
                            WHILE fim_do_cursor = 0 <br />
                            DO <br />
                            &nbsp;&nbsp;FETCH c INTO LIMITECREDITO; <br />
                            &nbsp;&nbsp;IF fim_do_cursor = 0 THEN <br />
                            &nbsp;&nbsp;SET LIMITECREDITOACUM = LIMITECREDITOACUM + LIMITECREDITO; <br />
                            END IF; <br />
                            END WHILE; <br /><br />
                            SELECT LIMITECREDITOACUM; <br />
                            CLOSE c; <br />
                            END</p>
                    </div>
                    <div className="div-exemplos">
                        <p>SELECT * FROM banco_de_dados;</p>
                        <p>SELECT * FROM banco_de_dados;</p>
                        <p>SELECT * FROM banco_de_dados;</p>
                    </div>

                </details>

                <details>
                    <summary>Cursor</summary>
                    <br />
                    <div className="div-exemplos">
                        <p classNameName='comentario'>-- Comentário Inútil</p>
                    </div>

                </details>

            </details>

            <details>
                <summary>Administração do Banco</summary>
            </details>

        </details>

        {/*
        <details className="materia">
            <summary>Engenharia de Dados</summary>
        </details> */}

    </div>
);

export default Sql;