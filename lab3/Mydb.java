
package mydb;

import java.sql.SQLException;
import java.util.Scanner;
/**
 * Главный класс, содержит метод main()
 * @author OLEG
 */
public class Mydb {
    /**
     * 
     * @param args
     * @throws ClassNotFoundException
     * @throws SQLException - исключение при обработке запроса sql
     */
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Task t = new Task();
        Scanner sc = new Scanner(System.in);
        System.out.println("Какое задание выполнить?(1-5)");
        switch(sc.nextInt()) {
            case 1 : t.task1("Вторник", "321"); break;
            case 2 : t.task2("Вторник"); break;
            case 3 : t.task3(3); break;
            case 4 : t.task4(1); break;
            case 5 : t.task5("среда"); break;
            default: System.out.println("Не то задание");
        }
    }
    
}
