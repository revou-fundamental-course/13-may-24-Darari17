function kllsegitiga() {
    console.log("udah diklik")
    }

function hitungluas() {
    var pertama = document.getElementById("alas").value;
    var kedua = document.getElementById("tinggi").value
    var luas = parseInt(pertama) * parseInt(kedua) / 2
        console.log("Hasil dari hitung luas segitiga: " + luas)

    document.getElementById("hasil_luas").innerHTML = luas
}

function hitungkeliling() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var keliling = parseInt(a) + parseInt(b) + parseInt(c)
        console.log("Hasil dari hitung keliling segitiga: " + keliling)

    document.getElementById("hasil_keliling").innerHTML = keliling
}

// reset luas
document.getElementById("form-luas").addEventListener("reset", function(){
document.getElementById("hasil_luas").innerHTML = ""
console.log("clear")
})

// reset keliling
document.getElementById("form-keliling").addEventListener("reset", function(){
document.getElementById("hasil_keliling").innerHTML = ""
console.log("clear")
})

let kelilingVisible = false
function hideOrShow() {
    if (kelilingVisible == false) {
        kelilingVisible = true;
        document.getElementById("luas-section").style.display = "none";
        document.getElementById("keliling-section").style.display = "block";
    }
    else {
        kelilingVisible = false;
        document.getElementById("luas-section").style.display = "block";
        document.getElementById("keliling-section").style.display = "none";
    }
}