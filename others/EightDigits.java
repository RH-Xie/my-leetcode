package others;

public class EightDigits {
  public class Matrix {
    public String[] chain = {};
    public int[][] matrix = {};
    public String serialize() {
      String result = "";
      for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
          result += matrix[i][j];
        }
      }
      return result;
    }
    public boolean isSame(Matrix anotherMatrix) {
      for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] != anotherMatrix.matrix[i][j]) {
            return false;
          }
        }
      }
      return true;
    }
  }

  public static void main(String[] args) {

  }
}

