package JAVA;
import java.util.*;
import java.io.*;

public class jabai {
    static Scanner x = new Scanner(System.in);
    static final String FILE = "test.txt";

    public static void main(String[]args) throws Exception{
        String choice = "Y";

        do{
            System.out.println("Lei crud");
            System.out.println("[1] Create");
            System.out.println("[2] Read");
            System.out.println("[3] Update");
            System.out.println("[4] Delete");
            System.out.println("[5] Exit");

            System.out.println("Bawal si mela");
            int menu = Integer.parseInt(x.nextLine());

            switch (menu){
                case 1-> create();
                case 2-> read();
                case 3-> update();
                case 4-> delete();
                case 5-> System.exit(0);
                default-> System.out.println("wag kang tanga");

            }
            System.out.println("Do you want to try again? [Y/N]:");
            choice = x.nextLine();

        }while(choice.equalsIgnoreCase("Y"));

    }
    static void create () throws Exception {
        System.out.println("ID:");
        String i = x.nextLine();

        System.out.println("first name:");
        String fn = x.nextLine();

        System.out.println("Last Name:");
        String ln = x.nextLine();

        BufferedWriter w = new BufferedWriter(new FileWriter(FILE, true));
        w.write(i + "," + ln + "," + fn);
        w.newLine();
        w.close();
    }
    static void read () throws Exception {
        BufferedReader r = new BufferedReader(new FileReader(FILE));
        String line;

        while((line = r.readLine()) !=null)
            System.out.println(line.replace(",", " "));
        r.close();
    }
    
    static void update() throws Exception {
        System.out.println("Enter ID:");
        String i = x.nextLine();
    
        BufferedReader r = new BufferedReader(new FileReader(FILE));
        BufferedWriter w = new BufferedWriter(new FileWriter("temp.txt"));
        String line;
    
        while ((line = r.readLine()) != null) {
            String[] d = line.split(",");  
    
            if (d[0].equals(i)) {          
                System.out.println("Enter new ID:");
                String en = x.nextLine();
    
                System.out.println("Enter new First Name:");
                String ef = x.nextLine();
    
                System.out.println("Enter new Last Name:");
                String el = x.nextLine();
    
                line = en + "," + ef + "," + el;
            }
    
            w.write(line);
            w.newLine();
        }
    
        r.close();
        w.close();
        new File(FILE).delete();
        new File("temp.txt").renameTo(new File(FILE));
    }
    static void delete () throws Exception {
        System.out.println("Enter ID:");
        String i = x.nextLine();

        BufferedReader r = new BufferedReader(new FileReader(FILE));
        BufferedWriter w = new BufferedWriter(new FileWriter("temp.txt"));
        String line ;

        while((line = r.readLine()) !=null){
            if (!line.startsWith(i + "," ))
            {
                w.write(line);
                w.newLine();
            }
        }
        r.close();
        w.close();
        new File(FILE).delete();
        new File("temp.txt").renameTo(new File(FILE));
    }
}