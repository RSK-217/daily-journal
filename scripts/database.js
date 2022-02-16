/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "01/03/2022",
            concept: "Coure overview and structure",
            entry: "We talked about the overall goal of NSS and the Web Development course.",
            mood: "excited"
        },
        {
            id: 2,
            date: "01/06/2022",
            concept: "HTML & CSS",
            entry: "We talked about basic concepts of HTML and CSS and the book 1 project",
            mood: "ok"
        },
        {
            id: 3,
            date: "01/15/2022",
            concept: "HTML & CSS",
            entry: "We split up into groups and got to know each other and touched base on how everyone was feeling with HTML and CSS",
            mood: "relieved"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}