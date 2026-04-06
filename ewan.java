import java.io.*;
import java.util.*;
public class ewan {
    static Scanner scan = new Scanner(System.in);
    static String Filename = "C:\\Users\\Admin\\OneDrive\\Desktop\\Data.txt";
    public static void main(String[] args)throws IOException{
        String again;
        do {
            System.out.println("\n---MENU---");
            System.out.println("1. Add Student");
            System.out.println("2. View All");
            System.out.println("3. Update Status");
            System.out.println("4. Delete Status");
            System.out.println("5. Exit");
            System.out.print("\nEnter Here:");
            int choice = Integer.parseInt(scan.nextLine());
            switch (choice) {
                case 1 ->create();
                case 2 -> read();
                case 3 -> update();
                case 4-> delete();
                case 5 -> exit();
                default -> System.out.println("Invalid Input");
            }
                System.out.print("\nDo you want to try agaian(Y/N)? ");
                again = scan.nextLine();
        } while (again.equalsIgnoreCase("Y"));
        System.out.println("Program terminated");
    }
    static void create()throws IOException{
        System.out.print("\nEnter Student Number: ");
        int id = Integer.parseInt(scan.nextLine());
        System.out.print("Enter First name: ");
        String fname = scan.nextLine();
        System.out.print("Enter Last name: ");
        String lname = scan.nextLine();
    
        try(BufferedWriter bw = new BufferedWriter(new FileWriter(Filename, true))){
            bw.write("Student ID: "+id+"\t| Firstname: "+fname+"\t| Last name: "+lname);
            bw.newLine();
        }
    }
    static void read()throws IOException{
        try(BufferedReader br = new BufferedReader(new FileReader(Filename))){
            String line;
            System.out.println("\n");
            while ((line=br.readLine())!=null) {
                System.out.println(line);
            }
        }
    }
    static void update()throws IOException{
        ArrayList<String>lines = new ArrayList<>();
        System.out.print("Enter name or Id to update: ");
        String target = scan.nextLine().trim();
        try(BufferedReader br = new BufferedReader(new FileReader(Filename))){
            String line;
            while ((line=br.readLine())!=null) {
                lines.add(line);
            }
        }
        boolean found = false;
        for (int i = 0; i < lines.size(); i++) {
            if (lines.get(i).toLowerCase().contains(target.toLowerCase())) {
            System.out.print("\nEnter Student Number: ");
            int id = Integer.parseInt(scan.nextLine());
            System.out.print("Enter First name: ");
            String fname = scan.nextLine();
            System.out.print("Enter Last name: ");
            String lname = scan.nextLine();
            System.out.println("Student status Updated");
            lines.set(i,"Student ID: "+id+"\t| Firstname: "+fname+"\t| Last name: "+lname);
            found = true;
            break;
            }
        }
        try(BufferedWriter bw = new BufferedWriter(new FileWriter(Filename))){
            for (int i = 0; i <lines.size(); i++) {
                bw.write(lines.get(i));
                bw.newLine();
            }
        }
    }
    static void delete()throws IOException{
        ArrayList<String>lines = new ArrayList<>();
        System.out.print("Enter name or Id to update: ");
        String target = scan.nextLine().trim();
        try(BufferedReader br = new BufferedReader(new FileReader(Filename))){
            String line;
            while ((line=br.readLine())!=null) {
                lines.add(line);
            }
        }
        boolean found = false;
        for (int i = 0; i < lines.size(); i++) {
            if (lines.get(i).toLowerCase().contains(target.toLowerCase())) {
            lines.remove(i);
            found = true;
            break;
            }
        }
        try(BufferedWriter bw = new BufferedWriter(new FileWriter(Filename))){
            for (int i = 0; i <lines.size(); i++) {
                bw.write(lines.get(i));
                bw.newLine();
            }
        }
    }
        static void exit(){
            System.out.println("Program exit");
            System.exit(0);
        }
}