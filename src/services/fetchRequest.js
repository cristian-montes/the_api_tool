export const fetchRequest = async (verb, URL, body=null) =>{
    let res = await fetch(URL, {
        method:verb,
        [body ? 'headers': null]:{
            'Content-Type': 'application/json',
        },
        [body ? body : null] : [body ? body : null],
    });

    const data = res.json();
    console.log('DATA', data)
    return data;
}