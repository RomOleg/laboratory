
package mydb;

import java.sql.*;
/**
 * Класс подключения базы данных
 * @author OLEG
 */
public class Connect {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DATABASE_URL = "jdbc:mysql://127.0.0.1/mydb";
    static final String USER = "root";
    static final String PASSWORD = "";
    
    /**
     * Метод реализует соединение с DataBase
     * @return - возвращает соединение с DataBase
     * @throws ClassNotFoundException
     * @throws SQLException - исключение при обработке запроса sql
     */
    public Statement getConnect() throws ClassNotFoundException, SQLException {
        java.sql.Connection connection = null;
        java.sql.Statement statement = null;
        System.out.println("Drivar..");
        Class.forName("com.mysql.jdbc.Driver");
        System.out.println("Connection..");
        connection = DriverManager.getConnection(DATABASE_URL, USER, PASSWORD);
        System.out.println("Statement..");
        statement = connection.createStatement();
        return statement;
    }
}
