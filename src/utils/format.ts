export function formatMoney(number: number, style = 'decimal'): string {
    const options = {
        currency: 'BRL',
        minimumFractionDigits: 2,
        style,

    }
    return new Intl.NumberFormat('pt-BR', options).format(number)
}