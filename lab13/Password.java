/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task_3;

/**
 *
 * @author OLEG
 */
public class Password {
    String password = "password";
    
    public void say(String password) {
        // Если введенный пароль совпадает с паролем обьекта,
        // то выведет сообщение "Password is correct",
        // иначе "Password is not correct"
        if (this.password.equals(password))
            System.out.println("Password is correct");
        else System.out.println("Password is not correct");
    }
}
