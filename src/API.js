export const findCafe = async(lng, lat, table, plug) => {
    let search = ''
    if (table !== undefined && plug !== undefined) {
        if (table !== -1 && table !== 'all') {
            search += `&typeOfTable=${table}`
        }
        if (plug !== -1 && plug !== 'all') search += `&countOfPlugs=${plug}`
    }
    const result = await fetch(`http://ec2-54-180-24-204.ap-northeast-2.compute.amazonaws.com/cafes?lng=${lng}&lat=${lat}${search}`,{
        method: 'get',
    });
    return result.json();
}
