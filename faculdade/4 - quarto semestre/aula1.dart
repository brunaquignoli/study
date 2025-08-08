// void main() {
//   var i;
//   var a;
 
//   for (i = 0; i < 10; i++) {
//     if (i == 0) {
//       a = "vindo ai o ";
//     } else if (i == 1) {
//       a = "primeiro ";
//     } else if (i == 2) {
//       a = "segundo ";
//     } else if (i == 3) {
//       a = "terceiro ";
//     } else if (i == 4) {
//       a = "quarto ";
//     } else if (i == 5) {
//       a = "quinto ";
//     } else if (i == 6) {
//       a = "sexto ";
//     } else if (i == 7) {
//       a = "setimo ";
//     } else if (i == 8) {
//       a = "oitavo ";
//     } else {
//       a = "nono ";
//     }
//     print(a + "DART");
//   }
// }
 
 
// void main() {
//   List alunos = ["Erick", "Rafaela", "Brendo"];
//   print (alunos);
//   print(alunos is List);
//   print(alunos[0]);
//   print(alunos.length);
// }
 
 
// import 'dart:io';
// void main() {
//   print("Qual a sua idade?");
//   final input = stdin.readLineSync();
//   // int? n = int.tryParse(input);
//   int? n = int.tryParse(input ?? '');
 
//   if (n == null) {
//     print("Entrada inválida. Por favor, digite um número para sua idade.");
//   } else if (n >= 18) {
//     print("Pode dirigir!");
//   } else {
//     print("Não pode dirigir");
//   }
// }

// void main() {

// double altura = 1.5;

// if (altura <= 1.60 ) {
//   print("Chaveirinho");
// } else {
//   print ("Você não é um chaveirinho");

//    }
// }


void main () {
  int a = 114; 
  int b = 25; 
  int c = 132;

  if (a > b && a > c) {
    print("a é maior do que b e c");
  } else if (b > a && b > c) {
    print("b é maior do que a e c");
  } else {
    print("c é maior do que a e b");
  }


  if ( a % 2 == 0 ) {
    print("a é par");
  } else if (b % 2 == 0) {
    print("b é par");
  } else if (c % 2 == 0) {
    print("c é par");
  } else {
    print("nenhum número é par");
  }

  if ( a > b && b > c || c > b && b > a ){
    int soma = a + c;
    print("a soma do maior e do menor número é: $soma");
  } else if ( a > c && c > b || b > c && c > a ) { 
    int soma = a + b;
    print("a soma do maior e do menor número é: $soma");
  } else if ( b > a && a > c || c > a && a > b ) {
    int soma = b + c;
    print("a soma do maior e do menor número é: $soma");
  }
  
  
}

// A > b > C > b > A // A > c > B > c > A // B > a > C > a > B