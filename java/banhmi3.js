function xacnhan()
{
	var a = document.getElementById('hoten').value;
	var b = document.getElementById('sdt').value;
	var c = document.getElementById('huyen').value;
	var d = document.getElementById('xa').value;
	var e = document.getElementById('sonha').value;
	var f = document.getElementById('soluong').value;
	const gia = 19000;
	var thanhtien = gia*f;
	var tongtien = thanhtien - (thanhtien*7/100)
	alert("Thông Tin Bạn Nhập\nHọ Và Tên:\t"+a+"\nSố Điện Thoại:\t"+b+"\nQuận/Huyện:\t"+c+"\nPhường/Xã:\t"+d+"\nSố Nhà,Đường:\t"+e+"\nSố Lượng Mua:\t"+f+"\nTổng Tiền:\t"+thanhtien+"đ\nBạn Được Giảm 7% Nên Số Tiền Phải Thanh Toán Là:\t"+tongtien+"đ");
}// JavaScript Document// JavaScript Document// JavaScript Document// JavaScript Document// JavaScript Document// JavaScript Document