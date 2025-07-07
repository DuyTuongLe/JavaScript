var a = 4, b =5, c =10;
setTimeout(() => {
    //console.log(a);
}, 3000);
//console.log(b)


//Viết hàm tính tổng của 2 số

let tong_hai_so = (a, b, callBack) => {
    let result = 0;
    setTimeout(() => {
        result =  a + b;
        callBack(result);
    },  3000);
}

tong_hai_so(a, b, (callBack)=> {
    //console.log(callBack);
});


//Viết hàm tính chu vi

let HCN = (cd, cr, callBack) => { 
    let chu_vi = (cd + cr) * 2;
    let dien_tich = cd * cr;
    callBack(chu_vi, dien_tich);
}

let cd = 5, cr = 10;
HCN(cd, cr, (chu_vi, dien_tich) => {
    console.log("Chu vi hình chữ nhật là: " + chu_vi);
    console.log("Diện tích hình chữ nhật là: " + dien_tich);
});

//Viết hàm tính SLN

let SLN = (so1, so2, callBack) => {
    let result =0;
    if (so1 > so2) {
        result = so1;
    } else {
        result = so2;
    }
    callBack(result);
}

SLN(a, b, (result) => {
    console.log("Số lớn nhất giữa a và b là: " + result);
    SLN(result, c, (result) => {
        console.log("Số lớn nhất là: " + result);
    })
});