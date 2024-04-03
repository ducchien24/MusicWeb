export const getArrIndex = (INDEX_START_IMG, INDEX_END_IMG, TOTAL_IMG) => {   
    const limit = ( INDEX_START_IMG < INDEX_END_IMG ) ? INDEX_END_IMG : TOTAL_IMG
    let output = []

        for(let i = INDEX_START_IMG ; i <= limit ; i++){
            output.push(i)
        }
    if (INDEX_START_IMG > INDEX_END_IMG ){

        for(let i = 0 ; i <= INDEX_END_IMG ; i++){
            output.push(i)
        }

    }
     return output
}
  
console.log(getArrIndex(4,3,5))
