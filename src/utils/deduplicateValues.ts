export const deduplicateValues = (array: string[]) => {
    return array.filter((cat: string, index: number) => {
        return array.indexOf(cat) === index;
    })
}
