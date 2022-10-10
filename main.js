const btn = document.getElementById('btn');
btn.addEventListener('click', calculateTax);

const btnTongThuNhap = document.getElementById('tongThuNhap');
btnTongThuNhap.addEventListener('keyup', formatTongThuNhap);

function calculateTax(e) {
    e.preventDefault();
    var tempTongThuNhap = document.getElementById('tongThuNhap').value.replaceAll('.', '');
    if(isNaN(tempTongThuNhap)) 
        return alert('Vui lòng nhập số');
        
    var tongThuNhap = parseInt(tempTongThuNhap) / 1000000;
    var tax;
    var SL = parseInt(document.getElementById('SL').value);

    if (tongThuNhap < 0 || SL < 0) tax = 'Nhập số không âm';

    let incomeTaxes = tongThuNhap - 4.4 * SL - 11;
    if (incomeTaxes <= 0) tax = 0;
    else if (incomeTaxes <= 5)
        tax =
            Math.round(((incomeTaxes * 5) / 100 + Number.EPSILON) * 1000000) /
            1000000;
    else if (incomeTaxes <= 10)
        tax =
            Math.round(
                (0.25 + ((incomeTaxes - 5) * 10) / 100 + Number.EPSILON) *
                    1000000
            ) / 1000000;
    else if (incomeTaxes <= 18)
        tax =
            Math.round(
                (0.75 + ((incomeTaxes - 10) * 15) / 100 + Number.EPSILON) *
                    1000000
            ) / 1000000;
    else if (incomeTaxes <= 32)
        tax =
            Math.round(
                (1.95 + ((incomeTaxes - 18) * 20) / 100 + Number.EPSILON) *
                    1000000
            ) / 1000000;
    else if (incomeTaxes <= 52)
        tax =
            Math.round(
                (4.75 + ((incomeTaxes - 32) * 25) / 100 + Number.EPSILON) *
                    1000000
            ) / 1000000;
    else if (incomeTaxes <= 80)
        tax =
            Math.round(
                (9.75 + ((incomeTaxes - 52) * 30) / 100 + Number.EPSILON) *
                    1000000
            ) / 1000000;
    else
        tax =
            Math.round(
                (18.15 + ((incomeTaxes - 80) * 35) / 100 + Number.EPSILON) *
                    1000000
            ) / 1000000;

    document.getElementById('tax').innerHTML =
        numeral(parseInt(tax * 1000000))
            .format('0,0')
            .replace(/,/g, '.') + ' VNĐ';
}

function formatTongThuNhap(e) {
    const tongThuNhap = document
        .getElementById('tongThuNhap')
        .value.replaceAll('.', '');

    document.getElementById('tongThuNhap').value = numeral(
        parseInt(tongThuNhap)
    )
    .format('0,0')
    .replace(/,/g, '.');
}
