public class Solution {
    public static void main(String[] args) throws IOException {
        
        Scanner sc = new Scanner(System.in);
        
        int multiple = sc.nextInt();
        
        for(int i = 1; i < 11; i++){
            System.out.printf("%d x %d = %d%n", multiple, i, multiple * i);
        }
        
    }
}