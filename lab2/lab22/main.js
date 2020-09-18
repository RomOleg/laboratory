let codeJava = `
package task_3;

public class Password {
    public String password = "password";
    
    public void say(String password) {
        // Если введенный пароль совпадает с паролем обьекта,
        // то выведет сообщение "Password is correct",
        // иначе "Password is not correct"
        if (this.password.equals(password))
            System.out.println("Password is correct");
        else System.out.println("Password is not correct");
    }
}
`;

let replaceCodeJava = codeJava;
// заменяем public на private по всем тексте
// используем регулярное выражение /public/g
// g - С этим флагом поиск ищет все совпадения, без него – только первое.
replaceCodeJava = replaceCodeJava.replace(/public/g, "private");
// выводим изменившийся текст
console.log(replaceCodeJava);