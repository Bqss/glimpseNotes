const getArchivedNotes = (notes) => {
    return notes.filter(item => item.isArchived && !item.isSoftDelete);
}

const getPinnedNote = (notes) => {
    return notes.filter(item => item.isPinned && !item.isSoftDelete);
}

const getOrdinaryNote = (notes) => {
    return notes.filter(item => !item.isPinned && !item.isArchived && !item.isSoftDelete);
}

const getTaggedNote = (notes, tagName) => {
    return notes.filter(item => item.tags.map(e => e.value).includes(tagName)&& !item.isSoftDelete);
}


export {getArchivedNotes, getPinnedNote, getOrdinaryNote, getTaggedNote}
