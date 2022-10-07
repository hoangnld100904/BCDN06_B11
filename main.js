//Bài 1
function tinhLuong(){
    var ngayLam=document.getElementById('Bai1_dayValue').value;
    var tienluong=document.getElementById('Tienluong');
    tienluong.innerHTML=ngayLam*100000
}
//Bài 2
function tbc(){
    var giatri1= parseInt(document.getElementById('bai2_Value1').value);
    var giatri2=parseInt(document.getElementById('bai2_Value2').value);
    var giatri3=parseInt(document.getElementById('bai2_Value3').value);
    var giatri4=parseInt(document.getElementById('bai2_Value4').value);
    var giatri5=parseInt(document.getElementById('bai2_Value5').value);
    var bai2_output=document.getElementById('Bai2_output')
    var tbc=(giatri1+giatri2+giatri3+giatri4+giatri5)/5;
    bai2_output.innerHTML=tbc;
}
//Bài 3
function QuyDoiUSD(){
    var tienDollar=document.getElementById('bai3_Value').value;
    var tienViet=document.getElementById('bai3_Output');
    tienViet.innerHTML=tienDollar*23500
}
//Bài 4
function Bai4(){
    var chieudai=parseInt(document.getElementById("bai4_chieudai").value);
    var chieurong=parseInt(document.getElementById("bai4_chieurong").value);
    document.getElementById("chuVi").innerHTML=(chieudai+chieurong)*2;
    document.getElementById("dienTich").innerHTML=chieudai*chieurong;
}
//Bài 5
function Bai5(){
    var input=parseInt(document.getElementById("bai5_value").value);
    var phanNguyen= parseInt(input/10);
    var phanDu=input%10;
    document.getElementById("bai5_output").innerHTML=phanNguyen+phanDu;
}