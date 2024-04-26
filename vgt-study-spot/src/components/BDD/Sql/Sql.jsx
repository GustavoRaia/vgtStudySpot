import './Sql.css';
import copy from './img/copia-de.png';

function handleSubmit(e) {
    var elementoPai = document.getElementById(e).closest('.div-exemplos');
    var textoPai = elementoPai.textContent.replaceAll(", ", ",").replaceAll("( ", "(");
    var textoPai2 = textoPai.replaceAll("\t", "n").replaceAll("( ", "n");
    navigator.clipboard.writeText(textoPai2);
    window.alert("Texto Copiado para a Área de Transferência!")
}

const Sql = () => (
    <div className="container">

        <details className="materia">
            <summary>SQL</summary>
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

                <p>
                    O SQL possui Sublinguagens, que definem a forma como os dados serão manipulados no seu banco. Isso significa que cada uma dessas linguagens possui comandos específicos para a forma que a manipulação será realizada. Veja o esquema a seguir:
                </p>

                <h5>
                    O exemplo abaixo mostra como se comportam as sublinguagens de SQL e seus principais comandos:
                </h5>

                <img src="https://editor.analyticsvidhya.com/uploads/41458sqlll.jpeg" alt="" />

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
                            <div className='btnCopia' id='teste' onClick={() => handleSubmit('teste')}>
                                <img src={copy} alt="" />
                            </div>
                            {/* <p className="comentario">-- Adicionando um comentário</p> */}
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

                        <div className='tableResp'>
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
                                    <td>tel1</td>
                                    <td>Tocha</td>
                                    <td>Tocha</td>
                                    <td>McDonald's</td>
                                    <td>Tocha</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>tel2</td>
                                    <td>Tocha</td>
                                    <td>Tocha</td>
                                    <td>null</td>
                                    <td>Tocha</td>
                                </tr>

                            </table>
                        </div>

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
                                &nbsp;&nbsp;data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), <br /><br />

                                <p classNameName='comentario'>&nbsp;&nbsp;-- Criação da Primary Key e das Foreign Keys</p>
                                &nbsp;&nbsp;CONSTRAINT PK_Pedido PRIMARY KEY (id)<br />
                                );</p>
                        </div>
                    </details>

                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                MERDER tentando entender como essa porra desse display funciona pq eu ja n to entendendo mais nada nessa porra e agora vou pressonal Alt + Z
                            </div>
                        </a>

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
                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                MERDER tentando entender como essa porra desse display funciona pq eu ja n to entendendo mais nada nessa porra e agora vou pressonal Alt + Z
                            </div>
                        </a>

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
                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                MERDER tentando entender como essa porra desse display funciona pq eu ja n to entendendo mais nada nessa porra e agora vou pressonal Alt + Z
                            </div>
                        </a>
                        <a className='link' href="https://www.youtube.com/watch?v=2qCLpE1NZ8c" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/2qCLpE1NZ8c/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Subconsultas</h5>
                                MERDER tentando entender como essa porra desse display funciona pq eu ja n to entendendo mais nada nessa porra e agora vou pressonal Alt + Z
                            </div>
                        </a>

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
                    <details className='listaVideos'>
                        <summary>Vídeos de Apoio</summary>

                        <a className='link' href="https://www.youtube.com/watch?v=p7PeZaP6Ku8" target='_blank' rel='noreferrer'>
                            <img src="http://img.youtube.com/vi/p7PeZaP6Ku8/hqdefault.jpg" title="YouTube Video" alt="YouTube Video" />
                            <div className='textoVideo'>
                                <h5>Cláusula Distinct</h5>
                                MERDER tentando entender como essa porra desse display funciona pq eu ja n to entendendo mais nada nessa porra e agora vou pressonal Alt + Z
                            </div>
                        </a>

                    </details>
                </details>
            </details>

            <details>
                <summary>Tipos de Dados</summary>

                <p>No momento de criação ou consulta de uma tabela, é importante entender quais são os tipos de dados de cada atributo e como aplicá-los corretamente</p>

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

                <details>
                    <summary>Planos de Execução</summary>
                </details>
                <details>
                    <summary>Criação de Usuários</summary>
                </details>

            </details>

        </details>

        {/*
        <details className="materia">
            <summary>Engenharia de Dados</summary>
        </details> */}

    </div>
);

export default Sql;