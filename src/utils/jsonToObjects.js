export default function jsonToObjects(responseText) {

    const json = JSON.parse(responseText.slice(47,-2))

    let objects = [] 

    let propertyNames = []
    json.table.cols.forEach(col => {
        propertyNames.push(col.label)
    })

    json.table.rows.forEach(row => {
        let newObject = {}
        let i = 0
        row.c.forEach(prop => {
            newObject[propertyNames[i++]] = prop ? (prop.f? prop.f : prop.v) : "" 
        })
        objects.push(newObject);
    })

    return objects
}