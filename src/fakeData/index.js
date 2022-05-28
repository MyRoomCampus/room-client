import houseInfo from "./houseInfo";

const sleep = async (s) => new Promise(resolve => setTimeout(resolve, s * 1000));

export async function getHouseInfo() {
    await sleep(Math.random() * 2);
    if (Math.random() >= 0) {
        let houseIndex = 10 * parseInt(Math.random());
        return houseInfo[houseIndex];
    } else {
        throw new Error('network error');
    }
}