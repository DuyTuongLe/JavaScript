/*
Promise sẽ có một số trạng thái như sau:
- Pending: Trạng thái chờ đợi, chưa hoàn thành.
- Resolved: Trạng thái đã hoàn thành, thành công.
- Rejected: Trạng thái đã hoàn thành, thất bại.
- Fulfilled: Trạng thái đã hoàn thành, thành công (tương đương với Resolved).
- Settled: Trạng thái đã hoàn thành, có thể là Resolved hoặc Rejected

Cú pháp của Promise:
[Từ khóa] <tên biến> = ([Danh sach tham số]) => {
    return new Promise((resolve, reject) => {
        Nếu xử lý thành công thì gọi resolve(<giá trị trả về(Chỉ trả ra một cáu kết quả duy nhất)>);
        Nếu xử lý thất bại thì gọi reject(<lỗi(Chỉ trả ra một cáu kết quả duy nhất)>);}
}
*/  

// Viết hàm tính tổng hai số
let tong_hai_so = (a, b) => {
    return new Promise((resolve, reject) => {
        if(isNaN(a) || isNaN(b)) {
            reject("Giá trị không hợp lệ, vui lòng nhập số.");
        } else {
            let result = 0;
            setTimeout(() => {
                result = a + b;
                resolve(result);
            }, 3000);
        }
    });
};
let a = 4, b = 6; // Thay đổi giá trị b để kiểm tra lỗi
tong_hai_so(a, b).then((re) => {
    console.log("Tổng hai số là: " + re);
}).catch((error) => {
    console.error("Lỗi: " + error);
}).finally(() => {
    console.log("Kết thúc hàm tính tổng hai số.");
});


//Viết hàm tính chu vi

let HCN = (cd, cr) => {
    return new Promise ((resolve, reject) => {
        if(isNaN(cd) || isNaN(cr)) {
            reject("Giá trị không hợp lệ, vui lòng nhập số.");
        } else {
            let chu_vi = (cd + cr) * 2;
            let dien_tich = cd * cr;
            setTimeout(() => {
                resolve([chu_vi, dien_tich]);
            }, 3000);
        }
    })
}

let cd = 10, cr = 10;
HCN(cd, cr).then((result) => {
    console.log("Chu vi hình chữ nhật là: " + result[0]);
    console.log("Diện tích hình chữ nhật là: " + result[1]);
}).catch((error) => {
    console.error("Lỗi: " + error);
}).finally(() => {
    console.log("Kết thúc hàm tính chu vi và diện tích hình chữ nhật.");
});

//Viết hàm tính SLN

let sln = (so1, so2) => {
    return new Promise ((resolve, reject) => {
        if(isNaN(so1) || isNaN(so2)) {
            reject("Giá trị không hợp lệ, vui lòng nhập số 1.");
        } else {
            let result = so1 > so2 ? so1 : so2;
            resolve(result);
        }
    })
}

sln(16, 14).then((result) => {
    console.log("Số lớn nhất giữa a và b là: " + result);
    sln(result, "203").then((finalResult) => {
        console.log("Số lớn nhất là: " + finalResult);
    });
}).catch((error) => {
    console.error("Lỗi: " + error);
}).finally(() => {
    console.log("Kết thúc hàm tính số lớn nhất giữa a và b.");
});