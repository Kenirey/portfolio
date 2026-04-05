package JAVA;
import java.util.*;
import java.io.*;



public class project {
static Scanner scan = new Scanner(System.in);
static String FILENAME = "data.txt";
    public static void main(String[] args)throws IOException {
        String again;

        do {
            System.out.println("\n-----Menu-----");
            System.out.println("\n1. Add Student");
            System.out.println("2. View ALl Student");
            System.out.println("3. Search Student");
            System.out.println("4. Update Student Status");
            System.out.println("5. Delete Student Status");
            System.out.println("6. Exit");
            System.out.print("\nEnter your choice: ");
            int choice = Integer.parseInt(scan.nextLine());

            switch (choice) {
                case 1-> create();
                case 2 -> read();
                case 3 -> search();
                case 4 -> update();
                case 5 -> delte();
                case 6 -> exit();
                default -> System.out.println("Invalid input");
            }
            
            System.out.print("\nDo you want to try again?(Y/N): ");
            again = scan.nextLine();
        } while (again.equalsIgnoreCase("Y"));

            System.out.println("System closed");



    }

static void create()throws IOException{

System.out.print("Enter  Stduent ID: ");
int id = Integer.parseInt(scan.nextLine());

System.out.print("Enter First name: ");
String fname = scan.nextLine();

System.out.print("Enter Last name: ");
String lname = scan.nextLine();

try(BufferedWriter bw = new BufferedWriter(new FileWriter(FILENAME, true))){
bw.write("Student number: "+id+"\t| First name: "+fname+"\t     | Last name: "+lname);
bw.newLine();
}
System.out.println("\nStudent Status Added!\n");



}
static void read()throws IOException{
try(BufferedReader br= new BufferedReader(new FileReader(FILENAME))){
String line;

while ((line=br.readLine())!=null) {
    System.out.println(line);
}


}

}
static void search()throws IOException{
System.out.print("\nEnter Student ID or name to search: ");
String target = scan.nextLine().trim();

try(BufferedReader br = new BufferedReader(new FileReader(FILENAME))){
    String line;
    boolean found = false;
    
    while ((line=br.readLine())!=null) {
        if (line.toLowerCase().contains(target.toLowerCase())) {
            System.out.println(line);
            found = true;
        }
    }
    if (!found) {
        System.out.println("Student does not exist in the list");
    }

}




}
static void update()throws IOException{
ArrayList<String> lines = new ArrayList<>();
System.out.print("\nEnter Student ID or name to update: ");
String target = scan.nextLine().trim();

try(BufferedReader br = new BufferedReader(new FileReader(FILENAME))){
String line;

while ((line=br.readLine())!=null) {
    lines.add(line);
}
}

boolean found = false;
for (int i = 0; i <lines.size(); i++) {
    if (lines.get(i).toLowerCase().contains(target.toLowerCase())) {

        System.out.print("Enter  Stduent ID: ");
        int id = Integer.parseInt(scan.nextLine());

        System.out.print("Enter First name: ");
        String fname = scan.nextLine();

        System.out.print("Enter Last name: ");
        String lname = scan.nextLine();
        
        lines.set(i,"Student number: "+id+"\t| First name: "+fname+"\t     | Last name: "+lname);
        System.out.println("Student Status Updated! ");
        found = true;
        break;
    }
}
        if (!found) {
            System.out.println("Student does not exist in the list");
        }


try(BufferedWriter bw = new BufferedWriter(new FileWriter(FILENAME))){
    for (int i = 0; i <lines.size(); i++) {
        bw.write(lines.get(i));
        bw.newLine();
    }
}


}
static void delte()throws IOException{
ArrayList<String> lines = new ArrayList<>();
System.out.print("\nEnter Student ID or name to delete: ");
String target = scan.nextLine().trim();

try(BufferedReader br = new BufferedReader(new FileReader(FILENAME))){
String line;

while ((line=br.readLine())!=null) {
    lines.add(line);
}
}

boolean found = false;
for (int i = 0; i <lines.size(); i++) {
    if (lines.get(i).toLowerCase().contains(target.toLowerCase())) {

       
        
        lines.remove(i);
        System.out.println("Student Status Deleted! ");
        found = true;
        break;
    }
}
        if (!found) {
            System.out.println("Student does not exist in the list");
        }


try(BufferedWriter bw = new BufferedWriter(new FileWriter(FILENAME))){
    for (int i = 0; i <lines.size(); i++) {
        bw.write(lines.get(i));
        bw.newLine();
    }
}



}
static void exit(){
    System.out.println("System closed.");
    System.exit(0);
}



}