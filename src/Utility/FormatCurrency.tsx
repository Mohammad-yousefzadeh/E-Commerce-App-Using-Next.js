const FORMAT_CURRENCY = Intl.NumberFormat(undefined , {
    currency : 'USD' ,
    style : 'currency'
})

const FormatCurrency = (number : number) => {
    return FORMAT_CURRENCY.format(number)
}
 
export default FormatCurrency;