
package mydb;

import java.sql.SQLException;

public class Task {

    private static java.sql.Statement statement;
    
    public Task() throws ClassNotFoundException, SQLException {
        Connect con = new Connect();
        statement = con.getConnect();
    }
    /**
     * задание 1 * вывести информацию о преподавателях, работающих в заданный день в заданной аудитории
     * @param day - принимает день недели
     * @param room - принимает класс
     * @throws SQLException - исключение при обработке запроса sql
     */
    public void task1(String day, String room) throws SQLException {
        String sql = "SELECT surname, name, middle_name, day, room FROM relations a\n" +
                        "JOIN teacher ON a.id_teacher=teacher.id\n" +
                        "JOIN room ON a.id_room=room.id\n" +
                        "JOIN dayweek ON a.id_day=dayweek.id\n" +
                        "WHERE day = " + "'" + day + "'" + "AND room = '" + room +"'";
        java.sql.ResultSet res = statement.executeQuery(sql);
        while(res.next()){
            System.out.print("Имя: " + res.getString("surname") + " " + res.getString("name") + " " + res.getString("middle_name"));
            System.out.print(" day: " + res.getString("day"));
            System.out.println(" room: " + res.getString("room"));
        }        
    }
    /**
     * задание 2 * вывести информацию о преподавателях, которые НЕ ведут занятия в заданный день недели
     * @param day - принимает день недели
     * @throws SQLException - исключение при обработке запроса sql
     */
    public void task2(String day) throws SQLException {
        String sql = "SELECT DISTINCT surname, name, middle_name FROM relations a\n" +
                        "JOIN teacher ON a.id_teacher=teacher.id\n" +
                        "JOIN dayweek ON a.id_day=dayweek.id\n" +
                        "WHERE NOT day = " + "'" + day + "'";
        java.sql.ResultSet res = statement.executeQuery(sql);
        while(res.next()){
            System.out.println("Имя: " + res.getString("surname") + " " + res.getString("name") + " " + res.getString("middle_name"));
        }        
    }
    /**
     * задание 3 * вывести дни недели, в которые проводится данное кол-во занятий
     * @param count - принимает кол-во занятий
     * @throws SQLException - исключение при обработке запроса sql
     */
    public void task3(int count) throws SQLException {
        String sql = "SELECT day, COUNT(day) as занятий\n" +
                        "FROM relations a\n" +
                        "JOIN dayweek ON a.id_day=dayweek.id\n" +
                        "GROUP BY (day)\n" +
                        "HAVING COUNT(day) = " + count;
        java.sql.ResultSet res = statement.executeQuery(sql);
        while(res.next()){
            System.out.println(" day: " + res.getString("day"));
        }        
    }
    /**
     * задание 4 * вывести дни недели, в которые занято заданное кол-во аудиторий
     * @param count - принимает заданное кол-во аудиторий
     * @throws SQLException - исключение при обработке запроса sql
     */
    public void task4(int count) throws SQLException {
        String sql = "SELECT day, COUNT(DISTINCT id_room) as занятоАудиторий\n" +
                        "FROM relations a\n" +
                        "JOIN dayweek ON a.id_day=dayweek.id\n" +
                        "GROUP BY (day)\n" +
                        "HAVING COUNT(DISTINCT id_room) = " + count;
        java.sql.ResultSet res = statement.executeQuery(sql);
        while(res.next()){
            System.out.println(" day: " + res.getString("day"));
        }        
    }
    /**
     * задание 5 * перенести первые занятия заданных дней на последнее место
     * @param day - день по которому нужно заменить
     * @throws SQLException - исключение при обработке запроса sql
     * Примечание: метод не доконца реализован, переносит только по заданному дню, 
     * а не по заданным дням
     */
    public void task5(String day) throws SQLException {
        
        String sql = "INSERT INTO relations (id_teacher, id_subject, id_day, id_room, student)\n" +
                        "SELECT id_teacher, id_subject, id_day, id_room, student FROM relations\n" +
                        "JOIN dayweek ON relations.id_day=dayweek.id\n" +
                        "WHERE day = "+"'"+day+"'"+"\n" +
                        "HAVING MIN(relations.id)";
        String sql1 = "DELETE FROM relations WHERE relations.id IN (SELECT MIN(relations.id) FROM relations\n" +
                        "JOIN dayweek ON relations.id_day=dayweek.id\n" +
                        "WHERE day = "+"'"+day+"'"+")";
        statement.executeUpdate(sql);
        System.out.println("Было");
        printTable();
        statement.executeUpdate(sql1);
        System.out.println("Стало");
        printTable();
    }
    /**
     * Метод выводит таблицу с фамилией преподавателя,
     * предметом, который он ведет, день недели, когда проходит предмет,
     * класс, в котором проходит предмет и кол-во студентов в классе
     * @throws SQLException - исключение при обработке запроса sql
     */
    public void printTable() throws SQLException {
        String sql = "SELECT surname, subject, day, room, student \n" +
                        "FROM relations\n" +
                        "JOIN teacher ON relations.id_teacher=teacher.id\n" +
                        "JOIN subject ON relations.id_subject=subject.id\n" +
                        "JOIN room ON relations.id_room=room.id\n" +
                        "JOIN dayweek ON relations.id_day=dayweek.id";
        java.sql.ResultSet res = statement.executeQuery(sql);
        while(res.next()){
            System.out.printf("Фамилия: %s  предмет: %s день: %s, класс: %s, студентов: %d\n", 
                    res.getString("surname"), res.getString("subject"), res.getString("day"), res.getString("room"),
                    res.getInt("student"));
        }   
    }
}

