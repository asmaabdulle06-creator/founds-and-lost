
import java.util.ArrayList;
import java.util.Scanner;

abstract class LibraryItem {
    protected String title;
    protected int daysLate;

    LibraryItem() {
        title = "Unknown";
        daysLate = 0;
    }

    LibraryItem(String title, int daysLate) {
        this();
        this.title = title;
        this.daysLate = daysLate;
    }

    public String getTitle() {
        return title;
    }

    public abstract long calculateFine();
}

class BookItem extends LibraryItem {

    BookItem(String title, int daysLate) {
        super(title, daysLate);
    }

    @Override
    public long calculateFine() {
        return 2L * daysLate;
    }
}

class DVDItem extends LibraryItem {

    DVDItem(String title, int daysLate) {
        super(title, daysLate);
    }

    @Override
    public long calculateFine() {
        if (daysLate == 0) {
            return 0;
        }
        return 10L + 5L * daysLate;
    }
}

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        ArrayList<LibraryItem> items = new ArrayList<>();

        System.out.print("How many returned items? ");
        int n = input.nextInt();

        for (int i = 1; i <= n; i++) {

            System.out.print("Item " + i + " - type (B/D): ");
            String type = input.next().toUpperCase();

            System.out.print("Item " + i + " - title: ");
            String title = input.next();

            System.out.print("Item " + i + " - days late: ");
            int daysLate = input.nextInt();

            if (type.equals("B")) {
                items.add(new BookItem(title, daysLate));
            } else if (type.equals("D")) {
                items.add(new DVDItem(title, daysLate));
            }
        }

        long total = 0;

        System.out.println("\n--- LIBRARY FINE SUMMARY ---");

        for (LibraryItem item : items) {
            long fine = item.calculateFine();

            System.out.println(
                    item.getTitle() + ": " + fine + " units"
            );

            total += fine;
        }

        System.out.println("Total fines: " + total + " units");

        input.close();
    }
}
