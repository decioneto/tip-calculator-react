export default function formatCurrency(value: number | string) {
    value = Number(value)
    value = value / 100
    value = value.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    })

    return String(value)
}