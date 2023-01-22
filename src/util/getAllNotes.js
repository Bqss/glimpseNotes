const filltereNotes = (notes, filterKey) => {
    const lowPriority = notes.filter(e => e.priority === "low") ?? [];
    const highPriority = notes.filter(e => e.priority === "high")?? [];
    switch(filterKey){
        case "low":
            return [...lowPriority, ...highPriority ];
        case "high":
            return [...highPriority, ...lowPriority];
        case "lastest":
            return [...notes].sort((a, b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        case "oldest":
            return [...notes].sort((a, b)=> new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        case "edited":
            return [...notes].sort((a,b)=> new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime() );
        default:
            return notes;
    }   
}

const getAllNote = (notes, filter, searchKey) => {
    const fNotes = filltereNotes(notes,filter);
    return fNotes.filter(e => e.content.includes(searchKey) || e.title.includes(searchKey));
}


export default getAllNote;