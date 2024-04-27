// import './Sql.css';
import copy from './img/copia-de.png';

function handleSubmit(e) {
    var elementoPai = document.getElementById(e).closest('.div-exemplos');
    var textoPai = elementoPai.textContent.replaceAll(", ", ",").replaceAll("( ", "(");
    var textoPai2 = textoPai.replaceAll("\t", "n").replaceAll("( ", "n");
    navigator.clipboard.writeText(textoPai2);
    window.alert("Texto Copiado para a Área de Transferência!")
}

// function jurubebar() {
//     const listaImportante = ['CREATE', 'TABLE'];
//     document.querySelectorAll('.cod').forEach(element => {
//         var kutus = element.textContent;
//         if(kutus.includes('CREATE')) {
//             window.alert('HAHAHAHAHA');
//         }
//     });
// }

// jurubebar();

const Sql = () => (
    <div className="container">

        <details className="materia">
            <summary>SQL</summary>
            {/* <hr /> */}
            <p>Structured Query Language - Linguagem criada para manipular dados em bancos de dados relacionais. Nesse resumo vamos entender melhor as sublinguagens de SQL, os tipos de dados utilizados em um banco e como trabalha um profissional da área.</p>

            <p>Enrico Maranho</p>

            <h4>
                Os SGBDs mais utilizados são:
            </h4>
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
                {/* <hr /> */}

                <p>
                    O SQL possui Sublinguagens, que definem a forma como os dados serão manipulados no seu banco. Isso significa que cada uma dessas linguagens possui comandos específicos para a forma que a manipulação será realizada. Veja o esquema a seguir:
                </p>

                <h5>
                    O exemplo abaixo mostra como se comportam as sublinguagens de SQL e seus principais comandos:
                </h5>

                <img src="https://editor.analyticsvidhya.com/uploads/41458sqlll.jpeg" alt="" />

                <details>
                    <summary>DDL</summary>
                    {/* <hr /> */}
                    <p>
                        <h4>Data Definition Language</h4>
                    </p>
                    <p>Se refere à estrutura dos dados no banco, ao esqueleto das tabelas como um todo.</p>
                    <details>
                        <summary>Comandos e Atributos</summary>
                        {/* <hr /> */}
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
                            <span>FIRST</span>
                            <span>BEFORE</span>
                            <span>CHANGE</span>
                            <span>CONSTRAINT</span>
                            <span>RENAME TO</span>
                            <span>DESCRIBE</span>
                            <span>SHOW</span>
                        </div>
                    </details>

                    <details>
                        <summary>Exemplos</summary>
                        {/* <hr /> */}
                        <br />
                        <h5>Criação de Tabelas</h5>
                        <hr />

                        <p>Antes de começar, é importante que seja criado uma base de dados, como sugerido na tela abaixo.</p>
                        <div className='div-exemplos'>
                            CREATE SCHEMA minha_base; <br />
                            CREATE DATABASE minha_base;
                        </div>
                        <br />

                        <h5>Criação de uma tabela de Cliente</h5>
                        <div className="div-exemplos">
                            <div className='btnCopia' id='teste' onClick={() => handleSubmit('teste')}>
                                <img src={copy} alt="" />
                            </div>
                            <p className='comentario'>-- O Atributo NOT NULL significa que a tabela deve ser preenchida</p>
                            <p className='comentario'>-- O Atributo NULL significa que a tabela pode não ser preenchida</p>
                            <p className='cod'>CREATE TABLE cliente ( <br />
                                &nbsp;&nbsp;id INT NOT NULL, <br />
                                &nbsp;&nbsp;telefone VARCHAR(20) NOT NULL, <br />
                                &nbsp;&nbsp;nome VARCHAR(100) NOT NULL, <br />
                                &nbsp;&nbsp;data_nascimento DATE NOT NULL, <br />
                                &nbsp;&nbsp;endereco VARCHAR(200) NOT NULL, <br />
                                &nbsp;&nbsp;ponto_referencia VARCHAR(50) NULL, <br />
                                &nbsp;&nbsp;PRIMARY KEY (id) <br />
                                );
                            </p>
                            <p className='comentario'>-- A definição da PRIMARY KEY representa um atributo cujo valor não pode se repetir e que também será um identificador da coluna, facilitando as consultas.</p>
                        </div>

                        <div className='obs'>
                            <p>A definição do atributo NOT NULL para uma coluna <b>chave primária</b> pode ser considerado uma boa prática, apesar de redundante.</p>
                            <a href="https://cursos.alura.com.br/forum/topico-duvida-e-redundancia-colocar-not-null-ao-definir-uma-chave-primaria-317263" target='_blank' rel='noreferrer'>Link da dúvida</a>
                        </div>

                        <div className='tableResp'>
                            <table>
                                <tr>
                                    <th colSpan={6}>cliente</th>
                                </tr>
                                <tr>
                                    <td>Field</td>
                                    <td>Type</td>
                                    <td>Null</td>
                                    <td>Key</td>
                                    <td>Default</td>
                                    <td>Extra</td>
                                </tr>
                                <tr>
                                    <td>id</td>
                                    <td>int</td>
                                    <td>NO</td>
                                    <td>PRI</td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>telefone</td>
                                    <td>varchar(20)</td>
                                    <td>YES</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>nome</td>
                                    <td>int</td>
                                    <td>NO</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>data_nascimento</td>
                                    <td>date</td>
                                    <td>NO</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>endereco</td>
                                    <td>varchar(200)</td>
                                    <td>NO</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>ponto_referencia</td>
                                    <td>varchar(50)</td>
                                    <td>YES</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>

                            </table>
                        </div>

                        <h5>Criação de uma Tabela de Pedido</h5>
                        <div className="div-exemplos">
                            <p classNameName='comentario'>-- Utilização de DEFAULT (valor pré definido caso não preenchido pelo usuário)</p>
                            <p classNameName='comentario'>-- Utilização de funções definidas</p>
                            <p>CREATE TABLE IF NOT EXISTS pedido ( <br />
                                &nbsp;&nbsp;id INT NOT NULL, <br />
                                &nbsp;&nbsp;telefone_cliente VARCHAR(255) NOT NULL, <br />
                                &nbsp;&nbsp;id_entregador INT NOT NULL, <br />
                                &nbsp;&nbsp;status VARCHAR(255) NULL, <br />
                                &nbsp;&nbsp;taxa_entrega VARCHAR(255) NULL, <br />
                                &nbsp;&nbsp;data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), <br /><br />

                                <p classNameName='comentario'>&nbsp;&nbsp;-- Criação da Primary Key e das Foreign Keys</p>
                                &nbsp;&nbsp;CONSTRAINT PK_Pedido PRIMARY KEY (id)<br />
                                );</p>
                        </div>

                        <div className='tableResp'>
                            <table>
                                <tr>
                                    <th colSpan={6}>pedido</th>
                                </tr>
                                <tr>
                                    <td>Field</td>
                                    <td>Type</td>
                                    <td>Null</td>
                                    <td>Key</td>
                                    <td>Default</td>
                                    <td>Extra</td>
                                </tr>
                                <tr>
                                    <td>id</td>
                                    <td>int</td>
                                    <td>NO</td>
                                    <td>PRI</td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>telefone_cliente</td>
                                    <td>varchar(255)</td>
                                    <td>NO</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>id_entregador</td>
                                    <td>int</td>
                                    <td>NO</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>varchar(255)</td>
                                    <td>YES</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>taxa_entrega</td>
                                    <td>varchar(255)</td>
                                    <td>YES</td>
                                    <td> </td>
                                    <td>NULL</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>data</td>
                                    <td>datetime</td>
                                    <td>NO</td>
                                    <td> </td>
                                    <td>CURRENT_TIMESTAMP</td>
                                    <td>DEFAULT_GENERATED</td>
                                </tr>

                            </table>
                        </div>

                        <br />
                        <h5>Alteração de Tabelas</h5>
                        <hr />

                        <p>A alteração de tabelas através da regra 'ALTER TABLE' é uma parte importante do desenvolvimento e criação de tabelas e dos relacionamentos em banco de dados.</p>
                        <p>Essas alterações auxiliam a não recriar tabelas e também preservar dados já cadastrados.</p>
                        <br />

                        <h5>Adição de uma Coluna de CPF</h5>
                        <div className='div-exemplos'>
                            <p className='comentario'>-- Alteração de uma tabela na base de dados</p>
                            <p className='comentario'>-- Adição da coluna de CPF, que é um atributo único que não pode ser nulo</p>
                            <p>ALTER TABLE cliente ADD COLUMN CPF VARCHAR(14) UNIQUE NOT NULL;</p>
                            <br />
                            <p className='comentario'>-- Por padrão novas colunas sempre serão adicionadas ao final da tabela, porém você pode escolher onde a coluna ficará localizado na estrutura</p>
                            <p className='comentario'>-- Com a cláusula AFTER 'nome_da_coluna', a coluna será adicionada logo após a coluna previamente definida</p>
                            <p>ALTER TABLE cliente ADD COLUMN CPF VARCHAR(14) UNIQUE NOT NULL AFTER id;</p>
                            <p className='comentario'>-- Com a cláusula FIRST, a nova coluna será adicionada no inicio da tabela</p>
                            <p>ALTER TABLE cliente ADD COLUMN CPF VARCHAR(14) UNIQUE NOT NULL FIRST;</p>
                        </div>

                        <div className='obs'>
                            <h6>Qual tipo de dado ideal para CPF ?</h6>
                            <hr />
                            <p>Não existe um padrão para a escolha do tipo de dados para campos como CPF, CNPJ. Pode ser tanto utilizado o CHAR, quanto o VARHCAR ou até mesmo INT. Tudo depende de como você organiza o seu projeto e para que serão utilizados os dados.</p>
                            <p>O tipo INT, por exemplo, remove casas com valor 0 à esquerda, o que é prejudicial para a integridade do dado.</p>
                            <a href="https://pt.stackoverflow.com/questions/47871/tipo-do-campo-cpf-ou-cnpj-no-banco-de-dados-varchar-ou-int" target='_blank' rel='noreferrer'>Link da Discussão</a>
                        </div>

                        <h5>Alterando a composição de uma Coluna.</h5>

                        <p>A mudança de composição de coluna demonstra a alteração de possíveis comportamentos a serem realizados pela tabela. Entre essas modificações está a inserção de novos atributos como a definição para 'NOT NULL', 'AUTO_INCREMENT' ou a adição de um valor 'DEFAULT', caso a coluna não seja preenchida.</p>

                        <div className='div-exemplos'>
                            <p className='comentario'>-- Alteração de um Atributo da Tabela (inserção de AUTO_INCREMENT).</p>
                            <p className='comentario'>-- O AUTO_INCREMENT signfica que o valor de id (PK) não precisa ser definido quando popularmos a tabela.</p>
                            <p>ALTER TABLE cliente CHANGE id INT AUTO_INCREMENT;</p>
                        </div>

                        <div className='obs'>
                            <h6>Entendendo o AUTO_INCREMENT</h6>
                            <hr />
                            <p>O 'AUTO_INCREMENT' é um atributo interno das tabelas que serve para identificar o valor atual da coluna.</p>
                            <p>O valor de 'AUTO_INCREMENT' começa com 1, e é acrescido de um a cada nova inserção. Porém tanto o valor inicial quanto o valor incremental podem ser definidos pelo usuário.</p>
                            <a href="https://www.w3schools.com/sql/sql_autoincrement.asp" target='_blank' rel='noreferrer'>Link da Discussão</a>
                        </div>

                        <h5>Modificando o Tipo de Dado de uma Coluna.</h5>
                        <div className='div-exemplos'>
                            <p className='comentario'>-- Alteração de um Atributo da Tabela (Modificação do Tipo de Dado).</p>
                            <p className='comentario'>-- Neste caso, ocorre a mudança do tipo de dado de telefone, de um VARCHAR(20) para um INT.</p>
                            <p>ALTER TABLE cliente MODIFY telefone INT;</p>
                        </div>

                        <br />
                        <h5>Exclusão de Tabelas</h5>
                        <hr />

                        <div className='div-exemplos'>
                            <p className='comentario'>-- Exclusão de uma coluna da Tabela.</p>
                            {/* <p className='comentario'>-- Em alguns casos, a exclusão de uma coluna pode dar erro por se tratar de um campo PK ou FK.</p>
                            <p className='comentario'>-- Nesses casos, pode-se desabilitar o <i>safe mode</i> do MySQL Workbench ou também adicionar a o atributo ON DELETE CASCADE à coluna, assim permitindo a exclusão.</p> */}
                            <p>ALTER TABLE cliente DROP column ponto_referencia;</p>
                        </div>

                        <div className='div-exemplos'>
                            <p className='comentario'>-- Exclusão de uma tabela da base de dados</p>
                            <p className='comentario'>-- A tabela irá deixar de existir assim como os valores armazenados</p>
                            <p>DROP TABLE IF EXISTS cliente;</p>
                            <p className='comentario'>A cláusula IF EXISTS verifica se existe uma tabela com o nome antes da exclusão.</p>
                        </div>

                    </details>

                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>

                        <a className='link' href="https://www.youtube.com/watch?v=XfrgCK6BX5w" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/XfrgCK6BX5w/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Principais comandos de DDL</h5>
                                VIDEO PLACEHOLDER TURF VIDEO PLACEHOLDER TURF
                            </div>
                        </a>
                        <a className='link' href="https://www.youtube.com/watch?v=To9qUcEMuY0" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/To9qUcEMuY0/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Alteração de Tabelas</h5>
                                VIDEO PLACEHOLDER TURF VIDEO PLACEHOLDER TURF
                            </div>
                        </a>

                    </details>

                </details>

                <details>
                    <summary>DML</summary>
                    {/* <hr /> */}
                    <p>
                        <h4>Data Manipulation Language</h4>
                    </p>
                    <p>Responsável pelos dados que estão ou serão armazenados na tabela. Se refere aos valores em si.
                    </p>
                    <details>
                        <summary>Comandos</summary>
                        {/* <hr /> */}
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
                        {/* <hr /> */}
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
                        {/* <hr /> */}
                        <p>Triggers são funções no SQL disparados automaticamente antes ou depois de uma ação DML ser lançada (INSERT, UPDATE ou DELETE). Um trigger ,
                            ou "gatilho" está sempre relacionado a uma tabela e aos comportamentos que ocorrem sobre ela.
                        </p>
                        <details>
                            <summary>Exemplos</summary>
                            {/* <hr /> */}
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
                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>
                        {/* <hr /> */}

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                VIDEO PLACEHOLDER TURF VIDEO PLACEHOLDER TURF
                            </div>
                        </a>

                    </details>
                </details>

                <details>
                    <summary>DQL</summary>
                    {/* <hr /> */}
                    <p>
                        <h4>Data Query Language</h4>
                    </p>
                    <p>Responsável pelas leituras e consultas de dados no banco. As consultas podem incluir filtros, ordenação, agrupamento e junção de dados de várias tabelas.</p>
                    <details>
                        <summary>Comandos</summary>
                        {/* <hr /> */}
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
                        {/* <hr /> */}
                        <br />
                        <div className='obs'>
                            <p>Para alguns dos exemplos, serão utilizada a base de dados <b>sakila</b> e <b>world</b></p>
                            <p>O banco sakila é .</p>
                            <p>Você pode fazer o download do banco sakila e de outros <i>schemas</i> nesse link: <a href="https://dev.mysql.com/doc/index-other.html" target='_blank' rel='noreferrer'>Sakila</a></p>
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
                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>
                        {/* <hr /> */}

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                VIDEO PLACEHOLDER TURF VIDEO PLACEHOLDER TURF
                            </div>
                        </a>
                        <a className='link' href="https://www.youtube.com/watch?v=2qCLpE1NZ8c" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/2qCLpE1NZ8c/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Subconsultas</h5>
                                VIDEO PLACEHOLDER TURF VIDEO PLACEHOLDER TURF
                            </div>
                        </a>

                    </details>
                </details>

                <details>
                    <summary>DCL</summary>
                    {/* <hr /> */}
                    <p>
                        <h4>Data Control Language</h4>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quod officiis dolor et dolores
                        nobis ipsam numquam expedita voluptas, tempore in minus aliquam consequatur officia fuga cumque
                        temporibus animi? Nam.</p>
                    <details>
                        <summary>Comandos</summary>
                        {/* <hr /> */}
                        <br />
                        <div className="div-comandos">
                            <span>GRANT</span>
                            <span>REVOKE</span>
                            <span>DENY</span>
                        </div>
                    </details>
                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>
                        {/* <hr /> */}

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                VIDEO PLACEHOLDER TURF VIDEO PLACEHOLDER TURF
                            </div>
                        </a>

                    </details>
                </details>
            </details>

            <details>
                <summary>Tipos de Dados</summary>
                {/* <hr /> */}

                <p>No momento de criação ou consulta de uma tabela, é importante entender quais são os tipos de dados de cada atributo e como aplicá-los corretamente</p>

            </details>

            <details>
                <summary>Procedures</summary>
                {/* <hr /> */}

                <details>
                    <summary>Comandos</summary>
                    {/* <hr /> */}
                    <br />
                    <div className="div-comandos">
                        <span>SELECT</span>
                        <span>FROM</span>
                    </div>

                </details>

                <details>
                    <summary>Exemplos</summary>
                    {/* <hr /> */}
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
                    {/* <hr /> */}
                    <br />
                    <div className="div-exemplos">
                        <p classNameName='comentario'>-- Comentário Inútil</p>
                    </div>
                </details>

            </details>

            <details>
                <summary>Administração do Banco</summary>
                {/* <hr /> */}

                <details>
                    <summary>Planos de Execução</summary>
                    {/* <hr /> */}
                </details>
                <details>
                    <summary>Criação de Usuários</summary>
                    {/* <hr /> */}
                </details>

            </details>

        </details>

    </div>
);

export default Sql;