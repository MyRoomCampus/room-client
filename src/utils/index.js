export function formatPrice(price) {
    if ((price / 100) > 10000) {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price / 1000000) + '万';
    } else if ((price / 100) > 1000) {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price / 100000) + '千';
    } else {
        return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price / 100);
    }
}

export function getHouseType(token) {
    switch (token) {
        case 1:
            return '普通住宅';
        case 2:
            return '别墅';
        case 3:
            return '写字楼';
        case 4:
            return '商铺';
        case 5:
            return '商住两用';
        case 6:
            return '公寓';
        case 7:
            return '工业厂房';
        case 8:
            return '车库';
        case 9:
            return '经济适用房';
        default:
            return '其他';
    }
}