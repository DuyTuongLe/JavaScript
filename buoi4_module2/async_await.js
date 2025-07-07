//Xây dựng hàm bằng promise
let slnPromise = (so1, so2) => {
    return new Promise ((resolve, reject) => {
        if(isNaN(so1) || isNaN(so2)) {
            reject("Giá trị không hợp lệ, vui lòng nhập số 1.");
        } else {
            let result = 0;
            setTimeout(()=>{
                result = (so1 > so2) ? so1 : so2;
                resolve(result);
            },3000);
        }
    })
}


// Đây là xây dựng hàm bằng async/await bắt theo cách để viết sẵn không return
// let slnAsync = async (a, b) => {
//     try {
//         let result = await slnPromise(a,b);
//         console.log("Số lớn nhất giữa a và b là: " + result);
//     } catch (error) {
//         console.error("Lỗi: " + error);
//     }
// }
// slnAsync(a, b);


// Đây là xây dựng hàm bằng async/await bắt theo cách Promise để viết sẵn return
let slnAsync = async (a, b) => {
    try {
        let result = await slnPromise(a,b);
        return result; // Trả về kết quả để có thể sử dụng bên ngoài
    } catch (error) {
        throw error; // Ném lỗi để xử lý bên ngoài
    }
}
 let a = 34, b = 14;
 slnAsync(a, b).then((result) => {
     console.log("Số lớn nhất giữa a và b là: " + result);
 }).catch((error) => {
     console.error("Lỗi: " + error);
 }).finally(() => {
     console.log("Kết thúc hàm tính số lớn nhất giữa a và b.");
 });
