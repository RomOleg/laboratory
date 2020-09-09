package task4;

import java.util.Scanner;

/**
 *
 * @author OLEG
 */
public class Task4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        // первое число
        int x = scn.nextInt();
        // второе число
        int y = scn.nextInt();
        // Создаем экземпляр класса Count
        Count count = new Count();
        // Результат сложения чисел
        // вызываем метод add() класса Count
        System.out.println(count.add(x, y));
        // Результат умножения чисел
        // вызываем метод multiply() класса Count
        System.out.println(count.multiply(x, y));
    }
}
