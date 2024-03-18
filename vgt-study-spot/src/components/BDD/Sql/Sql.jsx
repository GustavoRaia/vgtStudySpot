import './Sql.css';

const Sql = () => (
    <div class="container">

        <details class="materia">
            <summary>SQL</summary>
            <p>Structured Query Language - Linguagem criada para manipular dados em bancos de dados relacionais.</p>
            <details>
                <summary>Sublinguagens</summary>
                <details>
                    <summary>DQL</summary>
                    <p>
                        <h4>Data Query Language</h4>
                    </p>
                    <p>Responsável pelas leituras e consultas de dados no banco. As consultas podem incluir filtros,
                        ordenação, agrupamento e junção de dados de várias tabelas.</p>
                    <details>
                        <summary>Comandos</summary>
                        <br />
                        <div class="div-comandos">
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
                    </details>
                    {/*  */}
                    <details>
                        <summary>Exemplos</summary>
                        <br />
                        <div class="div-exemplos">
                            <p class="comentario">-- SELECT básico</p>
                            <p class="comentario">-- O "*" seleciona e retorna todas as colunas da tabela</p>
                            <p>SELECT * FROM compradores;</p>
                        </div>
                        <div class="div-exemplos">
                            <p class="comentario">-- SELECT com DISTINCT</p>
                            <p class="comentario">-- O DISTINCT seleciona a primeira ocorrência de um valor na tabela, sem repetição</p>
                            <p>SELECT DISTINCT cidade, estado FROM compradores;</p>
                        </div>
                        <div class="div-exemplos">
                            <p class="comentario">-- SELECT com condiçoes de seleção (WHERE)</p>
                            <p class="comentario">-- Utilização de Subquery</p>
                            <p>SELECT * FROM  <br/>
	                           WHERE codigo_produto NOT IN (SELECT codigo_produto FROM itens_de_venda);</p>
                        </div>
                        <div class="div-exemplos">
                            <p class="comentario">-- SELECT utilizando CASE</p>
                            <p>SELECT cidade, estado, <br/>
                                &nbsp;&nbsp;CASE <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;WHEN estado LIKE 'RJ' THEN 'Rio de Janeiro' <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;WHEN estado LIKE 'PA' THEN 'Pará' <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;WHEN estado LIKE 'CE' THEN 'Ceará' <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;ELSE 'Outro' <br/>
                                &nbsp;&nbsp;END AS estado_texto <br/>
                                FROM fornecedores;</p>
                        </div>
                    </details>
                </details>
                <details>
                    <summary>DDL</summary>
                    <p>
                        <h4>Data Definition Language</h4>
                    </p>
                    <p>Se refere à estrutura dos dados no banco, ao esqueleto das tabelas como um todo.</p>
                    <details>
                        <summary>Comandos e Atributos</summary>
                        <br />
                        <div class="div-comandos">
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
                        <div class="div-comandos">
                            <span>INSERT</span>
                            <span>UPDATE</span>
                            <span>DELETE</span>
                            <span>START TRANSACTION</span>
                            <span>COMMIT</span>
                            <span>ROLLBACK</span>
                        </div>
                    </details>
                    <details>
                        <summary>Triggers</summary>
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
                        <div class="div-comandos">
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
                    <div class="div-comandos">
                        <span>SELECT</span>
                        <span>FROM</span>
                    </div>
                </details>
                <details>
                    <summary>Exemplos</summary>
                    <br />
                    <div class="div-exemplos">
                        <p class="comentario">-- Adicionando um comentário</p>
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
                    <div class="div-exemplos">
                        <p>SELECT * FROM banco_de_dados;</p>
                        <p>SELECT * FROM banco_de_dados;</p>
                        <p>SELECT * FROM banco_de_dados;</p>
                    </div>
                </details>
            </details>

            <details>
                <summary>Administração do Banco</summary>
            </details>

        </details>

        {/* <details class="materia">
            <summary>Modelagem de Dados</summary>
        </details>

        <details class="materia">
            <summary>Engenharia de Dados</summary>
        </details> */}

    </div>
);

export default Sql;