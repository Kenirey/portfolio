package JAVA;
import java.util.*;
import java.io.*;


class practice {
    static Scanner scan = new Scanner(System.in);
    static String Filename = "data.txt";


    public static void main(String[] args)throws IOException {
        
        String again;

        do {
            System.out.println("----MENU----");
            System.out.println("1. Add Student");
            System.out.println("2. View All");
            System.out.println("3. Exit");
            int choice = Integer.parseInt(scan.nextLine());

            switch(choice){
                case 1 -> create();
                case 2 -> read();
                case 3 -> System.exit(0);
                default -> System.out.println("Invalid input");

            }
            System.out.println("Do you want to try again?(Y/N_");
            again = scan.nextLine();
        } while (again.equalsIgnoreCase("Y"));


    }
    static void create()throws IOException{
        System.out.println("Enter your Student Id: ");
        int id = Integer.parseInt(scan.nextLine());

        System.out.println("Enter your First name: ");
        String fname = scan.nextLine();

        System.out.println("Enter your Last name: ");
        String lname = scan.nextLine();

        try(BufferedWriter bw = new BufferedWriter(new FileWriter(Filename, true))){
            bw.write("Student ID: "+id+"\t| First name: "+fname+"\t| Last name: "+lname);
            bw.newLine();
        }
            System.out.println("Notification : Student Added!");

    }

    static void read()throws IOException{
        try(BufferedReader br= new BufferedReader(new FileReader(Filename))){
        String line;
        
        while ((line=br.readLine())!=null) {
            System.out.println(line);
        }
        
        
        }
    }
}