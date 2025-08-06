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
//     } else (i == 9) {
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
 
import 'dart:io';
void main() {
  print("Qual a sua idade?");
  final input = stdin.readLineSync();
  // int? n = int.tryParse(input);
  int? n = int.tryParse(input ?? '');
 
  if (n == null) {
    print("Entrada inválida. Por favor, digite um número para sua idade.");
  } else if (n >= 18) {
    print("Pode dirigir!");
  } else {
    print("Não pode dirigir");
  }
}