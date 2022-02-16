export const journalForm = () => {

return `<section id="forms">
            <form class="dateForm">
                <fieldset>
                    <label for="EntryDate">Date of entry</label>
                    <input type="date" name="entryDate" class="dateForm__entryDate">
                </fieldset>
            </form>
      
            <form class="conceptForm">
                <fieldset>
                    <label for="concept">Concepts covered</label>
                    <input type="text" name="concept" class="conceptForm__concept">
                </fieldset>
            </form>
       
            <form class="journalForm">
                <fieldset>
                    <label for="journal">Journal entry</label>
                    <textarea name="journal" class="journalForm__journal" maxlength="100"></textarea>
                </fieldset>
            </form>
        
            <form class="moodForm">
                <fieldset>
                    <label for="moodSelect">Mood for the day</label>
                    <select name="moodSelect" class="moodForm__mood">
                        <option value="">--Select mood--</option>
                        <option value="happy">happy</option>
                        <option value="excited">excited</option>
                        <option value="relieved">relieved</option>
                        <option value="accomplished">accomplished</option>
                        <option value="ok">ok</option>
                        <option value="discouraged">discouraged</option>
                        <option value="confused">confused</option>
                        <option value="frustrated">frustrated</option>
                    </select>
                </fieldset>
            </form>

            <form class="recordEntry">
                <input type="submit" value="Record Journal Entry">
            </form>
        </section>`
}