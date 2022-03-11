export default function formatAmout(value: number | string) {
    value = String(value)
    value = value.replace(/\,/, '.')
    value = Number(value) * 100

    return value
}