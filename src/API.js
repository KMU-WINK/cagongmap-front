export const findAllCafe = async() => {
    console.log();
    const result = await fetch(`http://ec2-54-180-24-204.ap-northeast-2.compute.amazonaws.com/cafes?lng=126.99703&lat=37.610189&countOfPlugs=0`,{
        method: 'get',
    });
    return result.json();
}



export const findCafe = async(table, plug) => {
    console.log(table, plug);
    let search = ''
    if (table !== undefined && plug !== undefined) {
        if (table !== -1 && table !== 'all') {
            console.log("checkTable")
            search += `&typeOfTable=${table}`
        }
        if (plug !== -1 && plug !== 'all') search += `&countOfPlugs=${plug}`
    }
    console.log(search);
    const result = await fetch(`http://ec2-54-180-24-204.ap-northeast-2.compute.amazonaws.com/cafes?lng=126.99703&lat=37.610189${search}`,{
        method: 'get',
    });
    return result.json();
}

