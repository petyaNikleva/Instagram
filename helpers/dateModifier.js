export function dateModifier(param) {
    const arr = param.split('T')
    const rawDate = arr[0];
    const splitedDate = rawDate.split('-');
    const date = splitedDate.reverse().join('-');
    const second = arr[1];
    const time = second.slice(0, 5);
    const result = `${time} ${date}`
    return result;
}