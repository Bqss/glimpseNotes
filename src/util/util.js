const getArchivedNotes = (notes) => {
    return notes.filter(item => item.isArchived);
}

const getPinnedNote = (notes) => {
    return notes.filter(item => item.isPinned);
}

const getOrdinaryNote = (notes) => {
    return notes.filter(item => !item.isPinned && !item.isArchived);
}

const getTaggedNote = (notes, tagName) => {
    console.log(notes);
    console.log(tagName);
    return notes.filter(item => item.tags.map(e => e.value).includes(tagName));
}


export {getArchivedNotes, getPinnedNote, getOrdinaryNote, getTaggedNote}
