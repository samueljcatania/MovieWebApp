export default function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize
    items = [...items.slice(0, pageSize)]
    console.log(items)
}

