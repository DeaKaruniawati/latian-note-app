
import NoteItem from './NoteItem'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'
import { useNoteContext } from './NoteContext';


function Note() {
  const {
  notes,
  currentNoteId,
  handleUpdate,
  cancelEdit,
  Edit,
  handleDelete,
  handleAddData} = useNoteContext();


  return (
    <>
      <div className='mx'>
        <div className="App w-[100%] flex flex-col items-center">
          <h1 className='text-center text-4xl p-5 text-white' >Notes</h1>
          {currentNoteId ? <FormEdit onEdit={handleUpdate} targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} notes={notes} onCancel={cancelEdit} /> : <FormTambah onAdd={handleAddData} onCancel={cancelEdit} />}

          <div className='flex flex-row flex-wrap justify-center'>
            {notes !== null ? notes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDelete={handleDelete}
                onEdit={Edit} />
            )) : null}
          </div>
        </div>
      </div>

    </>
  )

}



export default Note;