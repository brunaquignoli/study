### Voltar para o [README.md](./README.md)

a coisa é, pra evitar a GENIALIDADE do 1' 1=1 -- (1' = fecha o que quer que seja lá no sql / 1=1 deixa como true, pra avisar que um valor verdadeiro foi inserido / -- faz um comentário do resto da frase/sentença do database)

você vai na classe de conexão e faz ela normal:
package util;
public class Conexao {
    public static Connection getConexaoMySQL() throws ClassNotFoundException, SQLException {
        String DRIVER = "com.mysql.cj.jdbc.Driver";
        String URL = "jdbc:mysql://localhost:3306/teste_sqlinjection";
        String USER = "root";
        String PASSWORD = "";
        Class.forName(DRIVER);
        Connection con = DriverManager.getConnection(URL, USER, PASSWORD);
        return con;
> ou:   return DriverManager.getConnection(URL, USER, PASSWORD);  

    }
}

    e na classe Model, a gente vai criar primeiro um atributo nivelacesso
    
    private String nivelacesso

    public String getNivelAcesso(){
        this.senha = senha;
    }

    public void setNivelAcesso(String nivelacesso){
        this.nivelacesso = nivelacesso;
    }
    
    e depois, uma classe 
    "public boolean autenticar() throws ClassNotFoundException, SQLException {
        boolean aux = false;

        //Carregar Driver  e criar conexao
        connection con = Conexão.getConxaoMySQL();

        //contruir string sql bem formada e vinculada com a conexao
        String sql = select * from tabela where login = ? and senha = ?;
        PreparedStatement comando = con.prepareStatement();

        //executar e tratar resultados
        ResultSet resultado = comando.executeQuery();
        if(resultado.next()) {
            setId(resultado.getInt("id"));
            setNome(resultado.getString("nome"));
            setLogin(resultado.getString("login"));
            setSenha(resultado.getString("senha"));
            setNivelacesso(resultado.getString("nivelacesso"));
            aux = true;
        }
        con.close();

        return aux;
    }

> o nome da classe no model aqui nesse caso é Usuario
    No controller, na parte de login, a gente faz, por dentro do if de operações mesmo:
    Usuario usu = new usuario();
        try { 
            if(usu.autenticar()) {
                mensagem = "Logado com sucesso!!";
                pagina = "sucessoautenticacao.jsp";

            } else {
                mensagem = "Login ou senha invalido!!";
                
            }
 
        } catch (SQLException ex) {
            mensagem = "Erro SQL:" + ex.getMessage();
            pagina = "erro.jsp";
        } catch (ClassNotFoundException ex) {
            mensagem = "Erro CNF:" + ex.getMessage();
            pagina = "erro.jsp";
        }
