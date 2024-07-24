let nilaiMahasiswa1 = 90;
let nilaiMahasiswa2 = 50;

function mengecekKelulusan(nilai){
    if (nilai >= 60){
        return "lulus";
    }else {
        return "tidak lulus";
    }
}

let kelulusanSiswa1 =  mengecekKelulusan(nilaiMahasiswa1);
let kelulusanSiswa2 =  mengecekKelulusan(nilaiMahasiswa2);

console.log(`nilai mahasiswa1: ${nilaiMahasiswa1}`)
console.log(`kelulusan mahasiswa1: ${kelulusanSiswa1}`)
console.log(`nilai mahasiswa2: ${nilaiMahasiswa2}`)
console.log(`kelulusan mahasiswa2: ${kelulusanSiswa2}`)