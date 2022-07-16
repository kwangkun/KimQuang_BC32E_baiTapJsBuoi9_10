function renderNhanVien(arrNV) {
    var html = '';
    for (var index = 0; index < arrNV.length; index++) {
        var nv = arrNV[index];

        html += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>

                <td>${nv.tongLuong()}</td>
                <td>${nv.loaiNhanVien()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xoá</button>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="chinhSuaNhanVien('${nv.taiKhoan}')">Chỉnh sửa</button>
                </td>
            </tr>
        `;
    };
    document.querySelector('#tableDanhSach').innerHTML = html;
    return html;
};

function kiemTraRong(value, name, errorSelector) {
    if (value.trim() !== '') {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    } else {
        document.querySelector(errorSelector).innerHTML = name + ' không được bỏ trống!';
        return false;
    };
};

function kiemTraChucVu(value, errorSelector) {
    if (value === 'Chọn chức vụ') {
        document.querySelector(errorSelector).innerHTML = 'Phải chọn chức vụ hợp lệ!';
        return false;
    } else {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    };
};

function kiemTraTatCaKyTu(value, name, errorSelector) {
    var regexLetter = /[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    } else {
        document.querySelector(errorSelector).innerHTML = name + ' tất cả phải là chữ!';
        return false;
    };
};

function kiemTraTatCaSo(value, name, errorSelector) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    } else {
        document.querySelector(errorSelector).innerHTML = name + ' tất cả phải là số!';
        return false;
    };
};

function kiemTraEmail(value, name, errorSelector) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    } else {
        document.querySelector(errorSelector).innerHTML = name + ' không đúng định dạng!';
        return false;
    };
};

function kiemTraDoDai(value, name, minLength, maxLength, errorSelector) {
    var valueLength = value.length;
    if (valueLength > maxLength || valueLength < minLength) {
        document.querySelector(errorSelector).innerHTML = name + ' phải chứa từ ít nhất ' + minLength + ' đến ' + maxLength + ' ký tự!';
        return false;
    } else {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    };
};

function kiemTraMatKhau(value, name, errorSelector) {
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexPassword.test(value)) {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    } else {
        document.querySelector(errorSelector).innerHTML = name + ' phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt!';
        return false;
    };
};

function kiemTraGiaTri(value, name, minValue, maxValue, errorSelector) {
    value = Number(value);
    if (value > maxValue || value < minValue) {
        document.querySelector(errorSelector).innerHTML = name + ' phải từ ' + minValue + ' đến ' + maxValue + '!';
        return false;
    } else {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    };
};
function kiemTraGiaTriGio(value, name, minValue, maxValue, errorSelector) {
    value = Number(value);
    if (value > maxValue || value < minValue) {
        document.querySelector(errorSelector).innerHTML = name + ' phải từ ' + minValue + ' giờ' + ' đến ' + maxValue + ' giờ!';
        return false;
    } else {
        document.querySelector(errorSelector).innerHTML = '';
        return true;
    };
};
