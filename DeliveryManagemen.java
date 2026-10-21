import java.util.Scanner;
import java.util.ArrayList;

abstract class Delivery {
    protected int distance;
    protected int weight;

    Delivery() {
        distance = 0;
        weight = 0;
    }

    Delivery(int distance, int weight) {
        this();
        this.distance = distance;
        this.weight = weight;
    }

    public abstract long calculateFee();
}

class RegularDelivery extends Delivery {

    RegularDelivery(int distance, int weight) {
        super(distance, weight);
    }

    @Override
    public long calculateFee() {
        return 10 + 2L * distance + weight;
    }
}

class ExpressDelivery extends Delivery {

    ExpressDelivery(int distance, int weight) {
        super(distance, weight);
    }

    @Override
    public long calculateFee() {
        return 25 + 4L * distance + 2L * weight;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Delivery> list = new ArrayList<>();

        int n;

        do {
            System.out.print("How many deliveries? ");
            n = sc.nextInt();
        } while (n < 1 || n > 100);

        for (int i = 1; i <= n; i++) {
            String type;

            do {
                System.out.print("Delivery " + i + " type (R/E): ");
                type = sc.next().toUpperCase();
            } while (!type.equals("R") && !type.equals("E"));

            int distance;

            do {
                System.out.print("Distance (km): ");
                distance = sc.nextInt();
            } while (distance < 1 || distance > 1000);

            int weight;

            do {
                System.out.print("Weight (kg): ");
                weight = sc.nextInt();
            } while (weight < 1 || weight > 1000);

            if (type.equals("R")) {
                list.add(new RegularDelivery(distance, weight));
            } else {
                list.add(new ExpressDelivery(distance, weight));
            }
        }

        long total = 0;

        System.out.println("\n--- DELIVERY FEE SUMMARY ---");

        for (int i = 0; i < list.size(); i++) {
            long fee = list.get(i).calculateFee();

            System.out.println("Delivery " + (i + 1)
                    + ": " + fee + " units");

            total = total + fee;
        }

        System.out.println("Total delivery fees: "
                + total + " units");

        sc.close();
    }
}
