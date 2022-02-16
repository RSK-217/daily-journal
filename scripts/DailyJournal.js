import { Entries } from "./Entries.js"
import { journalForm } from "./JournalForm.js"

// Keep your existing imports and add the new import for the form function

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${ Entries() }
        </div>

        <article class="entryForm">
            Use interpolation to put the HTML that the form function generates here
        </article>
    `
}