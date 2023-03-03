export const getTableInfo=(state)=>{
    const {table}=state;
    const {columns,data,skipReset}=table;
    return {columns,data, skipReset};
}