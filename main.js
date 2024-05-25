let daySo = [];
document.getElementById("btn").onclick = function () {
  let soN = document.getElementById("soN").value * 1;
  daySo.push(soN);
  document.getElementById("ketQua1").innerHTML = daySo.join(" , ");
};

// Tổng số dương
document.getElementById("btn1").onclick = function () {
  let tongSoDuong = 0;
  for (so of daySo.filter((number) => number > 0)) {
    tongSoDuong += so;
  }
  document.getElementById("ketQuaTongSoDuong").innerHTML =
    "Tổng số dương là: " + tongSoDuong;
};

// Đếm số dương
document.getElementById("btn2").onclick = function () {
  let count = 0;
  for (let i = 0; i < daySo.length; i++) {
    if (daySo[i] > 0) {
      count++;
    }
  }
  document.getElementById("ketQuaDemSoDuong").innerHTML = "Số dương: " + count;
};

// Tìm số nhỏ nhất
document.getElementById("btn3").onclick = function () {
  document.getElementById("ketQuaNhoNhat").innerHTML =
    "Số nhỏ nhất là: " + Math.min(...daySo);
};

// Tìm số dương nhỏ nhất
document.getElementById("btn4").onclick = function () {
  let soDuong = daySo.filter((number) => number > 0);
  document.getElementById("ketQuaSoDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất là: " + Math.min(...soDuong);
};

// Tìm số chẵn cuối cùng, nếu ko có số chẵn thì cho -1
document.getElementById("btn5").onclick = function () {
  let soChan = daySo.filter((number) => number % 2 == 0);
  let ketQua = Math.min(...soChan);
  if (ketQua % 2 == 0) {
    document.getElementById("ketQuaSoChanCuoiCung").innerHTML =
      "Số chẵn cuối cùng là: " + ketQua;
  } else {
    document.getElementById("ketQuaSoChanCuoiCung").innerHTML = "-1";
  }
};

// Đổi chỗ 2 giá trị trong mảng
document.getElementById("btn6").onclick = function () {
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 >= daySo.length ||
    index2 >= daySo.length
  ) {
    document.getElementById("ketQuaDoiCho").innerHTML =
      "Vị trí không hợp lệ, xin nhập lại";
  } else {
    [daySo[index1], daySo[index2]] = [daySo[index2], daySo[index1]];
    document.getElementById("ketQuaDoiCho").innerHTML =
      "Mảng sau khi đổi: " + daySo.join(" , ");
  }
};

// Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btn7").onclick = function () {
  daySo.sort((a, b) => a - b);
  document.getElementById("ketQuaSapXep").innerHTML =
    "Mảng sau khi sắp xếp tăng dần: " + daySo.join(" , ");
};

// Tìm số nguyên tố đầu tiên
// funcion bên dưới dùng để tìm số nguyên tố
function soNguyenTo(number) {
  let checkSNT = true;
  if (number <= 1) {
    checkSNT = false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}
document.getElementById("btn8").onclick = function () {
  let arrSoNguyenTo = daySo.filter((number) => soNguyenTo(number));
  let soNguyenToNhoNhat = Math.min(...arrSoNguyenTo);
  if (Number.isInteger(soNguyenToNhoNhat)) {
    if (soNguyenToNhoNhat === Infinity) {
      document.getElementById("ketQuaNguyenSo").innerHTML = "-1";
    } else {
      document.getElementById("ketQuaNguyenSo").innerHTML =
        "Số nguyên tố đầu tiên: " + soNguyenToNhoNhat;
    }
  } else {
    document.getElementById("ketQuaNguyenSo").innerHTML = "-1";
  }
};

// Đếm số nguyên
document.getElementById("btn9").onclick = function () {
  let arrSoNguyen = daySo.filter((number) => Number.isInteger(number));
  let count = 0;
  for (let i = 0; i < arrSoNguyen.length; i++) {
    count++;
  }
  document.getElementById("ketQuaDemSoNguyen").innerHTML =
    "Số nguyên: " + count;
};

// So sánh số lượng âm dương
document.getElementById("btn10").onclick = function () {
  let arrSoDuong = daySo.filter((number) => number > 0);
  let arrSoAm = daySo.filter((number) => number < 0);
  function count(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count++;
    }
    return count;
  }
  if (count(arrSoDuong) > count(arrSoAm)) {
    document.getElementById("ketQuaSoSanh").innerHTML = "Số dương > Số âm";
  } else if (count(arrSoDuong) < count(arrSoAm)) {
    document.getElementById("ketQuaSoSanh").innerHTML = "Số dương < Số âm";
  } else {
    document.getElementById("ketQuaSoSanh").innerHTML = "Số dương = Số âm";
  }
};
