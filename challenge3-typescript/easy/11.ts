type TupleToObject<T extends readonly any[]> = {[t in T[number]]: t}


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const result: TupleToObject<typeof tuple> ={ tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
console.log(result)