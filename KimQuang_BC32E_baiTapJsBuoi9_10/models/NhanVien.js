function NhanVien() {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.chucVu = '';
    this.gioLam = 0;
    this.luong = 0;

    this.tongLuong = function () {
        var tongLuong = 0;
        if (this.chucVu === 'Sếp') {
            tongLuong = this.luong * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            tongLuong = this.luong * 2;
        } else {
            tongLuong = this.luong;
        };
        return tongLuong;
    };
    this.loaiNhanVien = function () {
        var xepLoai = '';
        if (this.gioLam >= 192) {
            xepLoai = 'Nhân viên xuất sắc';
        } else if (this.gioLam >= 176 && this.gioLam < 192) {
            xepLoai = 'Nhân viên giỏi';
        } else if (this.gioLam >= 160 && this.gioLam < 176) {
            xepLoai = 'Nhân viên khá';
        } else if (this.gioLam < 160) {
            xepLoai = 'Nhân viên trung bình';
        };
        return xepLoai;
    };

}; 