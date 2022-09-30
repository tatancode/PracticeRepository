package Java;

class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!!!");
        Car carOne = new Car("AMQ123", new Account("Lukas", "013456789"));
        carOne.printDataCar();
    }
}