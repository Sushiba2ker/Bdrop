String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash &= 0x7FFFFFFF; // Chuyển đổi thành số nguyên dương
    }
    return hash;
};

Math.seededRandom = function (max = 1, min = 0) {
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
};

function getName(seed) {
    var animalNames = [
        'Sư tử', 'Hổ', 'Gấu', 'Voi', 'Cá sấu', 'Cá voi', 'Cá mập', 'Chim ưng', 'Sóc', 'Rái cá',
        'Chồn', 'Kangaroo', 'Hà mã', 'Tê giác', 'Khỉ', 'Dơi', 'Chim cánh cụt', 'Rùa', 'Cú mèo', 'Thỏ',
        'Hải cẩu', 'Cáo', 'Chó sói', 'Mèo', 'Chó', 'Gấu trúc', 'Lạc đà', 'Đà điểu', 'Cá heo', 'Bò sát',
        'Hươu cao cổ', 'Linh dương', 'Trâu nước', 'Ngựa', 'Bò mộng', 'Lợn rừng', 'Thằn lằn', 'Khủng long', 'Bọ cạp', 'Kiến',
        'Chim ruồi', 'Bướm', 'Ong', 'Ve sầu', 'Cú vọ', 'Chim én', 'Hải mã', 'Bạch tuộc', 'Mực', 'Sao biển',
        'Tôm hùm', 'Cua', 'Tép', 'Sứa', 'Ếch', 'Cóc', 'Dế', 'Bọ cánh cứng', 'Mối', 'Muỗi',
        'Kiến lửa', 'Ruồi', 'Nhện', 'Chuột', 'Chuột chũi', 'Chuột túi', 'Rắn', 'Iguana', 'Rắn mối', 'Tắc kè',
        'Bò sát nhỏ', 'Chim nhỏ', 'Chim lớn', 'Cú lợn', 'Diều hâu', 'Lạc đà không bướu', 'Bò sát khổng lồ', 'Cú đại bàng', ''
    ];
    var midNames = ['Cánh', 'Mỏ', 'Vuốt', 'Đuôi', 'Lông', 'Vảy', 'Bụng', ''];
    var givenNames = ['Vàng', 'Đen', 'Trắng', 'Đỏ', 'Xanh', 'Nâu', 'Xám', ''];

    Math.seed = seed.hashCode();
    var animalName = animalNames[Math.seededRandom(animalNames.length, 0)] || 'Sư tử'; // Đảm bảo không undefined
    var midName = midNames[Math.seededRandom(midNames.length, 0)] || ''; // Đảm bảo không undefined
    var givenName = givenNames[Math.seededRandom(givenNames.length, 0)] || ''; // Đảm bảo không undefined
    var fullName = animalName + ' ' + midName + ' ' + givenName;

    if (fullName.trim().length < 2) fullName = 'Sư tử Vàng'; // Đảm bảo tên không quá ngắn

    return fullName.trim();
}

exports.getName = getName;