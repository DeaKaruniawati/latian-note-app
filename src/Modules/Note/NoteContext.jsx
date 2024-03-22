import {  createContext, useContext, useState ,useEffect} from "react"
import { addNote, deleteNote, editNote, tampilkan } from '../../api'

// nilai default
const  initialNoteContext = {
    notes : [],
    currentNoteId: null,
    handleFetchData: () => {},
    handleUpdate: () => {},
    cancelEdit: () => { },
    fetchData: () => {},
    handleEdit: () => {},
    handleAddData: () => {},
    handleDelete: () => {},
    Edit: () => {}
} 

// buat context 
const NoteContext = createContext(initialNoteContext);

// buat custom hook 
export const useNoteContext = () => {
    return useContext(NoteContext);
}


// buat provider
const NoteProvider = ({children}) => {
    // state 
    const [notes, setNotes] = useState([])
    const [currentNoteId, setCurrentNoteId] = useState(null)

//function 
const handleFetchData = async () => {
    const apiFetch = await tampilkan();
    setNotes(apiFetch.data.data.notes ?? null);
  };

  const handleAddData = async (title, content) => {
    await addNote(title, content);
    handleFetchData();
  };

  const handleUpdate = async (id, title, content, writer) => {
    await editNote(id, title, content, writer);
    handleFetchData();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    handleFetchData();
  };

  const Edit = (id) => {
    setCurrentNoteId(id);
  };

  const cancelEdit = () => {
    setCurrentNoteId(null);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        currentNoteId,
        handleAddData,
        handleUpdate,
        handleDelete,
        Edit,
        cancelEdit,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

  export {NoteProvider, useContext}
