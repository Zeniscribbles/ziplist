function ziplist(listOne: string[], listTwo: string[]): string[] {
    let list: string[] = [];
    for (let i = 0; i < listOne.length; i++) {
        list.push(listOne[i]);   // Push from listOne
        list.push(listTwo[i]);   // Push from listTwo
    }
    return list;
}