package task_3;

import java.util.Scanner;

/**
 *
 * @author OLEG
 */
public class Task_3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        // Создаем еэземпляр класса Password
        Password password = new Password();
        // вызываем метод say() класса Password
        password.say(
                // вводим пароль
                scn.next()
        );
    }
    
}
