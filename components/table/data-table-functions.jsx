import { rankItem, compareItems } from "@tanstack/match-sorter-utils"
import { sortingFns } from "@tanstack/react-table";

export const fuzzyFilter = (row,columnID,value,addMeta) => {

    const itemRank = rankItem(row.getValue(columnID), value);

    //* Stores the itemRank info
    addMeta({
        itemRank
    })

    return itemRank.passed
}

export const fuzzySort = (rowA, rowB, columnID) => {
    let dir = 0;

    //* Sorts rank if the column it has ranking information 
    if(rowA.columnFiltersMeta[columnID]){
        dir = compareItems(
            rowA.columnFiltersMeta[columnID]?.itemRank,
            rowB.columnFiltersMeta[columnID]?.itemRank
        )
    }

    return dir === 0 ? sortingFns.alphanumeric(rowA,rowB,columnID) : dir;
}