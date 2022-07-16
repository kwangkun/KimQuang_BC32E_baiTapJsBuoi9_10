var arrNV = [];

document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien();

    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luong = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;

    var valid = true;

    valid = kiemTraRong(nv.taiKhoan, 'Tài khoản', '#tbTKNV')
        & kiemTraTatCaSo(nv.taiKhoan, 'Tài khoản', '#tbTKNV1')
        & kiemTraDoDai(nv.taiKhoan, 'Tài khoản', 4, 6, '#tbTKNV2')
        & kiemTraTatCaKyTu(nv.hoTen, 'Tên nhân viên', '#tbTen')
        & kiemTraRong(nv.ngayLam, 'Ngày làm', '#tbNgay')
        & kiemTraRong(nv.email, 'Email', '#tbEmail')
        & kiemTraEmail(nv.email, 'Email', '#tbEmail1')
        & kiemTraRong(nv.matKhau, 'Mật khẩu', '#tbMatKhau')
        & kiemTraMatKhau(nv.matKhau, 'Mật khẩu', '#tbMatKhau1')
        & kiemTraDoDai(nv.matKhau, 'Mật khẩu', 6, 10, '#tbMatKhau2')
        & kiemTraRong(nv.luong, 'Lương cơ bản', '#tbLuongCB')
        & kiemTraGiaTri(nv.luong, 'Lương cơ bản', 1000000, 20000000, '#tbLuongCB1')
        & kiemTraRong(nv.gioLam, 'Giờ làm', '#tbGiolam')
        & kiemTraGiaTriGio(nv.gioLam, 'Só giờ làm', 80, 200, '#tbGiolam1')
        & kiemTraChucVu(nv.chucVu, '#tbChucVu');

    if (!valid) {
        return;
    };

    arrNV.push(nv);
    renderNhanVien(arrNV);
};

function xoaNhanVien(taiKhoanNV) {
    var indexDel = arrNV.findIndex(nv => nv.taiKhoan === taiKhoanNV);
    if (indexDel !== -1) {
        arrNV.splice(indexDel, 1);
    };

    renderNhanVien(arrNV);
};

function chinhSuaNhanVien(taiKhoanNV) {
    var indexEdit = arrNV.findIndex(nv => nv.taiKhoan === taiKhoanNV);

    var nvEdit = arrNV[indexEdit];

    document.querySelector('#tknv').disabled = true;

    document.querySelector('#tknv').value = nvEdit.taiKhoan;
    document.querySelector('#name').value = nvEdit.hoTen;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.matKhau;
    document.querySelector('#datepicker').value = nvEdit.ngayLam;
    document.querySelector('#luongCB').value = nvEdit.luong;
    document.querySelector('#chucvu').value = nvEdit.chucVu;
    document.querySelector('#gioLam').value = nvEdit.gioLam;
};

document.querySelector('#btnCapNhat').onclick = function () {
    var nv = new NhanVien();

    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luong = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;

    {
        var valid = true;

        valid = kiemTraRong(nv.taiKhoan, 'Tài khoản', '#tbTKNV')
            & kiemTraTatCaSo(nv.taiKhoan, 'Tài khoản', '#tbTKNV1')
            & kiemTraDoDai(nv.taiKhoan, 'Tài khoản', 4, 6, '#tbTKNV2')
            & kiemTraTatCaKyTu(nv.hoTen, 'Tên nhân viên', '#tbTen')
            & kiemTraRong(nv.ngayLam, 'Ngày làm', '#tbNgay')
            & kiemTraRong(nv.email, 'Email', '#tbEmail')
            & kiemTraEmail(nv.email, 'Email', '#tbEmail1')
            & kiemTraRong(nv.matKhau, 'Mật khẩu', '#tbMatKhau')
            & kiemTraMatKhau(nv.matKhau, 'Mật khẩu', '#tbMatKhau1')
            & kiemTraDoDai(nv.matKhau, 'Mật khẩu', 6, 10, '#tbMatKhau2')
            & kiemTraRong(nv.luong, 'Lương cơ bản', '#tbLuongCB')
            & kiemTraGiaTri(nv.luong, 'Lương cơ bản', 1000000, 20000000, '#tbLuongCB1')
            & kiemTraRong(nv.gioLam, 'Giờ làm', '#tbGiolam')
            & kiemTraGiaTriGio(nv.gioLam, 'Só giờ làm', 80, 200, '#tbGiolam1')
            & kiemTraChucVu(nv.chucVu, '#tbChucVu');


        if (!valid) {
            return;
        };
    }

    var indexEdit = arrNV.findIndex(item => item.taiKhoan === nv.taiKhoan);

    arrNV[indexEdit].hoTen = nv.hoTen;
    arrNV[indexEdit].email = nv.email;
    arrNV[indexEdit].matKhau = nv.matKhau;
    arrNV[indexEdit].ngayLam = nv.ngayLam;
    arrNV[indexEdit].luong = nv.luong;
    arrNV[indexEdit].chucVu = nv.chucVu;
    arrNV[indexEdit].gioLam = nv.gioLam;

    document.querySelector('#tknv').disabled = false;
    
    renderNhanVien(arrNV);
    
};